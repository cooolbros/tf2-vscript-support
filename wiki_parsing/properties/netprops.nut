// This would crash your game in 10 second but it does produce the file

local numeric = regexp("^\\d{3}$");
local upper = regexp("[A-Z]");

function GetType(value) {
	local type = typeof value;
	if (type == "null") {
		return "instance";
	}

	return type.tolower();
}

function PropertyTable(table) {
	local set = {};
	DoPropertyTable(set, table, "");
	local str = "";
	foreach (k, _ in set) {
		str += k + "\n";
	}

	StringToFile("properties.txt", str);
}

function DoPropertyTable(set, table, append) {
	foreach (key, value in table) {
		if (typeof value == "table") {
			if (upper.match(key.slice(0, 1)) || endswith(key, "data") || endswith(key, "predictable_id") {
				DoPropertyTable(set, value, append);
			} else {
				DoPropertyTable(set, value, append + key + ".");
			}
			continue;
		}

		if (numeric.match(key)) {
			// slice to remove the dot
			set[append.slice(0, append.len() - 1) + ": " + GetType(value) + "_array"] <- 0;
			break;
		}

		set[append + key + ": " + GetType(value)] <- 0;
	}
}

local property_table = {};
local classnames = [
	"_ballplayertoucher",
	"_firesmoke",
	"_plasma",
	"aitesthull",
	"archer_proxy",
	"base_boss",
	"beam",
	"bot_hint_engineer_nest",
	"bot_npc_archer",
	"color_correction",
	"color_correction_volume",
	"cycler_flex",
	"dynamic_prop",
	"entity_medigun_shield",
	"entity_revive_marker",
	"entityflame",
	"env_detail_controller",
	"env_dusttrail",
	"env_embers",
	"env_entity_dissolver",
	"env_fire_trail",
	"env_fog_controller",
	"env_glow",
	"env_laserdot",
	"env_lightglow",
	"env_movieexplosion",
	"env_particle_performance_monitor",
	"env_particle_trail",
	"env_particlefire",
	"env_particlescript",
	"env_particlesmokegrenade",
	"env_projectedtexture",
	"env_quadraticbeam",
	"env_rockettrail",
	"env_screeneffect",
	"env_screenoverlay",
	"env_smokestack",
	"env_smoketrail",
	"env_sniperdot",
	"env_sporeexplosion",
	"env_sporetrail",
	"env_sprite_oriented",
	"env_spritetrail",
	"env_steam",
	"env_sun",
	"env_tonemap_controller",
	"env_wind",
	"eyeball_boss",
	"fish",
	"func_areaportalwindow",
	"func_breakable_surf",
	"func_capturezone",
	"func_conveyor",
	"func_door",
	"func_dustcloud",
	"func_forcefield",
	"func_lod",
	"func_monitor",
	"func_occluder",
	"func_passtime_goal",
	"func_physbox",
	"func_physbox_multiplayer",
	"func_precipitation",
	"func_reflective_glass",
	"func_respawnroom",
	"func_respawnroomvisualizer",
	"func_rotating",
	"func_smokevolume",
	"func_tanktrain",
	"func_useableladder",
	"game_ragdoll_manager",
	"grenade",
	"halloween_souls_pack",
	"halloween_zapper",
	"handle_test",
	"headless_hatman",
	"hightower_teleport_vortex",
	"info_ladder_dismount",
	"info_lighting_relative",
	"info_overlay_accessor",
	"info_particle_system",
	"instanced_scripted_scene",
	"item_bonuspack",
	"item_currencypack_custom",
	"item_teamflag",
	"item_teamflag_return_icon",
	"keyframe_rope",
	"light_dynamic",
	"mapobj_cart_dispenser",
	"material_modify_control",
	"merasmus",
	"merasmus_dancer",
	"monster_resource",
	"obj_attachment_sapper",
	"obj_dispenser",
	"obj_sentrygun",
	"obj_teleporter",
	"passtime_ball",
	"passtime_logic",
	"pd_dispenser",
	"phys_bone_follower",
	"phys_magnet",
	"physics_cannister",
	"physics_prop",
	"physics_prop_ragdoll",
	"player",
	"player_manager",
	"point_camera",
	"point_commentary_node",
	"point_posecontroller",
	"point_tesla",
	"point_worldtext",
	"prop_door_rotating",
	"prop_physics_multiplayer",
	"prop_ragdoll_attached",
	//"prop_vehicle_driveable",
	"rd_robot_dispenser",
	"shadow_control",
	"spotlight_end",
	"tank_boss",
	"team_manager",
	"team_round_timer",
	"team_train_watcher",
	"teleport_vortex",
	"test_proxytoggle",
	"test_traceline",
	"tf_ammo_pack",
	"tf_base_minigame",
	"tf_bonus_duck_pickup",
	"tf_dropped_weapon",
	"tf_flame_manager",
	"tf_gamerules",
	"tf_gas_manager",
	"tf_generic_bomb",
	"tf_glow",
	"tf_halloween_gift_pickup",
	"tf_halloween_minigame",
	"tf_halloween_minigame_falling_platforms",
	"tf_halloween_pickup",
	"tf_logic_bonusround",
	"tf_logic_minigames",
	"tf_logic_player_destruction",
	"tf_logic_robot_destruction",
	"tf_mann_vs_machine_stats",
	"tf_objective_resource",
	"tf_pda_expansion_dispenser",
	"tf_pda_expansion_teleporter",
	"tf_player_manager",
	"tf_powerup_bottle",
	"tf_projectile_arrow",
	"tf_projectile_ball_ornament",
	"tf_projectile_balloffire",
	"tf_projectile_cleaver",
	"tf_projectile_energy_ball",
	"tf_projectile_energy_ring",
	"tf_projectile_flare",
	"tf_projectile_grapplinghook",
	"tf_projectile_healing_bolt",
	"tf_projectile_jar",
	"tf_projectile_jar_gas",
	"tf_projectile_jar_milk",
	"tf_projectile_lightningorb",
	"tf_projectile_mechanicalarmorb",
	"tf_projectile_pipe",
	"tf_projectile_rocket",
	"tf_projectile_sentryrocket",
	"tf_projectile_spellbats",
	"tf_projectile_spellfireball",
	"tf_projectile_spellkartbats",
	"tf_projectile_spellkartorb",
	"tf_projectile_spellmeteorshower",
	"tf_projectile_spellmirv",
	"tf_projectile_spellpumpkin",
	"tf_projectile_spellspawnboss",
	"tf_projectile_spellspawnhorde",
	"tf_projectile_spellspawnzombie",
	"tf_projectile_spelltransposeteleport",
	"tf_projectile_stun_ball",
	"tf_projectile_syringe",
	"tf_projectile_throwable",
	"tf_projectile_throwable_breadmonster",
	"tf_projectile_throwable_brick",
	"tf_projectile_throwable_repel",
	"tf_pumpkin_bomb",
	"tf_ragdoll",
	"tf_robot_destruction_robot",
	"tf_robot_destruction_robot_spawn",
	"tf_robot_destruction_spawn_group",
	"tf_taunt_prop",
	"tf_team",
	"tf_viewmodel",
	"tf_weapon_base",
	"tf_weapon_bat",
	"tf_weapon_bat_fish",
	"tf_weapon_bat_giftwrap",
	"tf_weapon_bat_wood",
	"tf_weapon_bonesaw",
	"tf_weapon_bottle",
	"tf_weapon_breakable_sign",
	"tf_weapon_buff_item",
	"tf_weapon_builder",
	"tf_weapon_cannon",
	"tf_weapon_charged_smg",
	"tf_weapon_cleaver",
	"tf_weapon_club",
	"tf_weapon_compound_bow",
	"tf_weapon_crossbow",
	"tf_weapon_drg_pomson",
	"tf_weapon_fireaxe",
	"tf_weapon_fists",
	"tf_weapon_flamethrower",
	"tf_weapon_flaregun",
	"tf_weapon_flaregun_revenge",
	"tf_weapon_grapplinghook",
	"tf_weapon_grenadelauncher",
	"tf_weapon_handgun_scout_primary",
	"tf_weapon_handgun_scout_secondary",
	"tf_weapon_invis",
	"tf_weapon_jar",
	"tf_weapon_jar_gas",
	"tf_weapon_jar_milk",
	"tf_weapon_katana",
	"tf_weapon_knife",
	"tf_weapon_laser_pointer",
	"tf_weapon_lunchbox",
	"tf_weapon_lunchbox_drink",
	"tf_weapon_mechanical_arm",
	"tf_weapon_medigun",
	"tf_weapon_minigun",
	"tf_weapon_parachute",
	"tf_weapon_parachute_primary",
	"tf_weapon_parachute_secondary",
	"tf_weapon_particle_cannon",
	"tf_weapon_passtime_gun",
	"tf_weapon_pda_engineer_build",
	"tf_weapon_pda_engineer_destroy",
	"tf_weapon_pda_spy",
	"tf_weapon_pep_brawler_blaster",
	"tf_weapon_pipebomblauncher",
	"tf_weapon_pistol",
	"tf_weapon_pistol_scout",
	"tf_weapon_raygun",
	"tf_weapon_revolver",
	"tf_weapon_robot_arm",
	"tf_weapon_rocketlauncher",
	"tf_weapon_rocketlauncher_airstrike",
	"tf_weapon_rocketlauncher_directhit",
	"tf_weapon_rocketlauncher_fireball",
	"tf_weapon_rocketpack",
	"tf_weapon_sapper",
	"tf_weapon_scattergun",
	"tf_weapon_sentry_revenge",
	"tf_weapon_shotgun_building_rescue",
	"tf_weapon_shotgun_hwg",
	"tf_weapon_shotgun_primary",
	"tf_weapon_shotgun_pyro",
	"tf_weapon_shotgun_soldier",
	"tf_weapon_shovel",
	"tf_weapon_slap",
	"tf_weapon_smg",
	"tf_weapon_sniperrifle",
	"tf_weapon_sniperrifle_classic",
	"tf_weapon_sniperrifle_decap",
	"tf_weapon_soda_popper",
	"tf_weapon_spellbook",
	"tf_weapon_stickbomb",
	"tf_weapon_sword",
	"tf_weapon_syringegun_medic",
	"tf_weapon_wrench",
	"tf_weaponbase_grenade_proj",
	"tf_weaponbase_melee",
	"tf_weaponbase_merasmus_grenade",
	"tf_wearable",
	"tf_wearable_campaign_item",
	"tf_wearable_demoshield",
	"tf_wearable_levelable_item",
	"tf_wearable_razorback",
	"tf_wearable_robot_arm",
	"tf_wearable_vm",
	"tf_zombie",
	"vgui_screen",
	"vgui_slideshow_display",
	"viewmodel",
	"vote_controller",
	"water_lod_control",
	"waterbullet",
	"weapon_ifm_base",
	"weapon_ifm_base_camera",
	"weapon_ifm_steadycam",
	"wearable_item",
	"worldspawn",
]

foreach (classname in classnames) {
	if (classname == "worldspawn") {
		local entity = Entities.First();
		NetProps.GetTable(entity, 0, property_table);
		NetProps.GetTable(entity, 1, property_table);
		continue;
	}

	if (classname == "player") {
		local entity = PlayerInstanceFromIndex(1);
		NetProps.GetTable(entity, 0, property_table);
		NetProps.GetTable(entity, 1, property_table);
		continue;
	}

	local entity = Entities.CreateByClassname(classname);
	NetProps.GetTable(entity, 0, property_table);
	NetProps.GetTable(entity, 1, property_table);

	if (classname == "base_boss") {
		local locomotion = entity.GetLocomotionInterface();
		NetProps.GetTable(locomotion, 0, property_table);
		NetProps.GetTable(locomotion, 1, property_table);
	}

	entity.Kill();
}

function FindABot() {
	for (local i = 0; i < MaxClients().tointeger(); i++) {
		local player = PlayerInstanceFromIndex(i);
		if (player && IsPlayerABot(player)) {
			return player;
		}
	}

	return null;
}

local bot = FindABot();
if (bot) {
	printl("yes");
	NetProps.GetTable(bot, 0, property_table);
	NetProps.GetTable(bot, 1, property_table);
}

local nav = NavMesh.GetNavAreaByID(0);
if (nav) {
	NetProps.GetTable(nav, 0, property_table);
	NetProps.GetTable(nav, 1, property_table);
}

PropertyTable(property_table);
