// https://github.com/ocet247/vscript-json
IncludeScript("json.nut", getroottable());

local numeric = regexp("^\\d{3}$");
local upper = regexp("[A-Z]");

function GetType(value) {
	local type = typeof value;
	if (type == "null") {
		return "instance";
	}

	return type.tolower();
}

function FlatProperties(nested_properties) {
	local properties = {};

	function DoProperties(properties, nested_properties, append) {
		foreach (key, value in nested_properties) {
			if (typeof value == "table") {
				if (upper.match(key.slice(0, 1)) || endswith(key, "data") || endswith(key, "predictable_id")) {
					DoProperties(properties, value, append);
				} else {
					DoProperties(properties, value, append + key + ".");
				}
				continue;
			}

			if (numeric.match(key)) {
				// slice to remove the dot
				properties[append.slice(0, append.len() - 1)] <- GetType(value) + "_array";
				break;
			}

			properties[append + key] <- GetType(value);
		}
	}

	DoProperties(properties, nested_properties, "");
	return properties;
}

local nested_properties = {};

foreach (classname in JSON.load("entities.json")) {
	if (classname == "worldspawn") {
		local entity = Entities.First();
		NetProps.GetTable(entity, 0, nested_properties);
		NetProps.GetTable(entity, 1, nested_properties);
		continue;
	}

	if (classname == "player") {
		local entity = PlayerInstanceFromIndex(1);
		NetProps.GetTable(entity, 0, nested_properties);
		NetProps.GetTable(entity, 1, nested_properties);
		continue;
	}

	local entity = Entities.CreateByClassname(classname);
	NetProps.GetTable(entity, 0, nested_properties);
	NetProps.GetTable(entity, 1, nested_properties);

	if (classname == "base_boss") {
		local locomotion = entity.GetLocomotionInterface();
		NetProps.GetTable(locomotion, 0, nested_properties);
		NetProps.GetTable(locomotion, 1, nested_properties);
	}

	entity.Kill();
}

function FindABot() {
	for (local i = 0; i < MaxClients().tointeger(); i++) {
		local player = PlayerInstanceFromIndex(i);
		if (player && player.IsBotOfType(Constants.EBotType.TF_BOT_TYPE)) {
			return player;
		}
	}

	return null;
}

local bot = FindABot();
if (bot) {
	printl("Found bot");
	NetProps.GetTable(bot, 0, nested_properties);
	NetProps.GetTable(bot, 1, nested_properties);
}

local nav = NavMesh.GetNavAreaByID(1);
if (nav) {
	printl("Found nav")
	NetProps.GetTable(nav, 0, nested_properties);
	NetProps.GetTable(nav, 1, nested_properties);
}



local proxy = Entities.CreateByClassname("bot_proxy");
local vehicle = Entities.CreateByClassname("prop_vehicle_driveable");

NetProps.GetTable(proxy, 0, nested_properties);
NetProps.GetTable(vehicle, 0, nested_properties);



local properties = FlatProperties(nested_properties);





local datamaps = JSON.load("datamaps.json");

foreach (datamap in datamaps.proxy) {
	if (!NetProps.HasProp(proxy, datamap)) {
		continue;
	}
	properties[datamap] <- GetType(NetProps.GetPropType(proxy, datamap));
}

proxy.Kill();

foreach (datamap in datamaps.vehicle) {
	if (!NetProps.HasProp(vehicle, datamap)) {
		continue;
	}

	properties[datamap] <- GetType(NetProps.GetPropType(proxy, datamap));
}

vehicle.Kill();






JSON.dump(properties, "properties.json", 2);