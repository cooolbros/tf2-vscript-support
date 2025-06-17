export const keywords = new Set<string>([
	"base",
	"break",
	"case",
	"catch",
	"class",
	"clone",
	"constructor",
	"continue",
	"const",
	"default",
	"delete",
	"do",
	"else",
	"enum",
	"extends",
	"false",
	"for",
	"foreach",
	"function",
	"if",
	"in",
	"instanceof",
	"local",
	"null",
	"resume",
	"return",
	"static",
	"switch",
	"this",
	"throw",
	"true",
	"try",
	"typeof",
	"while",
	"yield"
]);

export enum StringParam {
	INPUT,
	OUTPUT,
	TARGETNAME,
	CLASSNAME,
	// No division between float / bools / ints since they're interchangable
	NUMBER_KEYVALUE,
	VECTOR_KEYVALUE,
	STRING_KEYVALUE,
	ATTRIBUTE,
	MODEL,
	SOUND,
	CONVAR,
	CLIENT_CONVAR,
	INT_PROPERTY,
	BOOL_PROPERTY,
	FLOAT_PROPERTY,
	STRING_PROPERTY,
	ENTITY_PROPERTY,
	VECTOR_PROPERTY,
	INT_ARRAY_PROPERTY,
	BOOL_ARRAY_PROPERTY,
	FLOAT_ARRAY_PROPERTY,
	STRING_ARRAY_PROPERTY,
	ENTITY_ARRAY_PROPERTY,
	VECTOR_ARRAY_PROPERTY,
	ARRAY_PROPERTY,
	PROPERTY
}

export const stringCompletions: Set<string>[] = [
	// INPUT
	new Set([
		"Action",
		"Activate",
		"ActivateSpeedModifier",
		"Add",
		"AddBlueTeamRespawnWaveTime",
		"AddBlueTeamScore",
		"AddBlueTimer",
		"AddCaptureDestroyPostfix",
		"AddCommandAttackEntity",
		"AddCommandDefend",
		"AddCommandMoveToEntity",
		"AddCommandSwitchWeapon",
		"AddContext",
		"AddHealth",
		"AddMaxChildren",
		"AddOutput",
		"AddRedTeamRespawnWaveTime",
		"AddRedTeamScore",
		"AddRedTimer",
		"AddSlides",
		"AddTeamTime",
		"AddTime",
		"AddToCounter",
		"AddToTimer",
		"Alpha",
		"AlternativeSorting",
		"Ambient",
		"Amplitude",
		"ApplyImpulse",
		"ApplyRelationship",
		"ApplyScore",
		"AutoCountdown",
		"BecomeRagdoll",
		"BeginAssault",
		"BeginRappel",
		"BeginSentence",
		"BeginSequence",
		"BleedPlayer",
		"BlendTonemapScale",
		"BlockNav",
		"Break",
		"CallScriptFunction",
		"CameraSpace",
		"Cancel",
		"CancelAtNextInterrupt",
		"CancelPending",
		"CancelSequence",
		"CaptureCurrentCP",
		"ChangeBotAttributes",
		"ChangeCDTrack",
		"ChangeDefaultEventAttributes",
		"ChangeDestinationGroup",
		"ChangeFOV",
		"ChangeGrav",
		"ChangeHudResFile",
		"ChangeLevel",
		"ChoosePlatform",
		"ClearAllEffects",
		"ClearAttentionFocus",
		"ClearContext",
		"ClearCustomModelRotation",
		"ClearParent",
		"ClearQueue",
		"Close",
		"Color",
		"ColorBlueValue",
		"ColorGreenValue",
		"ColorRedValue",
		"Command",
		"CommandGotoActionPoint",
		"Compare",
		"CompareValues",
		"Complete",
		"ConstraintBroken",
		"ConvertTarget",
		"CountPlayersInZone",
		"CreateBot",
		"Deactivate",
		"Delete",
		"DestroyIfAtCapturePoint",
		"Detach",
		"Detonate",
		"DetonateStickies",
		"Disable",
		"DisableAlternatePath",
		"DisableAndEndTouch",
		"DisableCollision",
		"DisableCollisions",
		"DisableDamageForces",
		"DisableFloating",
		"DisableFortuneTelling",
		"DisableHint",
		"DisableMaxScoreUpdating",
		"DisableMotion",
		"DisablePath",
		"DisablePhyscannonPickup",
		"DisablePlayerCollision",
		"DisablePuntSound",
		"DisableShadow",
		"DisableSpawnBoss",
		"DisableSpeedModifier",
		"DispatchEffect",
		"DispatchResponse",
		"Display",
		"Dissolve",
		"Divide",
		"DoSpark",
		"EmitAISound",
		"EmitBlood",
		"Enable",
		"EnableAlternatePath",
		"EnableCollision",
		"EnableCollisions",
		"EnableDamageForces",
		"EnableFortuneTelling",
		"EnableHint",
		"EnableMaxScoreUpdating",
		"EnableMotion",
		"EnablePath",
		"EnablePhyscannonPickup",
		"EnablePlayerCollision",
		"EnablePuntSound",
		"EnableRefire",
		"EnableShadow",
		"EnableShadows",
		"EnableSpawnBoss",
		"EndFortuneTelling",
		"EndGame",
		"EndTouch",
		"EndTraining",
		"Explode",
		"Extinguish",
		"ExtinguishPlayer",
		"ExtinguishTemporary",
		"FOV",
		"Fade",
		"FadeAndRemove",
		"FadeIn",
		"FadeOut",
		"FadeToPattern",
		"Fire",
		"FireHalloweenBonus",
		"FireMultiple",
		"FireOnce",
		"FireTimer",
		"FireUser1",
		"FireUser2",
		"FireUser3",
		"FireUser4",
		"ForceDrop",
		"ForceGlowDisabled",
		"ForceInteractionWithNPC",
		"ForcePlayerSpawnAsClassOutput",
		"ForcePlayerSwapToWeapon",
		"ForceReset",
		"ForceResetAndDisableSilent",
		"ForceResetSilent",
		"ForceRespawn",
		"ForceRespawnSwitchTeams",
		"ForceSpawn",
		"ForceSpawnAtEntityOrigin",
		"ForceTeamRespawn",
		"ForgetEntity",
		"Frequency",
		"GagDisable",
		"GagEnable",
		"GetCounter",
		"GetFMod",
		"GetValue",
		"GoDown",
		"GoUp",
		"GotoPathCorner",
		"Halloween2013TeleportToHell",
		"HalloweenSetUsingSpells",
		"HandBrakeOff",
		"HandBrakeOn",
		"HandleMapEvent",
		"Hide",
		"HideHudHint",
		"HideModel",
		"HideSprite",
		"HideTrainingHUD",
		"HideWeapon",
		"HolsterAndDestroyWeapon",
		"HolsterWeapon",
		"Hurt",
		"Ignite",
		"IgniteHitboxFireScale",
		"IgniteLifetime",
		"IgniteNumHitboxFires",
		"IgnitePlayer",
		"IgnoreDangerSounds",
		"Impact",
		"InPass",
		"InTeleport",
		"InValue",
		"Increment",
		"IncrementTextureIndex",
		"InputValue",
		"InsertSound",
		"InsideTransition",
		"InterjectResponse",
		"JumpPadUsed",
		"KartLoseAnimationBlue",
		"KartLoseAnimationRed",
		"KartWinAnimationBlue",
		"KartWinAnimationRed",
		"KickBots",
		"Kill",
		"KillHierarchy",
		"KilledNPC",
		"LightOff",
		"LightOn",
		"LightOnlyTarget",
		"LightWorld",
		"Lock",
		"ModifySpeed",
		"MoveToPosition",
		"MultiplayerSpawned",
		"Multiply",
		"Noise",
		"OnStartOvertime",
		"Open",
		"OpenAwayFrom",
		"OutsideTransition",
		"Pause",
		"PauseBotSpawning",
		"PickRandom",
		"PickRandomShuffle",
		"Pitch",
		"PitchShift",
		"PlaySound",
		"PlaySoundOnPlayer",
		"PlayVO",
		"PlayVOBlue",
		"PlayVORed",
		"Press",
		"PressIn",
		"PressOut",
		"PreventMovement",
		"RandomizeFMod",
		"RecomputeBlockers",
		"RefireTime",
		"Reload",
		"Remove",
		"RemoveAllSlides",
		"RemoveBots",
		"RemoveContext",
		"RemoveHealth",
		"Reset",
		"ResetGrav",
		"ResetTimer",
		"RespawnBot",
		"Restart",
		"Resume",
		"ReturnFromMinigame",
		"Reverse",
		"RevertRelationship",
		"RevertToDefaultRelationship",
		"RollCredits",
		"RollOutroCredits",
		"RollRareSpell",
		"RoomTriggerOnTouch",
		"RoundActivate",
		"RoundSpawn",
		"RoundWin",
		"RunScriptCode",
		"RunScriptFile",
		"Save",
		"SaveDangerous",
		"ScoreBluePoints",
		"ScoreRedPoints",
		"ScoreTeamBlue",
		"ScoreTeamRed",
		"ScriptPlayerDeath",
		"SetActive",
		"SetAdvantageTeam",
		"SetAggressiveness",
		"SetAllowDemoman",
		"SetAllowDiversion",
		"SetAllowEngineer",
		"SetAllowHeavy",
		"SetAllowMedic",
		"SetAllowPyro",
		"SetAllowScout",
		"SetAllowSniper",
		"SetAllowSoldier",
		"SetAllowSpy",
		"SetAllowed",
		"SetAmmoModifier",
		"SetAngles",
		"SetAngularLimit",
		"SetAngularVelocity",
		"SetAnimation",
		"SetAttached",
		"SetAttentionFocus",
		"SetAutoExposureMax",
		"SetAutoExposureMin",
		"SetBloomScale",
		"SetBloomScaleRange",
		"SetBlueKothClockActive",
		"SetBlueTeamGoalString",
		"SetBlueTeamRespawnWaveTime",
		"SetBlueTeamRole",
		"SetBlueTimer",
		"SetBuilder",
		"SetCTFCaptureBonusTime",
		"SetCamera",
		"SetCapLayout",
		"SetCapLayoutCustomPositionX",
		"SetCapLayoutCustomPositionY",
		"SetClass",
		"SetClearOnContact",
		"SetColor",
		"SetColorLerpTo",
		"SetColorSecondary",
		"SetColorSecondaryLerpTo",
		"SetCompareValue",
		"SetControlPoint",
		"SetCountdownImage",
		"SetCountdownTimer",
		"SetCounter",
		"SetCurrent",
		"SetCustomModel",
		"SetCustomModelOffset",
		"SetCustomModelRotates",
		"SetCustomModelRotation",
		"SetCustomModelVisibleToSelf",
		"SetCustomModelWithClassAnimations",
		"SetCustomUpgradesFile",
		"SetCycle",
		"SetCycleFrequency",
		"SetCycleType",
		"SetDamageFilter",
		"SetDefaultAnimation",
		"SetDensity",
		"SetDifficulty",
		"SetDisableDodge",
		"SetDispenserLevel",
		"SetDisplayText",
		"SetDriversMaxSpeed",
		"SetDriversMinSpeed",
		"SetEndDist",
		"SetEndDistLerpTo",
		"SetEnemyFilter",
		"SetExactVelocityChoiceType",
		"SetExcluded",
		"SetExpressionOverride",
		"SetFModAmplitude",
		"SetFModRate",
		"SetFModTimeOffset",
		"SetFModType",
		"SetFadeEndDistance",
		"SetFadeInDuration",
		"SetFadeOutDuration",
		"SetFadeStartDistance",
		"SetFailure",
		"SetFarZ",
		"SetFlagResetDelay",
		"SetFogController",
		"SetFont",
		"SetForce",
		"SetForceClear",
		"SetForcedTauntCam",
		"SetFrequency",
		"SetGlowColor",
		"SetHUDVisibility",
		"SetHealth",
		"SetHingeFriction",
		"SetHitMax",
		"SetHitMin",
		"SetIdleModifier",
		"SetIgnoreHumans",
		"SetInactive",
		"SetInterpolationTime",
		"SetInvert",
		"SetLaunchTarget",
		"SetLightingOrigin",
		"SetLightingOriginHack",
		"SetLocked",
		"SetLogoLength",
		"SetMagnitude",
		"SetMapForcedTruceDuringBossFight",
		"SetMass",
		"SetMaterialVar",
		"SetMaterialVarToCurrentTime",
		"SetMaxActiveZombies",
		"SetMaxChildren",
		"SetMaxDensity",
		"SetMaxHealth",
		"SetMaxJumpHeight",
		"SetMaxLiveChildren",
		"SetMaxPieces",
		"SetMaxPiecesDX8",
		"SetMaxRagdollCount",
		"SetMaxRagdollCountDX8",
		"SetMaxSlideTime",
		"SetMaxTime",
		"SetMeasureReference",
		"SetMeasureTarget",
		"SetMinHitpointsThreshold",
		"SetMinSlideTime",
		"SetMinimumSpawnDistance",
		"SetModel",
		"SetModelScale",
		"SetMovementGoal",
		"SetName",
		"SetNextMap",
		"SetNextPathCorner",
		"SetNoListRepeats",
		"SetNumTrainCappers",
		"SetOff",
		"SetOn",
		"SetOnAndTurnOthersOff",
		"SetOrientation",
		"SetOwner",
		"SetParent",
		"SetParentAttachment",
		"SetParentAttachmentMaintainOffset",
		"SetPattern",
		"SetPhysicsSpeed",
		"SetPlaybackRate",
		"SetPlayerSpeed",
		"SetPointsOnPlayerDeath",
		"SetPoseParameterName",
		"SetPoseValue",
		"SetPosition",
		"SetPositionImmediately",
		"SetRadial",
		"SetRainbow",
		"SetRedKothClockActive",
		"SetRedTeamGoalString",
		"SetRedTeamRespawnWaveTime",
		"SetRedTeamRole",
		"SetRedTimer",
		"SetRelationship",
		"SetRequiredObserverTarget",
		"SetRespawnName",
		"SetRespawnTime",
		"SetReturnTime",
		"SetRotationDistance",
		"SetRoundRespawnFreezeEnabled",
		"SetScriptOverlayMaterial",
		"SetScrollSpeed",
		"SetSection",
		"SetSequence",
		"SetSetupTime",
		"SetSolid",
		"SetSolidToPlayer",
		"SetSpawnFrequency",
		"SetSpeakerName",
		"SetSpeed",
		"SetSpeedDir",
		"SetSpeedDirAccel",
		"SetSpeedForwardModifier",
		"SetSpeedModRadius",
		"SetSpeedModSpeed",
		"SetSpeedReal",
		"SetSpringConstant",
		"SetSpringDamping",
		"SetSpringLength",
		"SetSquad",
		"SetStalemateOnTimelimit",
		"SetStartDist",
		"SetStartDistLerpTo",
		"SetStepHeight",
		"SetSuccess",
		"SetSuppressFire",
		"SetTarget",
		"SetTarget1",
		"SetTarget2",
		"SetTarget3",
		"SetTarget4",
		"SetTarget5",
		"SetTarget6",
		"SetTarget7",
		"SetTarget8",
		"SetTargetEntity",
		"SetTargetReference",
		"SetTargetScale",
		"SetTeam",
		"SetTeamCanCap",
		"SetText",
		"SetTextSize",
		"SetTextSpacingX",
		"SetTextSpacingY",
		"SetTextureIndex",
		"SetTime",
		"SetToggleState",
		"SetTonemapRate",
		"SetTonemapScale",
		"SetTrainCanRecede",
		"SetTrainRecedeTime",
		"SetTrainRecedeTimeAndUpdate",
		"SetUnlockTime",
		"SetValue",
		"SetValueCompare",
		"SetValueNoFire",
		"SetValueTest",
		"SetVelocity",
		"SetVelocityLimitTime",
		"SetWinner",
		"SetWinnerAndForceCaps",
		"Shatter",
		"Shoot",
		"Show",
		"ShowHudHint",
		"ShowInHUD",
		"ShowLogo",
		"ShowMessage",
		"ShowModel",
		"ShowSprite",
		"ShowTimer",
		"ShowTrainingHUD",
		"ShowTrainingMsg",
		"ShowTrainingObjective",
		"Shutdown",
		"Sleep",
		"SparkOnce",
		"Spawn",
		"SpawnBall",
		"SpawnBot",
		"SpawnDust",
		"SpawnMultiple",
		"SpawnNPCInLine",
		"SpawnNPCInRadius",
		"SpawnRobot",
		"SpeakResponseConcept",
		"SpeedBoostUsed",
		"Spin",
		"Splash",
		"SpotlightTexture",
		"Start",
		"StartAnimSequence",
		"StartBackward",
		"StartCommentary",
		"StartEffect",
		"StartFire",
		"StartFiring",
		"StartFloatLerp",
		"StartFogTransition",
		"StartFortuneTelling",
		"StartForward",
		"StartMeasuring",
		"StartOverlays",
		"StartRagdollBoogie",
		"StartSchedule",
		"StartScripting",
		"StartShake",
		"StartSpark",
		"StartTouch",
		"StartUnstoppableCommentary",
		"Steer",
		"Stop",
		"StopAndUseComputer",
		"StopAtStartPos",
		"StopEffect",
		"StopFiring",
		"StopMeasuring",
		"StopOverlays",
		"StopSchedule",
		"StopScripting",
		"StopShake",
		"StopSound",
		"StopSpark",
		"StopWaitingForActor",
		"StrikeOnce",
		"Strip",
		"StripWeaponsAndSuit",
		"Subtract",
		"SubtractFromTimer",
		"SwitchOverlay",
		"Target",
		"TargetEntity",
		"Teleport",
		"TeleportToMinigame",
		"TeleportToPathTrack",
		"TeleportToRandomMinigame",
		"TerminateScriptScope",
		"Test",
		"TestActivator",
		"TestWithInterval",
		"Throttle",
		"TimeUp",
		"Toggle",
		"ToggleActive",
		"ToggleAlternatePath",
		"ToggleDirection",
		"ToggleEnabled",
		"TogglePath",
		"ToggleSound",
		"ToggleSpark",
		"ToggleSprite",
		"ToggleTest",
		"TouchTest",
		"Trigger",
		"TriggerLootIslandAchievement",
		"TriggerLootIslandAchievement2",
		"TurnOff",
		"TurnOffDisplay",
		"TurnOn",
		"TurnOnDisplay",
		"UnZoom",
		"UnblockNav",
		"UnholsterWeapon",
		"Unlock",
		"UnpauseBotSpawning",
		"UpdateActors",
		"UpdateEnemyMemory",
		"Use",
		"UseDefaultAutoExposure",
		"UseDefaultBloomScale",
		"ViewPunch",
		"Volume",
		"WaitForTimerOrKeypress",
		"Wake",
		"Width",
		"ZapTouching",
		"Zoom",
		"_DisableUpdateTarget",
		"_EnableUpdateTarget",
		"_OnLogicBranchChanged",
		"_OnLogicBranchRemoved",
		"scale",
		"statica",
		"staticb",
		"staticc"
	]),
	// OUTPUT
	new Set([
		"AngularVelocity",
		"AtTarget",
		"Attack2Axis",
		"AttackAxis",
		"Counter",
		"Distance",
		"FacingPercentage",
		"ImpactForce",
		"IsAprilFools",
		"IsFullMoon",
		"IsHalloween",
		"IsNothing",
		"IsSmissmas",
		"IsTFBirthday",
		"IsValentines",
		"LeaveTarget",
		"Line",
		"NearestEntityDistance",
		"NoValidActors",
		"On10SecRemain",
		"On1MinRemain",
		"On1SecRemain",
		"On2MinRemain",
		"On2SecRemain",
		"On30SecRemain",
		"On3MinRemain",
		"On3SecRemain",
		"On4MinRemain",
		"On4SecRemain",
		"On5MinRemain",
		"On5SecRemain",
		"OnActivate",
		"OnAllBlueDead",
		"OnAllFalse",
		"OnAllLiveChildrenDead",
		"OnAllRedDead",
		"OnAllRobotsDead",
		"OnAllSpawned",
		"OnAllSpawnedDead",
		"OnAllTrue",
		"OnAnimationBegun",
		"OnAnimationDone",
		"OnArenaRoundStart",
		"OnArrival",
		"OnArrivalDone",
		"OnAssaultClear",
		"OnAttach",
		"OnAttackingEnemy",
		"OnAwakened",
		"OnBackgroundMap",
		"OnBallEnter",
		"OnBallExit",
		"OnBallFree",
		"OnBallGetAny",
		"OnBallGetBlu",
		"OnBallGetRed",
		"OnBallPowerDown",
		"OnBallPowerUp",
		"OnBallRemoved",
		"OnBeginFade",
		"OnBeginSentence",
		"OnBeginSequence",
		"OnBlockedClosing",
		"OnBlockedOpening",
		"OnBlueFinalePeriodEnd",
		"OnBlueFirstFlagStolen",
		"OnBlueFlagStolen",
		"OnBlueHasPoints",
		"OnBlueHitMaxPoints",
		"OnBlueHitMaxScore",
		"OnBlueHitZeroPoints",
		"OnBlueLastFlagReturned",
		"OnBlueLeaveMaxPoints",
		"OnBluePickup",
		"OnBlueScoreChanged",
		"OnBotDied",
		"OnBotKilled",
		"OnBotReached",
		"OnBreak",
		"OnBreakCap",
		"OnBreakTeam1",
		"OnBreakTeam2",
		"OnBuildInsideArea",
		"OnBuildNotFacing",
		"OnBuildOutsideArea",
		"OnBuildingUpgraded",
		"OnCacheInteraction",
		"OnCancelFailedSequence",
		"OnCancelSequence",
		"OnCanceled",
		"OnCapEnabled",
		"OnCapReset",
		"OnCapTeam1",
		"OnCapTeam1_PD",
		"OnCapTeam2",
		"OnCapTeam2_PD",
		"OnCapture",
		"OnCapture1",
		"OnCase01",
		"OnCase02",
		"OnCase03",
		"OnCase04",
		"OnCase05",
		"OnCase06",
		"OnCase07",
		"OnCase08",
		"OnCase09",
		"OnCase10",
		"OnCase11",
		"OnCase12",
		"OnCase13",
		"OnCase14",
		"OnCase15",
		"OnCase16",
		"OnCatapulted",
		"OnChangeLevel",
		"OnClose",
		"OnCommandFinished",
		"OnCommentaryMidGame",
		"OnCommentaryMultiplayerSpawn",
		"OnCommentaryNewGame",
		"OnCommentaryStarted",
		"OnCommentaryStopped",
		"OnCompletion",
		"OnConditionsSatisfied",
		"OnConditionsTimeout",
		"OnConstraintBroken",
		"OnConvert",
		"OnCountdown10SecRemain",
		"OnCountdown15SecRemain",
		"OnCountdown5SecRemain",
		"OnCountdownEnd",
		"OnCountdownStart",
		"OnCountdownTimerExpired",
		"OnCreditsDone",
		"OnDamaged",
		"OnDamagedByPlayer",
		"OnDamagedByPlayerSquad",
		"OnDeath",
		"OnDefault",
		"OnDenyCommanderUse",
		"OnDestroyed",
		"OnDetach",
		"OnDetonate",
		"OnDisabled",
		"OnDone",
		"OnDrop",
		"OnDrop1",
		"OnDroppedFlag",
		"OnEat",
		"OnEatBlue",
		"OnEatRed",
		"OnEffectApplied",
		"OnEffectExpired",
		"OnEnd",
		"OnEndCap",
		"OnEndFollow",
		"OnEndSentence",
		"OnEndSequence",
		"OnEndTouch",
		"OnEndTouchAll",
		"OnEndTouchFlag",
		"OnEntityFailedSpawn",
		"OnEntitySpawned",
		"OnEqual",
		"OnEqualTo",
		"OnEventFired",
		"OnExpended",
		"OnExtinguished",
		"OnFacingLookat",
		"OnFail",
		"OnFailure",
		"OnFalse",
		"OnFinished",
		"OnForceRespawn",
		"OnForcedInteractionAborted",
		"OnForcedInteractionFinished",
		"OnForcedInteractionStarted",
		"OnFortuneCurse",
		"OnFortuneEnd",
		"OnFortuneTold",
		"OnFortuneWarning",
		"OnFoundEnemy",
		"OnFoundPlayer",
		"OnFullyClosed",
		"OnFullyOpen",
		"OnGetValue",
		"OnGreaterThan",
		"OnGreaterThanOrEqualTo",
		"OnGustEnd",
		"OnGustStart",
		"OnHalfHealth",
		"OnHealthBelow10Percent",
		"OnHealthBelow20Percent",
		"OnHealthBelow30Percent",
		"OnHealthBelow40Percent",
		"OnHealthBelow50Percent",
		"OnHealthBelow60Percent",
		"OnHealthBelow70Percent",
		"OnHealthBelow80Percent",
		"OnHealthBelow90Percent",
		"OnHealthChanged",
		"OnHearCombat",
		"OnHearPlayer",
		"OnHearWorld",
		"OnHeardSound",
		"OnHeatLevelEnd",
		"OnHeatLevelStart",
		"OnHitMax",
		"OnHitMin",
		"OnHurt",
		"OnHurtPlayer",
		"OnIgnite",
		"OnIgnited",
		"OnIn",
		"OnInjured",
		"OnKilled",
		"OnKilledEnemy",
		"OnLessThan",
		"OnLessThanOrEqualTo",
		"OnLightOff",
		"OnLightOn",
		"OnLoadGame",
		"OnLockedUse",
		"OnLostEnemy",
		"OnLostEnemyLOS",
		"OnLostPlayer",
		"OnLostPlayerLOS",
		"OnMapSpawn",
		"OnMapTransition",
		"OnMatchSummaryStart",
		"OnMixed",
		"OnMotionEnabled",
		"OnMultiNewMap",
		"OnMultiNewRound",
		"OnNPCPickup",
		"OnNPCStartedUsing",
		"OnNPCStoppedUsing",
		"OnNewGame",
		"OnNextPoint",
		"OnNotEqual",
		"OnNotEqualTo",
		"OnNotFacingLookat",
		"OnNotTouching",
		"OnNumCappersChanged",
		"OnNumCappersChanged2",
		"OnObjectHealthChanged",
		"OnOpen",
		"OnOut",
		"OnOutOfWorld",
		"OnOwnerChangedToTeam1",
		"OnOwnerChangedToTeam2",
		"OnPass",
		"OnPhysCannonAnimatePostStarted",
		"OnPhysCannonAnimatePreStarted",
		"OnPhysCannonAnimatePullStarted",
		"OnPhysCannonDetach",
		"OnPhysCannonPullAnimFinished",
		"OnPhysGunDrop",
		"OnPhysGunOnlyPickup",
		"OnPhysGunPickup",
		"OnPhysGunPunt",
		"OnPickUp",
		"OnPickedUpFlag",
		"OnPickup1",
		"OnPickupTeam1",
		"OnPickupTeam2",
		"OnPlay",
		"OnPlayerDetonateBuilding",
		"OnPlayerDied",
		"OnPlayerGotOffLadder",
		"OnPlayerGotOnLadder",
		"OnPlayerInZone",
		"OnPlayerOutZone",
		"OnPlayerPickup",
		"OnPlayerSpawnAsDemoman",
		"OnPlayerSpawnAsEngineer",
		"OnPlayerSpawnAsHeavy",
		"OnPlayerSpawnAsMedic",
		"OnPlayerSpawnAsPyro",
		"OnPlayerSpawnAsScout",
		"OnPlayerSpawnAsSniper",
		"OnPlayerSpawnAsSoldier",
		"OnPlayerSpawnAsSpy",
		"OnPlayerSwappedToBuilding",
		"OnPlayerSwappedToMelee",
		"OnPlayerSwappedToPDA",
		"OnPlayerSwappedToPrimary",
		"OnPlayerSwappedToSecondary",
		"OnPlayerTouch",
		"OnPlayerUse",
		"OnPointsEndStealing",
		"OnPointsStartStealing",
		"OnPointsStolen",
		"OnPostIdleEndSequence",
		"OnPowerupImbalanceMeasuresOver",
		"OnPowerupImbalanceTeam1",
		"OnPowerupImbalanceTeam2",
		"OnPressed",
		"OnPushedPlayer",
		"OnRappelTouchdown",
		"OnReachedPosition",
		"OnRedFinalePeriodEnd",
		"OnRedFirstFlagStolen",
		"OnRedFlagStolen",
		"OnRedHasPoints",
		"OnRedHitMaxPoints",
		"OnRedHitMaxScore",
		"OnRedHitZeroPoints",
		"OnRedLastFlagReturned",
		"OnRedLeaveMaxPoints",
		"OnRedPickup",
		"OnRedScoreChanged",
		"OnReenabled",
		"OnReleased",
		"OnRemove",
		"OnRepaired",
		"OnReturn",
		"OnReturnFromMinigame",
		"OnRobotKilled",
		"OnRobotsRespawn",
		"OnRoundStart",
		"OnRoundStartOwnedByTeam1",
		"OnRoundStartOwnedByTeam2",
		"OnRoundWin",
		"OnRoutedSound",
		"OnScoreAny",
		"OnScoreBlu",
		"OnScoreRed",
		"OnScriptEvent01",
		"OnScriptEvent02",
		"OnScriptEvent03",
		"OnScriptEvent04",
		"OnScriptEvent05",
		"OnScriptEvent06",
		"OnScriptEvent07",
		"OnScriptEvent08",
		"OnSentryGunDestroyed",
		"OnSetupFinished",
		"OnSetupStart",
		"OnShowMessage",
		"OnSleep",
		"OnSpark",
		"OnSpawn",
		"OnSpawnBall",
		"OnSpawnNPC",
		"OnSpawnRoomDoorsShouldLock",
		"OnSpawnRoomDoorsShouldUnlock",
		"OnSpawned",
		"OnStart",
		"OnStartCap",
		"OnStartTeam1",
		"OnStartTeam2",
		"OnStartTouch",
		"OnStartTouchAll",
		"OnStartTouchFlag",
		"OnStateEnterBetweenRounds",
		"OnStateEnterPreRound",
		"OnStateEnterRoundRunning",
		"OnStateExitPreRound",
		"OnStunPlayer",
		"OnSuccess",
		"OnSuddenDeathStart",
		"OnSurfaceChangedFromTarget",
		"OnSurfaceChangedToTarget",
		"OnTakeDamage",
		"OnTeleport",
		"OnTeleportToMinigame",
		"OnTimeout",
		"OnTimer",
		"OnTimerHigh",
		"OnTimerLow",
		"OnTouchSameTeam",
		"OnTouchedByEntity",
		"OnTouching",
		"OnTrainStartRecede",
		"OnTrigger",
		"OnTrigger1",
		"OnTrigger10",
		"OnTrigger11",
		"OnTrigger12",
		"OnTrigger13",
		"OnTrigger14",
		"OnTrigger15",
		"OnTrigger16",
		"OnTrigger2",
		"OnTrigger3",
		"OnTrigger4",
		"OnTrigger5",
		"OnTrigger6",
		"OnTrigger7",
		"OnTrigger8",
		"OnTrigger9",
		"OnTriggeredByTeam1",
		"OnTriggeredByTeam2",
		"OnTruceEnd",
		"OnTruceStart",
		"OnTrue",
		"OnUnblockedClosing",
		"OnUnblockedOpening",
		"OnUnlocked",
		"OnUnpressed",
		"OnUse",
		"OnUseLocked",
		"OnUser1",
		"OnUser2",
		"OnUser3",
		"OnUser4",
		"OnWake",
		"OnWonByTeam1",
		"OnWonByTeam2",
		"OutColor",
		"OutValue",
		"OutputRemovePlatform",
		"OutputSafePlatform",
		"PlayerOff",
		"PlayerOn",
		"PlayersInCount",
		"PlayersOutCount",
		"Position",
		"PressedAttack",
		"PressedAttack2",
		"PressedBack",
		"PressedForward",
		"PressedMoveLeft",
		"PressedMoveRight",
		"SoundLevel",
		"TargetDir",
		"Team1PlayersChanged",
		"Team2PlayersChanged",
		"UnpressedAttack",
		"UnpressedAttack2",
		"UnpressedBack",
		"UnpressedForward",
		"UnpressedMoveLeft",
		"UnpressedMoveRight",
		"Velocity",
		"XAxis",
		"YAxis"
	]),
	// TARGETNAME
	new Set([
		"!self",
		"!pvsplayer",
		"!activator",
		"!caller",
		"!player",
		"BigNet"
	]),
	// CLASSNAME
	new Set([
		"_ballplayertoucher",
		"_firesmoke",
		"_plasma",
		"ai_ally_speech_manager",
		"ai_battle_line",
		"ai_changehintgroup",
		"ai_changetarget",
		"ai_goal_assault",
		"ai_goal_follow",
		"ai_goal_lead",
		"ai_goal_lead_weapon",
		"ai_goal_standoff",
		"ai_hint",
		"ai_network",
		"ai_relationship",
		"ai_script_conditions",
		"ai_sound",
		"ai_speechfilter",
		"aiscripted_schedule",
		"aitesthull",
		"ambient_generic",
		"archer_proxy",
		"assault_assaultpoint",
		"assault_rallypoint",
		"base_boss",
		"beam",
		"bot_action_point",
		"bot_controller",
		"bot_generator",
		"bot_hint_engineer_nest",
		"bot_hint_sentrygun",
		"bot_hint_sniper_spot",
		"bot_hint_teleporter_exit",
		"bot_npc_archer",
		"bot_npc_decoy",
		"bot_proxy",
		"bot_roster",
		"color_correction",
		"color_correction_volume",
		"commentary_auto",
		"cycler",
		"cycler_actor",
		"cycler_flex",
		"dispenser_touch_trigger",
		"dynamic_prop",
		"entity_bird",
		"entity_blocker",
		"entity_carrier",
		"entity_croc",
		"entity_medigun_shield",
		"entity_revive_marker",
		"entity_rocket",
		"entity_saucer",
		"entity_sign",
		"entity_soldier_statue",
		"entity_spawn_manager",
		"entity_spawn_point",
		"entityflame",
		"env_beam",
		"env_beverage",
		"env_blood",
		"env_bubbles",
		"env_credits",
		"env_cubemap",
		"env_debughistory",
		"env_detail_controller",
		"env_dustpuff",
		"env_dusttrail",
		"env_effectscript",
		"env_embers",
		"env_entity_dissolver",
		"env_entity_igniter",
		"env_entity_maker",
		"env_explosion",
		"env_fade",
		"env_fire",
		"env_fire_trail",
		"env_firesensor",
		"env_firesource",
		"env_fog_controller",
		"env_funnel",
		"env_global",
		"env_glow",
		"env_gunfire",
		"env_hudhint",
		"env_laser",
		"env_laserdot",
		"env_lightglow",
		"env_message",
		"env_microphone",
		"env_movieexplosion",
		"env_muzzleflash",
		"env_particle_performance_monitor",
		"env_particle_trail",
		"env_particlefire",
		"env_particlelight",
		"env_particlescript",
		"env_particlesmokegrenade",
		"env_physexplosion",
		"env_physimpact",
		"env_physwire",
		"env_player_surface_trigger",
		"env_projectedtexture",
		"env_quadraticbeam",
		"env_ragdoll_boogie",
		"env_rockettrail",
		"env_rotorshooter",
		"env_rotorwash_emitter",
		"env_screeneffect",
		"env_screenoverlay",
		"env_shake",
		"env_shooter",
		"env_smokestack",
		"env_smoketrail",
		"env_sniperdot",
		"env_soundscape",
		"env_soundscape_proxy",
		"env_soundscape_triggerable",
		"env_spark",
		"env_splash",
		"env_sporeexplosion",
		"env_sporetrail",
		"env_sprite",
		"env_sprite_oriented",
		"env_spritetrail",
		"env_steam",
		"env_steamjet",
		"env_sun",
		"env_texturetoggle",
		"env_tonemap_controller",
		"env_tracer",
		"env_viewpunch",
		"env_wind",
		"env_zoom",
		"event_queue_saveload_proxy",
		"eyeball_boss",
		"filter_activator_class",
		"filter_activator_mass_greater",
		"filter_activator_name",
		"filter_activator_team",
		"filter_activator_tfteam",
		"filter_base",
		"filter_damage_type",
		"filter_enemy",
		"filter_multi",
		"filter_tf_bot_has_tag",
		"filter_tf_class",
		"filter_tf_condition",
		"filter_tf_damaged_by_weapon_in_slot",
		"filter_tf_player_can_cap",
		"fish",
		"func_areaportal",
		"func_areaportalwindow",
		"func_breakable",
		"func_breakable_surf",
		"func_brush",
		"func_button",
		"func_capturezone",
		"func_changeclass",
		"func_clip_vphysics",
		"func_conveyor",
		"func_croc",
		"func_detail",
		"func_door",
		"func_door_rotating",
		"func_dustcloud",
		"func_dustmotes",
		"func_fish_pool",
		"func_flag_alert",
		"func_flagdetectionzone",
		"func_forcefield",
		"func_guntarget",
		"func_illusionary",
		"func_instance",
		"func_instance_parms",
		"func_ladderendpoint",
		"func_lod",
		"func_monitor",
		"func_movelinear",
		"func_nav_avoid",
		"func_nav_avoidance_obstacle",
		"func_nav_blocker",
		"func_nav_prefer",
		"func_nav_prerequisite",
		"func_nobuild",
		"func_nogrenades",
		"func_occluder",
		"func_passtime_goal",
		"func_passtime_goalie_zone",
		"func_passtime_no_ball_zone",
		"func_physbox",
		"func_physbox_multiplayer",
		"func_plat",
		"func_platrot",
		"func_powerupvolume",
		"func_precipitation",
		"func_proprrespawnzone",
		"func_pushable",
		"func_reflective_glass",
		"func_regenerate",
		"func_respawnflag",
		"func_respawnroom",
		"func_respawnroomvisualizer",
		"func_rot_button",
		"func_rotating",
		"func_smokevolume",
		"func_suggested_build",
		"func_tanktrain",
		"func_tfbot_hint",
		"func_trackautochange",
		"func_trackchange",
		"func_tracktrain",
		"func_train",
		"func_traincontrols",
		"func_upgradestation",
		"func_useableladder",
		"func_vehicleclip",
		"func_viscluster",
		"func_wall",
		"func_wall_toggle",
		"func_water",
		"func_water_analog",
		"func_weight_button",
		"game_end",
		"game_forcerespawn",
		"game_gib_manager",
		"game_intro_viewpoint",
		"game_player_equip",
		"game_player_team",
		"game_ragdoll_manager",
		"game_round_win",
		"game_score",
		"game_text",
		"game_text_tf",
		"game_ui",
		"game_weapon_manager",
		"game_zone_player",
		"generic_actor",
		"ghost",
		"gib",
		"gibshooter",
		"grenade",
		"halloween_fortune_teller",
		"halloween_souls_pack",
		"halloween_zapper",
		"hammer_updateignorelist",
		"handle_dummy",
		"handle_test",
		"headless_hatman",
		"hightower_teleport_vortex",
		"info_camera_link",
		"info_constraint_anchor",
		"info_hint",
		"info_intermission",
		"info_ladder_dismount",
		"info_landmark",
		"info_lighting",
		"info_lighting_relative",
		"info_mass_center",
		"info_no_dynamic_shadow",
		"info_node",
		"info_node_air",
		"info_node_air_hint",
		"info_node_climb",
		"info_node_hint",
		"info_node_link",
		"info_node_link_controller",
		"info_npc_spawn_destination",
		"info_null",
		"info_observer_point",
		"info_overlay",
		"info_overlay_accessor",
		"info_overlay_transition",
		"info_particle_system",
		"info_passtime_ball_spawn",
		"info_player_deathmatch",
		"info_player_start",
		"info_player_teamspawn",
		"info_populator",
		"info_powerup_spawn",
		"info_projecteddecal",
		"info_radial_link_controller",
		"info_target",
		"info_teleport_destination",
		"infodecal",
		"instanced_scripted_scene",
		"item_ammopack_full",
		"item_ammopack_medium",
		"item_ammopack_small",
		"item_armor",
		"item_bonuspack",
		"item_currencypack_custom",
		"item_currencypack_large",
		"item_currencypack_medium",
		"item_currencypack_small",
		"item_healthammokit",
		"item_healthkit_full",
		"item_healthkit_medium",
		"item_healthkit_small",
		"item_powerup_crit",
		"item_powerup_rune",
		"item_powerup_rune_temp",
		"item_powerup_uber",
		"item_sodacan",
		"item_teamflag",
		"item_teamflag_return_icon",
		"keyframe_rope",
		"keyframe_track",
		"lex",
		"light",
		"light_dynamic",
		"light_environment",
		"light_glspot",
		"light_spot",
		"logic_active_autosave",
		"logic_auto",
		"logic_autosave",
		"logic_branch",
		"logic_branch_listener",
		"logic_case",
		"logic_choreographed_scene",
		"logic_collision_pair",
		"logic_compare",
		"logic_lineto",
		"logic_measure_movement",
		"logic_multicompare",
		"logic_navigation",
		"logic_playerproxy",
		"logic_proximity",
		"logic_relay",
		"logic_scene_list_manager",
		"logic_timer",
		"mapobj_cart_dispenser",
		"material_modify_control",
		"math_colorblend",
		"math_counter",
		"math_remap",
		"merasmus",
		"merasmus_dancer",
		"momentary_door",
		"momentary_rot_button",
		"monster_furniture",
		"monster_generic",
		"monster_resource",
		"move_keyframed",
		"move_rope",
		"move_track",
		"multisource",
		"npc_concussiongrenade",
		"npc_contactgrenade",
		"npc_furniture",
		"npc_handgrenade",
		"npc_maker",
		"npc_puppet",
		"npc_template_maker",
		"npc_vehicledriver",
		"obj_attachment_sapper",
		"obj_dispenser",
		"obj_sentrygun",
		"obj_teleporter",
		"passtime_ball",
		"passtime_logic",
		"path_corner",
		"path_corner_crash",
		"path_track",
		"pd_dispenser",
		"phys_ballsocket",
		"phys_bone_follower",
		"phys_constraint",
		"phys_constraintsystem",
		"phys_convert",
		"phys_hinge",
		"phys_keepupright",
		"phys_lengthconstraint",
		"phys_magnet",
		"phys_motor",
		"phys_pulleyconstraint",
		"phys_ragdollconstraint",
		"phys_ragdollmagnet",
		"phys_slideconstraint",
		"phys_spring",
		"phys_thruster",
		"phys_torque",
		"physics_cannister",
		"physics_entity_solver",
		"physics_npc_solver",
		"physics_prop",
		"physics_prop_ragdoll",
		"player",
		"player_loadsaved",
		"player_manager",
		"player_speedmod",
		"player_weaponstrip",
		"point_anglesensor",
		"point_angularvelocitysensor",
		"point_bonusmaps_accessor",
		"point_camera",
		"point_clientcommand",
		"point_commentary_node",
		"point_commentary_viewpoint",
		"point_devshot_camera",
		"point_enable_motion_fixup",
		"point_gamestats_counter",
		"point_hurt",
		"point_intermission",
		"point_message",
		"point_playermoveconstraint",
		"point_populator_interface",
		"point_posecontroller",
		"point_proximity_sensor",
		"point_push",
		"point_servercommand",
		"point_spotlight",
		"point_teleport",
		"point_template",
		"point_tesla",
		"point_velocitysensor",
		"point_viewcontrol",
		"populator_internal_spawn_point",
		"prop_detail",
		"prop_door_rotating",
		"prop_dynamic",
		"prop_dynamic_ornament",
		"prop_dynamic_override",
		"prop_physics",
		"prop_physics_multiplayer",
		"prop_physics_override",
		"prop_physics_respawnable",
		"prop_ragdoll",
		"prop_ragdoll_attached",
		"prop_soccer_ball",
		"prop_sphere",
		"prop_static",
		"prop_vehicle",
		"prop_vehicle_driveable",
		"raggib",
		"rd_robot_dispenser",
		"rope_anchor",
		"scene_manager",
		"script_intro",
		"scripted_scene",
		"scripted_sentence",
		"scripted_sequence",
		"scripted_target",
		"shadow_control",
		"simple_bot",
		"simple_physics_brush",
		"simple_physics_prop",
		"sky_camera",
		"soundent",
		"spark_shower",
		"spotlight_end",
		"spraycan",
		"tank_boss",
		"tank_destruction",
		"tanktrain_ai",
		"tanktrain_aitarget",
		"target_cdaudio",
		"target_changegravity",
		"te_tester",
		"team_control_point",
		"team_control_point_master",
		"team_control_point_round",
		"team_manager",
		"team_round_timer",
		"team_train_watcher",
		"test_effect",
		"test_proxytoggle",
		"test_traceline",
		"tf_ammo_pack",
		"tf_base_minigame",
		"tf_bonus_duck_pickup",
		"tf_bot",
		"tf_dropped_weapon",
		"tf_flame",
		"tf_flame_rocket",
		"tf_gamerules",
		"tf_generic_bomb",
		"tf_glow",
		"tf_halloween_gift_pickup",
		"tf_halloween_gift_spawn_location",
		"tf_halloween_minigame",
		"tf_halloween_minigame_falling_platforms",
		"tf_halloween_pickup",
		"tf_logic_arena",
		"tf_logic_bonusround",
		"tf_logic_boss_battle",
		"tf_logic_competitive",
		"tf_logic_cp_timer",
		"tf_logic_holiday",
		"tf_logic_hybrid_ctf_cp",
		"tf_logic_koth",
		"tf_logic_mann_vs_machine",
		"tf_logic_medieval",
		"tf_logic_minigames",
		"tf_logic_multiple_escort",
		"tf_logic_on_holiday",
		"tf_logic_player_destruction",
		"tf_logic_raid",
		"tf_logic_robot_destruction",
		"tf_logic_training_mode",
		"tf_mann_vs_machine_stats",
		"tf_merasmus_trick_or_treat_prop",
		"tf_objective_resource",
		"tf_pda_expansion_dispenser",
		"tf_pda_expansion_teleporter",
		"tf_player_manager",
		"tf_point_nav_interface",
		"tf_point_weapon_mimic",
		"tf_populator",
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
		"tf_projectile_pipe",
		"tf_projectile_pipe_remote",
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
		"tf_spawner",
		"tf_spell_meteorshowerspawner",
		"tf_spell_pickup",
		"tf_target_dummy",
		"tf_taunt_prop",
		"tf_team",
		"tf_teleport_location",
		"tf_template_stun_drone",
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
		"tf_zombie_spawner",
		"training_annotation",
		"training_prop_dynamic",
		"trigger",
		"trigger_add_or_remove_tf_player_attributes",
		"trigger_add_tf_player_condition",
		"trigger_apply_impulse",
		"trigger_autosave",
		"trigger_bot_tag",
		"trigger_brush",
		"trigger_capture_area",
		"trigger_catapult",
		"trigger_cdaudio",
		"trigger_changelevel",
		"trigger_gravity",
		"trigger_hurt",
		"trigger_ignite",
		"trigger_ignite_arrows",
		"trigger_impact",
		"trigger_look",
		"trigger_multiple",
		"trigger_once",
		"trigger_particle",
		"trigger_passtime_ball",
		"trigger_player_respawn_override",
		"trigger_playermovement",
		"trigger_proximity",
		"trigger_push",
		"trigger_rd_vault_trigger",
		"trigger_remove",
		"trigger_remove_tf_player_condition",
		"trigger_serverragdoll",
		"trigger_soundscape",
		"trigger_stun",
		"trigger_teleport",
		"trigger_timer_door",
		"trigger_togglesave",
		"trigger_transition",
		"trigger_vphysics_motion",
		"trigger_wind",
		"vgui_screen",
		"vgui_screen_team",
		"vgui_slideshow_display",
		"viewmodel",
		"vote_controller",
		"water_lod_control",
		"waterbullet",
		"weapon_ifm_base",
		"weapon_ifm_base_camera",
		"weapon_ifm_steadycam",
		"wearable_item",
		"wheel_of_doom",
		"wheel_of_doom_spiral",
		"window_pane",
		"world_items",
		"worldspawn"
	]),
	// NUMBER_KEYVALUE
	new Set([
		"AbandonIfEnemyHides",
		"Active",
		"ActorInPVS",
		"ActorInVehicle",
		"ActorSeePlayer",
		"ActorSeeTarget",
		"ActorTargetProximity",
		"Aggressiveness",
		"AirCtrlSupressionTime",
		"AllowDispenser",
		"AllowSentry",
		"AllowTeleporters",
		"AssaultCue",
		"AutoMaterialize",
		"BaseSpread",
		"BlockDamage",
		"BoltWidth",
		"CapEnableDelay",
		"CapturePoint",
		"CollisionGroup",
		"Color1",
		"Color2",
		"ComingBackWaitForSpeak",
		"CompareValue",
		"CriterionDistance",
		"CriterionVisibility",
		"Crits",
		"CustomCoverOnReload",
		"CustomMaxShots",
		"CustomMaxTimeShots",
		"CustomMinShots",
		"CustomMinTimeShots",
		"CustomOddsCover",
		"CycleFrequency",
		"Damage",
		"DamageDelay",
		"DamageForce",
		"DamageRadius",
		"DamageType",
		"Damagetype",
		"DangerousTime",
		"DangerousTimer",
		"Density",
		"DensityRampSpeed",
		"DestroyBuildings",
		"DirectionNoise",
		"DirectionSuppressAirControl",
		"Directional",
		"DisableBoneFollowers",
		"DistMax",
		"Distance",
		"DontMessageParent",
		"DontSpeakStart",
		"DontUseSpeechSemaphore",
		"EffectDuration",
		"EndSize",
		"EntryAngleTolerance",
		"ExplodeDamage",
		"ExplodeRadius",
		"FModAmplitude",
		"FModRate",
		"FModTimeOffset",
		"FModType",
		"FOV",
		"FadeDist",
		"FadeStartDist",
		"FallSpeed",
		"FetchEventData",
		"FieldOfView",
		"FilterType",
		"Formation",
		"GagLeader",
		"GameType",
		"GlowColor",
		"GlowProxySize",
		"HDRColorScale",
		"HintGroupChangeReaction",
		"HoldNoise",
		"HoldTime",
		"HorizontalGlowSize",
		"IdleModifier",
		"IgnoreFacing",
		"IgnoreSolid",
		"InRandomPool",
		"InitialState",
		"InitialValue",
		"InputFilter",
		"IntegerValue",
		"Intensity",
		"InterpolationTime",
		"InterpolationWrap",
		"InvertAllow",
		"IsEnabled",
		"LeadDistance",
		"LeadDuringCombat",
		"LifetimeMax",
		"LifetimeMin",
		"LowPriority",
		"Magnitude",
		"ManualAccelSpeed",
		"ManualDecelSpeed",
		"ManualSpeedChanges",
		"MatchSummary",
		"MaxAnimTime",
		"MaxDelay",
		"MaxDist",
		"MaxLiveChildren",
		"MaxNPCCount",
		"MaxRagdollCount",
		"MaxRagdollCountDX8",
		"MaxRange",
		"MaxScore",
		"MaxTimeout",
		"MaximumState",
		"MeasureType",
		"MinAnimTime",
		"MinDist",
		"MinHitPointsToCommit",
		"MinSpawnDistance",
		"MinTimeout",
		"MinigameType",
		"MinimumHitPoints",
		"MinimumState",
		"Mode",
		"ModelScale",
		"MoveDistance",
		"MoveSoundMaxPitch",
		"MoveSoundMaxTime",
		"MoveSoundMinPitch",
		"MoveSoundMinTime",
		"MoveSpeed",
		"MoveType",
		"MovementSpeed",
		"Negated",
		"NeutralType",
		"NeverSayHello",
		"NewLevelUnit",
		"Noise",
		"NoiseAmplitude",
		"OuterMaxDist",
		"OverlayID",
		"OverlayTime1",
		"OverlayTime10",
		"OverlayTime2",
		"OverlayTime3",
		"OverlayTime4",
		"OverlayTime5",
		"OverlayTime6",
		"OverlayTime7",
		"OverlayTime8",
		"OverlayTime9",
		"ParticleDrawWidth",
		"ParticleSpacingDistance",
		"ParticleTrailEndSize",
		"ParticleTrailLifetime",
		"ParticleTrailStartSize",
		"PauseDuration",
		"PerformanceMode",
		"PlayerActorFOV",
		"PlayerActorFOVTrueCone",
		"PlayerActorLOS",
		"PlayerActorProximity",
		"PlayerBattleline",
		"PlayerBlockingActor",
		"PlayerInVehicle",
		"PlayerTargetFOV",
		"PlayerTargetFOVTrueCone",
		"PlayerTargetLOS",
		"PlayerTargetProximity",
		"PointValue",
		"PortalVersion",
		"PoseValue",
		"PositionInterpolator",
		"PostSpawnDirectionVariance",
		"PostSpawnInheritAngles",
		"PostSpawnSpeed",
		"PressureDelay",
		"Radius",
		"RallySelectMethod",
		"RandomAnimation",
		"Rate",
		"RefireTime",
		"RequiredTime",
		"RespawnTime",
		"Retrieve",
		"RetrieveDistance",
		"RetrieveWaitForSpeak",
		"ReturnBetweenWaves",
		"ReturnTime",
		"ReuseDelay",
		"Roll",
		"RollSpeed",
		"RotationInterpolator",
		"RotationSpeed",
		"Run",
		"SaveImportant",
		"ScoreType",
		"ScoringType",
		"ScriptStatus",
		"ScrollSpeed",
		"SearchType",
		"Sensitivity",
		"ShotClockMode",
		"ShouldComparetoValue",
		"Simulation",
		"SizeMax",
		"SizeMin",
		"Slack",
		"SmoothFactor",
		"SolidToPlayer",
		"Solidity",
		"SoundMask",
		"SpawnFrequency",
		"SpawnMode",
		"SpawnRate",
		"SpeedMax",
		"SpeedMin",
		"SpeedNoise",
		"SplashRadius",
		"SpotlightLength",
		"SpotlightWidth",
		"SpreadAngle",
		"StartActive",
		"StartDirection",
		"StartDisabled",
		"StartHintDisabled",
		"StartPosition",
		"StartSize",
		"StayAtCover",
		"StopScenes",
		"Strict",
		"StrikeTime",
		"Subdiv",
		"SuccessDistance",
		"SuddenDeathTime",
		"TargetNode",
		"TargetScale",
		"Task",
		"TeamNum",
		"TextureScale",
		"TextureScroll",
		"TimeToTrigger",
		"TouchType",
		"TrailLength",
		"TranslucencyLimit",
		"TriggerHitPoints",
		"Twist",
		"Type",
		"UseScreenAspectRatio",
		"Value",
		"VehicleLocked",
		"VerticalGlowSize",
		"Viewkick",
		"VisibleWhenDisabled",
		"WaitDistance",
		"WaveHeight",
		"WeaponType",
		"WeightToActivate",
		"Width",
		"WindAngle",
		"WindSpeed",
		"ZapperType",
		"actionOnDeath",
		"actionScale",
		"add",
		"add_or_remove",
		"addangaccel",
		"additionaliterations",
		"addlength",
		"alarm",
		"alert_delay",
		"allowClassChanges",
		"allowDemoman",
		"allowEngineer",
		"allowHaunting",
		"allowHeavy",
		"allowMedic",
		"allowPyro",
		"allowScout",
		"allowSniper",
		"allowSoldier",
		"allowSpy",
		"allowdiversion",
		"allowdiversionradius",
		"allownewgibs",
		"alternateticksfix",
		"ambient",
		"ammomod",
		"amount",
		"amplitude",
		"angle",
		"angularlimit",
		"animate",
		"applyAngularImpulse",
		"area_time_to_cap",
		"assaultdelay",
		"assaulttimeout",
		"assaulttolerance",
		"attachment_type",
		"attenuation",
		"auto_countdown",
		"background",
		"ball_spawn_countdown",
		"bank",
		"beamcount_max",
		"beamcount_min",
		"bias",
		"body",
		"bot_class",
		"burn_duration",
		"busyactor",
		"cameraspace",
		"capture_delay",
		"capture_delay_offset",
		"channel",
		"cheapwaterenddistance",
		"cheapwaterstartdistance",
		"clearoncontact",
		"coldworld",
		"collisions",
		"color",
		"colormax",
		"colormin",
		"condition",
		"constant",
		"count",
		"counter",
		"cpm_restrict_team_cap_win",
		"cpoint1_parent",
		"cpoint2_parent",
		"cpoint3_parent",
		"cpoint4_parent",
		"cpoint5_parent",
		"cpoint6_parent",
		"cpoint7_parent",
		"cpr_priority",
		"cpr_restrict_team_cap_win",
		"ctf_overtime",
		"current",
		"custom_position_x",
		"custom_position_y",
		"cycle",
		"cycletype",
		"damage",
		"damage_percent_per_second",
		"damagecap",
		"damagemodel",
		"damagescale",
		"damagetoenablemotion",
		"damagetype",
		"damping",
		"defaultstyle",
		"defaultupgrade",
		"defaultwelcome",
		"delay",
		"density",
		"desired_distance",
		"developeronly",
		"difficulty",
		"disableDodge",
		"disableallshadows",
		"disabled",
		"disablereceiveshadows",
		"disableshadows",
		"display_to_team",
		"disposition",
		"dissolvetype",
		"distance",
		"dmg",
		"drivermaxspeed",
		"driverminspeed",
		"drop_to_ground",
		"duration",
		"effect",
		"effect_duration",
		"effects",
		"enabled",
		"enableshadows",
		"endnode",
		"endsize",
		"endwidth",
		"entity_count",
		"error",
		"event_data_int",
		"event_delay",
		"exactVelocityChoiceType",
		"expdamage",
		"explodemagnitude",
		"explosion",
		"expradius",
		"face_entity_fov",
		"fadeDuration",
		"fadeInDuration",
		"fadeOutDuration",
		"fadein",
		"fadeout",
		"fadescale",
		"farz",
		"filter_max_per_enemy",
		"filter_outer_radius",
		"filter_radius",
		"filtermass",
		"filterteam",
		"finale_length",
		"fireattack",
		"firedamage",
		"fireinterval",
		"fireradius",
		"firesize",
		"firetype",
		"flag_as_weather",
		"flag_reset_delay",
		"fogColor",
		"fogEnable",
		"fogEnd",
		"fogMaxDensity",
		"fogRadial",
		"fogStart",
		"fogblend",
		"fogcolor",
		"fogcolor2",
		"fogenable",
		"fogend",
		"foglerptime",
		"fogmaxdensity",
		"fogradial",
		"fogstart",
		"font",
		"force",
		"force_map_reset",
		"forceclosed",
		"forcecrouch",
		"forcelimit",
		"forcestate",
		"forcetime",
		"forcetoenablemotion",
		"fov",
		"fragility",
		"frame",
		"framerate",
		"framestart",
		"frequency",
		"friction",
		"friendlyfire",
		"fuel",
		"fxtime",
		"gamematerial",
		"gametitle",
		"gearratio",
		"gibanglevelocity",
		"gibgravityscale",
		"gibs",
		"graball",
		"gravity",
		"group_number",
		"gustdirchange",
		"gustduration",
		"hammerid",
		"handle_train_movement",
		"hardware",
		"has_spiral",
		"heal_distance",
		"health",
		"heatlevel",
		"heattime",
		"height",
		"hingefriction",
		"hint",
		"hintlimiting",
		"hinttype",
		"hitboxset",
		"holdtime",
		"holiday_type",
		"hud_min_speed_level_1",
		"hud_min_speed_level_2",
		"hud_min_speed_level_3",
		"hud_type",
		"iMagnitude",
		"iRadiusOverride",
		"ignitionpoint",
		"ignoredebris",
		"ignoreunseenenemies",
		"in1",
		"in2",
		"inertiafactor",
		"inertiascale",
		"infinite_zombies",
		"initialstate",
		"inmax",
		"inmin",
		"inner_radius",
		"interruptability",
		"interval",
		"interval_max",
		"interval_min",
		"invert_exclusion",
		"length",
		"life",
		"lifetime",
		"lifetime_max",
		"lifetime_min",
		"lightfov",
		"lightonlytarget",
		"lightworld",
		"linktype",
		"lip",
		"loadtime",
		"loopmovesound",
		"loser_respawn_bonus_per_bot",
		"lowerThreshold",
		"ltime",
		"m_Color",
		"m_bDisableNPCCollisions",
		"m_bIgnoreGravity",
		"m_bLoopActionSequence",
		"m_bOn",
		"m_bSynchPostIdles",
		"m_fMoveTo",
		"m_flGibLife",
		"m_flRadius",
		"m_flRepeat",
		"m_flVariance",
		"m_flVelocity",
		"m_iGibs",
		"magnitude",
		"massScale",
		"massoverride",
		"massscale",
		"match_summary",
		"max",
		"maxActive",
		"max_health",
		"max_length",
		"max_pass_range",
		"max_points",
		"max_zombies",
		"maxburstdelay",
		"maxburstsize",
		"maxdirectedspeed",
		"maxfalloff",
		"maxgust",
		"maxgustdelay",
		"maxobjects",
		"maxoccludeearea",
		"maxpieces",
		"maxpiecesdx8",
		"maxpropscreenwidth",
		"maxslidetime",
		"maxspeed",
		"maxweight",
		"maxwind",
		"messageattenuation",
		"messagevolume",
		"min",
		"min_points",
		"minburstdelay",
		"minburstsize",
		"mindirectedspeed",
		"mindxlevel",
		"minfalloff",
		"mingust",
		"mingustdelay",
		"minhealthdmg",
		"minlength",
		"minoccluderarea",
		"minpropscreenwidth",
		"minslidetime",
		"minspeed",
		"minwind",
		"modelindex",
		"modelscale",
		"move_speed_reduction",
		"nearz",
		"nevertimeout",
		"nextthink",
		"nodamageforces",
		"nodeFOV",
		"nodeid",
		"nodmgforce",
		"nogibshadows",
		"nolistrepeats",
		"notsolid",
		"num_sections",
		"object_type",
		"occludernumber",
		"offset",
		"onlyVelocityCheck",
		"onplayerdeath",
		"opacity",
		"opendir",
		"orientation",
		"orientationtype",
		"out1",
		"out2",
		"overlaycolor",
		"overlaysize",
		"partial_cap_points_rate",
		"passActivator",
		"physicsSpeed",
		"physicsmode",
		"pitch",
		"play_all_rounds",
		"playbackrate",
		"playerSpeed",
		"playsound",
		"point_default_owner",
		"point_group",
		"point_index",
		"point_start_locked",
		"point_warn_on_cap",
		"points",
		"points_per_player",
		"portalnumber",
		"preciptype",
		"prevent_movement",
		"priority",
		"radius",
		"rainbow",
		"random_owner_on_restart",
		"random_rotation",
		"rank",
		"rateoffire",
		"reciprocal",
		"refire",
		"relativedamping",
		"renderamt",
		"renderfx",
		"rendermode",
		"require_all_tags",
		"reset_time",
		"resolution",
		"respawn_reduction_scale",
		"respawn_time",
		"retainBuildings",
		"returndelay",
		"returnspeed",
		"ropes_holiday_lights_allowed",
		"rotortime",
		"rotortimevariance",
		"scale",
		"schedule",
		"score_interval",
		"score_style",
		"sequence",
		"setup_length",
		"shadowcastdist",
		"shadowquality",
		"shouldBlock",
		"show_in_hud",
		"show_time_remaining",
		"size",
		"skin",
		"sleepstate",
		"slidefriction",
		"solid",
		"solid_to_enemies",
		"solidbsp",
		"soundcontext",
		"sounds",
		"soundtype",
		"spawnOnlyWhenTriggered",
		"spawnflags",
		"spawnpos",
		"spawnradius",
		"spawnrate",
		"speaker_dsp_preset",
		"speed",
		"speed_forward_modifier",
		"speedfactor",
		"spinup",
		"spread",
		"start_active",
		"start_disabled",
		"start_paused",
		"startdark",
		"startdisabled",
		"startnode",
		"startsize",
		"startspeed",
		"startwidth",
		"stay_time",
		"step_number",
		"sticky",
		"strict",
		"stun_duration",
		"stun_effects",
		"stun_type",
		"style",
		"suppressFire",
		"surfacetype",
		"switch_teams",
		"systemloadscale",
		"tauntInHell",
		"teamToBlock",
		"team_number",
		"teamnumber",
		"teleporterType",
		"teleportfollowdistance",
		"texframeindex",
		"textsize",
		"textspacingX",
		"textspacingY",
		"textureframe",
		"tfclass",
		"thick_max",
		"thick_min",
		"threshold",
		"thrust",
		"tier",
		"time_delay",
		"timeout",
		"timer_length",
		"torquelimit",
		"track",
		"trail_effect",
		"train_can_recede",
		"train_recede_time",
		"trigger_delay",
		"type",
		"unlock_point",
		"upperThreshold",
		"urgent",
		"useExactVelocity",
		"useTeamSpawnPoint",
		"useThresholdCheck",
		"use_angles",
		"useairlinkradius",
		"usehelper",
		"value",
		"velocitytype",
		"volume",
		"wait",
		"wakeradius",
		"wakesquad",
		"waterlevel",
		"weaponSlot",
		"wheels",
		"width",
		"win_reason",
		"x",
		"xfriction",
		"xmax",
		"xmin",
		"y",
		"yfriction",
		"ymax",
		"ymin",
		"zfriction",
		"zmax",
		"zmin",
		"zombie_lifetime",
		"zombie_type",
		"zone_id"
	]),
	// VECTOR_KEYVALUE
	new Set([
		"Color",
		"PostSpawnDirection",
		"ajarangles",
		"angles",
		"attachpoint",
		"avelocity",
		"axis",
		"basevelocity",
		"fogdir",
		"gibangles",
		"gibdir",
		"hingeaxis",
		"impulse_dir",
		"launchDirection",
		"lowerleft",
		"lowerright",
		"maxs",
		"mins",
		"movedir",
		"origin",
		"point0",
		"point1",
		"preferredcarryangles",
		"punchangle",
		"pushdir",
		"rendercolor",
		"slideaxis",
		"spraydir",
		"springaxis",
		"teleport_origin",
		"teleportoffset",
		"upperleft",
		"upperright",
		"velocity",
		"view_ofs"
	]),
	// STRING_KEYVALUE
	new Set([
		"Actor",
		"AllowUse",
		"ArrivalConceptModifier",
		"AttractPlayerConceptModifier",
		"BackgroundBModel",
		"BaseConceptModifiers",
		"Branch01",
		"Branch02",
		"Branch03",
		"Branch04",
		"Branch05",
		"Branch06",
		"Branch07",
		"Branch08",
		"Branch09",
		"Branch10",
		"Branch11",
		"Branch12",
		"Branch13",
		"Branch14",
		"Branch15",
		"Branch16",
		"BreakModelMessage",
		"Case01",
		"Case02",
		"Case03",
		"Case04",
		"Case05",
		"Case06",
		"Case07",
		"Case08",
		"Case09",
		"Case10",
		"Case11",
		"Case12",
		"Case13",
		"Case14",
		"Case15",
		"Case16",
		"ComingBackConceptModifier",
		"DamageTarget",
		"DefaultAnim",
		"DestinationGroup",
		"EndSprite",
		"Entity",
		"EntityTemplate",
		"EventName",
		"ExpressionOverride",
		"FailureConceptModifier",
		"Filter01",
		"Filter02",
		"Filter03",
		"Filter04",
		"Filter05",
		"FireSound",
		"Goal",
		"Group",
		"Group00",
		"Group01",
		"Group02",
		"Group03",
		"Group04",
		"Group05",
		"Group06",
		"Group07",
		"Group08",
		"Group09",
		"Group10",
		"Group11",
		"Group12",
		"Group13",
		"Group14",
		"Group16",
		"IgnoreEntity",
		"IgnoredName01",
		"IgnoredName02",
		"IgnoredName03",
		"IgnoredName04",
		"IgnoredName05",
		"IgnoredName06",
		"IgnoredName07",
		"IgnoredName08",
		"IgnoredName09",
		"IgnoredName10",
		"IgnoredName11",
		"IgnoredName12",
		"IgnoredName13",
		"IgnoredName14",
		"IgnoredName15",
		"IgnoredName16",
		"InitialOwner",
		"LaserTarget",
		"LightingLandmark",
		"LightingOrigin",
		"LightingOriginHack",
		"LightningEnd",
		"LightningStart",
		"ListenFilter",
		"MainSoundscapeName",
		"Material",
		"MeasureReference",
		"MeasureTarget",
		"MissingWeaponConceptModifier",
		"ModelOverride",
		"MovePingSound",
		"MoveSound",
		"NPCHintGroup",
		"NPCSquadName",
		"NPCTargetname",
		"NPCType",
		"Name",
		"NewHintGroup",
		"NextKey",
		"OverlayName1",
		"OverlayName10",
		"OverlayName2",
		"OverlayName3",
		"OverlayName4",
		"OverlayName5",
		"OverlayName6",
		"OverlayName7",
		"OverlayName8",
		"OverlayName9",
		"PSName",
		"ParticleEffect",
		"ParticleTrailMaterial",
		"PointCamera",
		"PoseParameterName",
		"PostArrivalConceptModifier",
		"PropName",
		"Relationship",
		"RenameNPC",
		"RespawnName",
		"ResponseContext",
		"ResumeSceneFile",
		"RetrieveConceptModifier",
		"SceneFile",
		"SearchName",
		"Sentence",
		"SkyboxName",
		"SourceEntityName",
		"SpeakerName",
		"StartConceptModifier",
		"StartSound",
		"StopSound",
		"SuccessConceptModifier",
		"TargetReference",
		"Template01",
		"Template02",
		"Template03",
		"Template04",
		"Template05",
		"Template06",
		"Template07",
		"Template08",
		"Template09",
		"Template10",
		"Template11",
		"Template12",
		"Template13",
		"Template14",
		"Template15",
		"Template16",
		"TemplateName",
		"VehicleScript",
		"WaitOverConceptModifier",
		"WaitPointName",
		"WeaponClassname",
		"WeaponName",
		"action_point",
		"additionalequipment",
		"altpath",
		"angleOverride",
		"area_cap_point",
		"assaultgroup",
		"assaultpoint",
		"associated_team_entity",
		"associatedmodel",
		"attach1",
		"attach2",
		"attachment_name",
		"attribute_name",
		"blue_teleport",
		"bot_name",
		"bottomtrack",
		"breaksound",
		"cameraname",
		"caplayout",
		"chainstodoor",
		"chaptertitle",
		"class",
		"classname",
		"closesound",
		"command",
		"commentaryfile",
		"commentaryfile_nohdr",
		"constraintsystem",
		"controlpoint",
		"cpoint1",
		"cpoint10",
		"cpoint11",
		"cpoint12",
		"cpoint13",
		"cpoint14",
		"cpoint15",
		"cpoint16",
		"cpoint17",
		"cpoint18",
		"cpoint19",
		"cpoint2",
		"cpoint20",
		"cpoint21",
		"cpoint22",
		"cpoint23",
		"cpoint24",
		"cpoint25",
		"cpoint26",
		"cpoint27",
		"cpoint28",
		"cpoint29",
		"cpoint3",
		"cpoint30",
		"cpoint31",
		"cpoint32",
		"cpoint33",
		"cpoint34",
		"cpoint35",
		"cpoint36",
		"cpoint37",
		"cpoint38",
		"cpoint39",
		"cpoint4",
		"cpoint40",
		"cpoint41",
		"cpoint42",
		"cpoint43",
		"cpoint44",
		"cpoint45",
		"cpoint46",
		"cpoint47",
		"cpoint48",
		"cpoint49",
		"cpoint5",
		"cpoint50",
		"cpoint51",
		"cpoint52",
		"cpoint53",
		"cpoint54",
		"cpoint55",
		"cpoint56",
		"cpoint57",
		"cpoint58",
		"cpoint59",
		"cpoint6",
		"cpoint60",
		"cpoint61",
		"cpoint62",
		"cpoint63",
		"cpoint7",
		"cpoint8",
		"cpoint9",
		"cpr_cp_names",
		"cpr_printname",
		"croc_model",
		"damagefilter",
		"decalname",
		"detailmaterial",
		"directionentityname",
		"directory",
		"display_text",
		"displaytext",
		"door_name",
		"effect_name",
		"enemy_team_score_sound",
		"enemyfilter",
		"enginesound",
		"entity",
		"entity_name",
		"env_spark_name",
		"event_to_fire",
		"excludednpc",
		"explode_particle",
		"face_entity",
		"filename",
		"filterclass",
		"filtername",
		"flag_icon",
		"flag_model",
		"flag_paper",
		"flag_trail",
		"gassound",
		"globalname",
		"globalstate",
		"goal_node",
		"goalent",
		"hint_message",
		"hintactivity",
		"hintgroup",
		"hud_icon",
		"hud_res_file",
		"hull_name",
		"icon",
		"ignite_particle_name",
		"ignite_sound_name",
		"ignoredEntity",
		"initial_command",
		"ladderSurfaceProperties",
		"landmark",
		"launchTarget",
		"linked_cp_1",
		"linked_cp_2",
		"linked_cp_3",
		"linked_cp_4",
		"linked_cp_5",
		"linked_cp_6",
		"linked_cp_7",
		"linked_cp_8",
		"linked_pathtrack_1",
		"linked_pathtrack_2",
		"linked_pathtrack_3",
		"linked_pathtrack_4",
		"linked_pathtrack_5",
		"linked_pathtrack_6",
		"linked_pathtrack_7",
		"linked_pathtrack_8",
		"listener",
		"locationproxy",
		"locked_sound",
		"lookatname",
		"m_SoundName",
		"m_SourceEntityName",
		"m_iszCustomMove",
		"m_iszEntity",
		"m_iszEntry",
		"m_iszIdle",
		"m_iszNewTarget",
		"m_iszNextScript",
		"m_iszPlay",
		"m_iszPostIdle",
		"mapname",
		"master",
		"matchingTeleporter",
		"material",
		"measuretarget",
		"message",
		"messagesound",
		"model",
		"movementsound",
		"newtarget",
		"nextMap",
		"next_action_point",
		"nextassaultpoint",
		"noise1",
		"noise2",
		"overlaymaterial",
		"overridescript",
		"parentattachment",
		"parentname",
		"particle_name",
		"pattern",
		"pickup_particle",
		"pickup_sound",
		"point_capture_end_sound",
		"point_capture_interrupted_sound",
		"point_capture_progress_sound",
		"point_capture_start_sound",
		"point_printname",
		"point_warn_sound",
		"position0",
		"position1",
		"position2",
		"position3",
		"position4",
		"position5",
		"position6",
		"position7",
		"postcommands",
		"powerup_model",
		"precommands",
		"prop_drop_sound",
		"prop_model_name",
		"prop_pickup_sound",
		"puntsound",
		"rallypoint",
		"rallysequence",
		"red_teleport",
		"res_file",
		"respawn_interval",
		"respawnroomname",
		"round_bluespawn",
		"round_redspawn",
		"scene0",
		"scene1",
		"scene10",
		"scene11",
		"scene12",
		"scene13",
		"scene14",
		"scene15",
		"scene2",
		"scene3",
		"scene4",
		"scene5",
		"scene6",
		"scene7",
		"scene8",
		"scene9",
		"scriptfile",
		"sentence",
		"shootsound",
		"slavename",
		"sound",
		"soundcloseoverride",
		"soundlockedoverride",
		"soundmoveoverride",
		"soundopenoverride",
		"soundscape",
		"soundunlockedoverride",
		"source",
		"spawn_manager_name",
		"spawn_on_start",
		"spawngroup",
		"speakers",
		"spritename",
		"squadname",
		"start_node",
		"startclosesound",
		"startpath",
		"startsound",
		"subject",
		"swapmodel",
		"tags",
		"target",
		"target1",
		"target2",
		"target3",
		"target4",
		"target5",
		"target6",
		"target7",
		"target8",
		"target_base_name",
		"targetattachment",
		"targetentityname",
		"targetname",
		"team",
		"template",
		"texture",
		"texturename",
		"thinkfunction",
		"toptrack",
		"touch_trigger",
		"tracertype",
		"train",
		"trigger_name",
		"unlocked_sound",
		"vehicle",
		"viewposition",
		"viewtarget",
		"vscripts",
		"weaponname",
		"your_team_score_sound"
	]),
	// ATTRIBUTE
	new Set([
		"Attack not cancel charge",
		"Blast radius decreased",
		"Blast radius increased",
		"CARD: damage bonus",
		"CARD: dmg taken from bullets reduced",
		"CARD: health regen",
		"CARD: move speed bonus",
		"Construction rate decreased",
		"Construction rate increased",
		"DEPRECATED socketed item definition id DEPRECATED ",
		"Halloween Spellbook Page: Audere",
		"Halloween Spellbook Page: Congeriae",
		"Halloween Spellbook Page: Gratanter",
		"Halloween Spellbook Page: Tumidum",
		"Halloween Spellbook Page: Veteris",
		"NoCloakWhenCloaked",
		"Projectile range decreased",
		"Projectile range increased",
		"Projectile speed decreased",
		"Projectile speed increased HIDDEN",
		"Projectile speed increased",
		"ReducedCloakFromAmmo",
		"Reload time decreased",
		"Reload time increased",
		"Repair rate decreased",
		"Repair rate increased",
		"SET BONUS: alien isolation merc bonus neg",
		"SET BONUS: alien isolation merc bonus pos",
		"SET BONUS: alien isolation xeno bonus neg",
		"SET BONUS: alien isolation xeno bonus pos",
		"SET BONUS: calling card on kill",
		"SET BONUS: chance of hunger decrease",
		"SET BONUS: cloak blink time penalty",
		"SET BONUS: custom taunt particle attr",
		"SET BONUS: dmg from sentry reduced",
		"SET BONUS: dmg taken from bullets increased",
		"SET BONUS: dmg taken from crit reduced set bonus",
		"SET BONUS: dmg taken from fire reduced set bonus",
		"SET BONUS: health regen set bonus",
		"SET BONUS: max health additive bonus",
		"SET BONUS: move speed set bonus",
		"SET BONUS: mystery solving time decrease",
		"SET BONUS: no death from headshots",
		"SET BONUS: quiet unstealth",
		"SET BONUS: special dsp",
		"SPELL: Halloween death ghosts",
		"SPELL: Halloween green flames",
		"SPELL: Halloween pumpkin explosions",
		"SPELL: Halloween voice modulation",
		"SPELL: set Halloween footstep type",
		"SPELL: set item tint RGB",
		"SRifle Charge rate decreased",
		"SRifle Charge rate increased",
		"Set DamageType Ignite",
		"Wrench index",
		"absorb damage while cloaked",
		"accepted wedding ring account id 1",
		"accepted wedding ring account id 2",
		"accuracy scales damage",
		"active health degen",
		"active health regen",
		"add cloak on hit",
		"add cloak on kill",
		"add head on hit",
		"add jingle to footsteps",
		"add onhit addammo",
		"add uber charge on hit",
		"add_head_on_kill",
		"additional halloween response criteria name",
		"afterburn duration bonus",
		"afterburn duration penalty",
		"afterburn immunity",
		"aiming knockback resistance",
		"aiming movespeed decreased",
		"aiming movespeed increased",
		"aiming no flinch",
		"air dash count",
		"air jump on attack",
		"airblast cost decreased",
		"airblast cost increased",
		"airblast cost scale hidden",
		"airblast disabled",
		"airblast pushback scale",
		"airblast vertical pushback scale",
		"airblast vertical vulnerability multiplier",
		"airblast vulnerability multiplier hidden",
		"airblast vulnerability multiplier",
		"airblast_deflect_projectiles_disabled",
		"airblast_destroy_projectile",
		"airblast_give_teammate_speed_boost",
		"airblast_pushback_disabled",
		"airblast_pushback_no_stun",
		"airblast_pushback_no_viewpunch",
		"airblast_put_out_teammate_disabled",
		"airblast_turn_projectile_to_ammo",
		"allow_halloween_offering",
		"allowed in medieval mode",
		"alt fire teleport to spawn",
		"alt-fire disabled",
		"always tradable",
		"always_transmit_so",
		"ammo becomes health",
		"ammo gives charge",
		"ammo regen",
		"aoe_deflection",
		"applies snare effect",
		"apply look velocity on damage",
		"apply z velocity on damage",
		"armor piercing",
		"arrow heals buildings",
		"attach particle effect static",
		"attach particle effect",
		"attack projectiles",
		"attack_minicrits_and_consumes_burning",
		"auto fires full clip all at once",
		"auto fires full clip penalty",
		"auto fires full clip",
		"auto fires when full",
		"axtinguisher properties",
		"back headshot",
		"backstab shield",
		"become fireproof on hit by fire",
		"bidirectional teleport",
		"blast dmg to self increased",
		"bleeding duration",
		"bombinomicon effect on death",
		"boost on damage",
		"boots falling stomp",
		"bot custom jump particle",
		"bot medic uber deploy delay duration",
		"bot medic uber health threshold",
		"breadgloves properties",
		"build rate bonus",
		"building cost reduction",
		"building instant upgrade",
		"bullets per shot bonus",
		"burn damage earns rage",
		"can overload",
		"can shuffle crate contents",
		"cancel falling damage",
		"cannonball push back",
		"cannot be backstabbed",
		"cannot delete",
		"cannot disguise",
		"cannot giftwrap",
		"cannot pick up buildings",
		"cannot pick up intelligence",
		"cannot restore",
		"cannot trade",
		"cannot_transmute",
		"canteen specialist",
		"centerfire projectile",
		"charge impact damage decreased",
		"charge impact damage increased",
		"charge meter on hit",
		"charge recharge rate increased",
		"charge time decreased",
		"charge time increased",
		"charged airblast",
		"class select override vcd",
		"cleaver description",
		"clip size bonus upgrade",
		"clip size bonus",
		"clip size penalty HIDDEN",
		"clip size penalty",
		"clip size upgrade atomic",
		"clipsize increase on kill",
		"cloak consume rate decreased",
		"cloak consume rate increased",
		"cloak regen rate decreased",
		"cloak regen rate increased",
		"cloak_consume_on_feign_death_activate",
		"closerange backattack minicrits",
		"collection bits DEPRECATED",
		"community description",
		"cosmetic taunt sound",
		"cosmetic_allow_inspect",
		"counts as assister is some kind of pet this update is going to be awesome",
		"crate generation code",
		"crit does no damage",
		"crit forces victim to laugh",
		"crit from behind",
		"crit kill will gib",
		"crit mod disabled hidden",
		"crit mod disabled",
		"crit on hard hit",
		"crit vs burning players",
		"crit vs disguised players",
		"crit vs non burning players",
		"crit vs stunned players",
		"crit vs wet players",
		"crit_dmg_falloff",
		"crit_vs_burning_FLARES_DISPLAY_ONLY",
		"critboost on kill",
		"critboost",
		"crits_become_minicrits",
		"currency bonus",
		"custom desc attr",
		"custom employee number",
		"custom name attr",
		"custom projectile model",
		"custom texture hi",
		"custom texture lo",
		"custom_paintkit_seed_hi",
		"custom_paintkit_seed_lo",
		"damage all connected",
		"damage applies to sappers",
		"damage blast push",
		"damage bonus HIDDEN",
		"damage bonus bullet vs sentry target",
		"damage bonus vs burning",
		"damage bonus while disguised",
		"damage bonus",
		"damage causes airblast",
		"damage force increase hidden",
		"damage force increase text",
		"damage force increase",
		"damage force reduction",
		"damage penalty on bodyshot",
		"damage penalty",
		"deactive date",
		"decapitate type",
		"decoded by itemdefindex",
		"deflection size multiplier",
		"deploy time decreased",
		"deploy time increased",
		"disable fancy class select anim",
		"disable weapon hiding for animations",
		"disable weapon switch",
		"disguise damage reduction",
		"disguise no burn",
		"disguise on backstab",
		"disguise speed penalty",
		"display duck leaderboard",
		"dmg bonus vs buildings",
		"dmg bonus while half dead",
		"dmg falloff decreased",
		"dmg falloff increased",
		"dmg from melee increased",
		"dmg from ranged reduced",
		"dmg penalty vs buildings",
		"dmg penalty vs nonburning",
		"dmg penalty vs nonstunned",
		"dmg penalty vs players",
		"dmg penalty while half alive",
		"dmg pierces resists absorbs",
		"dmg taken from blast increased",
		"dmg taken from blast reduced",
		"dmg taken from bullets increased",
		"dmg taken from bullets reduced",
		"dmg taken from crit increased",
		"dmg taken from crit reduced",
		"dmg taken from fire increased",
		"dmg taken from fire reduced on active",
		"dmg taken from fire reduced",
		"dmg taken increased",
		"dragons fury negative properties",
		"dragons fury neutral properties",
		"dragons fury positive properties",
		"drop health pack on kill",
		"duck badge level",
		"duck rating",
		"duckstreaks active",
		"duel loser account id",
		"effect bar recharge rate increased",
		"electrical airblast DISPLAY ONLY",
		"elevate quality",
		"elevate to unusual if applicable",
		"enables aoe heal",
		"end drop date",
		"energy buff dmg taken multiplier",
		"energy weapon charged shot",
		"energy weapon no ammo",
		"energy weapon no deflect",
		"energy weapon no drain",
		"energy weapon no hurt building",
		"energy weapon penetration",
		"engineer building teleporting pickup",
		"engineer rage on dmg",
		"engineer sentry build rate multiplier",
		"engineer teleporter build rate multiplier",
		"engy building health bonus",
		"engy dispenser radius increased",
		"engy disposable sentries",
		"engy sentry damage bonus",
		"engy sentry fire rate increased",
		"engy sentry radius increased",
		"event date",
		"expiration date",
		"explode_on_ignite",
		"explosive sniper shot",
		"extinguish earns revenge crits",
		"extinguish reduces cooldown",
		"extinguish restores health",
		"falling_impact_radius_pushback",
		"falling_impact_radius_stun",
		"faster reload rate",
		"fire particle blue crit",
		"fire particle blue",
		"fire particle red crit",
		"fire particle red",
		"fire rate bonus HIDDEN",
		"fire rate bonus with reduced health",
		"fire rate bonus",
		"fire rate penalty HIDDEN",
		"fire rate penalty",
		"fire retardant",
		"fish damage override",
		"fists have radial buff",
		"fixed_shot_pattern",
		"flame ammopersec decreased",
		"flame ammopersec increased",
		"flame life bonus",
		"flame life penalty",
		"flame size bonus",
		"flame size penalty",
		"flame_drag",
		"flame_gravity",
		"flame_ignore_player_velocity",
		"flame_lifetime",
		"flame_random_life_time_offset",
		"flame_reflect_on_collision",
		"flame_reflection_add_life_time",
		"flame_speed",
		"flame_spread_degree",
		"flame_up_speed",
		"force center wrap",
		"force level display",
		"force weapon switch",
		"freaky fair ammo potion",
		"freaky fair buster potion",
		"freaky fair extra attrib1",
		"freaky fair extra attrib2",
		"freaky fair ghost potion",
		"freaky fair giant potion",
		"freaky fair healing potion",
		"freaky fair kritz potion",
		"freaky fair relentless potion",
		"freaky fair rtd potion",
		"freaky fair uber potion",
		"freeze backstab victim",
		"full charge turn control",
		"fuse bonus",
		"generate rage on damage",
		"generate rage on heal",
		"gesture speed increase",
		"gifter account id",
		"grenade damage reduction on world contact",
		"grenade detonation damage penalty",
		"grenade launcher mortar mode",
		"grenade no bounce",
		"grenade no spin",
		"grenade not explode on impact",
		"grenades1_resupply_denied",
		"grenades2_resupply_denied",
		"grenades3_resupply_denied",
		"gunslinger punch combo",
		"halloween fire rate bonus",
		"halloween increased jump height",
		"halloween item",
		"halloween reload time decreased",
		"halloweenvision filter DISPLAY ONLY",
		"halloweenvision opt in DISPLAY ONLY",
		"hand scale",
		"has pipboy build interface",
		"has team color paintkit",
		"hat only unusual effect",
		"head scale",
		"headshot damage increase",
		"heal on hit for rapidfire",
		"heal on hit for slowfire",
		"heal on kill",
		"heal rate bonus",
		"heal rate penalty",
		"healing mastery",
		"healing received bonus",
		"healing received penalty",
		"health drain medic",
		"health drain",
		"health from healers increased",
		"health from healers reduced",
		"health from packs decreased",
		"health from packs increased",
		"health on radius damage",
		"health regen",
		"hidden maxhealth non buffed",
		"hidden primary max ammo bonus",
		"hidden secondary max ammo penalty",
		"hide crate series number",
		"hide enemy health",
		"hide_strange_prefix",
		"hit self on miss",
		"holster_anim_time",
		"honorbound",
		"hype decays over time",
		"hype on damage",
		"hype resets on jump",
		"increase buff duration HIDDEN",
		"increase buff duration",
		"increase player capture value",
		"increased air control",
		"increased jump height from weapon",
		"increased jump height",
		"inspect_viewmodel_offset",
		"is australium item",
		"is commodity",
		"is giger counter",
		"is marketable",
		"is throwable chargeable",
		"is throwable primable",
		"is winter case",
		"is_a_sword",
		"is_festivized",
		"is_operation_pass",
		"is_passive_weapon",
		"item drop wave",
		"item in slot 1",
		"item in slot 2",
		"item in slot 3",
		"item in slot 4",
		"item in slot 5",
		"item in slot 6",
		"item in slot 7",
		"item in slot 8",
		"item name text override",
		"item slot criteria 1",
		"item slot criteria 2",
		"item slot criteria 3",
		"item slot criteria 4",
		"item slot criteria 5",
		"item slot criteria 6",
		"item slot criteria 7",
		"item slot criteria 8",
		"item style override",
		"item_meter_charge_rate",
		"item_meter_charge_type",
		"item_meter_charge_type_3_DISPLAY_ONLY",
		"item_meter_damage_for_full_charge",
		"item_meter_resupply_denied",
		"item_meter_starts_empty_DISPLAY_ONLY",
		"items traded in for",
		"jarate backstabber",
		"jarate description",
		"jarate duration",
		"kill eater 2",
		"kill eater 3",
		"kill eater kill type",
		"kill eater score type 2",
		"kill eater score type 3",
		"kill eater score type",
		"kill eater user 1",
		"kill eater user 2",
		"kill eater user 3",
		"kill eater user score type 1",
		"kill eater user score type 2",
		"kill eater user score type 3",
		"kill eater",
		"kill forces attacker to laugh",
		"kill refills meter",
		"killstreak effect",
		"killstreak idleeffect",
		"killstreak tier",
		"limited quantity item",
		"loot list name",
		"loot rarity",
		"lose demo charge on damage when charging",
		"lose hype on take damage",
		"lose revenge crits on death DISPLAY ONLY",
		"lunchbox adds maxhealth bonus",
		"lunchbox adds minicrits",
		"lunchbox healing decreased",
		"mad milk syringes",
		"major increased jump height",
		"major move speed bonus",
		"makers mark id",
		"mark for death on building pickup",
		"mark for death",
		"max health additive bonus",
		"max health additive penalty",
		"max pipebombs decreased",
		"max pipebombs increased",
		"max_flame_reflection_count",
		"maxammo grenades1 increased",
		"maxammo metal increased",
		"maxammo metal reduced",
		"maxammo primary increased",
		"maxammo primary reduced",
		"maxammo secondary increased",
		"maxammo secondary reduced",
		"medic regen bonus",
		"medic regen penalty",
		"medigun blast resist deployed",
		"medigun blast resist passive",
		"medigun bullet resist deployed",
		"medigun bullet resist passive",
		"medigun charge is crit boost",
		"medigun charge is megaheal",
		"medigun charge is resists",
		"medigun crit blast percent bar deplete",
		"medigun crit bullet percent bar deplete",
		"medigun crit fire percent bar deplete",
		"medigun fire resist deployed",
		"medigun fire resist passive",
		"melee attack rate bonus",
		"melee bounds multiplier",
		"melee range multiplier",
		"melts in fire",
		"merasmus hat level display ONLY",
		"metal regen",
		"metal_pickup_decreased",
		"meter_label",
		"min_viewmodel_offset",
		"mini rockets",
		"minicrit vs burning player",
		"minicrit_boost_charge_rate",
		"minicrit_boost_when_charged",
		"minicritboost on kill",
		"minicrits become crits",
		"minigun no spin sounds",
		"minigun spinup time decreased",
		"minigun spinup time increased",
		"mod ammo per shot missed DISPLAY ONLY",
		"mod ammo per shot",
		"mod bat launches balls",
		"mod bat launches ornaments",
		"mod crit while airborne",
		"mod demo buff type",
		"mod flamethrower back crit",
		"mod flamethrower push",
		"mod flaregun fires pellets with knockback",
		"mod max primary clip override",
		"mod medic healed damage bonus",
		"mod medic healed deploy time penalty",
		"mod medic killed marked for death",
		"mod medic killed minicrit boost",
		"mod medic killed revenge",
		"mod mini-crit airborne deploy",
		"mod mini-crit airborne",
		"mod no reload DISPLAY ONLY",
		"mod rage damage boost",
		"mod rage on hit bonus",
		"mod rage on hit penalty",
		"mod see enemy health",
		"mod sentry killed revenge",
		"mod shovel damage boost",
		"mod shovel speed boost",
		"mod soldier buff type",
		"mod stun waist high airborne",
		"mod teleporter cost",
		"mod use metal ammo type",
		"mod weapon blocks healing",
		"mod wrench builds minisentry",
		"mod_air_control_blast_jump",
		"mod_cloak_no_regen_from_items",
		"mod_disguise_consumes_cloak",
		"mod_mark_attacker_for_death",
		"mod_maxhealth_drain_rate",
		"move speed bonus resource level",
		"move speed bonus shield required",
		"move speed bonus",
		"move speed penalty",
		"mult airblast refire time",
		"mult charge turn control",
		"mult cloak meter consume rate",
		"mult cloak meter regen rate",
		"mult cloak rate",
		"mult decloak rate",
		"mult sniper charge after bodyshot",
		"mult sniper charge after headshot",
		"mult sniper charge after miss",
		"mult sniper charge penalty DISPLAY ONLY",
		"mult_dmgtaken_active",
		"mult_end_flame_size",
		"mult_health_fromhealers_penalty_active",
		"mult_item_meter_charge_rate",
		"mult_patient_overheal_penalty_active",
		"mult_player_movespeed_active",
		"mult_spread_scale_first_shot",
		"mult_spread_scales_consecutive",
		"multiple sentries",
		"mvm completed challenges bitmask",
		"never craftable",
		"no charge impact range",
		"no crit boost",
		"no crit vs nonburning",
		"no double jump",
		"no metal from dispensers while active",
		"no primary ammo from dispensers while active",
		"no self blast dmg",
		"no_attack",
		"no_duck",
		"no_jump",
		"noise maker",
		"non economy",
		"obsolete ammo penalty",
		"overheal bonus",
		"overheal decay bonus",
		"overheal decay disabled",
		"overheal decay penalty",
		"overheal expert",
		"overheal fill rate reduced",
		"overheal penalty",
		"override footstep sound set",
		"override item level desc string",
		"override projectile type",
		"paint decal enum",
		"paintkit_proto_def_index",
		"panic_attack",
		"panic_attack_negative",
		"parachute attribute",
		"particle effect use head origin",
		"particle effect vertical offset",
		"patient overheal penalty",
		"player skin override",
		"powerup charges",
		"powerup duration",
		"powerup max charges",
		"preserve ubercharge",
		"projectile entity name",
		"projectile particle name",
		"projectile penetration heavy",
		"projectile penetration",
		"projectile spread angle penalty",
		"provide on active",
		"purchased",
		"pyro year number",
		"pyrovision only DISPLAY ONLY",
		"pyrovision opt in DISPLAY ONLY",
		"quality text override",
		"quest earned bonus points",
		"quest earned standard points",
		"quest loaner id hi",
		"quest loaner id low",
		"ragdolls become ash",
		"ragdolls plasma effect",
		"rage giving scale",
		"rage on assists",
		"rage on kill",
		"random drop line item 0",
		"random drop line item 1",
		"random drop line item 2",
		"random drop line item 3",
		"random drop line item footer desc",
		"random drop line item unusual chance",
		"random drop line item unusual list",
		"recall",
		"recipe component defined item 1",
		"recipe component defined item 10",
		"recipe component defined item 2",
		"recipe component defined item 3",
		"recipe component defined item 4",
		"recipe component defined item 5",
		"recipe component defined item 6",
		"recipe component defined item 7",
		"recipe component defined item 8",
		"recipe component defined item 9",
		"recipe no partial complete",
		"redirected_flame_size_mult",
		"reduced_healing_from_medics",
		"referenced item def UPDATED",
		"referenced item id high",
		"referenced item id low",
		"refill_ammo",
		"reflected_flame_dmg_reduction",
		"reload time decreased while healed",
		"reload time increased hidden",
		"repair health to metal ratio DISPLAY ONLY",
		"restore health on kill",
		"reveal cloaked victim on hit",
		"reveal disguised victim on hit",
		"revive",
		"revolver use hit locations",
		"ring of fire while aiming",
		"rj air bombardment",
		"robo sapper",
		"rocket jump damage reduction HIDDEN",
		"rocket jump damage reduction",
		"rocket launch impulse",
		"rocket specialist",
		"rocketjump attackrate bonus",
		"sanguisuge",
		"sapper damage bonus",
		"sapper damage leaches health",
		"sapper damage penalty hidden",
		"sapper damage penalty",
		"sapper degenerates buildings",
		"sapper health bonus",
		"sapper health penalty",
		"sapper kills collect crits",
		"sapper voice pak idle wait",
		"sapper voice pak",
		"saxxy award category",
		"scattergun has knockback",
		"scattergun knockback mult",
		"scattergun no reload single",
		"self dmg push force decreased",
		"self dmg push force increased",
		"self mark for death",
		"selfdmg on hit for rapidfire",
		"selfdmg on hit for slowfire",
		"selfmade description",
		"series number",
		"set cloak is feign death",
		"set cloak is movement based",
		"set icicle knife mode",
		"set item tint RGB 2",
		"set item tint RGB",
		"set supply crate series",
		"set throwable type",
		"set_item_texture_wear",
		"share consumable with patient",
		"shot penetrate all players",
		"show paint description",
		"shuffle crate item def max",
		"shuffle crate item def min",
		"silent killer",
		"single wep deploy time decreased",
		"single wep deploy time increased",
		"single wep holster time increased",
		"slow enemy on hit major",
		"slow enemy on hit",
		"sniper aiming movespeed decreased",
		"sniper charge per sec",
		"sniper crit no scope",
		"sniper fires tracer HIDDEN",
		"sniper fires tracer",
		"sniper full charge damage bonus",
		"sniper independent zoom DISPLAY ONLY",
		"sniper no charge",
		"sniper no headshot without full charge",
		"sniper no headshots",
		"sniper only fire zoomed",
		"sniper penetrate players when charged",
		"sniper rage DISPLAY ONLY",
		"sniper zoom penalty",
		"soldier model index",
		"spawn with physics toy",
		"special taunt",
		"speed boost when active",
		"speed buff ally",
		"speed_boost_on_hit",
		"speed_boost_on_hit_enemy",
		"speed_boost_on_kill",
		"spellbook page attr id",
		"spread penalty",
		"spunup_damage_resistance",
		"spunup_push_force_immunity",
		"squad surplus claimer id DEPRECATED",
		"start drop date",
		"stickies detonate stickies",
		"sticky air burst mode",
		"sticky arm time bonus",
		"sticky arm time penalty",
		"sticky detonate mode",
		"stickybomb charge rate",
		"stickybomb fizzle time",
		"stickybomb_charge_damage_increase",
		"store sort override DEPRECATED",
		"strange part new counter ID",
		"strange restriction type 1",
		"strange restriction type 2",
		"strange restriction type 3",
		"strange restriction user type 1",
		"strange restriction user type 2",
		"strange restriction user type 3",
		"strange restriction user value 1",
		"strange restriction user value 2",
		"strange restriction user value 3",
		"strange restriction value 1",
		"strange restriction value 2",
		"strange restriction value 3",
		"strange score selector",
		"stun enemies wielding same weapon",
		"style changes on strange level",
		"subtract victim cloak on hit",
		"subtract victim medigun charge on hit",
		"switch from wep deploy time decreased",
		"tag__eotlearlysupport",
		"tag__summer2014",
		"taunt attach particle index",
		"taunt attack name",
		"taunt attack time",
		"taunt force move forward",
		"taunt force weapon slot",
		"taunt is highfive",
		"taunt is press and hold",
		"taunt mimic",
		"taunt move acceleration time",
		"taunt move speed",
		"taunt only unusual effect",
		"taunt success sound loop offset",
		"taunt success sound loop",
		"taunt success sound offset",
		"taunt success sound",
		"taunt turn acceleration time",
		"taunt turn speed",
		"taunt_attr_player_invis_percent",
		"texture_wear_default",
		"thermal_thruster",
		"thermal_thruster_air_launch",
		"throwable damage",
		"throwable detonation time",
		"throwable fire speed",
		"throwable healing",
		"throwable particle trail only",
		"throwable recharge time",
		"tickle enemies wielding same weapon",
		"tmp dmgbuff on hit",
		"tool escrow until date",
		"tool needs giftwrap",
		"tool target item",
		"tool_target_item_icon_offset",
		"torso scale",
		"tradable after date",
		"turn to gold",
		"uber duration bonus",
		"ubercharge overheal rate penalty",
		"ubercharge rate bonus for healer",
		"ubercharge rate bonus",
		"ubercharge rate penalty",
		"ubercharge",
		"ubercharge_preserved_on_spawn_max",
		"unique craft index",
		"unlimited quantity hidden",
		"unlimited quantity",
		"unusualifier_attribute_template_name",
		"upgrade rate decrease",
		"use large smoke explosion",
		"use_model_cache_icon",
		"uses ammo while aiming",
		"vision opt in flags",
		"voice pitch scale",
		"weapon burn dmg increased",
		"weapon burn dmg reduced",
		"weapon burn time increased",
		"weapon burn time reduced",
		"weapon spread bonus",
		"weapon_allow_inspect",
		"weapon_stattrak_module_scale",
		"weapon_uses_stattrak_module",
		"wide item level",
		"zombiezombiezombiezombie",
		"zoom speed mod disabled"
	]),
	// MODEL
	new Set([

	]),
	// SOUND
	new Set([

	]),
	// CONVAR
	new Set([
		"bot_crouch",
		"bot_forceattack",
		"bot_foreceattack2",
		"bot_forceattack_down",
		"bot_forcefireweapon",
		"bot_jump",
		"bot_mimic",
		"bot_mimic_inverse",
		"bot_mimic_yaw_offset",
		"bot_selectweaponslot",
		"bot_saveme",
		"catapult_physics_drag_boost",
		"collision_shake_amp",
		"collision_shake_freq",
		"collision_shake_time",
		"func_break_max_pieces",
		"func_break_reduction_factor",
		"func_breakdmg_bullet",
		"func_breakdmg_club",
		"func_breakdmg_explosive",
		"mp_allowNPCs",
		"mp_allowspectators",
		"mp_autocrosshair",
		"mp_autoteambalance",
		"mp_blockstyle",
		"mp_bonusroundtime",
		"mp_chattime",
		"mp_disable_respawn_times",
		"mp_enableroundwaittime",
		"mp_fadetoblack",
		"mp_falldamage",
		"mp_flashlight",
		"mp_footsteps",
		"mp_forceautoteam",
		"mp_forcecamera",
		"mp_forcerespawn",
		"mp_friendlyfire",
		"mp_highlander",
		"mp_humans_must_join_team",
		"mp_match_end_at_timelimit",
		"mp_maxrounds",
		"mp_respawnwavetime",
		"mp_restartgame",
		"mp_restartgame_immediate",
		"mp_scrambleteams_auto",
		"mp_scrambleteams_auto_windifference",
		"mp_show_voice_icons",
		"mp_spectators_restricted",
		"mp_stalemate_enable",
		"mp_stalemate_meleeonly",
		"mp_stalemate_timelimit",
		"mp_teamplay",
		"mp_teams_unbalance_limit",
		"mp_time_between_capscoring",
		"mp_timelimit",
		"mp_tournament",
		"mp_tournament_stopwatch",
		"mp_tournament_whitelist",
		"mp_tournament_redteamname",
		"mp_tournament_blueteamname",
		"mp_waitingforplayers_cancel",
		"mp_waitingforplayers_restart",
		"mp_waitingforplayers_time",
		"mp_weaponstay",
		"mp_windifference",
		"mp_windifference_min",
		"mp_winlimit",
		"obj_damage_factor",
		"obj_sapper_amount",
		"old_radiusdamage",
		"phys_impactforcescale",
		"phys_pushscale",
		"phys_stressbodyweights",
		"phys_timescale",
		"spec_freeze_time",
		"spec_freeze_traveltime",
		"smoothstairs",
		"spec_freeze_time",
		"spec_freeze_traveltime",
		"sv_accelerate",
		"sv_airaccelerate",
		"sv_alltalk",
		"sv_bounce",
		"sv_client_predict",
		"sv_footsteps",
		"sv_Friction",
		"sv_gravity",
		"sv_maxspeed",
		"sv_maxvelocity",
		"sv_noclipaccelerate",
		"sv_proj_stunball_damage",
		"sv_rollangle",
		"sv_rollspeed",
		"sv_specaccelerate",
		"sv_specnoclip",
		"sv_specspeed",
		"sv_stepsize",
		"sv_stopspeed",
		"sv_turbophysics",
		"sv_wateraccelerate",
		"sv_waterdist",
		"sv_waterfriction",
		"tf_airblast_cray",
		"tf_airblast_cray_debug",
		"tf_airblast_cray_ground_minz",
		"tf_airblast_cray_ground_reflect",
		"tf_airblast_cray_lose_footing_duration",
		"tf_airblast_cray_pitch_control",
		"tf_airblast_cray_power",
		"tf_airblast_cray_power_relative",
		"tf_airblast_cray_reflect_coeff",
		"tf_airblast_cray_reflect_cost_coeff",
		"tf_airblast_cray_reflect_relative",
		"tf_airblast_cray_stun_amount",
		"tf_airblast_cray_stun_duration",
		"tf_allow_player_use",
		"tf_allow_sliding_taunt",
		"tf_allow_taunt_switch",
		"tf_always_loser",
		"tf_archer_proxy_fire_rate",
		"tf_arena_change_limit",
		"tf_arena_first_blood",
		"tf_arena_force_class",
		"tf_arena_max_streak",
		"tf_arena_override_cap_enable_time",
		"tf_arena_override_team_size",
		"tf_arena_preround_time",
		"tf_arena_round_time",
		"tf_arena_use_queue",
		"tf_avoidteammates",
		"tf_avoidteammates_pushaway",
		"tf_base_boss_max_turn_rate",
		"tf_base_boss_speed",
		"tf_birthday",
		"tf_birthday_ball_chance",
		"tf_bison_tick_time",
		"tf_boost_drain_time",
		"tf_bot_always_full_reload",
		"tf_bot_ammo_search_range",
		"tf_bot_arrow_elevation_rate",
		"tf_bot_auto_vacate",
		"tf_bot_ballistic_elevation_rate",
		"tf_bot_capture_seek_and_destroy_max_duration",
		"tf_bot_capture_seek_and_destroy_min_duration",
		"tf_bot_cart_push_radius",
		"tf_bot_choose_target_interval",
		"tf_bot_count",
		"tf_bot_defend_owned_point_percent",
		"tf_bot_defense_debug",
		"tf_bot_defense_must_defend_time",
		"tf_bot_difficulty",
		"tf_bot_engineer_building_health_multiplier",
		"tf_bot_engineer_exit_near_sentry_range",
		"tf_bot_engineer_max_sentry_travel_distance_to_point",
		"tf_bot_engineer_mvm_hint_min_distance_from_bomb",
		"tf_bot_engineer_mvm_sentry_hint_bomb_backward_range",
		"tf_bot_engineer_mvm_sentry_hint_bomb_forward_range",
		"tf_bot_engineer_retaliate_range",
		"tf_bot_escort_range",
		"tf_bot_fetch_lost_flag_time",
		"tf_bot_fire_weapon_allowed",
		"tf_bot_fire_weapon_min_time",
		"tf_bot_flag_escort_give_up_range",
		"tf_bot_flag_escort_max_count",
		"tf_bot_flag_escort_range",
		"tf_bot_flag_kill_on_touch",
		"tf_bot_force_class",
		"tf_bot_force_jump",
		"tf_bot_formation_debug",
		"tf_bot_health_critical_ratio",
		"tf_bot_health_ok_ratio",
		"tf_bot_health_search_far_range",
		"tf_bot_health_search_near_range",
		"tf_bot_hitscan_range_limit",
		"tf_bot_join_after_player",
		"tf_bot_keep_class_after_death",
		"tf_bot_max_grenade_launch_at_sentry_range",
		"tf_bot_max_point_defend_range",
		"tf_bot_max_setup_gate_defend_range",
		"tf_bot_max_sticky_launch_at_sentry_range",
		"tf_bot_max_teleport_entrance_travel",
		"tf_bot_max_teleport_exit_travel_to_point",
		"tf_bot_medic_cover_test_resolution",
		"tf_bot_medic_debug",
		"tf_bot_medic_max_call_response_range",
		"tf_bot_medic_max_heal_range",
		"tf_bot_medic_start_follow_range",
		"tf_bot_medic_stop_follow_range",
		"tf_bot_melee_attack_abandon_range",
		"tf_bot_melee_only",
		"tf_bot_min_setup_gate_defend_range",
		"tf_bot_min_setup_gate_sniper_defend_range",
		"tf_bot_min_teleport_travel",
		"tf_bot_near_point_travel_distance",
		"tf_bot_notice_backstab_chance",
		"tf_bot_notice_backstab_max_range",
		"tf_bot_notice_backstab_min_range",
		"tf_bot_notice_gunfire_range",
		"tf_bot_notice_quiet_gunfire_range",
		"tf_bot_npc_archer_arrow_damage",
		"tf_bot_npc_archer_health",
		"tf_bot_npc_archer_shoot_interval",
		"tf_bot_npc_archer_speed",
		"tf_bot_offense_must_push_time",
		"tf_bot_offline_practice",
		"tf_bot_path_lookahead_range",
		"tf_bot_payload_guard_range",
		"tf_bot_prefix_name_with_difficulty",
		"tf_bot_pyro_always_reflect",
		"tf_bot_pyro_deflect_tolerance",
		"tf_bot_pyro_shove_away_range",
		"tf_bot_quota",
		"tf_bot_quota_mode",
		"tf_bot_reevaluate_class_in_spawnroom",
		"tf_bot_retreat_to_cover_range",
		"tf_bot_sniper_aim_error",
		"tf_bot_sniper_aim_steady_rate",
		"tf_bot_sniper_allow_opportunistic",
		"tf_bot_sniper_choose_target_interval",
		"tf_bot_sniper_flee_range",
		"tf_bot_sniper_goal_entity_move_tolerance",
		"tf_bot_sniper_linger_time",
		"tf_bot_sniper_melee_range",
		"tf_bot_sniper_patience_duration",
		"tf_bot_sniper_personal_space_range",
		"tf_bot_sniper_spot_epsilon",
		"tf_bot_sniper_spot_max_count",
		"tf_bot_sniper_spot_min_range",
		"tf_bot_sniper_spot_point_tolerance",
		"tf_bot_sniper_spot_search_count",
		"tf_bot_sniper_target_linger_duration",
		"tf_bot_spawn_use_preset_roster",
		"tf_bot_spy_change_target_range_threshold",
		"tf_bot_spy_knife_range",
		"tf_bot_squad_escort_range",
		"tf_bot_sticky_base_range",
		"tf_bot_sticky_charge_rate",
		"tf_bot_stickybomb_density",
		"tf_bot_suicide_bomb_friendly_fire",
		"tf_bot_suicide_bomb_range",
		"tf_bot_suspect_spy_forget_cooldown",
		"tf_bot_suspect_spy_touch_interval",
		"tf_bot_taunt_victim_chance",
		"tf_bot_teleport_build_surface_normal_limit",
		"tf_bot_wait_in_cover_max_time",
		"tf_bot_wait_in_cover_min_time",
		"tf_caplinear",
		"tf_cheapobjects",
		"tf_clamp_airducks",
		"tf_clamp_back_speed",
		"tf_clamp_back_speed_min",
		"tf_classlimit",
		"tf_construction_build_rate_multiplier",
		"tf_ctf_bonus_time",
		"tf_damage_disablespread",
		"tf_damage_events_track_for",
		"tf_damage_multiplier_blue",
		"tf_damage_multiplier_red",
		"tf_damage_range",
		"tf_damageforcescale_other",
		"tf_damageforcescale_pyro_jump",
		"tf_damageforcescale_self_soldier_badrj",
		"tf_damageforcescale_self_soldier_rj",
		"tf_damagescale_self_soldier",
		"tf_demoman_charge_drain_time",
		"tf_demoman_charge_frametime_scaling",
		"tf_demoman_charge_regen_rate",
		"tf_deploying_bomb_delay_time",
		"tf_deploying_bomb_time",
		"tf_double_donk_window",
		"tf_dropped_weapon_lifetime",
		"tf_escort_recede_time",
		"tf_escort_recede_time_overtime",
		"tf_escort_score_rate",
		"tf_eyeball_boss_acceleration",
		"tf_eyeball_boss_attack_range",
		"tf_eyeball_boss_health_at_level_2",
		"tf_eyeball_boss_health_base",
		"tf_eyeball_boss_health_per_level",
		"tf_eyeball_boss_health_per_player",
		"tf_eyeball_boss_horiz_damping",
		"tf_eyeball_boss_hover_height",
		"tf_eyeball_boss_lifetime",
		"tf_eyeball_boss_lifetime_spell",
		"tf_eyeball_boss_speed",
		"tf_eyeball_boss_vert_damping",
		"tf_fall_damage_disablespread",
		"tf_fastbuild",
		"tf_feign_death_activate_damage_scale",
		"tf_feign_death_damage_scale",
		"tf_feign_death_duration",
		"tf_feign_death_speed_duration",
		"tf_fireball_airblast_recharge_penalty",
		"tf_fireball_burn_duration",
		"tf_fireball_burning_bonus",
		"tf_fireball_damage",
		"tf_fireball_distance",
		"tf_fireball_draw_debug_radius",
		"tf_fireball_hit_recharge_boost",
		"tf_fireball_max_lifetime",
		"tf_fireball_radius",
		"tf_fireball_speed",
		"tf_flag_caps_per_round",
		"tf_flag_return_on_touch",
		"tf_flag_return_time_credit_factor",
		"tf_flame_dmg_mode_dist",
		"tf_flamethrower_boxsize",
		"tf_flamethrower_burst_zvelocity",
		"tf_flamethrower_burstammo",
		"tf_flamethrower_drag",
		"tf_flamethrower_flametime",
		"tf_flamethrower_float",
		"tf_flamethrower_maxdamagedist",
		"tf_flamethrower_new_flame_offset",
		"tf_flamethrower_shortrangedamagemultiplier",
		"tf_flamethrower_vecrand",
		"tf_flamethrower_velocity",
		"tf_flamethrower_velocityfadeend",
		"tf_flamethrower_velocityfadestart",
		"tf_force_holidays_off",
		"tf_forced_holiday",
		"tf_ghost_up_speed",
		"tf_ghost_xy_speed",
		"tf_grapplinghook_acceleration",
		"tf_grapplinghook_dampening",
		"tf_grapplinghook_enable",
		"tf_grapplinghook_fire_delay",
		"tf_grapplinghook_follow_distance",
		"tf_grapplinghook_jump_up_speed",
		"tf_grapplinghook_los_force_detach_time",
		"tf_grapplinghook_max_distance",
		"tf_grapplinghook_medic_latch_speed_scale",
		"tf_grapplinghook_move_speed",
		"tf_grapplinghook_prevent_fall_damage",
		"tf_grapplinghook_projectile_speed",
		"tf_grapplinghook_use_acceleration",
		"tf_gravetalk",
		"tf_grenade_force_sleeptime",
		"tf_grenade_forcefrom_blast",
		"tf_grenade_forcefrom_buckshot",
		"tf_grenade_forcefrom_bullet",
		"tf_grenadelauncher_chargescale",
		"tf_grenadelauncher_livetime",
		"tf_grenadelauncher_min_contact_speed",
		"tf_halloween_allow_ghost_hit_by_kart_delay",
		"tf_halloween_allow_truce_during_boss_event",
		"tf_halloween_boss_spawn_interval",
		"tf_halloween_boss_spawn_interval_variation",
		"tf_halloween_bot_attack_range",
		"tf_halloween_bot_chase_duration",
		"tf_halloween_bot_chase_range",
		"tf_halloween_bot_health_base",
		"tf_halloween_bot_health_per_player",
		"tf_halloween_bot_min_player_count",
		"tf_halloween_bot_quit_range",
		"tf_halloween_bot_speed",
		"tf_halloween_bot_speed_recovery_rate",
		"tf_halloween_bot_terrify_radius",
		"tf_halloween_eyeball_boss_spawn_interval",
		"tf_halloween_eyeball_boss_spawn_interval_variation",
		"tf_halloween_giant_health_scale",
		"tf_halloween_gift_lifetime",
		"tf_halloween_hhh_attack_kart_radius",
		"tf_halloween_kart_air_turn_scale",
		"tf_halloween_kart_aircontrol",
		"tf_halloween_kart_bomb_head_damage_scale",
		"tf_halloween_kart_bomb_head_impulse_scale",
		"tf_halloween_kart_bombhead_scale",
		"tf_halloween_kart_boost_duration",
		"tf_halloween_kart_boost_impact_force",
		"tf_halloween_kart_boost_recharge",
		"tf_halloween_kart_brake_accel",
		"tf_halloween_kart_brake_speed",
		"tf_halloween_kart_coast_accel",
		"tf_halloween_kart_damage_to_force",
		"tf_halloween_kart_dash_accel",
		"tf_halloween_kart_dash_speed",
		"tf_halloween_kart_fast_turn_accel_speed",
		"tf_halloween_kart_fast_turn_speed",
		"tf_halloween_kart_idle_speed",
		"tf_halloween_kart_impact_air_scale",
		"tf_halloween_kart_impact_bounds_scale",
		"tf_halloween_kart_impact_damage",
		"tf_halloween_kart_impact_feedback",
		"tf_halloween_kart_impact_force",
		"tf_halloween_kart_impact_lookahead",
		"tf_halloween_kart_impact_rate",
		"tf_halloween_kart_normal_accel",
		"tf_halloween_kart_normal_speed",
		"tf_halloween_kart_punting_ghost_force_scale",
		"tf_halloween_kart_return_turn_accell",
		"tf_halloween_kart_reverse_speed",
		"tf_halloween_kart_reverse_turn_speed",
		"tf_halloween_kart_rocketspell_force",
		"tf_halloween_kart_rocketspell_lifetime",
		"tf_halloween_kart_rocketspell_speed",
		"tf_halloween_kart_slow_turn_accel_speed",
		"tf_halloween_kart_slow_turn_speed",
		"tf_halloween_kart_slowmoving_accel",
		"tf_halloween_kart_slowmoving_threshold",
		"tf_halloween_kart_stationary_turn_speed",
		"tf_halloween_kart_stun_amount",
		"tf_halloween_kart_stun_duration_scale",
		"tf_halloween_kart_stun_enabled",
		"tf_halloween_kart_turning_curve_peak_position",
		"tf_halloween_unlimited_spells",
		"tf_halloween_zombie_damage",
		"tf_halloween_zombie_mob_enabled",
		"tf_halloween_zombie_mob_spawn_count",
		"tf_halloween_zombie_mob_spawn_interval",
		"tf_helpme_range",
		"tf_invuln_time",
		"tf_item_based_forced_holiday",
		"tf_max_active_zombie",
		"tf_max_charge_speed",
		"tf_max_health_boost",
		"tf_max_voice_speak_delay",
		"tf_maxhealth_drain_deploy_cost",
		"tf_maxhealth_drain_hp_min",
		"tf_medieval",
		"tf_medieval_autorp",
		"tf_meleeattackforcescale",
		"tf_merasmus_attack_range",
		"tf_merasmus_bomb_head_duration",
		"tf_merasmus_bomb_head_per_team",
		"tf_merasmus_chase_duration",
		"tf_merasmus_chase_range",
		"tf_merasmus_disguise_debug",
		"tf_merasmus_health_base",
		"tf_merasmus_health_per_player",
		"tf_merasmus_health_regen_rate",
		"tf_merasmus_lifetime",
		"tf_merasmus_min_player_count",
		"tf_merasmus_min_props_to_reveal",
		"tf_merasmus_prop_health",
		"tf_merasmus_should_disguise_threshold",
		"tf_merasmus_spawn_interval",
		"tf_merasmus_spawn_interval_variation",
		"tf_merasmus_speed",
		"tf_merasmus_speed_recovery_rate",
		"tf_merasmus_stun_duration",
		"tf_minigame_suddendeath_time",
		"tf_movement_aircurrent_aircontrol_mult",
		"tf_movement_aircurrent_friction_mult",
		"tf_movement_lost_footing_friction",
		"tf_movement_lost_footing_restick",
		"tf_mvm_bot_allow_flag_carrier_to_fight",
		"tf_mvm_bot_flag_carrier_health_regen",
		"tf_mvm_bot_flag_carrier_interval_to_1st_upgrade",
		"tf_mvm_bot_flag_carrier_interval_to_2nd_upgrade",
		"tf_mvm_bot_flag_carrier_interval_to_3rd_upgrade",
		"tf_mvm_bot_flag_carrier_movement_penalty",
		"tf_mvm_bot_sniper_target_by_dps",
		"tf_mvm_buybacks_method",
		"tf_mvm_buybacks_per_wave",
		"tf_mvm_currency_bonus_ratio_max",
		"tf_mvm_currency_bonus_ratio_min",
		"tf_mvm_death_penalty",
		"tf_mvm_default_sentry_buster_damage_dealt_threshold",
		"tf_mvm_default_sentry_buster_kill_threshold",
		"tf_mvm_disconnect_on_victory",
		"tf_mvm_endless_bomb_reset",
		"tf_mvm_endless_bot_cash",
		"tf_mvm_endless_force_on",
		"tf_mvm_endless_tank_boost",
		"tf_mvm_endless_wait_time",
		"tf_mvm_engineer_teleporter_uber_duration",
		"tf_mvm_max_connected_players",
		"tf_mvm_min_players_to_start",
		"tf_mvm_miniboss_scale",
		"tf_mvm_notice_sapped_squadmates_delay",
		"tf_mvm_respec_credit_goal",
		"tf_mvm_respec_enabled",
		"tf_mvm_respec_limit",
		"tf_mvm_victory_disconnect_time",
		"tf_mvm_victory_reset_time",
		"tf_nav_combat_build_rate",
		"tf_nav_combat_decay_rate",
		"tf_nav_in_combat_duration",
		"tf_nav_in_combat_range",
		"tf_obj_build_rotation_speed",
		"tf_obj_damage_tank_achievement_amount",
		"tf_obj_gib_maxspeed",
		"tf_obj_gib_velocity_max",
		"tf_obj_gib_velocity_min",
		"tf_obj_ground_clearance",
		"tf_obj_max_attach_dist",
		"tf_obj_upgrade_per_hit",
		"tf_overtime_nag",
		"tf_parachute_aircontrol",
		"tf_parachute_deploy_toggle_allowed",
		"tf_parachute_gravity",
		"tf_parachute_maxspeed_onfire_z",
		"tf_parachute_maxspeed_xy",
		"tf_parachute_maxspeed_z",
		"tf_passtime_ball_damping_scale",
		"tf_passtime_ball_drag_coefficient",
		"tf_passtime_ball_inertia_scale",
		"tf_passtime_ball_mass",
		"tf_passtime_ball_model",
		"tf_passtime_ball_reset_time",
		"tf_passtime_ball_rotdamping_scale",
		"tf_passtime_ball_seek_range",
		"tf_passtime_ball_seek_speed_factor",
		"tf_passtime_ball_sphere_collision",
		"tf_passtime_ball_sphere_radius",
		"tf_passtime_ball_takedamage",
		"tf_passtime_ball_takedamage_force",
		"tf_passtime_experiment_autopass",
		"tf_passtime_experiment_instapass",
		"tf_passtime_experiment_instapass_charge",
		"tf_passtime_experiment_telepass",
		"tf_passtime_flinch_boost",
		"tf_passtime_mode_homing_lock_sec",
		"tf_passtime_mode_homing_speed",
		"tf_passtime_overtime_idle_sec",
		"tf_passtime_pack_hp_per_sec",
		"tf_passtime_pack_range",
		"tf_passtime_pack_speed",
		"tf_passtime_player_reticles_enemies",
		"tf_passtime_player_reticles_friends",
		"tf_passtime_powerball_airtimebonus",
		"tf_passtime_powerball_decay_delay",
		"tf_passtime_powerball_decayamount",
		"tf_passtime_powerball_decaysec",
		"tf_passtime_powerball_decaysec_neutral",
		"tf_passtime_powerball_maxairtimebonus",
		"tf_passtime_powerball_passpoints",
		"tf_passtime_powerball_threshold",
		"tf_passtime_save_stats",
		"tf_passtime_score_crit_sec",
		"tf_passtime_scores_per_round",
		"tf_passtime_speedboost_on_get_ball_time",
		"tf_passtime_steal_on_melee",
		"tf_passtime_teammate_steal_time",
		"tf_passtime_throwarc_demoman",
		"tf_passtime_throwarc_engineer",
		"tf_passtime_throwarc_heavy",
		"tf_passtime_throwarc_medic",
		"tf_passtime_throwarc_pyro",
		"tf_passtime_throwarc_scout",
		"tf_passtime_throwarc_sniper",
		"tf_passtime_throwarc_soldier",
		"tf_passtime_throwarc_spy",
		"tf_passtime_throwspeed_demoman",
		"tf_passtime_throwspeed_engineer",
		"tf_passtime_throwspeed_heavy",
		"tf_passtime_throwspeed_medic",
		"tf_passtime_throwspeed_pyro",
		"tf_passtime_throwspeed_scout",
		"tf_passtime_throwspeed_sniper",
		"tf_passtime_throwspeed_soldier",
		"tf_passtime_throwspeed_spy",
		"tf_passtime_throwspeed_velocity_scale",
		"tf_pipebomb_deflect_reset_time",
		"tf_pipebomb_force_to_move",
		"tf_player_drop_bonus_ducks",
		"tf_player_movement_restart_freeze",
		"tf_player_spell_drop_on_death_rate",
		"tf_playergib",
		"tf_populator_active_buffer_range",
		"tf_populator_damage_multiplier",
		"tf_populator_health_multiplier",
		"tf_powerup_max_charge_time",
		"tf_powerup_mode",
		"tf_powerup_mode_dominant_multiplier",
		"tf_powerup_mode_imbalance_consecutive_min_players",
		"tf_powerup_mode_imbalance_consecutive_time",
		"tf_powerup_mode_imbalance_delta",
		"tf_powerup_mode_killcount_timer_length",
		"tf_preround_push_from_damage_enable",
		"tf_rd_max_points_override",
		"tf_rd_min_points_to_steal",
		"tf_rd_points_approach_interval",
		"tf_rd_points_per_approach",
		"tf_rd_points_per_steal",
		"tf_rd_return_max_time",
		"tf_rd_return_min_time",
		"tf_rd_robot_attack_notification_cooldown",
		"tf_rd_robot_repair_rate",
		"tf_rd_steal_rate",
		"tf_resolve_stuck_players",
		"tf_rocketpack_airborne_launch_absvelocity_preserved",
		"tf_rocketpack_cost",
		"tf_rocketpack_delay_launch",
		"tf_rocketpack_impact_push_max",
		"tf_rocketpack_impact_push_min",
		"tf_rocketpack_launch_absvelocity_preserved",
		"tf_rocketpack_launch_delay",
		"tf_rocketpack_launch_push",
		"tf_rocketpack_refire_delay",
		"tf_rocketpack_toggle_duration",
		"tf_scout_air_dash_count",
		"tf_scout_bat_launch_delay",
		"tf_scout_energydrink_activation",
		"tf_scout_energydrink_consume_rate",
		"tf_scout_energydrink_regen_rate",
		"tf_scout_hype_mod",
		"tf_scout_hype_pep_max",
		"tf_scout_hype_pep_min_damage",
		"tf_scout_hype_pep_mod",
		"tf_scout_stunball_base_duration",
		"tf_scout_stunball_base_speed",
		"tf_select_ambush_areas_close_range",
		"tf_select_ambush_areas_max_enemy_exposure_area",
		"tf_select_ambush_areas_radius",
		"tf_sentrygun_ammocheat",
		"tf_sentrygun_damage",
		"tf_sentrygun_kill_after_redeploy_time_achievement",
		"tf_sentrygun_max_absorbed_damage_while_controlled_for_achievement",
		"tf_sentrygun_metal_per_rocket",
		"tf_sentrygun_metal_per_shell",
		"tf_sentrygun_mini_damage",
		"tf_sentrygun_newtarget_dist",
		"tf_sentrygun_notarget",
		"tf_show_actor_potential_visibility",
		"tf_show_blocked_areas",
		"tf_show_bomb_drop_areas",
		"tf_show_control_points",
		"tf_show_enemy_invasion_areas",
		"tf_show_gate_defense_areas",
		"tf_show_in_combat_areas",
		"tf_show_incursion_flow",
		"tf_show_incursion_flow_gradient",
		"tf_show_incursion_flow_range",
		"tf_show_incursion_range",
		"tf_show_incursion_range_max",
		"tf_show_incursion_range_min",
		"tf_show_mesh_decoration",
		"tf_show_mesh_decoration_manual",
		"tf_show_point_defense_areas",
		"tf_show_sentry_danger",
		"tf_show_sniper_areas",
		"tf_show_sniper_areas_safety_range",
		"tf_show_train_path",
		"tf_soccer_ball_min_speed",
		"tf_soccer_ball_multiplier",
		"tf_soccer_ball_up_max",
		"tf_soccer_front_hit_range",
		"tf_solidobjects",
		"tf_spawn_glows_duration",
		"tf_spec_xray",
		"tf_spells_enabled",
		"tf_spy_cloak_consume_rate",
		"tf_spy_cloak_no_attack_time",
		"tf_spy_cloak_regen_rate",
		"tf_spy_invis_time",
		"tf_spy_invis_unstealth_time",
		"tf_spy_max_cloaked_speed",
		"tf_stalematechangeclasstime",
		"tf_stats_nogameplaycheck",
		"tf_stealth_damage_reduction",
		"tf_sticky_airdet_radius",
		"tf_sticky_radius_ramp_time",
		"tf_target_dummy_bullet_mult",
		"tf_target_dummy_health",
		"tf_target_dummy_lifetime",
		"tf_target_dummy_melee_mult",
		"tf_target_dummy_other_mult",
		"tf_tauntcam_fov_override",
		"tf_teleporter_fov_start",
		"tf_teleporter_fov_time",
		"tf_tournament_classchange_allowed",
		"tf_tournament_classchange_ready_allowed",
		"tf_tournament_classlimit_demoman",
		"tf_tournament_classlimit_engineer",
		"tf_tournament_classlimit_heavy",
		"tf_tournament_classlimit_medic",
		"tf_tournament_classlimit_pyro",
		"tf_tournament_classlimit_scout",
		"tf_tournament_classlimit_sniper",
		"tf_tournament_classlimit_soldier",
		"tf_tournament_classlimit_spy",
		"tf_tournament_hide_domination_icons",
		"tf_use_fixed_weaponspreads",
		"tf_useparticletracers",
		"tf_vaccinator_uber_charge_rate_modifier",
		"tf_weapon_criticals",
		"tf_weapon_criticals_bucket_bottom",
		"tf_weapon_criticals_bucket_cap",
		"tf_weapon_criticals_bucket_default",
		"tf_weapon_criticals_distance_falloff",
		"tf_weapon_criticals_melee",
		"tf_weapon_criticals_nopred",
		"tf_weapon_minicrits_distance_falloff",
		"tf_weapon_ragdoll_maxspeed",
		"tf_weapon_ragdoll_velocity_max",
		"tf_weapon_ragdoll_velocity_min",
		"training_can_build_dispenser",
		"training_can_build_sentry",
		"training_can_build_tele_entrance",
		"training_can_build_tele_exit",
		"training_can_destroy_buildings",
		"training_can_pickup_dispenser",
		"training_can_pickup_sentry",
		"training_can_pickup_tele_entrance",
		"training_can_pickup_tele_exit",
		"training_can_select_weapon_building",
		"training_can_select_weapon_item1",
		"training_can_select_weapon_item2",
		"training_can_select_weapon_melee",
		"training_can_select_weapon_pda",
		"training_can_select_weapon_primary",
		"training_can_select_weapon_secondary",
		"weapon_medigun_charge_rate",
		"weapon_medigun_chargerelease_rate",
		"weapon_medigun_construction_rate",
		"weapon_medigun_damage_modifier",
		"weapon_medigun_resist_num_chunks",
		"weapon_vaccinator_resist_duration"
	]),
	// CLIENT_CONVAR
	new Set([
		"cl_autoreload",
		"cl_autorezoom",
		"cl_connectmethod",
		"cl_flipviewmodels",
		"cl_language",
		"cl_spec_mode",
		"fov_desired",
		"hud_classautokill",
		"hud_combattext",
		"name",
		"closecaption"
	]),
	// INT_PROPERTY
	new Set([
		"\"player_array\"",
		"blah.m_WithProxy",
		"m_Activity",
		"m_ActualFlags",
		"m_ArmorValue",
		"m_AssaultCue",
		/*"m_AttributeList.m_Attributes.000.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.000.m_iRawValue32",
		"m_AttributeList.m_Attributes.000.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.001.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.001.m_iRawValue32",
		"m_AttributeList.m_Attributes.001.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.002.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.002.m_iRawValue32",
		"m_AttributeList.m_Attributes.002.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.003.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.003.m_iRawValue32",
		"m_AttributeList.m_Attributes.003.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.004.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.004.m_iRawValue32",
		"m_AttributeList.m_Attributes.004.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.005.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.005.m_iRawValue32",
		"m_AttributeList.m_Attributes.005.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.006.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.006.m_iRawValue32",
		"m_AttributeList.m_Attributes.006.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.007.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.007.m_iRawValue32",
		"m_AttributeList.m_Attributes.007.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.008.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.008.m_iRawValue32",
		"m_AttributeList.m_Attributes.008.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.009.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.009.m_iRawValue32",
		"m_AttributeList.m_Attributes.009.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.010.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.010.m_iRawValue32",
		"m_AttributeList.m_Attributes.010.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.011.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.011.m_iRawValue32",
		"m_AttributeList.m_Attributes.011.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.012.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.012.m_iRawValue32",
		"m_AttributeList.m_Attributes.012.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.013.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.013.m_iRawValue32",
		"m_AttributeList.m_Attributes.013.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.014.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.014.m_iRawValue32",
		"m_AttributeList.m_Attributes.014.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.015.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.015.m_iRawValue32",
		"m_AttributeList.m_Attributes.015.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.016.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.016.m_iRawValue32",
		"m_AttributeList.m_Attributes.016.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.017.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.017.m_iRawValue32",
		"m_AttributeList.m_Attributes.017.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.018.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.018.m_iRawValue32",
		"m_AttributeList.m_Attributes.018.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.019.m_iAttributeDefinitionIndex",
		"m_AttributeList.m_Attributes.019.m_iRawValue32",
		"m_AttributeList.m_Attributes.019.m_nRefundableCurrency",
		"m_AttributeList.m_Attributes.lengthproxy.lengthprop20",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.000.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.000.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.000.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.001.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.001.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.001.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.002.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.002.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.002.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.003.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.003.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.003.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.004.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.004.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.004.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.005.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.005.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.005.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.006.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.006.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.006.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.007.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.007.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.007.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.008.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.008.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.008.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.009.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.009.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.009.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.010.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.010.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.010.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.011.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.011.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.011.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.012.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.012.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.012.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.013.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.013.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.013.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.014.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.014.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.014.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.015.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.015.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.015.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.016.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.016.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.016.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.017.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.017.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.017.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.018.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.018.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.018.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.019.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.019.m_iRawValue32",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.019.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_AttributeList.m_Attributes.lengthproxy.lengthprop20",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.000.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.000.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.000.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.001.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.001.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.001.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.002.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.002.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.002.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.003.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.003.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.003.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.004.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.004.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.004.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.005.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.005.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.005.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.006.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.006.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.006.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.007.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.007.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.007.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.008.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.008.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.008.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.009.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.009.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.009.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.010.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.010.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.010.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.011.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.011.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.011.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.012.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.012.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.012.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.013.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.013.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.013.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.014.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.014.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.014.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.015.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.015.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.015.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.016.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.016.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.016.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.017.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.017.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.017.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.018.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.018.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.018.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.019.m_iAttributeDefinitionIndex",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.019.m_iRawValue32",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.019.m_nRefundableCurrency",
		"m_AttributeManager.m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.lengthproxy.lengthprop20",*/
		"m_AttributeManager.m_Item.m_iAccountID",
		"m_AttributeManager.m_Item.m_iEntityLevel",
		"m_AttributeManager.m_Item.m_iEntityQuality",
		"m_AttributeManager.m_Item.m_iItemDefinitionIndex",
		"m_AttributeManager.m_Item.m_iItemIDHigh",
		"m_AttributeManager.m_Item.m_iItemIDLow",
		"m_AttributeManager.m_Item.m_iTeamNumber",
		"m_AttributeManager.m_ProviderType",
		"m_AttributeManager.m_iReapplyProvisionParity",
		"m_BoneFollowerManager.m_iNumBones",
		"m_BusyActor",
		"m_Collision.m_nSolidType",
		"m_Collision.m_nSurroundType",
		"m_Collision.m_triggerBloat",
		"m_Collision.m_usSolidFlags",
		"m_CollisionGroup",
		"m_Color",
		"m_Color1",
		"m_Color2",
		"m_CriterionDistance",
		"m_CriterionVisibility",
		"m_CurrentStage",
		"m_CurrentWeaponProficiency",
		"m_DistMax",
		"m_DustFlags",
		"m_Efficiency",
		"m_EnemiesSerialNumber",
		"m_EnvWindShared.m_iGustDirChange",
		"m_EnvWindShared.m_iInitialWindDir",
		"m_EnvWindShared.m_iMaxGust",
		"m_EnvWindShared.m_iMaxWind",
		"m_EnvWindShared.m_iMinGust",
		"m_EnvWindShared.m_iMinWind",
		"m_EnvWindShared.m_iWindDir",
		"m_EnvWindShared.m_iWindSeed",
		"m_ExactVelocityChoice",
		"m_Explosion",
		"m_ExplosionMagnitude",
		"m_Exponent",
		"m_Flags",
		"m_FlexweightBodyRightLeft",
		"m_FlexweightChestRightLeft",
		"m_FlexweightGestureRightLeft",
		"m_FlexweightGestureUpDown",
		"m_FlexweightHeadForwardBack",
		"m_FlexweightHeadRightLeft",
		"m_FlexweightHeadTilt",
		"m_FlexweightHeadUpDown",
		"m_FogColor",
		"m_HintChangeReaction",
		"m_IdealActivity",
		"m_IdealNPCState",
		"m_IdealSchedule",
		"m_IdealTranslatedActivity",
		"m_IdealWeaponActivity",
		"m_Interruptability",
		/*"m_Item.m_AttributeList.m_Attributes.000.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.000.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.000.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.001.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.001.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.001.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.002.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.002.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.002.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.003.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.003.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.003.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.004.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.004.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.004.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.005.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.005.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.005.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.006.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.006.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.006.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.007.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.007.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.007.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.008.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.008.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.008.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.009.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.009.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.009.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.010.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.010.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.010.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.011.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.011.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.011.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.012.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.012.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.012.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.013.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.013.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.013.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.014.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.014.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.014.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.015.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.015.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.015.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.016.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.016.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.016.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.017.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.017.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.017.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.018.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.018.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.018.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.019.m_iAttributeDefinitionIndex",
		"m_Item.m_AttributeList.m_Attributes.019.m_iRawValue32",
		"m_Item.m_AttributeList.m_Attributes.019.m_nRefundableCurrency",
		"m_Item.m_AttributeList.m_Attributes.lengthproxy.lengthprop20",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.000.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.000.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.000.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.001.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.001.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.001.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.002.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.002.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.002.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.003.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.003.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.003.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.004.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.004.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.004.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.005.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.005.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.005.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.006.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.006.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.006.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.007.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.007.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.007.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.008.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.008.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.008.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.009.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.009.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.009.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.010.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.010.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.010.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.011.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.011.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.011.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.012.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.012.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.012.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.013.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.013.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.013.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.014.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.014.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.014.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.015.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.015.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.015.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.016.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.016.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.016.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.017.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.017.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.017.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.018.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.018.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.018.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.019.m_iAttributeDefinitionIndex",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.019.m_iRawValue32",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.019.m_nRefundableCurrency",
		"m_Item.m_NetworkedDynamicAttributesForDemos.m_Attributes.lengthproxy.lengthprop20",*/
		"m_Item.m_iAccountID",
		"m_Item.m_iEntityLevel",
		"m_Item.m_iEntityQuality",
		"m_Item.m_iItemDefinitionIndex",
		"m_Item.m_iItemIDHigh",
		"m_Item.m_iItemIDLow",
		"m_Item.m_iTeamNumber",
		"m_LastHitGroup",
		"m_LifetimeMax",
		"m_LifetimeMin",
		"m_LightStyle",
		"m_Local.m_PlayerFog.m_NewColor",
		"m_Local.m_PlayerFog.m_OldColor",
		"m_Local.m_audio.entIndex",
		"m_Local.m_audio.localBits",
		"m_Local.m_audio.soundscapeIndex",
		"m_Local.m_chAreaBits",
		"m_Local.m_fog.colorPrimary",
		"m_Local.m_fog.colorPrimaryLerpTo",
		"m_Local.m_fog.colorSecondary",
		"m_Local.m_fog.colorSecondaryLerpTo",
		"m_Local.m_iHideHUD",
		"m_Local.m_nOldButtons",
		"m_Local.m_nStepside",
		"m_Local.m_skybox3d.area",
		"m_Local.m_skybox3d.fog.colorPrimary",
		"m_Local.m_skybox3d.fog.colorPrimaryLerpTo",
		"m_Local.m_skybox3d.fog.colorSecondary",
		"m_Local.m_skybox3d.fog.colorSecondaryLerpTo",
		"m_Local.m_skybox3d.scale",
		"m_Material",
		"m_MessageAttenuation",
		"m_MoveCollide",
		"m_MoveEfficiency",
		"m_MoveType",
		"m_NPCState",
		"m_NodeData.fIgnoreFacing",
		"m_NodeData.iDisabled",
		"m_NodeData.maxState",
		"m_NodeData.minState",
		"m_NodeData.nHintType",
		"m_NodeData.nNodeID",
		"m_NodeData.nTargetWCNodeID",
		"m_NodeData.nWCNodeID",
		"m_NumBeams[0]",
		// "m_NumBeams[1]",
		"m_OutColor1",
		"m_OutColor2",
		"m_ParameterBodyYaw",
		"m_ParameterGestureHeight",
		"m_ParameterGestureWidth",
		"m_ParameterHeadPitch",
		"m_ParameterHeadRoll",
		"m_ParameterHeadYaw",
		"m_ParameterNeckTrans",
		"m_ParameterSpineYaw",
		"m_PerformanceMode",
		"m_PlayerClass.m_iClass",
		"m_PlayerClass.m_iClassModelParity",
		"m_PredictableID",
		"m_RallySelectMethod",
		"m_RopeFlags",
		"m_RopeLength",
		"m_ScheduleState.fTaskStatus",
		"m_ScheduleState.iCurTask",
		"m_ScheduleState.iTaskInterrupt",
		"m_ScheduleState.taskFailureCode",
		"m_Score",
		"m_ScriptArrivalActivity",
		"m_SearchType",
		// "m_Shared.m_ConditionData.lengthproxy.lengthprop131",
		"m_Shared.m_ConditionList._condition_bits",
		"m_Shared.m_RoundScoreData.m_iBackstabs",
		"m_Shared.m_RoundScoreData.m_iBonusPoints",
		"m_Shared.m_RoundScoreData.m_iBuildingsBuilt",
		"m_Shared.m_RoundScoreData.m_iBuildingsDestroyed",
		"m_Shared.m_RoundScoreData.m_iCaptures",
		"m_Shared.m_RoundScoreData.m_iCrits",
		"m_Shared.m_RoundScoreData.m_iDamageDone",
		"m_Shared.m_RoundScoreData.m_iDeaths",
		"m_Shared.m_RoundScoreData.m_iDefenses",
		"m_Shared.m_RoundScoreData.m_iDominations",
		"m_Shared.m_RoundScoreData.m_iHeadshots",
		"m_Shared.m_RoundScoreData.m_iHealPoints",
		"m_Shared.m_RoundScoreData.m_iInvulns",
		"m_Shared.m_RoundScoreData.m_iKillAssists",
		"m_Shared.m_RoundScoreData.m_iKills",
		"m_Shared.m_RoundScoreData.m_iPoints",
		"m_Shared.m_RoundScoreData.m_iResupplyPoints",
		"m_Shared.m_RoundScoreData.m_iRevenge",
		"m_Shared.m_RoundScoreData.m_iSuicides",
		"m_Shared.m_RoundScoreData.m_iTeleports",
		"m_Shared.m_ScoreData.m_iBackstabs",
		"m_Shared.m_ScoreData.m_iBonusPoints",
		"m_Shared.m_ScoreData.m_iBuildingsBuilt",
		"m_Shared.m_ScoreData.m_iBuildingsDestroyed",
		"m_Shared.m_ScoreData.m_iCaptures",
		"m_Shared.m_ScoreData.m_iCrits",
		"m_Shared.m_ScoreData.m_iDamageDone",
		"m_Shared.m_ScoreData.m_iDeaths",
		"m_Shared.m_ScoreData.m_iDefenses",
		"m_Shared.m_ScoreData.m_iDominations",
		"m_Shared.m_ScoreData.m_iHeadshots",
		"m_Shared.m_ScoreData.m_iHealPoints",
		"m_Shared.m_ScoreData.m_iInvulns",
		"m_Shared.m_ScoreData.m_iKillAssists",
		"m_Shared.m_ScoreData.m_iKills",
		"m_Shared.m_ScoreData.m_iPoints",
		"m_Shared.m_ScoreData.m_iResupplyPoints",
		"m_Shared.m_ScoreData.m_iRevenge",
		"m_Shared.m_ScoreData.m_iSuicides",
		"m_Shared.m_ScoreData.m_iTeleports",
		"m_Shared.m_iAirDash",
		"m_Shared.m_iCritMult",
		"m_Shared.m_iDecapitations",
		"m_Shared.m_iDesiredPlayerClass",
		"m_Shared.m_iDisguiseBody",
		"m_Shared.m_iDisguiseHealth",
		"m_Shared.m_iItemFindBonus",
		"m_Shared.m_iKillCountSinceLastDeploy",
		"m_Shared.m_iMovementStunAmount",
		"m_Shared.m_iMovementStunParity",
		"m_Shared.m_iNextMeleeCrit",
		"m_Shared.m_iRevengeCrits",
		"m_Shared.m_iSpawnRoomTouchCount",
		"m_Shared.m_iStunFlags",
		"m_Shared.m_iStunIndex",
		"m_Shared.m_iTauntConcept",
		"m_Shared.m_iTauntIndex",
		"m_Shared.m_iWeaponKnockbackID",
		"m_Shared.m_nAirDucked",
		"m_Shared.m_nArenaNumChanges",
		"m_Shared.m_nDesiredDisguiseClass",
		"m_Shared.m_nDesiredDisguiseTeam",
		"m_Shared.m_nDisguiseClass",
		"m_Shared.m_nDisguiseTeam",
		"m_Shared.m_nHalloweenBombHeadStage",
		"m_Shared.m_nMaskClass",
		"m_Shared.m_nNumHealers",
		"m_Shared.m_nPlayerCond",
		"m_Shared.m_nPlayerCondEx",
		"m_Shared.m_nPlayerCondEx2",
		"m_Shared.m_nPlayerCondEx3",
		"m_Shared.m_nPlayerCondEx4",
		"m_Shared.m_nPlayerState",
		"m_Shared.m_nStreaks",
		"m_Shared.m_nTeamTeleporterUsed",
		"m_Shared.m_unTauntSourceItemID_High",
		"m_Shared.m_unTauntSourceItemID_Low",
		"m_ShotRegulator.m_nBurstShotsRemaining",
		"m_ShotRegulator.m_nMaxBurstShots",
		"m_ShotRegulator.m_nMinBurstShots",
		"m_Slack",
		"m_SleepFlags",
		"m_SleepState",
		"m_SolidToPlayers",
		"m_SoundPool.m_iNext",
		"m_SoundPool.m_iType",
		"m_SoundPool.m_iVolume",
		"m_SoundPool.m_ownerChannelIndex",
		"m_SpawnRate",
		"m_SpeedMax",
		"m_StuckLast",
		"m_Subdiv",
		"m_TempAttenuation",
		"m_TouchType",
		"m_TriggerHitPoints",
		"m_VehiclePhysics.m_nBoostTimeLeft",
		"m_VehiclePhysics.m_nHasBoost",
		"m_VehiclePhysics.m_nLastSpeed",
		"m_VehiclePhysics.m_nRPM",
		"m_VehiclePhysics.m_poseParameters",
		"m_VehiclePhysics.m_wheelCount",
		"m_WindAngle",
		"m_WindCallback.m_nWindYaw",
		"m_WindSpeed",
		"m_aBonusPlayerRoll",
		"m_additionalIterations",
		"m_afButtonDisabled",
		"m_afButtonForced",
		"m_afButtonLast",
		"m_afButtonPressed",
		"m_afButtonReleased",
		"m_afCapability",
		"m_afMemory",
		"m_afPhysicsFlags",
		"m_aggressiveness",
		"m_attitude",
		"m_bEmit",
		"m_bFlipViewModel",
		"m_bLockedSentence",
		"m_bLockedSound",
		"m_bSendHandle",
		"m_bStunEffects",
		"m_bUnlockedSentence",
		"m_bUnlockedSound",
		"m_bitsDamageInflict",
		"m_bitsDamageType",
		"m_bitsHUDDamage",
		"m_blockedTeamNumber",
		"m_bloodColor",
		"m_boneIndexAttached",
		"m_cAmmoLoaded",
		"m_cLastActiveSounds",
		"m_clrOverlay",
		"m_clrRender",
		"m_code",
		"m_colTextColor",
		"m_counter",
		"m_createTick",
		"m_currentWaveStats.nBuyBacks",
		"m_currentWaveStats.nCreditsAcquired",
		"m_currentWaveStats.nCreditsBonus",
		"m_currentWaveStats.nCreditsDropped",
		"m_currentWaveStats.nPlayerDeaths",
		"m_customParams.maxShots",
		"m_customParams.minShots",
		"m_customParams.oddsCover",
		"m_damageModel",
		"m_damageToEnableMotion",
		"m_damageType",
		"m_debugOverlays",
		"m_density",
		"m_difficulty",
		"m_direction",
		"m_eDoorState",
		"m_eHull",
		"m_eLastState",
		"m_eMinigameType",
		"m_eOpenDirection",
		"m_eOrientationType",
		"m_ePlayerWantsRematch",
		"m_eRematchState",
		"m_eScoringType",
		"m_eSpawnPosition",
		"m_eThrowState",
		"m_eType",
		"m_eVelocityType",
		"m_eWhoToDamage",
		"m_eWinningMethod",
		"m_fActorInPVS",
		"m_fActorInVehicle",
		"m_fActorSeePlayer",
		"m_fActorSeeTarget",
		"m_fBoneCacheFlags",
		"m_fBossNormalizedTravelDistance",
		"m_fEffects",
		"m_fFlags",
		"m_fLatchedPositions",
		"m_fLockedPoints",
		"m_fMaxState",
		"m_fMinState",
		"m_fMoveTo",
		"m_fObjectFlags",
		"m_fOnTarget",
		"m_fPlayerActorLOS",
		"m_fPlayerBlockingActor",
		"m_fPlayerInVehicle",
		"m_fPlayerTargetLOS",
		"m_fScreenFlags",
		"m_fScriptStatus",
		"m_fStoredPathFlags",
		"m_failSchedule",
		"m_fishCount",
		"m_flAnimTime",
		"m_flSimulationTime",
		"m_flags",
		"m_flexnum",
		"m_fog.colorPrimary",
		"m_fog.colorPrimaryLerpTo",
		"m_fog.colorSecondary",
		"m_fog.colorSecondaryLerpTo",
		"m_frameStart",
		"m_frequency",
		"m_glowColor",
		"m_halloweenScenario",
		"m_hint",
		"m_hitGroup",
		"m_iAccountID",
		"m_iActiveDominations",
		"m_iActiveFlames",
		"m_iActiveIssueIndex",
		"m_iActiveSound",
		"m_iAlpha",
		"m_iAltFireHudHintCount",
		"m_iAmmo",
		"m_iAmmoMetal",
		"m_iAmmoRockets",
		"m_iAmmoShells",
		"m_iAssists",
		"m_iAttachmentIndex",
		"m_iBackgroundModelIndex",
		"m_iBackgroundTeam",
		"m_iBallPower",
		"m_iBallSpawnCountdownSec",
		"m_iBaseControlPoints",
		"m_iBonusChallenge",
		"m_iBonusPoints",
		"m_iBonusProgress",
		"m_iBossHealthPercentageByte",
		"m_iBossState",
		"m_iBossStunPercentageByte",
		"m_iBotClass",
		"m_iBreakableCount",
		"m_iBreakableSkin",
		"m_iBuildState",
		"m_iBuybackCredits",
		"m_iCPGroup",
		"m_iCampaignMedals",
		"m_iCappingTeam",
		"m_iChallengeIndex",
		"m_iChangedVariables",
		"m_iChargeEffect",
		"m_iChargeLevel",
		"m_iClass",
		"m_iClassIgnore",
		"m_iClip1",
		"m_iClip2",
		"m_iCollisionCount",
		"m_iComingBackWaitForSpeak",
		"m_iConnectionState",
		"m_iConsecutiveShots",
		"m_iControlPointParents",
		"m_iControlPointParents[0]",/*
		"m_iControlPointParents[1]",
		"m_iControlPointParents[2]",
		"m_iControlPointParents[3]",
		"m_iControlPointParents[4]",
		"m_iControlPointParents[5]",
		"m_iControlPointParents[6]",*/
		"m_iCurrencyCollected",
		"m_iCurrencyCollectedForRespec",
		"m_iCurrentFade",
		"m_iCurrentGameMaterial",
		"m_iCurrentMaxRagdollCount",
		"m_iCurrentSection",
		"m_iCurrentTube",
		"m_iCurrentWaveIdx",
		"m_iCustomDamageType",
		"m_iCycleType",
		"m_iDamage",
		"m_iDamageAssist",
		"m_iDamageBlocked",
		"m_iDamageBoss",
		"m_iDamageCount",
		"m_iDamageCustom",
		"m_iDamageType",
		"m_iDamagingFlames",
		"m_iDeathFrame",
		"m_iDeathPose",
		"m_iDeaths",
		"m_iDefaultFOV",
		"m_iDefaultOwner",
		"m_iDefaultStyle",
		"m_iDeflected",
		"m_iDelay",
		"m_iDesiredBuildRotations",
		"m_iDesiredOverlay",
		"m_iDesiredWeaponState",
		"m_iDirection",
		"m_iDisabled",
		"m_iDisposition",
		"m_iDontMessageParent",
		"m_iEFlags",
		"m_iEffectIndex",
		"m_iEndAttachment",
		"m_iEntityCount",
		"m_iEventTeamStatus",
		"m_iFOV",
		"m_iFOVStart",
		"m_iFilterTeam",
		"m_iFormation",
		"m_iFrags",
		"m_iFrameEnd",
		"m_iFrameStart",
		"m_iFreeSound",
		"m_iGameEventData",
		"m_iGibCapacity",
		"m_iGibMaterial",
		"m_iGibModelIndex",
		"m_iGibs",
		"m_iGoalSequence",
		"m_iGoalTube",
		"m_iGoalType",
		"m_iGravity",
		"m_iHammerID",
		"m_iHealing",
		"m_iHealingAssist",
		"m_iHealth",
		"m_iHighestUpgradeLevel",
		"m_iInitialTeamNum",
		"m_iIKCounter",
		"m_iInputFilter",
		"m_iIntegerValue",
		"m_iInteractionPlaying",
		"m_iInteractionState",
		"m_iInteractions",
		"m_iIntroStep",
		"m_iInvalidCapWinner",
		"m_iKartHealth",
		"m_iKartState",
		"m_iKills",
		"m_iMagnitude",
		"m_iMaterialModel",
		"m_iMaterialName",
		"m_iMaxBreakableSize",
		"m_iMaxBuffedHealth",
		"m_iMaxBurstSize",
		"m_iMaxFlameReflectionCount",
		"m_iMaxHealth",
		"m_iMaxObjectsAttached",
		"m_iMaxPieces",
		"m_iMaxPiecesDX8",
		"m_iMaxRagdollCount",
		"m_iMaxRagdollCountDX8",
		"m_iMinBurstSize",
		"m_iMinHealthDmg",
		"m_iMinSpawnDistance",
		"m_iMiniBombCounter",
		"m_iMode",
		"m_iMySquadSlot",
		"m_iNodeNumber",
		"m_iNodeNumberMax",
		"m_iNumBreakableChunks",
		"m_iNumControlPoints",
		"m_iNumHitboxFires",
		"m_iNumSections",
		"m_iNumTeamMembers",
		"m_iObjectMode",
		"m_iObjectType",
		"m_iObserverLastMode",
		"m_iObserverMode",
		"m_iOldGrav",
		"m_iOnDeathAction",
		"m_iOnlyTeamToVote",
		"m_iOverlayID",
		"m_iOwner",
		"m_iParentAttachment",
		"m_iPartyLeaderBlueTeamIndex",
		"m_iPartyLeaderRedTeamIndex",
		"m_iPhysicsMode",
		"m_iPing",
		"m_iPipebombCount",
		"m_iPlayerClass",
		"m_iPlayerClassWhenKilled",
		"m_iPlayerDeathBehavior",
		"m_iPlayerLevel",
		"m_iPlayerLocked",
		"m_iPlayerSkinOverride",
		"m_iPointIndex",
		"m_iPoints",
		"m_iPortalVersion",
		"m_iPositionInterpolator",
		"m_iPreviousDisposition",
		"m_iPreviousPoints",
		"m_iPreviousRank",
		"m_iPrimaryAmmoCount",
		"m_iPrimaryAmmoType",
		"m_iPriority",
		"m_iProjectileType",
		"m_iRadiusOverride",
		"m_iRank",
		"m_iRecipientTeam",
		"m_iReloadHudHintCount",
		"m_iReloadMode",
		"m_iRespawnTime",
		"m_iRetrievePlayer",
		"m_iRetrieveWaitForSpeak",
		"m_iRole",
		"m_iRopeMaterialModelIndex",
		"m_iRotationInterpolator",
		"m_iRoundState",
		"m_iRoundsWon",
		"m_iScore",
		"m_iScreenHeight",
		"m_iScreenWidth",
		"m_iSearchType",
		"m_iSecondaryAmmoCount",
		"m_iSecondaryAmmoType",
		"m_iSelectedSpellIndex",
		"m_iServerWaveID",
		"m_iShotsRemaining",
		"m_iShouldCompareToValue",
		"m_iSkillShotCompleteCount",
		"m_iSolidity",
		"m_iSoundContext",
		"m_iSoundLevel",
		"m_iSoundType",
		"m_iSpawnCounter",
		"m_iSpeakerDSPPreset",
		"m_iSpeedModRadius",
		"m_iSpeedModSpeed",
		"m_iSpellCharges",
		"m_iSpread",
		"m_iStartAttachment",
		"m_iState",
		"m_iStopWatchTimer",
		"m_iStreaks",
		"m_iStrictness",
		"m_iStunType",
		"m_iStyle",
		"m_iSubType",
		"m_iSuicideCustomKillFlags",
		"m_iSuitPlayNext",
		"m_iTargetFade",
		"m_iTargetGameMaterial",
		"m_iTargetVolume",
		"m_iTauntItemDefIndex",
		"m_iTeam",
		"m_iTeamBaseIcons",
		"m_iTeamIcons",
		"m_iTeamInZone",
		"m_iTeamNum",
		"m_iTeamOverlays",
		"m_iTeamReqCappers",
		"m_iTeleportType",
		"m_iTextureFrameIndex",
		"m_iTimerToShowInHUD",
		"m_iTimesUsed",
		"m_iTotal",
		"m_iTotalScore",
		"m_iTrack",
		"m_iTrain",
		"m_iTrainSpeedLevel",
		"m_iTransitionDirection",
		"m_iType",
		"m_iUpdateCapHudParity",
		"m_iUpgradeLevel",
		"m_iUpgradeMetal",
		"m_iUpgradeMetalRequired",
		"m_iUpgradeRefundCredits",
		"m_iUserID",
		"m_iViewModelIndex",
		"m_iVolume",
		"m_iWarnOnCap",
		"m_iWeaponSlot",
		"m_iWeaponState",
		"m_iWinReason",
		"m_iWinningTeam",
		"m_iWorldModelIndex",
		"m_iZoneID",
		"m_id",
		"m_idrowndmg",
		"m_idrownrestored",
		"m_initialHealth",
		"m_initialstate",
		"m_integrator.m_controlType",
		"m_istalking",
		"m_lastDamageAmount",
		"m_lastUpdateTickCount",
		"m_lastUsed",
		"m_lifeState",
		"m_ls.bEOFLocked",
		"m_ls.bEOFUnlocked",
		"m_ls.iLockedSentence",
		"m_ls.iUnlockedSentence",
		"m_maxActiveCount",
		"m_minHitPoints",
		"m_minHitPointsToCommit",
		"m_modelIndex",
		"m_movementType",
		"m_nActiveTauntSlot",
		"m_nActiveWpnClip",
		"m_nAlertDelay",
		"m_nAllowHaunting",
		"m_nAnimationParity",
		"m_nAttachIndex",
		"m_nAttachType",
		"m_nAttachment",
		"m_nAttachmentIndex",
		"m_nAutomatedAction",
		"m_nBeamFlags",
		"m_nBeamType",
		"m_nBeverageType",
		"m_nBlueScore",
		"m_nBlueTargetPoints",
		"m_nBody",
		"m_nBossHealth",
		"m_nBotSkill",
		"m_nBrightness",
		"m_nButtons",
		"m_nCapturePoint",
		"m_nChargeResistType",
		"m_nClass",
		"m_nCondition",
		"m_nCurrency",
		"m_nCustomViewmodelModelIndex",
		"m_nDamage",
		"m_nDefaultUpgradeLevel",
		"m_nDensity",
		"m_nDestBrightness",
		"m_nDestEditID",
		"m_nDirBase",
		"m_nDirCurrent",
		"m_nDirNoise",
		"m_nDirTarget",
		"m_nDissolveType",
		"m_nDrownDmgRate",
		"m_nExperienceLevel",
		"m_nExperienceLevelProgress",
		"m_nFModType",
		"m_nFOV",
		"m_nFilterType",
		"m_nFireType",
		"m_nFlagCaptures",
		"m_nFlagCarrierUpgradeLevel",
		"m_nFlagResetDelay",
		"m_nFlagStatus",
		"m_nFlags",
		"m_nFlameFromAboveModelIndex",
		"m_nFlameModelIndex",
		"m_nFont",
		"m_nForceBone",
		"m_nForceEscortPushLogic",
		"m_nForceState",
		"m_nForceTauntCam",
		"m_nForceUpgrades",
		"m_nForcedSkin",
		"m_nFragility",
		"m_nGameType",
		"m_nGlowModelIndex",
		"m_nGlowSpriteIndex",
		"m_nGroupNumber",
		"m_nHalloweenEffect",
		"m_nHaloIndex",
		"m_nHaloSprite",
		"m_nHardwareType",
		"m_nHealDistance",
		"m_nHealth",
		"m_nHitboxSet",
		"m_nHoldBase",
		"m_nHoldNoise",
		"m_nHolidayType",
		"m_nHorizontalSize",
		"m_nHudType",
		"m_nIdealSequence",
		"m_nImpulse",
		"m_nInspectStage",
		"m_nInterruptCount",
		"m_nKillComboClass",
		"m_nKillComboCount",
		"m_nLastButtonState",
		"m_nLastCompareResult",
		"m_nLastFireResult",
		"m_nLastShuffleCase",
		"m_nLastThinkTick",
		"m_nLifetime",
		"m_nLinkState",
		"m_nLinkType",
		"m_nLiveChildren",
		"m_nMagnitude",
		"m_nMannVsMachineMaxWaveCount",
		"m_nMannVsMachineWaveClassCounts",
		"m_nMannVsMachineWaveClassCounts2",
		"m_nMannVsMachineWaveClassFlags",
		"m_nMannVsMachineWaveClassFlags2",
		"m_nMannVsMachineWaveCount",
		"m_nMannVsMachineWaveEnemyCount",
		"m_nMapHolidayType",
		"m_nMatchGroupType",
		"m_nMatchSummaryType",
		"m_nMaterial",
		"m_nMaxActiveZombies",
		"m_nMaxBossHealth",
		"m_nMaxDist",
		"m_nMaxGibModelFrame",
		"m_nMaxLiveChildren",
		"m_nMaxNumNPCs",
		"m_nMaxPoints",
		"m_nMaxScoreForMiniGame",
		"m_nMaxSquadmatesPerEnemy",
		"m_nMeasureType",
		"m_nMinDXLevel",
		"m_nMinDist",
		"m_nMinPoints",
		"m_nMinigameTeamScore",
		"m_nModelIndex",
		"m_nModelIndexOverrides",
		"m_nModifyMode",
		"m_nMoveSoundMaxPitch",
		"m_nMoveSoundMinPitch",
		"m_nMoveSpeed",
		"m_nMuzzleFlashParity",
		"m_nMvMEventPopfileType",
		"m_nMvMWorldMoney",
		"m_nNeutralType",
		"m_nNewSequenceParity",
		"m_nNextMapVoteOptions",
		"m_nNextThinkTick",
		"m_nNumBeamEnts",
		"m_nNumBrokenPanes",
		"m_nNumCappers",
		"m_nNumCrateHudHints",
		"m_nNumCrouches",
		"m_nNumHigh",
		"m_nNumKills",
		"m_nNumNodeHillData",
		"m_nNumWide",
		"m_nOccluderIndex",
		"m_nOldTakeDamage",
		"m_nOrientation",
		"m_nOuterMaxDist",
		"m_nOverlayMaterial",
		"m_nOverlaySequence",
		"m_nOverlaySize",
		"m_nPanelName",
		"m_nPendingSequence",
		"m_nPhysgunState",
		"m_nPlasmaModelIndex",
		"m_nPlasmaModelIndex2",
		"m_nPlayerButtons",
		"m_nPointValue",
		"m_nPointsPerPlayer",
		"m_nPoisonDmg",
		"m_nPoisonRestored",
		"m_nPotentialVotes",
		"m_nPrecipType",
		"m_nPriority",
		"m_nQuadError",
		"m_nRPM",
		"m_nRandomSeed",
		"m_nRedScore",
		"m_nRedTargetPoints",
		"m_nRenderFX",
		"m_nRenderMode",
		"m_nResetEventsParity",
		"m_nRespecsAwardedInWave",
		"m_nReturnTime",
		"m_nRevives",
		"m_nRoundsPlayed",
		"m_nSceneStringIndex",
		"m_nSchedule",
		"m_nScoringType",
		"m_nSegments",
		"m_nSequence",
		"m_nSetupTimeLength",
		"m_nShadowQuality",
		"m_nShieldLevel",
		"m_nShouldReflect",
		"m_nShuffleCases",
		"m_nSimulationTick",
		"m_nSimulationType",
		"m_nSize",
		"m_nSkeletonType",
		"m_nSkin",
		"m_nSoundMask",
		"m_nSoundPriority",
		"m_nSpawnMode",
		"m_nSpawnTime",
		"m_nSpeed",
		"m_nSpeedBase",
		"m_nSpeedCurrent",
		"m_nSpeedNoise",
		"m_nSpeedTarget",
		"m_nSpotlightTextureFrame",
		"m_nSrcEditID",
		"m_nStartBrightness",
		"m_nStartDisabled",
		"m_nState",
		"m_nStopWatchState",
		"m_nStoredPathType",
		"m_nSurfaceType",
		"m_nTauntInHell",
		"m_nTeam",
		"m_nTeamNumber",
		"m_nTexture",
		"m_nTickBase",
		"m_nTier",
		"m_nTimeToUnlockPoint",
		"m_nTimerInitialLength",
		"m_nTimerLength",
		"m_nTimerMaxLength",
		"m_nTimerTeam",
		"m_nTouchers",
		"m_nTrailLength",
		"m_nTrainRecedeTime",
		"m_nTransmitStateOwnedCounter",
		"m_nType",
		"m_nUpdateRate",
		"m_nUseTrailEffect",
		"m_nVerticalSize",
		"m_nVoteIdx",
		"m_nVoteOptionCount",
		"m_nWakeTick",
		"m_nWaterLevel",
		"m_nWaterType",
		"m_nWeaponType",
		"m_navProperty",
		"m_pExpresser.m_voicePitch",
		"m_pLockedBestSound.m_iNext",
		"m_pLockedBestSound.m_iType",
		"m_pLockedBestSound.m_iVolume",
		"m_pLockedBestSound.m_ownerChannelIndex",
		"m_pMotor.m_nDismountSequence",
		"m_pNavigator.m_navType",
		"m_pNavigator.m_pPath.m_activity",
		"m_pNavigator.m_pPath.m_arrivalActivity",
		"m_pNavigator.m_pPath.m_arrivalSequence",
		"m_pNavigator.m_pPath.m_goalFlags",
		"m_pNavigator.m_pPath.m_goalType",
		"m_pNavigator.m_pPath.m_sequence",
		"m_pSenses.m_iSensingFlags",
		"m_phoneme",
		"m_physicsBone",
		"m_portalNumber",
		"m_previousWaveStats.nBuyBacks",
		"m_previousWaveStats.nCreditsAcquired",
		"m_previousWaveStats.nCreditsBonus",
		"m_previousWaveStats.nCreditsDropped",
		"m_previousWaveStats.nPlayerDeaths",
		"m_radius",
		"m_ragdoll.boneIndex",
		"m_ragdoll.listCount",
		"m_ragdoll.list[0].parentIndex",/*
		"m_ragdoll.list[10].parentIndex",
		"m_ragdoll.list[11].parentIndex",
		"m_ragdoll.list[12].parentIndex",
		"m_ragdoll.list[13].parentIndex",
		"m_ragdoll.list[14].parentIndex",
		"m_ragdoll.list[15].parentIndex",
		"m_ragdoll.list[16].parentIndex",
		"m_ragdoll.list[17].parentIndex",
		"m_ragdoll.list[18].parentIndex",
		"m_ragdoll.list[19].parentIndex",
		"m_ragdoll.list[1].parentIndex",
		"m_ragdoll.list[20].parentIndex",
		"m_ragdoll.list[21].parentIndex",
		"m_ragdoll.list[22].parentIndex",
		"m_ragdoll.list[23].parentIndex",
		"m_ragdoll.list[2].parentIndex",
		"m_ragdoll.list[3].parentIndex",
		"m_ragdoll.list[4].parentIndex",
		"m_ragdoll.list[5].parentIndex",
		"m_ragdoll.list[6].parentIndex",
		"m_ragdoll.list[7].parentIndex",
		"m_ragdoll.list[8].parentIndex",
		"m_ragdoll.list[9].parentIndex",*/
		"m_ragdollAttachedObjectIndex",
		"m_rgItems",
		"m_rgSuitPlayList",
		"m_rgTriggered",
		"m_rgbaColor",
		"m_rgiSuitNoRepeat",
		"m_runningTotalWaveStats.nBuyBacks",
		"m_runningTotalWaveStats.nCreditsAcquired",
		"m_runningTotalWaveStats.nCreditsBonus",
		"m_runningTotalWaveStats.nCreditsDropped",
		"m_runningTotalWaveStats.nPlayerDeaths",
		"m_sExclusivity",
		"m_sFireballSprite",
		"m_savedCollisionGroup",
		"m_savedFlags",
		"m_saved_effects",
		"m_scriptState",
		"m_sentence",
		"m_shadowColor",
		"m_skyboxData.area",
		"m_skyboxData.fog.colorPrimary",
		"m_skyboxData.fog.colorSecondary",
		"m_skyboxData.scale",
		"m_solidIndex",
		"m_soundPlaying",
		"m_sounds",
		"m_spawnCount",
		"m_spawnData.m_eType",
		"m_spawnData.m_nNumGibs",
		"m_spawnData.m_nPoints",
		"m_spawnData.m_nRobotHealth",
		"m_spawnflags",
		"m_spriteScale",
		"m_spriteTexture",
		"m_startDisabled",
		"m_state",
		"m_takedamage",
		"m_targetState",
		"m_task",
		"m_team",
		"m_textParms.channel",
		"m_textParms.effect",
		"m_toggle_state",
		"m_translatedActivity",
		"m_triggermode",
		"m_ubInterpolationFrame",
		"m_unLevel",
		"m_unNextPointIndex",
		"m_usNumCharges",
		"m_use",
		"m_weaponCount",
		"movecollide",
		"movetype",
		"overlay_vars.m_AnimOverlay.000.m_nOrder",
		"overlay_vars.m_AnimOverlay.000.m_nSequence",/*
		"overlay_vars.m_AnimOverlay.001.m_nOrder",
		"overlay_vars.m_AnimOverlay.001.m_nSequence",
		"overlay_vars.m_AnimOverlay.002.m_nOrder",
		"overlay_vars.m_AnimOverlay.002.m_nSequence",
		"overlay_vars.m_AnimOverlay.003.m_nOrder",
		"overlay_vars.m_AnimOverlay.003.m_nSequence",
		"overlay_vars.m_AnimOverlay.004.m_nOrder",
		"overlay_vars.m_AnimOverlay.004.m_nSequence",
		"overlay_vars.m_AnimOverlay.005.m_nOrder",
		"overlay_vars.m_AnimOverlay.005.m_nSequence",
		"overlay_vars.m_AnimOverlay.006.m_nOrder",
		"overlay_vars.m_AnimOverlay.006.m_nSequence",
		"overlay_vars.m_AnimOverlay.007.m_nOrder",
		"overlay_vars.m_AnimOverlay.007.m_nSequence",
		"overlay_vars.m_AnimOverlay.008.m_nOrder",
		"overlay_vars.m_AnimOverlay.008.m_nSequence",
		"overlay_vars.m_AnimOverlay.009.m_nOrder",
		"overlay_vars.m_AnimOverlay.009.m_nSequence",
		"overlay_vars.m_AnimOverlay.010.m_nOrder",
		"overlay_vars.m_AnimOverlay.010.m_nSequence",
		"overlay_vars.m_AnimOverlay.011.m_nOrder",
		"overlay_vars.m_AnimOverlay.011.m_nSequence",
		"overlay_vars.m_AnimOverlay.012.m_nOrder",
		"overlay_vars.m_AnimOverlay.012.m_nSequence",
		"overlay_vars.m_AnimOverlay.013.m_nOrder",
		"overlay_vars.m_AnimOverlay.013.m_nSequence",
		"overlay_vars.m_AnimOverlay.014.m_nOrder",
		"overlay_vars.m_AnimOverlay.014.m_nSequence",
		"overlay_vars.m_AnimOverlay.lengthproxy.lengthprop15",*/
		"player_array_element",
		"touchStamp"
	]),
	// BOOL_PROPERTY
	new Set([
		"m_ActorTargetProxTester.m_fInside",
		"m_AttributeManager.m_Item.m_bInitialized",
		"m_AttributeManager.m_Item.m_bOnlyIterateItemViewAttributes",
		"m_CanInDispenser",
		"m_Collision.m_bUniformTriggerBloat",
		"m_GiveUpOnDeadEnemyTimer.m_fIsRunning",
		"m_InitialState",
		"m_Item.m_bInitialized",
		"m_Item.m_bOnlyIterateItemViewAttributes",
		"m_Local.m_bAllowAutoMovement",
		"m_Local.m_bDrawViewmodel",
		"m_Local.m_bDucked",
		"m_Local.m_bDucking",
		"m_Local.m_bForceLocalPlayerDraw",
		"m_Local.m_bInDuckJump",
		"m_Local.m_bPoisoned",
		"m_Local.m_bWearingSuit",
		"m_Local.m_fog.blend",
		"m_Local.m_fog.enable",
		"m_Local.m_fog.radial",
		"m_Local.m_skybox3d.fog.blend",
		"m_Local.m_skybox3d.fog.enable",
		"m_Local.m_skybox3d.fog.radial",
		"m_MoveAndShootOverlay.m_bMovingAndShooting",
		"m_MoveAndShootOverlay.m_bNoShootWhileMove",
		"m_On",
		"m_PlayerActorProxTester.m_fInside",
		"m_PlayerClass.m_bCustomModelRotates",
		"m_PlayerClass.m_bCustomModelRotationSet",
		"m_PlayerClass.m_bCustomModelVisibleToSelf",
		"m_PlayerClass.m_bUseClassAnimations",
		"m_PlayerTargetProxTester.m_fInside",
		"m_RawPanelBitVec",
		"m_ScheduleState.bScheduleWasInterrupted",
		"m_ScheduleState.bTaskRanAutomovement",
		"m_ScheduleState.bTaskUpdatedYaw",
		"m_Shared.m_bArenaFirstBloodBoost",
		"m_Shared.m_bCarryingObject",
		"m_Shared.m_bFeignDeathReady",
		"m_Shared.m_bHasPasstimeBall",
		"m_Shared.m_bInUpgradeZone",
		"m_Shared.m_bIsTargetedForPasstimePass",
		"m_Shared.m_bJumping",
		"m_Shared.m_bKingRuneBuffActive",
		"m_Shared.m_bLastDisguisedAsOwnTeam",
		"m_Shared.m_bLoadoutUnavailable",
		"m_Shared.m_bParachuteEquipped",
		"m_Shared.m_bPlayerDominated",
		"m_Shared.m_bPlayerDominatingMe",
		"m_Shared.m_bRageDraining",
		"m_Shared.m_bShieldEquipped",
		"m_Shared.m_nDisguiseSkinOverride",
		"m_ShotRegulator.m_bDisabled",
		"m_ShotRegulator.m_bInRestInterval",
		"m_SoundPool.m_bHasOwner",
		"m_SoundPool.m_bNoExpirationTime",
		"m_VehiclePhysics.m_bIsOn",
		"m_VehiclePhysics.m_bLastBoost",
		"m_VehiclePhysics.m_bLastSkid",
		"m_VehiclePhysics.m_controls.bHasBrakePedal",
		"m_VehiclePhysics.m_controls.brakepedal",
		"m_VehiclePhysics.m_controls.handbrakeLeft",
		"m_VehiclePhysics.m_controls.handbrakeRight",
		"m_aBuildableObjectTypes",
		"m_activated",
		"m_active",
		"m_allAsleep",
		"m_allowIntersection",
		"m_autoKickDisabled",
		"m_bAbandonIfEnemyHides",
		"m_bActivateWhenAtRest",
		"m_bActive",
		"m_bAdd",
		"m_bAlive",
		"m_bAllowClassChanges",
		"m_bAllowDispenser",
		"m_bAllowDiversion",
		"m_bAllowInstantSpawn",
		"m_bAllowMoveDuringTaunt",
		"m_bAllowNewGibs",
		"m_bAllowSentry",
		"m_bAllowTeleporters",
		"m_bAllowTrainingAchievements",
		"m_bAllowedClasses[TF_CLASS_DEMOMAN]",
		"m_bAllowedClasses[TF_CLASS_ENGINEER]",
		"m_bAllowedClasses[TF_CLASS_HEAVYWEAPONS]",
		"m_bAllowedClasses[TF_CLASS_MEDIC]",
		"m_bAllowedClasses[TF_CLASS_PYRO]",
		"m_bAllowedClasses[TF_CLASS_SCOUT]",
		"m_bAllowedClasses[TF_CLASS_SNIPER]",
		"m_bAllowedClasses[TF_CLASS_SOLDIER]",
		"m_bAllowedClasses[TF_CLASS_SPY]",
		"m_bAltFireHudHintDisplayed",
		"m_bAltFiresUnderwater",
		"m_bAlternateSorting",
		"m_bAnimate",
		"m_bAnimatedEveryTick",
		"m_bApplyAngularImpulse",
		"m_bArenaSpectator",
		"m_bArrowAlight",
		"m_bAtRest",
		"m_bAttacking",
		"m_bAutoCountdown",
		"m_bAutoMaterialize",
		"m_bAutomated",
		"m_bAwaitingReadyRestart",
		"m_bAwake",
		"m_bBecomeAsh",
		"m_bBeingRepurposedForTaunt",
		"m_bBlockLOSSetByPropData",
		"m_bBlocked",
		"m_bBountyModeEnabled",
		"m_bBreakOnNonIdle",
		"m_bBroken",
		"m_bBuilding",
		"m_bBurning",
		"m_bCPCapRateScalesWithPlayers",
		"m_bCPIsVisible",
		"m_bCPLocked",
		"m_bCameraSpace",
		"m_bCancelAtNextInterrupt",
		"m_bCannotDieDuringInteraction",
		"m_bCarried",
		"m_bCarryDeploy",
		"m_bChargeRelease",
		"m_bChargedShot",
		"m_bCharging",
		"m_bCheatsEnabledDuringLevel",
		"m_bCheckContacts",
		"m_bClearOnContact",
		"m_bClientSideAnimation",
		"m_bClientSideFrameReset",
		"m_bCloaked",
		"m_bColdWorld",
		"m_bCollide",
		"m_bCompetitiveMode",
		"m_bCompletedEarly",
		"m_bConditionsGathered",
		"m_bConnected",
		"m_bConstrainBetweenEndpoints",
		"m_bControlPointsReset",
		"m_bCreatedFromMapFile",
		"m_bCritFire",
		"m_bCritOnHardHit",
		"m_bCritShot",
		"m_bCritical",
		"m_bCrits",
		"m_bCrouchDesired",
		"m_bDamaged",
		"m_bDampAllRotation",
		"m_bDefaultWelcome",
		"m_bDefensiveBomb",
		"m_bDelayed",
		"m_bDestroyBuildingsOnActive",
		"m_bDeveloperOnly",
		"m_bDidActivate",
		"m_bDidDeathCleanup",
		"m_bDidFireOnce",
		"m_bDirectionSuppressAirControl",
		"m_bDirectional",
		"m_bDisableBoneFollowers",
		"m_bDisableDodge",
		"m_bDisableNPCCollisions",
		"m_bDisablePropLookup",
		"m_bDisableShadows",
		"m_bDisabled",
		"m_bDisguiseWeapon",
		"m_bDisguiseWearable",
		"m_bDisplayPerf",
		"m_bDisplayTitle",
		"m_bDisposableBuilding",
		"m_bDistributed",
		"m_bDontCancelOtherSequences",
		"m_bDontRemove",
		"m_bDontSpeakStart",
		"m_bDontUseSemaphore",
		"m_bDoorGroup",
		"m_bDropToGround",
		"m_bDuckToggled",
		"m_bEfficientSpotlight",
		"m_bElectrocuted",
		"m_bEnableShadows",
		"m_bEnabled",
		"m_bEndPointValid",
		"m_bEnterAnimOn",
		"m_bExitAnimOn",
		"m_bExpectingWeapon",
		"m_bFaceLeft",
		"m_bFadeCorpse",
		"m_bFakeLadder",
		"m_bFeignDeath",
		"m_bFetchEventData",
		"m_bFireOnEmpty",
		"m_bFired",
		"m_bFiredAttack",
		"m_bFiresUnderwater",
		"m_bFirstBlocked",
		"m_bFirstCollisionAfterLaunch",
		"m_bFirstHit",
		"m_bFogEnable",
		"m_bFogRadial",
		"m_bForceClosed",
		"m_bForceConditionsGather",
		"m_bForceCrouch",
		"m_bForceMapReset",
		"m_bForceNewLevelUnit",
		"m_bForcePurgeFixedupStrings",
		"m_bForceServerRagdoll",
		"m_bForceSynch",
		"m_bForceUpdate",
		"m_bForcedObserverMode",
		"m_bForcedSkin",
		"m_bGagLeader",
		"m_bGenerated",
		"m_bGib",
		"m_bGlowEnabled",
		"m_bGoldRagdoll",
		"m_bGrabAll",
		"m_bHadOwner",
		"m_bHandleTrainMovement",
		"m_bHasActiveTeleporter",
		"m_bHasBeenPhysgunned",
		"m_bHasBeenPressed",
		"m_bHasGun",
		"m_bHasHalloweenSpell",
		"m_bHasHitSomething",
		"m_bHasSapper",
		"m_bHasSpiral",
		"m_bHasWarnedAI",
		"m_bHaveMinPlayersToEnableReady",
		"m_bHealing",
		"m_bHeatAtLevel",
		"m_bHelltowerPlayersInHell",
		"m_bHillIsDownhill",
		"m_bHintGroupNavLimiting",
		"m_bHitMax",
		"m_bHitMin",
		"m_bHitTarget",
		"m_bHolstered",
		"m_bIceRagdoll",
		"m_bIgnoreDebris",
		"m_bIgnoreGravity",
		"m_bIgnoreSolid",
		"m_bIgnoreUnseenEnemies",
		"m_bImportanRagdoll",
		"m_bInAScript",
		"m_bInCaptureWatchState",
		"m_bInMiniRound",
		"m_bInOvertime",
		"m_bInPowerPlay",
		"m_bInReload",
		"m_bInSetup",
		"m_bInValue",
		"m_bInWaitingForPlayers",
		"m_bInfiniteZombies",
		"m_bInitiatedSelfDelete",
		"m_bInputForcedClear",
		"m_bInterpolationWrap",
		"m_bInterruptSceneFinished",
		"m_bInterrupted",
		"m_bInterruptedActorsScenes",
		"m_bInvertAllow",
		"m_bInvertExclusion",
		"m_bIsABot",
		"m_bIsActive",
		"m_bIsBackground",
		"m_bIsBloody",
		"m_bIsBroken",
		"m_bIsCoaching",
		"m_bIsCrouching",
		"m_bIsDisabled",
		"m_bIsDoingAOEAttack",
		"m_bIsEnabled",
		"m_bIsFiring",
		"m_bIsInItemTestingMode",
		"m_bIsInTraining",
		"m_bIsLive",
		"m_bIsMiniBoss",
		"m_bIsMoving",
		"m_bIsOn",
		"m_bIsPlayerSimulated",
		"m_bIsPlayingBack",
		"m_bIsPlayingEntry",
		"m_bIsReadyToHighFive",
		"m_bIsSprite",
		"m_bIsTeleportingDueToMoveTo",
		"m_bIsTrainingHUDVisible",
		"m_bIsUrgent",
		"m_bIsUsingSpells",
		"m_bIsWaitingForTrainingContinue",
		"m_bIsWalkableSetByPropData",
		"m_bIsYesNoVote",
		"m_bKnifeExists",
		"m_bLagCompensation",
		"m_bLeadDuringCombat",
		"m_bLeaveAsleep",
		"m_bLightOnlyTarget",
		"m_bLightWorld",
		"m_bLocked",
		"m_bLoopActionSequence",
		"m_bLoopMoveSound",
		"m_bLowPriority",
		"m_bLowered",
		"m_bMannVsMachineAlarmStatus",
		"m_bMannVsMachineBetweenWaves",
		"m_bMannVsMachineWaveClassActive",
		"m_bMannVsMachineWaveClassActive2",
		"m_bManualSpeedChanges",
		"m_bMapHasMatchSummaryStage",
		"m_bMatchBuilding",
		"m_bMatchEnded",
		"m_bMatchSafeToLeave",
		"m_bMatchSummary",
		"m_bMeasurePerf",
		"m_bMiniBuilding",
		"m_bMinigameAllowedInRamdomPool",
		"m_bMultiplayer",
		"m_bMultipleTrains",
		"m_bNeedGraphRebuild",
		"m_bNegated",
		"m_bNeverSayHello",
		"m_bNeverTimeout",
		"m_bNewAnimCommandsSemaphore",
		"m_bNoDmgForce",
		"m_bNoFire",
		"m_bNoGibShadows",
		"m_bNoListRepeats",
		"m_bNotSolidToWorld",
		"m_bOn",
		"m_bOnGround",
		"m_bOnlyVelocityCheck",
		"m_bOriginalBlockLOS",
		"m_bOvertimeAllowedForCTF",
		"m_bPassActivator",
		"m_bPauseBonusProgress",
		"m_bPaused",
		"m_bPausedViaInput",
		"m_bPerformAvoidance",
		"m_bPlacing",
		"m_bPlasmaDisable",
		"m_bPlayAllRounds",
		"m_bPlaySound",
		"m_bPlayerActorFOVTrueCone",
		"m_bPlayerAvoidState",
		"m_bPlayerControlled",
		"m_bPlayerIsPackMember",
		"m_bPlayerReady",
		"m_bPlayerTargetFOVTrueCone",
		"m_bPlayerUnderwater",
		"m_bPlayersAreOnMatchSummaryStage",
		"m_bPlayingHybrid_CTF_CP",
		"m_bPlayingKoth",
		"m_bPlayingMannVsMachine",
		"m_bPlayingMedieval",
		"m_bPlayingMiniRounds",
		"m_bPlayingRobotDestructionMode",
		"m_bPlayingSpecialDeliveryMode",
		"m_bPoseValueParity",
		"m_bPostSpawnUseAngles",
		"m_bPowerupMode",
		"m_bPredictWeapons",
		"m_bPreventChangesWhileMoving",
		"m_bPreventMovement",
		"m_bPreventWeaponPickup",
		"m_bRainbow",
		"m_bRandomAnimator",
		"m_bRandomOwnerOnRestart",
		"m_bRandomRotation",
		"m_bReadyToBackstab",
		"m_bReciprocal",
		"m_bRegenerating",
		"m_bReloadHudHintDisplayed",
		"m_bReloadedThroughAnimEvent",
		"m_bReloadsSingly",
		"m_bRemove",
		"m_bRemoveable",
		"m_bRequireAllTags",
		"m_bResetParity",
		"m_bResetTimeOnRoundStart",
		"m_bRetainBuildings",
		"m_bReturnBetweenWaves",
		"m_bRevealed",
		"m_bReversed",
		"m_bRezoomAfterShot",
		"m_bRolledOutroCredits",
		"m_bRopesHolidayLightsAllowed",
		"m_bRun",
		"m_bSaveImportant",
		"m_bSaveMeParity",
		"m_bScorePerCapture",
		"m_bSequenceFinished",
		"m_bSequenceLoops",
		"m_bServerOverridePlacement",
		"m_bShouldAlarm",
		"m_bShouldBlock",
		"m_bShouldDetach",
		"m_bShowInHUD",
		"m_bShowMatchSummary",
		"m_bShowTimeRemaining",
		"m_bSimulatedEveryTick",
		"m_bSinglePlayerGameEnding",
		"m_bSkippedChooseEnemy",
		"m_bSnapToGoal",
		"m_bSolid",
		"m_bSolidBsp",
		"m_bSoundPlaying",
		"m_bSpawnOnlyWhenTriggered",
		"m_bSpecial",
		"m_bSpeedModActive",
		"m_bSpotlightOn",
		"m_bStartActive",
		"m_bStartDark",
		"m_bStartDisabled",
		"m_bStartPaused",
		"m_bStartPointValid",
		"m_bState",
		"m_bStopAtStartPos",
		"m_bStopScenesWhenPlayerLost",
		"m_bStopWatch",
		"m_bStopWatchTimer",
		"m_bStopWatchWinner",
		"m_bStunned",
		"m_bSuppressFire",
		"m_bSwitch",
		"m_bSwitchTeamsOnWin",
		"m_bSwitchedTeamsThisRound",
		"m_bSynchPostIdles",
		"m_bTargetWasAsleep",
		"m_bTeamCanCap",
		"m_bTeamReady",
		"m_bTeamsSwitched",
		"m_bThinking",
		"m_bThrownByPlayer",
		"m_bTimeoutFired",
		"m_bTimerPaused",
		"m_bTookPhysicsDamage",
		"m_bTouched",
		"m_bTrackAlarm",
		"m_bTrainCanRecede",
		"m_bTriggerDisabled",
		"m_bTruceActive",
		"m_bUnableToFire",
		"m_bUnderCrosshair",
		"m_bUnstoppable",
		"m_bUpDownState",
		"m_bUpdateTarget",
		"m_bUseAirLinkRadius",
		"m_bUseAngles",
		"m_bUseBossHealthBar",
		"m_bUseCustomAutoExposureMax",
		"m_bUseCustomAutoExposureMin",
		"m_bUseCustomBloomScale",
		"m_bUseExactVelocity",
		"m_bUseHelper",
		"m_bUseHitboxes",
		"m_bUseHitboxesForRenderBox",
		"m_bUseNewProjectileCode",
		"m_bUsePuntSound",
		"m_bUseScreenAspectRatio",
		"m_bUseShotClockMode",
		"m_bUseTeamSpawnpoint",
		"m_bUseThresholdCheck",
		"m_bUsingActionSlot",
		"m_bUsingCountdownImage",
		"m_bUsingStandardThinkTime",
		"m_bUsingVRHeadset",
		"m_bValid",
		"m_bValidatedAttachedEntity",
		"m_bViewingCYOAPDA",
		"m_bVisibleWhenDisabled",
		"m_bWaitForBeginSequence",
		"m_bWaitForRefire",
		"m_bWaitingForActor",
		"m_bWaitingForInterrupt",
		"m_bWaitingForResumeScene",
		"m_bWakeSquad",
		"m_bWasDisguised",
		"m_bWasMapPlaced",
		"m_bWeatherEffect",
		"m_bWorldSpaceScale",
		"m_bWrap",
		"m_blinktoggle",
		"m_customParams.fCoverOnReload",
		"m_disabled",
		"m_drawText",
		"m_fActive",
		"m_fArrived",
		"m_fDisabled",
		"m_fInitHUD",
		"m_fInitalized",
		"m_fLooping",
		"m_fNoDamageDecal",
		"m_fPlayerIsBattleline",
		"m_fRotating",
		"m_fStartActive",
		"m_fStayAtCover",
		"m_fStayPushed",
		"m_fStrict",
		"m_fog.blend",
		"m_fog.enable",
		"m_fog.radial",
		"m_iDetonated",
		"m_interruptable",
		"m_isDisabled",
		"m_isDormant",
		"m_isLocal",
		"m_isOn",
		"m_isSticky",
		"m_nHasBoost",
		"m_nScannerDisabledVehicle",
		"m_nScannerDisabledWeapons",
		"m_nViewModelIndex",
		"m_on",
		"m_pLockedBestSound.m_bHasOwner",
		"m_pLockedBestSound.m_bNoExpirationTime",
		"m_pMotor.m_bYawLocked",
		"m_pMoveProbe.m_bIgnoreTransientEntities",
		"m_pNavigator.m_bCalledStartMove",
		"m_pNavigator.m_bForcedSimplify",
		"m_pNavigator.m_bLastNavFailed",
		"m_pNavigator.m_bLocalSucceedOnWithinTolerance",
		"m_pNavigator.m_bNoPathcornerPathfinds",
		"m_pNavigator.m_bNotOnNetwork",
		"m_pNavigator.m_bValidateActivitySpeed",
		"m_pNavigator.m_fNavComplete",
		"m_pNavigator.m_fRememberStaleNodes",
		"m_pNavigator.m_pPath.m_bGoalPosSet",
		"m_pNavigator.m_pPath.m_bGoalTypeSet",
		"m_pTacticalServices.m_bAllowFindLateralLos",
		"m_ragdoll.allowStretch",
		"m_sequenceStarted",
		"m_skyboxData.fog.blend",
		"m_skyboxData.fog.enable",
		"m_skyboxData.fog.radial",
		"m_succeeded",
		"m_turnClockwise",
		"m_usingCustomCollisionBounds",
		"pl.deadflag"
	]),
	// FLOAT_PROPERTY
	new Set([
		"HDRColorScale",
		"m_ActorTargetProxTester.m_distSq",
		"m_AirFinished",
		"m_AmbientLight.m_flIntensity",
		"m_Amplitude",
		"m_CheckOnGroundTimer.m_next",
		"m_CommandMoveMonitor.m_flMarkTolerance",
		"m_ConceptCategoryTimers.m_next",
		"m_DegreesPerSecond",
		"m_Density",
		"m_DensityRampSpeed",
		"m_DirLight.m_flIntensity",
		"m_DmgRadius",
		"m_DmgSave",
		"m_DmgTake",
		"m_Duration",
		"m_EndSize",
		"m_EnvWindShared.m_flGustDuration",
		"m_EnvWindShared.m_flInitialWindSpeed",
		"m_EnvWindShared.m_flMaxGustDelay",
		"m_EnvWindShared.m_flMinGustDelay",
		"m_EnvWindShared.m_flStartTime",
		"m_EnvWindShared.m_flWindSpeed",
		"m_FOV",
		"m_FadeDuration",
		"m_FadeEndTime",
		"m_FadeStartTime",
		"m_FailChooseEnemyTimer.m_next",
		"m_FallSpeed",
		"m_Frequency",
		"m_GiveUpOnDeadEnemyTimer.m_maxInterval",
		"m_GiveUpOnDeadEnemyTimer.m_minInterval",
		"m_GiveUpOnDeadEnemyTimer.m_next",
		"m_HoldTime",
		"m_IdealYaw",
		"m_Info.m_flEndSize",
		"m_Info.m_flLifetime",
		"m_Info.m_flStartSize",
		"m_InnerAngle",
		"m_JetLength",
		"m_LastEnterTime",
		"m_LastEnterWeight",
		"m_LastExitTime",
		"m_LastExitWeight",
		"m_Local.m_PlayerFog.m_flNewEnd",
		"m_Local.m_PlayerFog.m_flNewStart",
		"m_Local.m_PlayerFog.m_flOldEnd",
		"m_Local.m_PlayerFog.m_flOldStart",
		"m_Local.m_PlayerFog.m_flTransitionTime",
		"m_Local.m_flDuckJumpTime",
		"m_Local.m_flDucktime",
		"m_Local.m_flFOVRate",
		"m_Local.m_flFallVelocity",
		"m_Local.m_flJumpTime",
		"m_Local.m_flOldForwardMove",
		"m_Local.m_flStepSize",
		"m_Local.m_fog.duration",
		"m_Local.m_fog.end",
		"m_Local.m_fog.endLerpTo",
		"m_Local.m_fog.farz",
		"m_Local.m_fog.lerptime",
		"m_Local.m_fog.maxdensity",
		"m_Local.m_fog.start",
		"m_Local.m_fog.startLerpTo",
		"m_Local.m_skybox3d.fog.duration",
		"m_Local.m_skybox3d.fog.end",
		"m_Local.m_skybox3d.fog.endLerpTo",
		"m_Local.m_skybox3d.fog.farz",
		"m_Local.m_skybox3d.fog.lerptime",
		"m_Local.m_skybox3d.fog.maxdensity",
		"m_Local.m_skybox3d.fog.start",
		"m_Local.m_skybox3d.fog.startLerpTo",
		"m_MaxDirectedSpeed",
		"m_MaxFalloff",
		"m_MaxSpeed",
		"m_MaxWeight",
		"m_MessageVolume",
		"m_MinDirectedSpeed",
		"m_MinFalloff",
		"m_MinSpeed",
		"m_MoveAndShootOverlay.m_flSuspendUntilTime",
		"m_MoveAndShootOverlay.m_initialDelay",
		"m_MovementSpeed",
		"m_Opacity",
		"m_OuterAngle",
		"m_PainFinished",
		"m_ParticleDrawWidth",
		"m_ParticleLifetime",
		"m_ParticleSpacingDistance",
		"m_ParticleTrail.m_flEndSize",
		"m_ParticleTrail.m_flLifetime",
		"m_ParticleTrail.m_flStartSize",
		"m_PlayerActorProxTester.m_distSq",
		"m_PlayerTargetProxTester.m_distSq",
		"m_Radius",
		"m_Rate",
		"m_Resolution",
		"m_ReuseDelay",
		"m_RotationSpeed",
		"m_ScheduleState.timeCurTaskStarted",
		"m_ScheduleState.timeStarted",
		"m_SelfMoveMonitor.m_flMarkTolerance",
		"m_Shared.m_askForBallTime",
		"m_Shared.m_flChargeMeter",
		"m_Shared.m_flCloakMeter",
		"m_Shared.m_flDuckTimer",
		"m_Shared.m_flEnergyDrinkMeter",
		"m_Shared.m_flFirstPrimaryAttack",
		"m_Shared.m_flHolsterAnimTime",
		"m_Shared.m_flHypeMeter",
		"m_Shared.m_flInvisChangeCompleteTime",
		"m_Shared.m_flItemChargeMeter",
		"m_Shared.m_flMovementStunTime",
		"m_Shared.m_flNextNoiseMakerTime",
		"m_Shared.m_flNextRageEarnTime",
		"m_Shared.m_flRageMeter",
		"m_Shared.m_flRuneCharge",
		"m_Shared.m_flSpyTranqBuffDuration",
		"m_Shared.m_flStealthNextChangeTime",
		"m_Shared.m_flStealthNoAttackExpire",
		"m_ShotRegulator.m_flMaxBurstInterval",
		"m_ShotRegulator.m_flMaxRestInterval",
		"m_ShotRegulator.m_flMinBurstInterval",
		"m_ShotRegulator.m_flMinRestInterval",
		"m_ShotRegulator.m_flNextShotTime",
		"m_SoundPool.m_flExpireTime",
		"m_SoundPool.m_flOcclusionScale",
		"m_SpawnRadius",
		"m_Speed",
		"m_SpotRadius",
		"m_SpreadSpeed",
		"m_StartSize",
		"m_StopEmitTime",
		"m_TargetFOV",
		"m_TeamRespawnWaveTimes",
		"m_TextureScale",
		"m_TimeNextAvailable",
		"m_Timeout.m_interval",
		"m_Timeout.m_next",
		"m_Timer.m_interval",
		"m_Timer.m_next",
		"m_UpdateEnemyPosTimer.m_next",
		"m_VehiclePhysics.m_actionScale",
		"m_VehiclePhysics.m_actionSpeed",
		"m_VehiclePhysics.m_actionValue",
		"m_VehiclePhysics.m_controls.boost",
		"m_VehiclePhysics.m_controls.steering",
		"m_VehiclePhysics.m_controls.throttle",
		"m_VehiclePhysics.m_debugRadius",
		"m_VehiclePhysics.m_fLastBoost",
		"m_VehiclePhysics.m_flMaxRevThrottle",
		"m_VehiclePhysics.m_flMaxSpeed",
		"m_VehiclePhysics.m_flVehicleVolume",
		"m_VehiclePhysics.m_maxThrottle",
		"m_VehiclePhysics.m_throttleRate",
		"m_VehiclePhysics.m_throttleStartTime",
		"m_VehiclePhysics.m_turboTimer",
		"m_VehiclePhysics.m_wheelBaseHeight",
		"m_VehiclePhysics.m_wheelTotalHeight",
		"m_Weight",
		"m_Width",
		"m_WindCallback.m_flWindSpeed",
		"m_acceleration",
		"m_activateTime",
		"m_addLength",
		"m_additionalAcceleration",
		"m_angEyeAngles[0]",
		// "m_angEyeAngles[1]",
		"m_angRotation[0]",
		// "m_angRotation[1]",
		// "m_angRotation[2]",
		"m_angle",
		"m_angleChange",
		"m_angularAcceleration",
		"m_angularLimit",
		"m_avoidRange",
		"m_blinktime",
		"m_boltWidth",
		"m_calmSpeed",
		"m_cancelTime",
		"m_currentAmp",
		"m_customParams.maxTimeShots",
		"m_customParams.minTimeShots",
		"m_damage",
		"m_damageRadius",
		"m_deceleration",
		"m_desiredDistance",
		"m_desiredSpeed",
		"m_dir",
		"m_distance",
		"m_explodeDamage",
		"m_explodeRadius",
		"m_fAmplitude",
		"m_fChargeBeginTime",
		"m_fCycleFrequency",
		"m_fDangerousTimer",
		"m_fDisappearDist",
		"m_fEndWidth",
		"m_fFModAmplitude",
		"m_fFModRate",
		"m_fFModTimeOffset",
		"m_fFadeLength",
		"m_fFilterMass",
		"m_fFireDuration",
		"m_fHalloweenEffectDuration",
		"m_fHalloweenEffectStartTime",
		"m_fHaloScale",
		"m_fInterpolationTime",
		"m_fLastExtinguishTime",
		"m_fLastPlayerTalkAttemptTime",
		"m_fLastPlayerTalkTime",
		"m_fLerpTime",
		"m_fMass",
		"m_fMaxRange1",
		"m_fMaxRange2",
		"m_fMaxSlideTime",
		"m_fMinRange1",
		"m_fMinRange2",
		"m_fMinSlideTime",
		"m_fPitch",
		"m_fPoseValue",
		"m_fPrevVelocity",
		"m_fRadius",
		"m_fSkillShotComboEndTime",
		"m_fSpeed",
		"m_fStartFrame",
		"m_fStressToActivate",
		"m_fWidth",
		"m_fadeMaxDist",
		"m_fadeMinDist",
		"m_flAccelSpeed",
		"m_flAcceptableTimeSeenEnemy",
		"m_flAccumYawDelta",
		"m_flAccumYawScale",
		"m_flActorTargetProximity",
		"m_flAirControlSupressionTime",
		"m_flAllowDiversionRadius",
		"m_flAllowResponsesEndTime",
		"m_flAlternateTicksFix",
		"m_flAmbient",
		"m_flAmmoMod",
		"m_flAmount",
		"m_flAnimEndTime",
		"m_flAnimStartTime",
		"m_flArcInterval[0]",
		// "m_flArcInterval[1]",
		"m_flAssaultDelay",
		"m_flAssaultPointTolerance",
		"m_flAssaultTimeout",
		"m_flAttackTime",
		"m_flAttenuation",
		"m_flAttributeValue",
		"m_flAutoCapTime",
		"m_flAutoReturnDelay",
		"m_flAutomationDelay",
		"m_flAutomationTime",
		"m_flAverageSpeedAcrossFrame",
		"m_flBank",
		"m_flBaseSpread",
		"m_flBias",
		"m_flBlendEndTime",
		"m_flBlendStartTime",
		"m_flBlendTonemapEnd",
		"m_flBlendTonemapStart",
		"m_flBlendWeight",
		"m_flBlinktime",
		"m_flBlockDamage",
		"m_flBlueFinaleEndTime",
		"m_flBlueTeamRespawnScale",
		"m_flBoogieLength",
		"m_flBrightnessTime",
		"m_flBrightnessTimeStart",
		"m_flBurnDuration",
		"m_flCPTimerTimes",
		"m_flCapPercentages",
		"m_flCapTime",
		"m_flCaptureDelay",
		"m_flCaptureDelayOffset",
		"m_flCapturePointEnableTime",
		"m_flChargeBeginTime",
		"m_flChargeLevel",
		"m_flChargeStartTime",
		"m_flChargedDamage",
		"m_flCheapWaterEndDistance",
		"m_flCheapWaterStartDistance",
		"m_flCompareValue",
		"m_flConnectTime",
		"m_flConstraintRadius",
		"m_flConstraintSpeedFactor",
		"m_flConstraintWidth",
		"m_flConveyorSpeed",
		"m_flCountdownEndTime",
		"m_flCountdownTime",
		"m_flCurWeight",
		"m_flCurrentRechargeDuration",
		"m_flCurrentTauntMoveSpeed",
		"m_flCurrentTime",
		"m_flCustomAutoExposureMax",
		"m_flCustomAutoExposureMin",
		"m_flCustomBloomScale",
		"m_flCustomBloomScaleMinimum",
		"m_flCustomPositionX",
		"m_flCustomPositionY",
		"m_flCycle",
		"m_flDamage",
		"m_flDamageAccumulator",
		"m_flDamageCap",
		"m_flDamageForce",
		"m_flDamagePercentPerSecond",
		"m_flDamageScale",
		"m_flDamageTime",
		"m_flDangerousTime",
		"m_flDeathAnimTime",
		"m_flDeathTime",
		"m_flDecelSpeed",
		"m_flDefaultFadeScale",
		"m_flDelay",
		"m_flDesiredShadowCastDistance",
		"m_flDestScale",
		"m_flDetonateTime",
		"m_flDieTime",
		"m_flDissolveStartTime",
		"m_flDistTooFar",
		"m_flDistance",
		"m_flDistanceAlongSpline",
		"m_flDmgModBullet",
		"m_flDmgModClub",
		"m_flDmgModExplosive",
		"m_flDmgResetTime",
		"m_flDotTolerance",
		"m_flDriversMaxSpeed",
		"m_flDriversMinSpeed",
		"m_flDuckJumpTime",
		"m_flDuckTime",
		"m_flDuration",
		"m_flEffectBarRegenTime",
		"m_flEffectDuration",
		"m_flElasticity",
		"m_flEncodedController",
		"m_flEndSize",
		"m_flEndWidth",
		"m_flEnergy",
		"m_flEntryAngleTolerance",
		"m_flEventDelay",
		"m_flEyeIntegRate",
		"m_flFOV",
		"m_flFOVTime",
		"m_flFaceEntityFOV",
		"m_flFacingTime",
		"m_flFadeDist",
		"m_flFadeEndDist",
		"m_flFadeInDuration",
		"m_flFadeInLength",
		"m_flFadeInStart",
		"m_flFadeOutDuration",
		"m_flFadeOutLength",
		"m_flFadeOutModelLength",
		"m_flFadeOutModelStart",
		"m_flFadeOutStart",
		"m_flFadeOutStartTime",
		"m_flFadeScale",
		"m_flFadeStartDist",
		"m_flFadeTime",
		"m_flFanFriction",
		"m_flFarZ",
		"m_flFieldOfView",
		"m_flFinaleLength",
		"m_flFinishedTime",
		"m_flFireInterval",
		"m_flFireSize",
		"m_flFireTime",
		"m_flFlameDrag",
		"m_flFlameEndSizeMult",
		"m_flFlameGravity",
		"m_flFlameIgnorePlayerVelocity",
		"m_flFlameLifeTime",
		"m_flFlameReflectionAdditionalLifeTime",
		"m_flFlameReflectionDamageReduction",
		"m_flFlameSpeed",
		"m_flFlameStartSizeMult",
		"m_flFlameUp",
		"m_flFlareScale",
		"m_flFlashTime",
		"m_flFloatLerpEndValue",
		"m_flFloatLerpStartValue",
		"m_flFloatLerpTransitionTime",
		"m_flFogEnd",
		"m_flFogMaxDensity",
		"m_flFogStart",
		"m_flForce",
		"m_flForceClientTime",
		"m_flForceToEnableMotion",
		"m_flForcedInteractionTimeout",
		"m_flForwardMove",
		"m_flFrame",
		"m_flFrameRate",
		"m_flFrameTime",
		"m_flFramerate",
		"m_flFriction",
		"m_flFuel",
		"m_flGibAngVelocity",
		"m_flGibGravityScale",
		"m_flGibLife",
		"m_flGibScale",
		"m_flGibVelocity",
		"m_flGlowProxySize",
		"m_flGoalSpeed",
		"m_flGravity",
		"m_flGroundChangeTime",
		"m_flGroundSpeed",
		"m_flHDRColorScale",
		"m_flHandScale",
		"m_flHeadPitch",
		"m_flHeadScale",
		"m_flHeadYaw",
		"m_flHeatAbsorb",
		"m_flHeatLevel",
		"m_flHeight",
		"m_flHelpmeButtonPressTime",
		"m_flHitboxFireScale",
		"m_flHudHintMinDisplayTime",
		"m_flHudHintPollTime",
		"m_flIdleModifier",
		"m_flIgnoreDangerSoundsUntil",
		"m_flInMax",
		"m_flInMin",
		"m_flInValue",
		"m_flInitLaunchTime",
		"m_flInnerRadius",
		"m_flInspectAnimEndTime",
		"m_flInspectTime",
		"m_flIntensity",
		"m_flInteractionYaw",
		"m_flKartNextAvailableBoost",
		"m_flKnifeMeltTimestamp",
		"m_flKnifeRegenerateDuration",
		"m_flLaggedMovementValue",
		"m_flLastAngVelocity",
		"m_flLastAttackTime",
		"m_flLastAttackedTime",
		"m_flLastCritCheckTime",
		"m_flLastDamageTime",
		"m_flLastDmgTime",
		"m_flLastEnemyTime",
		"m_flLastEventCheck",
		"m_flLastFireTime",
		"m_flLastFlexAnimationTime",
		"m_flLastPhysicsInfluenceTime",
		"m_flLastPlayerDamageTime",
		"m_flLastRealThinkTime",
		"m_flLastSawPlayerTime",
		"m_flLastStateChangeTime",
		"m_flLastTime",
		"m_flLastUsedTimestamp",
		"m_flLastWashStartTime",
		"m_flLaunchTime",
		"m_flLazyCapPerc",
		"m_flLeadDistance",
		"m_flLifeTime",
		"m_flLifetime",
		"m_flLightFOV",
		"m_flLightScale",
		"m_flLip",
		"m_flLocalTime",
		"m_flLogoLength",
		"m_flLookTimeLast",
		"m_flLookTimeTotal",
		"m_flLoserRespawnBonusPerBot",
		"m_flLowerThreshold",
		"m_flMagnitude",
		"m_flMannVsMachineNextWaveTime",
		"m_flMapResetTime",
		"m_flMassOverride",
		"m_flMax",
		"m_flMaxBurstDelay",
		"m_flMaxFrame",
		"m_flMaxHeat",
		"m_flMaxOccludeeArea",
		"m_flMaxPassRange",
		"m_flMaxPropScreenSpaceWidth",
		"m_flMaxRadius",
		"m_flMaxRandAnimTime",
		"m_flMaxRange",
		"m_flMaxResetTime",
		"m_flMaxSpeed",
		"m_flMaxTimeout",
		"m_flMaxWeight",
		"m_flMaxspeed",
		"m_flMin",
		"m_flMinBurstDelay",
		"m_flMinFadeLength",
		"m_flMinOccluderArea",
		"m_flMinPropScreenSpaceWidth",
		"m_flMinRandAnimTime",
		"m_flMinTimeout",
		"m_flMinicritCharge",
		"m_flModelScale",
		"m_flMoveDistance",
		"m_flMoveDoneTime",
		"m_flMoveSoundMaxTime",
		"m_flMoveSoundMinTime",
		"m_flMoveSpeedReduction",
		"m_flMoveWaitFinished",
		"m_flMvMBaseBombUpgradeTime",
		"m_flMvMLastDamageTime",
		"m_flMvMNextBombUpgradeTime",
		"m_flNavIgnoreUntilTime",
		"m_flNearZ",
		"m_flNeutralTime",
		"m_flNextAttack",
		"m_flNextBlockTime",
		"m_flNextDecalTime",
		"m_flNextDecisionTime",
		"m_flNextDodgeTime",
		"m_flNextEyeLookTime",
		"m_flNextFlinchTime",
		"m_flNextGibTime",
		"m_flNextMoveSoundTime",
		"m_flNextPrimaryAttack",
		"m_flNextRandAnim",
		"m_flNextRandomExpressionTime",
		"m_flNextRandomLookTime",
		"m_flNextResetCheckTime",
		"m_flNextRespawnTime",
		"m_flNextRespawnWave",
		"m_flNextSecondaryAttack",
		"m_flNextSuckTime",
		"m_flNextTime",
		"m_flNextUseTime",
		"m_flNextWeaponSearchTime",
		"m_flNodeHillData",
		"m_flNoise",
		"m_flObservedCritChance",
		"m_flOldPlayerViewOffsetZ",
		"m_flOldPlayerZ",
		"m_flOriginalDamage",
		"m_flOriginalYaw",
		"m_flOut1",
		"m_flOut2",
		"m_flOuterRadius",
		"m_flOverlayTimes",
		"m_flOverlayTimes[0]", /*
		"m_flOverlayTimes[1]",
		"m_flOverlayTimes[2]",
		"m_flOverlayTimes[3]",
		"m_flOverlayTimes[4]",
		"m_flOverlayTimes[5]",
		"m_flOverlayTimes[6]",
		"m_flOverlayTimes[7]",
		"m_flOverlayTimes[8]",
		"m_flOverlayTimes[9]", */
		"m_flPackSpeed",
		"m_flPanelHeight",
		"m_flPanelWidth",
		"m_flPartialCapturePointsRate",
		"m_flParticleLifetime",
		"m_flPathDistance",
		"m_flPauseDoneTime",
		"m_flPauseDuration",
		"m_flPercentageConstructed",
		"m_flPhysicsVelocity",
		"m_flPitch",
		"m_flPlaybackRate",
		"m_flPlayerActorFOV",
		"m_flPlayerActorProximity",
		"m_flPlayerTalkAvailableMessagesTier1",
		"m_flPlayerTalkAvailableMessagesTier2",
		"m_flPlayerTargetFOV",
		"m_flPlayerTargetProximity",
		"m_flPlayerVelocity",
		"m_flPoseParameter",
		"m_flPostSpawnDirectionVariance",
		"m_flPostSpawnSpeed",
		"m_flPostSpeakDelay",
		"m_flPreDelay",
		"m_flPressureDelay",
		"m_flPrevAnimTime",
		"m_flRadius",
		"m_flRandomLifeTimeOffset",
		"m_flRateOfFire",
		"m_flRecedeTime",
		"m_flRechargeScale",
		"m_flRechargeTime",
		"m_flRedFinaleEndTime",
		"m_flRedTeamRespawnScale",
		"m_flRedirectedFlameSizeMult",
		"m_flRefireDelay",
		"m_flRefireTime",
		"m_flRegenerateDuration",
		"m_flReloadPriorNextFire",
		"m_flRenderArmLength",
		"m_flRenderAspectRatio",
		"m_flRenderFOV",
		"m_flRepeat",
		"m_flRequiredTime",
		"m_flResetTime",
		"m_flRespawnEndTime",
		"m_flRespawnStartTime",
		"m_flRespawnTime",
		"m_flRestartRoundTime",
		"m_flRetrieveDistance",
		"m_flReturnTime",
		"m_flRezoomTime",
		"m_flRobotScoreInterval",
		"m_flRollSpeed",
		"m_flScale",
		"m_flScaleTime",
		"m_flScaleTimeStart",
		"m_flSceneTime",
		"m_flScrollSpeed",
		"m_flSensitivity",
		"m_flSequenceScale",
		"m_flShadowCastDistance",
		"m_flShadowMaxDist",
		"m_flSideMove",
		"m_flSize",
		"m_flSizeMax",
		"m_flSizeMin",
		"m_flSkyboxScale",
		"m_flSmoothFactor",
		"m_flSoundWaitTime",
		"m_flSpawnFrequency",
		"m_flSpawnRadius",
		"m_flSpawnRate",
		"m_flSpawnTime",
		"m_flSpeed",
		"m_flSpeedFactor",
		"m_flSpeedForwardModifier",
		"m_flSpeedLevels[0]", /*
		"m_flSpeedLevels[1]",
		"m_flSpeedLevels[2]", */
		"m_flSpeedMax",
		"m_flSpeedMin",
		"m_flSplashRadius",
		"m_flSpotlightCurLength",
		"m_flSpotlightGoalWidth",
		"m_flSpotlightMaxLength",
		"m_flSpreadAngle",
		"m_flSpreadDegree",
		"m_flSpriteFramerate",
		"m_flSpriteScale",
		"m_flStartFadeInWeight",
		"m_flStartFadeOutWeight",
		"m_flStartFrame",
		"m_flStartPosition",
		"m_flStartScale",
		"m_flStartSize",
		"m_flStartTime",
		"m_flStartWidth",
		"m_flStartWidthVariance",
		"m_flStateTransitionTime",
		"m_flSteering",
		"m_flStepDelay",
		"m_flStepSoundTime",
		"m_flStopTime",
		"m_flStunDuration",
		"m_flSuccessDistance",
		"m_flSuddenDeathTime",
		"m_flSuitUpdate",
		"m_flSumDamage",
		"m_flSupport",
		"m_flSwimSoundTime",
		"m_flSwimTime",
		"m_flTLength",
		"m_flTWidth",
		"m_flTargetDist",
		"m_flTargetSpeed",
		"m_flTauntYaw",
		"m_flTeamCapTime",
		"m_flTeamRespawnReductionScale",
		"m_flTextSize",
		"m_flTextSpacingX",
		"m_flTextSpacingY",
		"m_flTextureRes",
		"m_flThickness[0]",
		// "m_flThickness[1]",
		"m_flThreshold",
		"m_flThrottle",
		"m_flTimeEnemyAcquired",
		"m_flTimeIntoFrame",
		"m_flTimeLastMovement",
		"m_flTimeLastUsed",
		"m_flTimeNextSpell",
		"m_flTimePingEffect",
		"m_flTimeRemaining",
		"m_flTimeStartFadeIn",
		"m_flTimeStartFadeOut",
		"m_flTimeToEnableCapPoint",
		"m_flTimeToSetPoisonous",
		"m_flTimeToTrigger",
		"m_flTimeUnderRotor",
		"m_flTimeUnderRotorVariance",
		"m_flTimeVisible[0]",
		// "m_flTimeVisible[1]",
		"m_flTimeWeaponIdle",
		"m_flTimeoutDuration",
		"m_flTimerEndTime",
		"m_flToggleEndTime",
		"m_flTorsoScale",
		"m_flTotalMass",
		"m_flTotalProgress",
		"m_flTotalTime",
		"m_flTranslucencyLimit",
		"m_flTriggerDelay",
		"m_flTwist",
		"m_flUnlockTime",
		"m_flUnlockTimes",
		"m_flUnzoomTime",
		"m_flUpperThreshold",
		"m_flUseLockedTime",
		"m_flVPhysicsUpdateLocalTime",
		"m_flVariance",
		"m_flVehicleReverseTime",
		"m_flVehicleViewFOV",
		"m_flVerticalOffset",
		"m_flViewkick",
		"m_flVolume",
		"m_flWait",
		"m_flWaitDistance",
		"m_flWaitFinished",
		"m_flWakeRadius",
		"m_flWarnAITime",
		"m_flWaterJumpTime",
		"m_flWaveHeight",
		"m_flWheatleyTalkingUntil",
		"m_flWidth",
		"m_flYaw",
		"m_flYawToExit",
		"m_flZombieLifeTime",
		"m_flexWeight",
		"m_flextarget",
		"m_flextime",
		"m_fog.duration",
		"m_fog.end",
		"m_fog.endLerpTo",
		"m_fog.farz",
		"m_fog.lerptime",
		"m_fog.maxdensity",
		"m_fog.start",
		"m_fog.startLerpTo",
		"m_force",
		"m_forceLimit",
		"m_forceTime",
		"m_gearRatio",
		"m_goalBodyYaw",
		"m_goalHeadInfluence",
		"m_goalSpineYaw",
		"m_height",
		"m_hingeFriction",
		"m_iRespawnFrames",
		"m_inertiaScale",
		"m_initialSpeed",
		"m_lastDamage",
		"m_lastHealthPercentage",
		"m_lastTime",
		"m_length",
		"m_levelTime",
		"m_life",
		"m_linearLimitStart",
		"m_linearLimitStartTime",
		"m_linearLimitTime",
		"m_loadTime",
		"m_looktime",
		"m_ls.flwaitSentence",
		"m_ls.flwaitSound",
		"m_massScale",
		"m_maxRange",
		"m_maxSpeed",
		"m_minLength",
		"m_minTeleportDistance",
		"m_motor.m_inertiaFactor",
		"m_motor.m_lastAcceleration",
		"m_motor.m_lastForce",
		"m_motor.m_lastSpeed",
		"m_motor.m_maxTorque",
		"m_motor.m_restistanceDamping",
		"m_motor.m_speed",
		"m_moveDistance",
		"m_nextShake",
		"m_nodeFOV",
		"m_noiseAmplitude",
		"m_oldSpeed",
		"m_pExpresser.m_flBlockedTalkTime",
		"m_pExpresser.m_flLastTimeAcceptedSpeak",
		"m_pExpresser.m_flStopTalkTime",
		"m_pExpresser.m_flStopTalkTimeWithoutDelay",
		"m_pLockedBestSound.m_flExpireTime",
		"m_pLockedBestSound.m_flOcclusionScale",
		"m_pMotor.m_IdealYaw",
		"m_pMotor.m_YawSpeed",
		"m_pNavigator.m_flLastSuccessfulSimplifyTime",
		"m_pNavigator.m_flNextSimplifyTime",
		"m_pNavigator.m_flTimeLastAvoidanceTriangulate",
		"m_pNavigator.m_pPath.m_goalSpeed",
		"m_pNavigator.m_pPath.m_goalStoppingDistance",
		"m_pNavigator.m_pPath.m_goalTolerance",
		"m_pNavigator.m_pPath.m_routeStartTime",
		"m_pNavigator.m_pPath.m_waypointTolerance",
		"m_pNavigator.m_timePathRebuildDelay",
		"m_pNavigator.m_timePathRebuildFail",
		"m_pNavigator.m_timePathRebuildMax",
		"m_pNavigator.m_timePathRebuildNext",
		"m_pPathfinder.m_flLastStaleLinkCheckTime",
		"m_pSenses.m_LastLookDist",
		"m_pSenses.m_LookDist",
		"m_pSenses.m_TimeLastLook",
		"m_pSenses.m_TimeLastLookHighPriority",
		"m_pSenses.m_TimeLastLookMisc",
		"m_pSenses.m_TimeLastLookNPCs",
		"m_panicSpeed",
		"m_restrike",
		"m_returnSpeed",
		"m_rgflCoordinateFrame",
		"m_rgflSuitNoRepeatTime",
		"m_scrollRate",
		"m_separationDuration",
		"m_skyboxData.fog.end",
		"m_skyboxData.fog.maxdensity",
		"m_skyboxData.fog.start",
		"m_slideFriction",
		"m_spawnInterval",
		"m_speaktime",
		"m_speed",
		"m_spinUp",
		"m_startTime",
		"m_stayTime",
		"m_stopTime",
		"m_swimDepth",
		"m_systemLoadScale",
		"m_targetLevel",
		"m_targetSpeed",
		"m_targetTime",
		"m_taskValue",
		"m_tbdPrev",
		"m_tempConstant",
		"m_tempDamping",
		"m_tempLength",
		"m_tempRelativeDamping",
		"m_textParms.fadeinTime",
		"m_textParms.fadeoutTime",
		"m_textParms.fxTime",
		"m_textParms.holdTime",
		"m_textParms.x",
		"m_textParms.y",
		"m_thrustTime",
		"m_thruster.m_thrust",
		"m_torqueLimit",
		"m_totalLength",
		"m_vecOrigin[0]",
		"m_vecVelocity[0]",/*
		"m_vecVelocity[1]",
		"m_vecVelocity[2]",*/
		"m_vecViewOffset[0]",/*
		"m_vecViewOffset[1]",
		"m_vecViewOffset[2]",*/
		"m_volume",
		"m_waterLevel",
		"m_x",
		"m_xfriction",
		"m_xmax",
		"m_xmin",
		"m_y",
		"m_yfriction",
		"m_ymax",
		"m_ymin",
		"m_z",
		"m_zfriction",
		"m_zmax",
		"m_zmin",
		"overlay_vars.m_AnimOverlay.000.m_flCycle",
		"overlay_vars.m_AnimOverlay.000.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.000.m_flWeight",/*
		"overlay_vars.m_AnimOverlay.001.m_flCycle",
		"overlay_vars.m_AnimOverlay.001.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.001.m_flWeight",
		"overlay_vars.m_AnimOverlay.002.m_flCycle",
		"overlay_vars.m_AnimOverlay.002.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.002.m_flWeight",
		"overlay_vars.m_AnimOverlay.003.m_flCycle",
		"overlay_vars.m_AnimOverlay.003.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.003.m_flWeight",
		"overlay_vars.m_AnimOverlay.004.m_flCycle",
		"overlay_vars.m_AnimOverlay.004.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.004.m_flWeight",
		"overlay_vars.m_AnimOverlay.005.m_flCycle",
		"overlay_vars.m_AnimOverlay.005.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.005.m_flWeight",
		"overlay_vars.m_AnimOverlay.006.m_flCycle",
		"overlay_vars.m_AnimOverlay.006.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.006.m_flWeight",
		"overlay_vars.m_AnimOverlay.007.m_flCycle",
		"overlay_vars.m_AnimOverlay.007.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.007.m_flWeight",
		"overlay_vars.m_AnimOverlay.008.m_flCycle",
		"overlay_vars.m_AnimOverlay.008.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.008.m_flWeight",
		"overlay_vars.m_AnimOverlay.009.m_flCycle",
		"overlay_vars.m_AnimOverlay.009.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.009.m_flWeight",
		"overlay_vars.m_AnimOverlay.010.m_flCycle",
		"overlay_vars.m_AnimOverlay.010.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.010.m_flWeight",
		"overlay_vars.m_AnimOverlay.011.m_flCycle",
		"overlay_vars.m_AnimOverlay.011.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.011.m_flWeight",
		"overlay_vars.m_AnimOverlay.012.m_flCycle",
		"overlay_vars.m_AnimOverlay.012.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.012.m_flWeight",
		"overlay_vars.m_AnimOverlay.013.m_flCycle",
		"overlay_vars.m_AnimOverlay.013.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.013.m_flWeight",
		"overlay_vars.m_AnimOverlay.014.m_flCycle",
		"overlay_vars.m_AnimOverlay.014.m_flPrevCycle",
		"overlay_vars.m_AnimOverlay.014.m_flWeight"*/
	]),
	// STRING_PROPERTY
	new Set([
		"m_Actor",
		"m_AssaultHintGroup",
		"m_AssaultPointName",
		"m_ChainTarget",
		"m_ChildTargetName",
		"m_Info.m_strMaterialName",
		"m_Local.m_chAreaPortalBits",
		"m_Local.m_szScriptOverlayMaterial",
		"m_MainSoundscapeName",
		"m_Master",
		"m_MaterialName",
		"m_ModelName",
		"m_NextAssaultPointName",
		"m_NodeData.iszActivityName",
		"m_NodeData.strEntityName",
		"m_NodeData.strGroup",
		"m_NoiseArrived",
		"m_NoiseArrivedClosed",
		"m_NoiseMoving",
		"m_NoiseMovingClosed",
		"m_NoiseRunning",
		"m_PSName",
		"m_ParticleTrail.m_strMaterialName",
		"m_PlayerClass.m_iszClassIcon",
		"m_PlayerClass.m_iszCustomModel",
		"m_RallyPoint",
		"m_RallySequenceName",
		"m_RelationshipString",
		"m_RenameNPC",
		"m_SlaveName",
		"m_SoundClose",
		"m_SoundMoving",
		"m_SoundName",
		"m_SoundOpen",
		"m_SoundscapeName",
		"m_SourceEntityName",
		"m_SourceName",
		"m_SpotlightTextureName",
		"m_SquadName",
		"m_String_tFileName",
		"m_String_tMapName",
		"m_String_tMaterialName",
		"m_String_tSlideshowDirectory",
		"m_VehiclePhysics.m_bLastThrottle",
		"m_VehiclePhysics.m_controls.brake",
		"m_VehiclePhysics.m_controls.handbrake",
		"m_VehiclePhysics.m_nSpeed",
		"m_VehiclePhysics.m_throttleActiveTime",
		"m_VehiclePhysics.m_wheelPosition",
		"m_actionPointName",
		"m_altName",
		"m_anglesOverrideString",
		"m_bEngineLocked",
		"m_botName",
		"m_breakSound",
		"m_chCurrentSlideLists",
		"m_chPoseIndex",
		"m_className",
		"m_command",
		"m_currentSound",
		"m_directionEntityName",
		"m_displayText",
		"m_dpv",
		"m_engineSoundName",
		"m_flMinimumSpeedToEnterExit",
		"m_flTurnOffKeepUpright",
		"m_gasSound",
		"m_globalstate",
		"m_hKeepUpright",
		"m_hNPCDriver",
		"m_iBackgroundBModelName",
		"m_iClassname",
		"m_iFilterClass",
		"m_iFilterName",
		"m_iFilterName[0]", /*
		"m_iFilterName[1]",
		"m_iFilterName[2]",
		"m_iFilterName[3]",
		"m_iFilterName[4]",*/
		"m_iGlobalname",
		"m_iLandmark",
		"m_iName",
		"m_iNextKey",
		"m_iNextLinkName",
		"m_iParent",
		"m_initialCommand",
		"m_initialOwner",
		"m_iszActor",
		"m_iszAlertExpression",
		"m_iszArrivalConceptModifier",
		"m_iszAssociateTeamEntityName",
		"m_iszAssociatedModel",
		"m_iszAttachmentName",
		"m_iszAttractPlayerConceptModifier",
		"m_iszAttributeName",
		"m_iszBasePropData",
		"m_iszBlueTeleport",
		"m_iszBotName",
		"m_iszBounceSound",
		"m_iszBreakModelMessage",
		"m_iszBreakableModel",
		"m_iszCPNames",
		"m_iszCameraName",
		"m_iszCapLayoutInHUD",
		"m_iszCapPointName",
		"m_iszCaptureEndSound",
		"m_iszCaptureInProgress",
		"m_iszCaptureInterrupted",
		"m_iszCaptureStartSound",
		"m_iszChapterTitle",
		"m_iszCombatExpression",
		"m_iszComingBackConceptModifier",
		"m_iszCommentaryFile",
		"m_iszCommentaryFileNoHDR",
		"m_iszConceptModifiers",
		"m_iszControlPointName",
		"m_iszControlPointNames[0]",/*
		"m_iszControlPointNames[10]",
		"m_iszControlPointNames[11]",
		"m_iszControlPointNames[12]",
		"m_iszControlPointNames[13]",
		"m_iszControlPointNames[14]",
		"m_iszControlPointNames[15]",
		"m_iszControlPointNames[16]",
		"m_iszControlPointNames[17]",
		"m_iszControlPointNames[18]",
		"m_iszControlPointNames[19]",
		"m_iszControlPointNames[1]",
		"m_iszControlPointNames[20]",
		"m_iszControlPointNames[21]",
		"m_iszControlPointNames[22]",
		"m_iszControlPointNames[23]",
		"m_iszControlPointNames[24]",
		"m_iszControlPointNames[25]",
		"m_iszControlPointNames[26]",
		"m_iszControlPointNames[27]",
		"m_iszControlPointNames[28]",
		"m_iszControlPointNames[29]",
		"m_iszControlPointNames[2]",
		"m_iszControlPointNames[30]",
		"m_iszControlPointNames[31]",
		"m_iszControlPointNames[32]",
		"m_iszControlPointNames[33]",
		"m_iszControlPointNames[34]",
		"m_iszControlPointNames[35]",
		"m_iszControlPointNames[36]",
		"m_iszControlPointNames[37]",
		"m_iszControlPointNames[38]",
		"m_iszControlPointNames[39]",
		"m_iszControlPointNames[3]",
		"m_iszControlPointNames[40]",
		"m_iszControlPointNames[41]",
		"m_iszControlPointNames[42]",
		"m_iszControlPointNames[43]",
		"m_iszControlPointNames[44]",
		"m_iszControlPointNames[45]",
		"m_iszControlPointNames[46]",
		"m_iszControlPointNames[47]",
		"m_iszControlPointNames[48]",
		"m_iszControlPointNames[49]",
		"m_iszControlPointNames[4]",
		"m_iszControlPointNames[50]",
		"m_iszControlPointNames[51]",
		"m_iszControlPointNames[52]",
		"m_iszControlPointNames[53]",
		"m_iszControlPointNames[54]",
		"m_iszControlPointNames[55]",
		"m_iszControlPointNames[56]",
		"m_iszControlPointNames[57]",
		"m_iszControlPointNames[58]",
		"m_iszControlPointNames[59]",
		"m_iszControlPointNames[5]",
		"m_iszControlPointNames[60]",
		"m_iszControlPointNames[61]",
		"m_iszControlPointNames[62]",
		"m_iszControlPointNames[6]",
		"m_iszControlPointNames[7]",
		"m_iszControlPointNames[8]",
		"m_iszControlPointNames[9]",*/
		"m_iszCountdownImage",
		"m_iszCustomMove",
		"m_iszCustomTouchTrigger",
		"m_iszDamageFilterName",
		"m_iszDeathExpression",
		"m_iszDecal",
		"m_iszDefaultAnim",
		"m_iszDestinationGroup",
		"m_iszDetailSpriteMaterial",
		"m_iszDoorName",
		"m_iszEffectName",
		"m_iszEndEntity",
		"m_iszEnemyFilterName",
		"m_iszEnemyName",
		"m_iszEnemyTeamScoreSound",
		"m_iszEntity",
		"m_iszEntityName",
		"m_iszEntry",
		"m_iszEventName",
		"m_iszExcludedClass",
		"m_iszExpressionOverride",
		"m_iszExpressionScene",
		"m_iszFailureConceptModifier",
		"m_iszFireballSprite",
		"m_iszGameEvent",
		"m_iszGibModel",
		"m_iszGoal",
		"m_iszGoalNode",
		"m_iszGroupMembers[0]",/*
		"m_iszGroupMembers[10]",
		"m_iszGroupMembers[11]",
		"m_iszGroupMembers[12]",
		"m_iszGroupMembers[13]",
		"m_iszGroupMembers[14]",
		"m_iszGroupMembers[15]",
		"m_iszGroupMembers[1]",
		"m_iszGroupMembers[2]",
		"m_iszGroupMembers[3]",
		"m_iszGroupMembers[4]",
		"m_iszGroupMembers[5]",
		"m_iszGroupMembers[6]",
		"m_iszGroupMembers[7]",
		"m_iszGroupMembers[8]",
		"m_iszGroupMembers[9]",*/
		"m_iszHudIcon",
		"m_iszHudResFile",
		"m_iszIcon",
		"m_iszIdleExpression",
		"m_iszIgniteParticleName",
		"m_iszIgniteSoundName",
		"m_iszIngoreEnt",
		"m_iszLaserTarget",
		"m_iszLastTarget",
		"m_iszLightingOrigin",
		"m_iszLightingOriginRelative",
		"m_iszLinkedCPs[0]",/*
		"m_iszLinkedCPs[1]",
		"m_iszLinkedCPs[2]",
		"m_iszLinkedCPs[3]",
		"m_iszLinkedCPs[4]",
		"m_iszLinkedCPs[5]",
		"m_iszLinkedCPs[6]",
		"m_iszLinkedCPs[7]",*/
		"m_iszLinkedPathTracks[0]",/*
		"m_iszLinkedPathTracks[1]",
		"m_iszLinkedPathTracks[2]",
		"m_iszLinkedPathTracks[3]",
		"m_iszLinkedPathTracks[4]",
		"m_iszLinkedPathTracks[5]",
		"m_iszLinkedPathTracks[6]",
		"m_iszLinkedPathTracks[7]",*/
		"m_iszListenFilter",
		"m_iszListener",
		"m_iszMannVsMachineWaveClassNames",
		"m_iszMannVsMachineWaveClassNames2",
		"m_iszMaster",
		"m_iszMatchingMapPlacedTeleporter",
		"m_iszMeasureTarget",
		"m_iszMessage",
		"m_iszMissingWeaponConceptModifier",
		"m_iszModel",
		"m_iszModelName",
		"m_iszMvMPopfileName",
		"m_iszNPCClassname",
		"m_iszName",
		"m_iszNewTarget",
		"m_iszNextScript",
		"m_iszOverlayNames",
		"m_iszOverlayNames[0]",/*
		"m_iszOverlayNames[1]",
		"m_iszOverlayNames[2]",
		"m_iszOverlayNames[3]",
		"m_iszOverlayNames[4]",
		"m_iszOverlayNames[5]",
		"m_iszOverlayNames[6]",
		"m_iszOverlayNames[7]",
		"m_iszOverlayNames[8]",
		"m_iszOverlayNames[9]",*/
		"m_iszOverrideScript",
		"m_iszPaperEffect",
		"m_iszParentAttachment",
		"m_iszParticle",
		"m_iszParticleName",
		"m_iszPattern",
		"m_iszPendingWeapon",
		"m_iszPhysicsDamageTableName",
		"m_iszPlay",
		"m_iszPlayerName",
		"m_iszPoseParameterName",
		"m_iszPostArrivalConceptModifier",
		"m_iszPostCommands",
		"m_iszPostIdle",
		"m_iszPreCommands",
		"m_iszPreIdle",
		"m_iszPrintName",
		"m_iszPropData",
		"m_iszPropDropSound",
		"m_iszPropModelName",
		"m_iszPropName",
		"m_iszPropPickupSound",
		"m_iszProxyEntityName",
		"m_iszPuntSound",
		"m_iszRedTeleport",
		"m_iszResFile",
		"m_iszRespawnRoomName",
		"m_iszResponseContext",
		"m_iszResumeSceneFile",
		"m_iszRetrieveConceptModifier",
		"m_iszRoundBlueSpawn",
		"m_iszRoundRedSpawn",
		"m_iszSceneCustomMoveSeq",
		"m_iszSceneFile",
		"m_iszScenes[0]",/*
		"m_iszScenes[10]",
		"m_iszScenes[11]",
		"m_iszScenes[12]",
		"m_iszScenes[13]",
		"m_iszScenes[14]",
		"m_iszScenes[15]",
		"m_iszScenes[1]",
		"m_iszScenes[2]",
		"m_iszScenes[3]",
		"m_iszScenes[4]",
		"m_iszScenes[5]",
		"m_iszScenes[6]",
		"m_iszScenes[7]",
		"m_iszScenes[8]",
		"m_iszScenes[9]",*/
		"m_iszScriptId",
		"m_iszScriptName",
		"m_iszScriptThinkFunction",
		"m_iszSentence",
		"m_iszShootSound",
		"m_iszSkyboxName",
		"m_iszSound",
		"m_iszSoundMove",
		"m_iszSoundMovePing",
		"m_iszSoundName",
		"m_iszSoundStart",
		"m_iszSoundStop",
		"m_iszSparkName",
		"m_iszSpawnManagerName",
		"m_iszSpawnObject",
		"m_iszSpeakerName",
		"m_iszSpeakers",
		"m_iszSpriteName",
		"m_iszStartConceptModifier",
		"m_iszStartEntity",
		"m_iszStartNode",
		"m_iszSubject",
		"m_iszSuccessConceptModifier",
		"m_iszTags",
		"m_iszTarget1",
		"m_iszTarget2",
		"m_iszTarget3",
		"m_iszTarget4",
		"m_iszTarget5",
		"m_iszTarget6",
		"m_iszTarget7",
		"m_iszTarget8",
		"m_iszTargetAttachment",
		"m_iszTemplate",
		"m_iszTemplateData",
		"m_iszTemplateEntityNames[0]",/*
		"m_iszTemplateEntityNames[10]",
		"m_iszTemplateEntityNames[11]",
		"m_iszTemplateEntityNames[12]",
		"m_iszTemplateEntityNames[13]",
		"m_iszTemplateEntityNames[14]",
		"m_iszTemplateEntityNames[15]",
		"m_iszTemplateEntityNames[1]",
		"m_iszTemplateEntityNames[2]",
		"m_iszTemplateEntityNames[3]",
		"m_iszTemplateEntityNames[4]",
		"m_iszTemplateEntityNames[5]",
		"m_iszTemplateEntityNames[6]",
		"m_iszTemplateEntityNames[7]",
		"m_iszTemplateEntityNames[8]",
		"m_iszTemplateEntityNames[9]",*/
		"m_iszTemplateName",
		"m_iszTracerType",
		"m_iszTrailEffect",
		"m_iszTrain",
		"m_iszTriggers",
		"m_iszVScripts",
		"m_iszVehicleName",
		"m_iszViewPosition",
		"m_iszViewTarget",
		"m_iszWaitOverConceptModifier",
		"m_iszWaitPointName",
		"m_iszWarnSound",
		"m_iszWeaponName",
		"m_iszYourTeamScoreSound",
		"m_lookupFilename",
		"m_ls.sLockedSentence",
		"m_ls.sLockedSound",
		"m_ls.sUnlockedSentence",
		"m_ls.sUnlockedSound",
		"m_messageText",
		"m_modelString",
		"m_movementSoundName",
		"m_nBoostTimeLeft",
		"m_nCase[0]",/*
		"m_nCase[10]",
		"m_nCase[11]",
		"m_nCase[12]",
		"m_nCase[13]",
		"m_nCase[14]",
		"m_nCase[15]",
		"m_nCase[1]",
		"m_nCase[2]",
		"m_nCase[3]",
		"m_nCase[4]",
		"m_nCase[5]",
		"m_nCase[6]",
		"m_nCase[7]",
		"m_nCase[8]",
		"m_nCase[9]",*/
		"m_nIgnoredEntityNames[0]",/*
		"m_nIgnoredEntityNames[10]",
		"m_nIgnoredEntityNames[11]",
		"m_nIgnoredEntityNames[12]",
		"m_nIgnoredEntityNames[13]",
		"m_nIgnoredEntityNames[14]",
		"m_nIgnoredEntityNames[15]",
		"m_nIgnoredEntityNames[1]",
		"m_nIgnoredEntityNames[2]",
		"m_nIgnoredEntityNames[3]",
		"m_nIgnoredEntityNames[4]",
		"m_nIgnoredEntityNames[5]",
		"m_nIgnoredEntityNames[6]",
		"m_nIgnoredEntityNames[7]",
		"m_nIgnoredEntityNames[8]",
		"m_nIgnoredEntityNames[9]",
		"m_nLogicBranchNames[0]",
		"m_nLogicBranchNames[10]",
		"m_nLogicBranchNames[11]",
		"m_nLogicBranchNames[12]",
		"m_nLogicBranchNames[13]",
		"m_nLogicBranchNames[14]",
		"m_nLogicBranchNames[15]",
		"m_nLogicBranchNames[1]",
		"m_nLogicBranchNames[2]",
		"m_nLogicBranchNames[3]",
		"m_nLogicBranchNames[4]",
		"m_nLogicBranchNames[5]",
		"m_nLogicBranchNames[6]",
		"m_nLogicBranchNames[7]",
		"m_nLogicBranchNames[8]",
		"m_nLogicBranchNames[9]",*/
		"m_nLookAtName",
		"m_nVehicleType",
		"m_nameAttach",
		"m_nameAttach1",
		"m_nameAttach2",
		"m_nameAttachEnd",
		"m_nameAttachStart",
		"m_nameSystem",
		"m_netlookupFilename",
		"m_newTargetName",
		"m_nextActionPointName",
		"m_nextMapName",
		"m_pServerVehicle.m_ViewSmoothing.bRunningEnterExit",
		"m_pServerVehicle.m_ViewSmoothing.bWasRunningAnim",
		"m_pServerVehicle.m_ViewSmoothing.flEnterExitDuration",
		"m_pServerVehicle.m_ViewSmoothing.flEnterExitStartTime",
		"m_pServerVehicle.m_ViewSmoothing.flFOV",
		"m_pServerVehicle.m_ViewSmoothing.vecAngleDiffMin",
		"m_pServerVehicle.m_ViewSmoothing.vecAngleDiffSaved",
		"m_pServerVehicle.m_ViewSmoothing.vecAnglesSaved",
		"m_pServerVehicle.m_ViewSmoothing.vecOriginSaved",
		"m_pServerVehicle.m_chPreviousTextureType",
		"m_pServerVehicle.m_flSpeedPercentage",
		"m_pServerVehicle.m_flTurnDegrees",
		"m_pServerVehicle.m_flVehicleVolume",
		"m_pServerVehicle.m_hExitBlocker",
		"m_pServerVehicle.m_iCurrentExitAnim",
		"m_pServerVehicle.m_iSoundGear",
		"m_pServerVehicle.m_lastSpeed",
		"m_pServerVehicle.m_nNPCButtons",
		"m_pServerVehicle.m_nPrevNPCButtons",
		"m_pServerVehicle.m_savedViewOffset",
		"m_pServerVehicle.m_soundState",
		"m_pServerVehicle.m_soundStateStartTime",
		"m_pServerVehicle.m_vecCurrentExitEndPoint",
		"m_pServerVehicle.m_vehicleSounds.iszSound",
		"m_pServerVehicle.m_vehicleSounds.iszStateSounds",
		"m_pServerVehicle.m_vehicleSounds.minStateTime",
		"m_positionNames[0]",/*
		"m_positionNames[1]",
		"m_positionNames[2]",
		"m_positionNames[3]",
		"m_positionNames[4]",
		"m_positionNames[5]",
		"m_positionNames[6]",
		"m_positionNames[7]",*/
		"m_pszCapLayoutInHUD",
		"m_pszCustomUpgradesFile",
		"m_pszDestinationBaseName",
		"m_pszHudIcon",
		"m_pszHudResFile",
		"m_pszTeamGoalStringBlue",
		"m_pszTeamGoalStringRed",
		"m_pzsFireParticles",
		"m_pzsFireSound",
		"m_pzsModelOverride",
		"m_respawnInterval",
		"m_rgbTimeBasedDamage",
		"m_sFaceEntityName",
		"m_sGoalEnt",
		"m_sMaster",
		"m_sNoise",
		"m_sPath",
		"m_sSourceEntName",
		"m_soundStart",
		"m_soundStop",
		"m_soundscapeName",
		"m_spawnData.m_pszGroupName",
		"m_spawnData.m_pszPathName",
		"m_spawnEquipment",
		"m_spawnOnStart",
		"m_startSoundName",
		"m_strAllowUse",
		"m_strExplodeParticleName",
		"m_strExplodeSoundName",
		"m_strHintGroup",
		"m_strHullName",
		"m_strLaunchTarget",
		"m_strLightingLandmark",
		"m_strMaterial",
		"m_strMaterialModel",
		"m_strMeasureReference",
		"m_strMeasureTarget",
		"m_strNewHintGroup",
		"m_strOverlayMaterial",
		"m_strPointCamera",
		"m_strRespawnEnt",
		"m_strRopeMaterialModel",
		"m_strScriptArrivalSequence",
		"m_strSearchName",
		"m_strSourceClassName",
		"m_strStatisticName",
		"m_strTarget",
		"m_strTargetReference",
		"m_surfacePropName",
		"m_swapModel",
		"m_szAnimExtension",
		"m_szDisplayText",
		"m_szHudIcon",
		"m_szInstanceFilename",
		"m_szLandmarkName",
		"m_szLastPlaceName",
		"m_szLastSound",
		"m_szMapName",
		"m_szMaterialName",
		"m_szMaterialVar",
		"m_szMaterialVarValue",
		"m_szModel",
		"m_szNetname",
		"m_szNetworkIDString",
		"m_szPaperEffect",
		"m_szResFile",
		"m_szSlideshowDirectory",
		"m_szTeamname",
		"m_szText",
		"m_szTrailEffect",
		"m_szWeaponClassname",
		"m_target",
		"m_targetEntityName",
		"m_taskEntityName",
		"m_teamName",
		"m_templateName",
		"m_textParms",
		"m_trackBottomName",
		"m_trackTopName",
		"m_trainName",
		"m_uchShuffleCaseMap",
		"m_vehicleScript",
		"m_weaponNames"
	]),
	// ENTITY_PROPERTY
	new Set([
		"\"healing_array\"",
		"\"player_object_array\"",
		"\"team_object_array\"",
		"healing_array_element",
		"m_AttributeManager.m_hOuter",
		"m_EndEntity",
		"m_Handle",
		"m_Local.m_PlayerFog.m_hCtrl",
		"m_Network.m_hParent",
		"m_Shared.m_ConditionData.000.m_pProvider",/*
		"m_Shared.m_ConditionData.001.m_pProvider",
		"m_Shared.m_ConditionData.002.m_pProvider",
		"m_Shared.m_ConditionData.003.m_pProvider",
		"m_Shared.m_ConditionData.004.m_pProvider",
		"m_Shared.m_ConditionData.005.m_pProvider",
		"m_Shared.m_ConditionData.006.m_pProvider",
		"m_Shared.m_ConditionData.007.m_pProvider",
		"m_Shared.m_ConditionData.008.m_pProvider",
		"m_Shared.m_ConditionData.009.m_pProvider",
		"m_Shared.m_ConditionData.010.m_pProvider",
		"m_Shared.m_ConditionData.011.m_pProvider",
		"m_Shared.m_ConditionData.012.m_pProvider",
		"m_Shared.m_ConditionData.013.m_pProvider",
		"m_Shared.m_ConditionData.014.m_pProvider",
		"m_Shared.m_ConditionData.015.m_pProvider",
		"m_Shared.m_ConditionData.016.m_pProvider",
		"m_Shared.m_ConditionData.017.m_pProvider",
		"m_Shared.m_ConditionData.018.m_pProvider",
		"m_Shared.m_ConditionData.019.m_pProvider",
		"m_Shared.m_ConditionData.020.m_pProvider",
		"m_Shared.m_ConditionData.021.m_pProvider",
		"m_Shared.m_ConditionData.022.m_pProvider",
		"m_Shared.m_ConditionData.023.m_pProvider",
		"m_Shared.m_ConditionData.024.m_pProvider",
		"m_Shared.m_ConditionData.025.m_pProvider",
		"m_Shared.m_ConditionData.026.m_pProvider",
		"m_Shared.m_ConditionData.027.m_pProvider",
		"m_Shared.m_ConditionData.028.m_pProvider",
		"m_Shared.m_ConditionData.029.m_pProvider",
		"m_Shared.m_ConditionData.030.m_pProvider",
		"m_Shared.m_ConditionData.031.m_pProvider",
		"m_Shared.m_ConditionData.032.m_pProvider",
		"m_Shared.m_ConditionData.033.m_pProvider",
		"m_Shared.m_ConditionData.034.m_pProvider",
		"m_Shared.m_ConditionData.035.m_pProvider",
		"m_Shared.m_ConditionData.036.m_pProvider",
		"m_Shared.m_ConditionData.037.m_pProvider",
		"m_Shared.m_ConditionData.038.m_pProvider",
		"m_Shared.m_ConditionData.039.m_pProvider",
		"m_Shared.m_ConditionData.040.m_pProvider",
		"m_Shared.m_ConditionData.041.m_pProvider",
		"m_Shared.m_ConditionData.042.m_pProvider",
		"m_Shared.m_ConditionData.043.m_pProvider",
		"m_Shared.m_ConditionData.044.m_pProvider",
		"m_Shared.m_ConditionData.045.m_pProvider",
		"m_Shared.m_ConditionData.046.m_pProvider",
		"m_Shared.m_ConditionData.047.m_pProvider",
		"m_Shared.m_ConditionData.048.m_pProvider",
		"m_Shared.m_ConditionData.049.m_pProvider",
		"m_Shared.m_ConditionData.050.m_pProvider",
		"m_Shared.m_ConditionData.051.m_pProvider",
		"m_Shared.m_ConditionData.052.m_pProvider",
		"m_Shared.m_ConditionData.053.m_pProvider",
		"m_Shared.m_ConditionData.054.m_pProvider",
		"m_Shared.m_ConditionData.055.m_pProvider",
		"m_Shared.m_ConditionData.056.m_pProvider",
		"m_Shared.m_ConditionData.057.m_pProvider",
		"m_Shared.m_ConditionData.058.m_pProvider",
		"m_Shared.m_ConditionData.059.m_pProvider",
		"m_Shared.m_ConditionData.060.m_pProvider",
		"m_Shared.m_ConditionData.061.m_pProvider",
		"m_Shared.m_ConditionData.062.m_pProvider",
		"m_Shared.m_ConditionData.063.m_pProvider",
		"m_Shared.m_ConditionData.064.m_pProvider",
		"m_Shared.m_ConditionData.065.m_pProvider",
		"m_Shared.m_ConditionData.066.m_pProvider",
		"m_Shared.m_ConditionData.067.m_pProvider",
		"m_Shared.m_ConditionData.068.m_pProvider",
		"m_Shared.m_ConditionData.069.m_pProvider",
		"m_Shared.m_ConditionData.070.m_pProvider",
		"m_Shared.m_ConditionData.071.m_pProvider",
		"m_Shared.m_ConditionData.072.m_pProvider",
		"m_Shared.m_ConditionData.073.m_pProvider",
		"m_Shared.m_ConditionData.074.m_pProvider",
		"m_Shared.m_ConditionData.075.m_pProvider",
		"m_Shared.m_ConditionData.076.m_pProvider",
		"m_Shared.m_ConditionData.077.m_pProvider",
		"m_Shared.m_ConditionData.078.m_pProvider",
		"m_Shared.m_ConditionData.079.m_pProvider",
		"m_Shared.m_ConditionData.080.m_pProvider",
		"m_Shared.m_ConditionData.081.m_pProvider",
		"m_Shared.m_ConditionData.082.m_pProvider",
		"m_Shared.m_ConditionData.083.m_pProvider",
		"m_Shared.m_ConditionData.084.m_pProvider",
		"m_Shared.m_ConditionData.085.m_pProvider",
		"m_Shared.m_ConditionData.086.m_pProvider",
		"m_Shared.m_ConditionData.087.m_pProvider",
		"m_Shared.m_ConditionData.088.m_pProvider",
		"m_Shared.m_ConditionData.089.m_pProvider",
		"m_Shared.m_ConditionData.090.m_pProvider",
		"m_Shared.m_ConditionData.091.m_pProvider",
		"m_Shared.m_ConditionData.092.m_pProvider",
		"m_Shared.m_ConditionData.093.m_pProvider",
		"m_Shared.m_ConditionData.094.m_pProvider",
		"m_Shared.m_ConditionData.095.m_pProvider",
		"m_Shared.m_ConditionData.096.m_pProvider",
		"m_Shared.m_ConditionData.097.m_pProvider",
		"m_Shared.m_ConditionData.098.m_pProvider",
		"m_Shared.m_ConditionData.099.m_pProvider",
		"m_Shared.m_ConditionData.100.m_pProvider",
		"m_Shared.m_ConditionData.101.m_pProvider",
		"m_Shared.m_ConditionData.102.m_pProvider",
		"m_Shared.m_ConditionData.103.m_pProvider",
		"m_Shared.m_ConditionData.104.m_pProvider",
		"m_Shared.m_ConditionData.105.m_pProvider",
		"m_Shared.m_ConditionData.106.m_pProvider",
		"m_Shared.m_ConditionData.107.m_pProvider",
		"m_Shared.m_ConditionData.108.m_pProvider",
		"m_Shared.m_ConditionData.109.m_pProvider",
		"m_Shared.m_ConditionData.110.m_pProvider",
		"m_Shared.m_ConditionData.111.m_pProvider",
		"m_Shared.m_ConditionData.112.m_pProvider",
		"m_Shared.m_ConditionData.113.m_pProvider",
		"m_Shared.m_ConditionData.114.m_pProvider",
		"m_Shared.m_ConditionData.115.m_pProvider",
		"m_Shared.m_ConditionData.116.m_pProvider",
		"m_Shared.m_ConditionData.117.m_pProvider",
		"m_Shared.m_ConditionData.118.m_pProvider",
		"m_Shared.m_ConditionData.119.m_pProvider",
		"m_Shared.m_ConditionData.120.m_pProvider",
		"m_Shared.m_ConditionData.121.m_pProvider",
		"m_Shared.m_ConditionData.122.m_pProvider",
		"m_Shared.m_ConditionData.123.m_pProvider",
		"m_Shared.m_ConditionData.124.m_pProvider",
		"m_Shared.m_ConditionData.125.m_pProvider",
		"m_Shared.m_ConditionData.126.m_pProvider",
		"m_Shared.m_ConditionData.127.m_pProvider",
		"m_Shared.m_ConditionData.128.m_pProvider",
		"m_Shared.m_ConditionData.129.m_pProvider",
		"m_Shared.m_ConditionData.130.m_pProvider",*/
		"m_Shared.m_hCarriedObject",
		"m_Shared.m_hDisguiseTarget",
		"m_Shared.m_hDisguiseWeapon",
		"m_Shared.m_hPasstimePassTarget",
		"m_Shared.m_hStunner",
		"m_Shared.m_hSwitchTo",
		"m_SoundPool.m_hOwner",
		"m_SoundPool.m_hTarget",
		"m_StartEntity",
		"m_attachedObject",
		"m_hActivator",
		"m_hActiveMinigame",
		"m_hActiveWeapon",
		"m_hActor",
		"m_hActorList",
		"m_hAssociatedModel",
		"m_hAttachEntity",
		"m_hAttachedToEntity",
		"m_hAttacker",
		"m_hAutoAimTarget",
		"m_hBall",
		"m_hBirthdayPlayer",
		"m_hBlocker",
		"m_hBlueKothTimer",
		"m_hBlueTeamLeader",
		"m_hBonusLogic",
		"m_hBonusWinner",
		"m_hBreaker",
		"m_hBuilder",
		"m_hBuiltOnEntity",
		"m_hCamera",
		"m_hCarrier",
		"m_hCarryingPlayer",
		"m_hCine",
		"m_hCoach",
		"m_hConstraintEntity",
		"m_hControlPointEnts",
		"m_hCurrentBlocker",
		"m_hCurrentInstance",
		"m_hCurrentTarget",
		"m_hDamageEntity",
		"m_hDamageFilter",
		"m_hDeflectOwner",
		"m_hDoorBlocker",
		"m_hEffect",
		"m_hEffectEntity",
		"m_hEndEntity",
		"m_hEndPoint",
		"m_hEnemy",
		"m_hEnemyFilter",
		"m_hEnemyOccluder",
		"m_hEntAttached",
		"m_hEntity",
		"m_hEntityIgnore",
		"m_hExpressionSceneEnt",
		"m_hExtraWearable",
		"m_hExtraWearableViewModel",
		"m_hEyeLookTarget",
		"m_hFilter",
		"m_hFlameManager",
		"m_hFlareEnt",
		"m_hForcedInteractionPartner",
		"m_hForcedTarget",
		"m_hGlowEnt",
		"m_hGoalEnt",
		"m_hGoalEntity",
		"m_hGrapplingHookTarget",
		"m_hGroundEntity",
		"m_hHealingTarget",
		"m_hHighFivePartner",
		"m_hHintOwner",
		"m_hHomingTarget",
		"m_hIgnoreEntity",
		"m_hInflictor",
		"m_hInfoCameraLink",
		"m_hInteractionPartner",
		"m_hInteractionRelativeEntity",
		"m_hInterruptScene",
		"m_hItem",
		"m_hKiller",
		"m_hLastAttacker",
		"m_hLastFoundEntity",
		"m_hLastHealingTarget",
		"m_hLastInteractionTestTarget",
		"m_hLastWeapon",
		"m_hLaunchTarget",
		"m_hLauncher",
		"m_hLeader",
		"m_hLightingLandmark",
		"m_hLightingOrigin",
		"m_hLightingOriginRelative",
		"m_hListenFilter",
		"m_hLockTarget",
		"m_hLockedBy",
		"m_hLocker",
		"m_hLookAtEntity",
		"m_hLookTarget",
		"m_hMaster",
		"m_hMeasureReference",
		"m_hMeasureTarget",
		"m_hMoveChild",
		"m_hMoveParent",
		"m_hMovePeer",
		"m_hMovingEntity",
		"m_hMyWeapons",
		"m_hMyWearables",
		"m_hNPC",
		"m_hNextCine",
		"m_hObjectBeingBuilt",
		"m_hObserverTarget",
		"m_hOpeningDoor",
		"m_hOriginalLauncher",
		"m_hOwner",
		"m_hOwnerEntity",
		"m_hPhysicsAttacker",
		"m_hPhysicsBlocker",
		"m_hPlayer",
		"m_hPlayerOwner",
		"m_hPrevCarrier",
		"m_hPrevOwner",
		"m_hProjectile",
		"m_hProps",
		"m_hProxySoundscape",
		"m_hRagWearables",
		"m_hRagdoll",
		"m_hRedKothTimer",
		"m_hRedTeamLeader",
		"m_hRobotArm",
		"m_hRope",
		"m_hSaveWeapon",
		"m_hScenes[0]",/*
		"m_hScenes[10]",
		"m_hScenes[11]",
		"m_hScenes[12]",
		"m_hScenes[13]",
		"m_hScenes[14]",
		"m_hScenes[15]",
		"m_hScenes[1]",
		"m_hScenes[2]",
		"m_hScenes[3]",
		"m_hScenes[4]",
		"m_hScenes[5]",
		"m_hScenes[6]",
		"m_hScenes[7]",
		"m_hScenes[8]",
		"m_hScenes[9]",*/
		"m_hSecondaryLastWeapon",
		"m_hSoundscape",
		"m_hSpeaker",
		"m_hStartPoint",
		"m_hStoredPathTarget",
		"m_hStudent",
		"m_hTarget",
		"m_hTarget1",
		"m_hTarget2",
		"m_hTarget3",
		"m_hTarget4",
		"m_hTarget5",
		"m_hTarget6",
		"m_hTarget7",
		"m_hTarget8",
		"m_hTargetEnt",
		"m_hTargetEntity",
		"m_hTargetPlayer",
		"m_hTargetReference",
		"m_hThrower",
		"m_hTrain",
		"m_hUnragdoll",
		"m_hUseEntity",
		"m_hVehicle",
		"m_hVehicleEntity",
		"m_hViewEntity",
		"m_hViewModel",
		"m_hViewPosition",
		"m_hViewPositionMover",
		"m_hViewTarget",
		"m_hViewTargetAngles",
		"m_hWaitingForThisResumeScene",
		"m_hWeapon",
		"m_hWeaponAssociatedWith",
		"m_hZoomOwner",
		"m_itHandle",
		"m_pActivator",
		"m_pBlocker",
		"m_pCurrentKeyFrame",
		"m_pHintNode",
		"m_pJet",
		"m_pLockedBestSound.m_hOwner",
		"m_pLockedBestSound.m_hTarget",
		"m_pMoveProbe.m_hLastBlockingEnt",
		"m_pNavigator.m_hBigStepGroundEnt",
		"m_pNavigator.m_hLastBlockingEnt",
		"m_pNavigator.m_pPath.m_goalDirectionTarget",
		"m_pNavigator.m_pPath.m_goalSpeedTarget",
		"m_pNavigator.m_pPath.m_target",
		"m_pNextKey",
		"m_pParent",
		"m_pPath",
		"m_pPostKeyFrame",
		"m_pPreKeyFrame",
		"m_pPrevKey",
		"m_pSprite",
		"m_pTargetKeyFrame",
		"m_paltpath",
		"m_player",
		"m_pnext",
		"m_pool",
		"m_ppath",
		"m_pprevious",
		"m_rgEntities",
		"m_trackBottom",
		"m_trackTop",
		"m_train",
		"moveparent",
		"player_object_array_element",
		"team_object_array_element"
	]),
	// VECTOR_PROPERTY
	new Set([
		"m_AmbientLight.m_vColor",
		"m_AmbientLight.m_vPos",
		"m_Angles",
		"m_Collision.m_vecMaxs",
		"m_Collision.m_vecMaxsPreScaled",
		"m_Collision.m_vecMins",
		"m_Collision.m_vecMinsPreScaled",
		"m_Collision.m_vecSpecifiedSurroundingMaxs",
		"m_Collision.m_vecSpecifiedSurroundingMaxsPreScaled",
		"m_Collision.m_vecSpecifiedSurroundingMins",
		"m_Collision.m_vecSpecifiedSurroundingMinsPreScaled",
		"m_CommandMoveMonitor.m_vMark",
		"m_DirLight.m_vColor",
		"m_DirLight.m_vPos",
		"m_DmgOrigin",
		"m_EndColor",
		"m_GibDir",
		"m_HackedGunPos",
		"m_LinearFloatLightColor",
		"m_Local.m_audio.localSound",
		"m_Local.m_audio.localSound[0]",/*
		"m_Local.m_audio.localSound[1]",
		"m_Local.m_audio.localSound[2]",
		"m_Local.m_audio.localSound[3]",
		"m_Local.m_audio.localSound[4]",
		"m_Local.m_audio.localSound[5]",
		"m_Local.m_audio.localSound[6]",
		"m_Local.m_audio.localSound[7]",*/
		"m_Local.m_fog.dirPrimary",
		"m_Local.m_skybox3d.fog.dirPrimary",
		"m_Local.m_skybox3d.origin",
		"m_Local.m_vecOverViewpoint",
		"m_Local.m_vecPunchAngle",
		"m_Local.m_vecPunchAngleVel",
		"m_Origin",
		"m_PlayerClass.m_angCustomModelRotation",
		"m_PlayerClass.m_vecCustomModelOffset",
		"m_SelfMoveMonitor.m_vMark",
		"m_SoundPool.m_vecOrigin",
		"m_StartColor",
		"m_TeleportOffset",
		"m_VehiclePhysics.m_wheelRotation",
		"m_WorldMaxs",
		"m_WorldMins",
		"m_angAbsRotation",
		"m_angGibRotation",
		"m_angGoal",
		"m_angPostSpawnDirection",
		"m_angPreferredCarryAngles",
		"m_angRenderAngles",
		"m_angRotation",
		"m_angRotationAjar",
		"m_angRotationClosed",
		"m_angRotationOpenBack",
		"m_angRotationOpenForward",
		"m_angStart",
		"m_angViewPunch",
		"m_attachmentPointBoneSpace",
		"m_attachmentPointRagdollSpace",
		"m_axis",
		"m_axisEnd",
		"m_collisionMaxs",
		"m_collisionMins",
		"m_controlMaxs",
		"m_controlMins",
		"m_controlPosition",
		"m_end",
		"m_firePosition",
		"m_fog.dirPrimary",
		"m_forward",
		"m_goalHeadCorrection",
		"m_goalHeadDirection",
		"m_hinge.worldAxisDirection",
		"m_hinge.worldPosition",
		"m_integrator.m_angular",
		"m_integrator.m_angularSave",
		"m_integrator.m_linear",
		"m_integrator.m_linearSave",
		"m_lastOrientation",
		"m_latchedEyeDirection",
		"m_latchedEyeOrigin",
		"m_latchedHeadDirection",
		"m_localOrigin",
		"m_localTestAxis",
		"m_lookAtSpot",
		"m_lookTarget",
		"m_maxForce",
		"m_motor.m_axis",
		"m_offset",
		"m_oldOrigin",
		"m_pLockedBestSound.m_vecOrigin",
		"m_pMotor.m_vecAngularVelocity",
		"m_pMotor.m_vecDismount",
		"m_pMotor.m_vecVelocity",
		"m_pNavigator.m_pPath.m_goalDirection",
		"m_pNavigator.m_pPath.m_goalPos",
		"m_pNavigator.m_pPath.m_vecTargetOffset",
		"m_perp",
		"m_poolOrigin",
		"m_position2",
		"m_preferredCarryAngles",
		"m_ragAngles",
		"m_ragPos",
		"m_ragdoll.list[0].originParentSpace",/*
		"m_ragdoll.list[10].originParentSpace",
		"m_ragdoll.list[11].originParentSpace",
		"m_ragdoll.list[12].originParentSpace",
		"m_ragdoll.list[13].originParentSpace",
		"m_ragdoll.list[14].originParentSpace",
		"m_ragdoll.list[15].originParentSpace",
		"m_ragdoll.list[16].originParentSpace",
		"m_ragdoll.list[17].originParentSpace",
		"m_ragdoll.list[18].originParentSpace",
		"m_ragdoll.list[19].originParentSpace",
		"m_ragdoll.list[1].originParentSpace",
		"m_ragdoll.list[20].originParentSpace",
		"m_ragdoll.list[21].originParentSpace",
		"m_ragdoll.list[22].originParentSpace",
		"m_ragdoll.list[23].originParentSpace",
		"m_ragdoll.list[2].originParentSpace",
		"m_ragdoll.list[3].originParentSpace",
		"m_ragdoll.list[4].originParentSpace",
		"m_ragdoll.list[5].originParentSpace",
		"m_ragdoll.list[6].originParentSpace",
		"m_ragdoll.list[7].originParentSpace",
		"m_ragdoll.list[8].originParentSpace",
		"m_ragdoll.list[9].originParentSpace",*/
		"m_ragdollMaxs",
		"m_ragdollMins",
		"m_shadowDirection",
		"m_shakeCallback.m_force",
		"m_skyboxData.fog.dirPrimary",
		"m_skyboxData.origin",
		"m_start",
		"m_targetPosition",
		"m_thrustOrigin",
		"m_thruster.m_thrustVector",
		"m_thruster.m_torqueVector",
		"m_trackPoints",
		"m_vCPPositions",
		"m_vColor",
		"m_vColor1",
		"m_vColor2",
		"m_vCorner",
		"m_vCurEyeTarget",
		"m_vDefaultEyeOffset",
		"m_vDirection",
		"m_vDissolverOrigin",
		"m_vEyeLookTarget",
		"m_vInitialVelocity",
		"m_vInterruptSavePosition",
		"m_vLLVertex",
		"m_vLRVertex",
		"m_vLastPosition",
		"m_vNewVPhysicsPosition",
		"m_vNewVPhysicsVelocity",
		"m_vNormal",
		"m_vOrigin",
		"m_vOriginalMaxs",
		"m_vOriginalMins",
		"m_vOriginalSpawnAngles",
		"m_vOriginalSpawnOrigin",
		"m_vSaveAngles",
		"m_vSaveOrigin",
		"m_vSavePosition",
		"m_vSpotlightCurrentPos",
		"m_vSpotlightDir",
		"m_vSpotlightOrg",
		"m_vSpotlightTargetPos",
		"m_vULVertex",
		"m_vURVertex",
		"m_vWind",
		"m_vecAbsOrigin",
		"m_vecAbsVelocity",
		"m_vecAdditionalPVSOrigin",
		"m_vecAngVelocity",
		"m_vecAngle1",
		"m_vecAngle2",
		"m_vecAtRestOrigin",
		"m_vecAttach",
		"m_vecAxis",
		"m_vecBaseVelocity",
		"m_vecBlockerOrigin",
		"m_vecBuildMaxs",
		"m_vecBuildMins",
		"m_vecCameraPVSOrigin",
		"m_vecCommandGoal",
		"m_vecConstraintCenter",
		"m_vecDesiredPosition",
		"m_vecDesiredVelocity",
		"m_vecEnd",
		"m_vecEndColor",
		"m_vecEndPos",
		"m_vecEyeExitEndpoint",
		"m_vecFinalAngle",
		"m_vecFinalDest",
		"m_vecFinishAngles",
		"m_vecFinishOrigin",
		"m_vecForce",
		"m_vecForcedWorldPosition",
		"m_vecForward",
		"m_vecGunCrosshair",
		"m_vecImpulseDir",
		"m_vecInitialVelocity",
		"m_vecLadderDir",
		"m_vecLadderNormal",
		"m_vecLastFacing",
		"m_vecLastPosition",
		"m_vecLaunchAngles",
		"m_vecMoveAng",
		"m_vecMoveDir",
		"m_vecOrigin",
		"m_vecOriginalAngles",
		"m_vecPlayerMountPositionBottom",
		"m_vecPlayerMountPositionTop",
		"m_vecPosition1",
		"m_vecPosition2",
		"m_vecPostPoint",
		"m_vecPostPostPoint",
		"m_vecPreCurvePos",
		"m_vecPrevPoint",
		"m_vecPrevPrevPoint",
		"m_vecPreviouslyPredictedOrigin",
		"m_vecPushDir",
		"m_vecRagdollOrigin",
		"m_vecRagdollVelocity",
		"m_vecRenderPosition",
		"m_vecSkyboxOrigin",
		"m_vecSmoothedVelocity",
		"m_vecSpawnOrigin",
		"m_vecSprayDir",
		"m_vecSpread",
		"m_vecStartCurvePos",
		"m_vecStoredPathGoal",
		"m_vecSurfaceNormal",
		"m_vecTargetPosition",
		"m_vecTeleportOrigin",
		"m_vecVelocity",
		"m_vecViewOffset",
		"m_vecWaterJumpVel",
		"m_viewtarget",
		"m_worldGoalAxis",
		"pl.v_angle"
	]),
	// INT_ARRAY_PROPERTY
	new Set([
		"\"player_array\"",
		"m_Local.m_chAreaBits",
		"m_Shared.m_nStreaks",
		"m_VehiclePhysics.m_poseParameters",
		"m_aBonusPlayerRoll",
		"m_ePlayerWantsRematch",
		"m_eWinningMethod",
		"m_iAccountID",
		"m_iActiveDominations",
		"m_iAmmo",
		"m_iBaseControlPoints",
		"m_iBonusPoints",
		"m_iBuybackCredits",
		"m_iCPGroup",
		"m_iCappingTeam",
		"m_iChargeLevel",
		"m_iConnectionState",
		"m_iControlPointParents",
		"m_iCurrencyCollected",
		"m_iDamage",
		"m_iDamageAssist",
		"m_iDamageBlocked",
		"m_iDamageBoss",
		"m_iDeaths",
		"m_iHealing",
		"m_iHealingAssist",
		"m_iHealth",
		"m_iMaxBuffedHealth",
		"m_iNumTeamMembers",
		"m_iOwner",
		"m_iPing",
		"m_iPlayerClass",
		"m_iPlayerClassWhenKilled",
		"m_iPlayerLevel",
		"m_iPreviousPoints",
		"m_iScore",
		"m_iStreaks",
		"m_iTeamBaseIcons",
		"m_iTeamIcons",
		"m_iTeamInZone",
		"m_iTeamOverlays",
		"m_iTeamReqCappers",
		"m_iTotalScore",
		"m_iUpgradeRefundCredits",
		"m_iUserID",
		"m_iWarnOnCap",
		"m_nAttachIndex",
		"m_nMannVsMachineWaveClassCounts",
		"m_nMannVsMachineWaveClassCounts2",
		"m_nMannVsMachineWaveClassFlags",
		"m_nMannVsMachineWaveClassFlags2",
		"m_nMinigameTeamScore",
		"m_nModelIndexOverrides",
		"m_nNextMapVoteOptions",
		"m_nNumNodeHillData",
		"m_nSpawnTime",
		"m_nVoteOptionCount",
		"m_ragdoll.boneIndex",
		"m_rgItems",
		"m_rgSuitPlayList",
		"m_rgTriggered",
		"m_rgiSuitNoRepeat",
		"m_weaponCount"
	]),
	// BOOL_ARRAY_PROPERTY
	new Set([
		"m_RawPanelBitVec",
		"m_Shared.m_bPlayerDominated",
		"m_Shared.m_bPlayerDominatingMe",
		"m_aBuildableObjectTypes",
		"m_bAlive",
		"m_bBlocked",
		"m_bCPCapRateScalesWithPlayers",
		"m_bCPIsVisible",
		"m_bCPLocked",
		"m_bConnected",
		"m_bHillIsDownhill",
		"m_bInMiniRound",
		"m_bMannVsMachineWaveClassActive",
		"m_bMannVsMachineWaveClassActive2",
		"m_bPlayerIsPackMember",
		"m_bPlayerReady",
		"m_bTeamCanCap",
		"m_bTeamReady",
		"m_bTrackAlarm",
		"m_bValid"
	]),
	// FLOAT_ARRAY_PROPERTY
	new Set([
		"m_Shared.m_flItemChargeMeter",
		"m_TeamRespawnWaveTimes",
		"m_VehiclePhysics.m_wheelBaseHeight",
		"m_VehiclePhysics.m_wheelTotalHeight",
		"m_flCPTimerTimes",
		"m_flCapPercentages",
		"m_flConnectTime",
		"m_flEncodedController",
		"m_flLazyCapPerc",
		"m_flNextRespawnTime",
		"m_flNextRespawnWave",
		"m_flNodeHillData",
		"m_flOverlayTimes",
		"m_flPathDistance",
		"m_flPoseParameter",
		"m_flRefireDelay",
		"m_flSupport",
		"m_flTeamCapTime",
		"m_flUnlockTimes",
		"m_flexWeight",
		"m_flextarget",
		"m_rgflCoordinateFrame",
		"m_rgflSuitNoRepeatTime"
	]),
	// STRING_ARRAY_PROPERTY
	new Set([
		"m_Local.m_chAreaPortalBits",
		"m_SpotlightTextureName",
		"m_chCurrentSlideLists",
		"m_chPoseIndex",
		"m_dpv",
		"m_iszMannVsMachineWaveClassNames",
		"m_iszMannVsMachineWaveClassNames2",
		"m_iszOverlayNames",
		"m_iszWarnSound",
		"m_lookupFilename",
		"m_rgbTimeBasedDamage",
		"m_szAnimExtension",
		"m_szDisplayText",
		"m_szInstanceFilename",
		"m_szLandmarkName",
		"m_szLastPlaceName",
		"m_szLastSound",
		"m_szMapName",
		"m_szMaterialName",
		"m_szMaterialVar",
		"m_szMaterialVarValue",
		"m_szNetname",
		"m_szNetworkIDString",
		"m_szSlideshowDirectory",
		"m_textParms",
		"m_uchShuffleCaseMap",
		"m_weaponNames"
	]),
	// ENTITY_ARRAY_PROPERTY
	new Set([
		"\"healing_array\"",
		"\"player_object_array\"",
		"\"team_object_array\"",
		"m_hActorList",
		"m_hAttachEntity",
		"m_hControlPointEnts",
		"m_hMyWeapons",
		"m_hMyWearables",
		"m_hProps",
		"m_hRagWearables",
		"m_hViewModel",
		"m_rgEntities"
	]),
	// VECTOR_ARRAY_PROPERTY
	new Set([
		"m_Local.m_audio.localSound",
		"m_VehiclePhysics.m_wheelRotation",
		"m_offset",
		"m_ragAngles",
		"m_ragPos",
		"m_ragdollMaxs",
		"m_ragdollMins",
		"m_trackPoints",
		"m_vCPPositions"
	])
];

// It's possible to set any sort of keyvalue as a string
for (const keyvalue of [StringParam.NUMBER_KEYVALUE, StringParam.VECTOR_KEYVALUE]) {
	for (const item of stringCompletions[keyvalue]) {
		stringCompletions[StringParam.STRING_KEYVALUE].add(item)
	}
}

stringCompletions[StringParam.ARRAY_PROPERTY] = new Set([
	...stringCompletions[StringParam.INT_ARRAY_PROPERTY],
	...stringCompletions[StringParam.BOOL_ARRAY_PROPERTY],
	...stringCompletions[StringParam.FLOAT_ARRAY_PROPERTY],
	...stringCompletions[StringParam.STRING_ARRAY_PROPERTY],
	...stringCompletions[StringParam.ENTITY_ARRAY_PROPERTY],
	...stringCompletions[StringParam.VECTOR_ARRAY_PROPERTY]
]);

stringCompletions[StringParam.PROPERTY] = new Set([
	...stringCompletions[StringParam.INT_PROPERTY],
	...stringCompletions[StringParam.BOOL_PROPERTY],
	...stringCompletions[StringParam.FLOAT_PROPERTY],
	...stringCompletions[StringParam.STRING_PROPERTY],
	...stringCompletions[StringParam.ENTITY_PROPERTY],
	...stringCompletions[StringParam.VECTOR_PROPERTY],

	...stringCompletions[StringParam.ARRAY_PROPERTY]
]);

/*
// It's possible to set bools as ints
for (const item of stringCompletions[StringParam.BOOL_PROPERTY]) {
	stringCompletions[StringParam.INT_PROPERTY].add(item);
}*/

export interface Doc {
	detail: string;
	desc?: string;
	successor?: string;
	append?: string;
	snippet?: string;
	[param: number]: StringParam | undefined;
}


export type Docs = Map<string, Doc>;

export type InstanceDocs = Map<string, Docs>;


export const methods: Docs = new Map([
	/* --------------------------- *
	 * CBaseEntity                 *
	 * --------------------------- */
	["AcceptInput", {
		detail: "CBaseEntity.AcceptInput(input: string, param: string, activator: handle, caller: handle) -> bool",
		desc: "Generate a synchronous I/O event. Unlike `EntFireByHandle`, this is processed immediately. Returns false if `input` is a null/empty string, or if the input wasn't handled.",
		0: StringParam.INPUT
	}],
	["AddEFlags", {
		detail: "CBaseEntity.AddEFlags(flags: FEntityEFlags) -> null",
		desc: "Adds the supplied `flags` to the **Entity Flags** in the entity. *(m_iEFlags datamap)*\n\nSee [FEntityEFlags](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FEntityEFlags)."
	}],
	["AddFlag", {
		detail: "CBaseEntity.AddFlag(flags: FPlayer) -> null",
		desc: "Adds the supplied `flags` to another separate player-related entity flags system in the entity. *(m_fFlags datamap)*\n\nSee [FPlayer](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FPlayer)."
	}],
	["AddSolidFlags", {
		detail: "CBaseEntity.AddSolidFlags(flags: FSolid) -> null",
		desc: "Adds the supplied `flags` to the *Solid Flags* in the entity. *(m_Collision.m_usSolidFlags datamap)*\n\nSee [FSolid](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FSolid)."
	}],
	["ApplyAbsVelocityImpulse", {
		detail: "CBaseEntity.ApplyAbsVelocityImpulse(impulse: Vector) -> null",
		desc: "Apply a Velocity Impulse as a world space impulse vector. Works for most physics-based objects including dropped weapons and even dropped Sandviches."
	}],
	["ApplyLocalAngularVelocityImpulse", {
		detail: "CBaseEntity.ApplyLocalAngularVelocityImpulse(impulse: Vector) -> null",
		desc: "Apply an Angular Velocity Impulse in entity local space. The direction of the input vector is the rotation axis, and the length is the magnitude of the impulse."
	}],
	["BecomeRagdollOnClient", {
		detail: "CBaseEntity.BecomeRagdollOnClient(impulse: Vector) -> bool",
		desc: "Acts like the `BecomeRagdoll` input, with the required `impulse` value applied as a force on the ragdoll. Does NOT spawn a `[prop_ragdoll](https://developer.valvesoftware.com/wiki/prop_ragdoll)` or any other entity."
	}],
	["ClearFlags", {
		detail: "CBaseEntity.ClearFlags() -> null",
		desc: "Sets the player-related entity flags to 0 on an entity, clearing them."
	}],
	["ClearSolidFlags", {
		detail: "CBaseEntity.ClearSolidFlags() -> null",
		desc: "Sets *Solid Flags* to 0 on an entity, clearing them."
	}],
	["ConnectOutput", {
		detail: "CBaseEntity.ConnectOutput(output_name: string, function_name: string) -> null",
		desc: "Adds an I/O connection that will call the named function when the specified output fires.",
		0: StringParam.OUTPUT
	}],
	["Destroy", {
		detail: "CBaseEntity.Destroy() -> null",
		desc: "Removes the entity. Simply calls [UTIL_Remove](https://developer.valvesoftware.com/wiki/UTIL_Remove)."
	}],
	["DisableDraw", {
		detail: "CBaseEntity.DisableDraw() -> null",
		desc: "Disable drawing and transmitting the entity to clients. *(adds EF_NODRAW)*"
	}],
	["DisconnectOutput", {
		detail: "CBaseEntity.DisconnectOutput(output_name: string, function_name: string) -> null",
		desc: "Removes a connected script function from an I/O event.",
		0: StringParam.OUTPUT
	}],
	["DispatchSpawn", {
		detail: "CBaseEntity.DispatchSpawn() -> null",
		desc: "Alternative dispatch spawn, same as the one in CEntities, for convenience."
	}],
	["EmitSound", {
		detail: "CBaseEntity.EmitSound(sound_name: string) -> null",
		desc: "Plays a sound from this entity. The sound must be precached first for it to play (using `PrecacheSound` or `PrecacheScriptSound`)."
	}],
	["EnableDraw", {
		detail: "CBaseEntity.EnableDraw() -> null",
		desc: "Enable drawing and transmitting the entity to clients. *(removes EF_NODRAW)*"
	}],
	["entindex", {
		detail: "CBaseEntity.entindex() -> int",
		desc: "Returns the entity index."
	}],
	["EyeAngles", {
		detail: "CBaseEntity.EyeAngles() -> QAngle",
		desc: "Returns the entity's eye angles. Acts like `GetAbsAngles` if the entity does not support it."
	}],
	["EyePosition", {
		detail: "CBaseEntity.EyePosition() -> Vector",
		desc: "Get vector to eye position - absolute coords. Acts like `GetOrigin` if the entity does not support it."
	}],
	["FirstMoveChild", {
		detail: "CBaseEntity.FirstMoveChild() -> handle",
		desc: "Returns the most-recent entity parented to this one."
	}],
	["GetAbsAngles", {
		detail: "CBaseEntity.GetAbsAngles() -> QAngle",
		desc: "Get the entity's pitch, yaw, and roll as **QAngles**."
	}],
	["GetAbsVelocity", {
		detail: "CBaseEntity.GetAbsVelocity() -> Vector",
		desc: "Returns the current absolute velocity of the entity."
	}],
	["GetAngularVelocity", {
		detail: "CBaseEntity.GetAngularVelocity() -> Vector",
		desc: "Get the local angular velocity - returns a **Vector** of pitch, yaw, and roll."
	}],
	["GetBaseVelocity", {
		detail: "CBaseEntity.GetBaseVelocity() -> Vector",
		desc: "Returns any constant velocity currently being imparted onto the entity. This includes being pushed by effects like"
	}],
	["GetBoundingMaxs", {
		detail: "CBaseEntity.GetBoundingMaxs() -> Vector",
		desc: "Get a vector containing max bounds, centered on object."
	}],
	["GetBoundingMaxsOriented", {
		detail: "CBaseEntity.GetBoundingMaxsOriented() -> Vector",
		desc: "Get a vector containing max bounds, centered on object, taking the object's orientation into account."
	}],
	["GetBoundingMins", {
		detail: "CBaseEntity.GetBoundingMins() -> Vector",
		desc: "Get a vector containing min bounds, centered on object."
	}],
	["GetBoundingMinsOriented", {
		detail: "CBaseEntity.GetBoundingMinsOriented() -> Vector",
		desc: "Get a vector containing min bounds, centered on object, taking the object's orientation into account."
	}],
	["GetCenter", {
		detail: "CBaseEntity/CTFNavArea.GetCenter() -> Vector",
		desc: "Gets center point of the entity in world coordinates / Get center origin of area."
	}],
	["GetClassname", {
		detail: "CBaseEntity.GetClassname() -> string"
	}],
	["GetCollisionGroup", {
		detail: "CBaseEntity.GetCollisionGroup() -> int",
		desc: "Gets the current collision group of the entity."
	}],
	["GetEFlags", {
		detail: "CBaseEntity.GetEFlags() -> int",
		desc: "Get the entity's engine flags."
	}],
	["GetFlags", {
		detail: "CBaseEntity.GetFlags() -> int",
		desc: "Get the entity's flags."
	}],
	["GetEntityHandle", {
		detail: "CBaseEntity.GetEntityHandle() -> ehandle",
		desc: "Get the entity as an EHANDLE."
	}],
	["GetEntityIndex", {
		detail: "CBaseEntity.GetEntityIndex() -> int"
	}],
	["GetForwardVector", {
		detail: "CBaseEntity.GetForwardVector() -> Vector",
		desc: "Get the forward vector of the entity."
	}],
	["GetFriction", {
		detail: "CBaseEntity.GetFriction() -> float",
		desc: "Get PLAYER friction, ignored for objects."
	}],
	["GetGravity", {
		detail: "CBaseEntity.GetGravity() -> float"
	}],
	["GetHealth", {
		detail: "CBaseEntity.GetHealth() -> int"
	}],
	["GetLocalAngles", {
		detail: "CBaseEntity.GetLocalAngles() -> QAngle"
	}],
	["GetLocalOrigin", {
		detail: "CBaseEntity.GetLocalOrigin() -> Vector"
	}],
	["GetLocalVelocity", {
		detail: "CBaseEntity.GetLocalVelocity() -> Vector",
		desc: "Get Entity relative velocity."
	}],
	["GetMaxHealth", {
		detail: "CBaseEntity.GetMaxHealth() -> int"
	}],
	["GetModelKeyValues", {
		detail: "CBaseEntity.GetModelKeyValues() -> handle",
		desc: "Get a KeyValue class instance on this entity's model."
	}],
	["GetModelName", {
		detail: "CBaseEntity.GetModelName() -> string",
		desc: "Returns the name of the model."
	}],
	["GetMoveParent", {
		detail: "CBaseEntity.GetMoveParent() -> handle",
		desc: "If in hierarchy, retrieves the entity's parent."
	}],
	["GetMoveType", {
		detail: "CBaseEntity.GetMoveType() -> int"
	}],
	["GetName", {
		detail: "CBaseEntity/CBaseCombatWeapon.GetName() -> string",
		desc: "Get entity's targetname/Gets the weapon's internal name."
	}],
	["GetOrigin", {
		detail: "CBaseEntity.GetOrigin() -> Vector",
		desc: "This is `GetAbsOrigin` with a funny script name for some reason. Not changing it for legacy compat though."
	}],
	["GetOwner", {
		detail: "CBaseEntity.GetOwner() -> handle",
		desc: "Gets this entity's owner."
	}],
	["GetPhysAngularVelocity", {
		detail: "CBaseEntity.GetPhysAngularVelocity() -> Vector"
	}],
	["GetPhysVelocity", {
		detail: "CBaseEntity.GetPhysVelocity() -> Vector"
	}],
	["GetPreTemplateName", {
		detail: "CBaseEntity.GetPreTemplateName() -> string",
		desc: "Get the entity name stripped of template unique decoration."
	}],
	["GetRightVector", {
		detail: "CBaseEntity.GetRightVector() -> Vector",
		desc: "Get the right vector of the entity."
	}],
	["GetRootMoveParent", {
		detail: "CBaseEntity.GetRootMoveParent() -> handle",
		desc: "If in hierarchy, walks up the hierarchy to find the root parent."
	}],
	["GetScriptId", {
		detail: "CBaseEntity.GetScriptId() -> string",
		desc: "Retrieve the unique identifier used to refer to the entity within the scripting system."
	}],
	["GetScriptScope", {
		detail: "CBaseEntity.GetScriptScope() -> table",
		desc: "Retrieve the script-side data associated with an entity."
	}],
	["GetScriptThinkFunc", {
		detail: "CBaseEntity.GetScriptThinkFunc() -> string",
		desc: "Retrieve the name of the current script think func."
	}],
	["GetSolid", {
		detail: "CBaseEntity.GetSolid() -> int",
		desc: "See [ESolidType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ESolidType)."
	}],
	["GetSoundDuration", {
		detail: "CBaseEntity.GetSoundDuration(sound_name: string, actor_model_name: string) -> float",
		desc: "Returns float duration of the sound. Actor model name is optional and can be left null.",
		0: StringParam.SOUND,
		1: StringParam.MODEL
	}],
	["GetTeam", {
		detail: "CBaseEntity.GetTeam() -> int",
		desc: "See [ETFTeam](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFTeam)."
	}],
	["GetUpVector", {
		detail: "CBaseEntity.GetUpVector() -> Vector",
		desc: "Get the up vector of the entity."
	}],
	["GetWaterLevel", {
		detail: "CBaseEntity.GetWaterLevel() -> int",
		desc: "This function tells you how much of the entity is underwater. It returns a value of 0 if not underwater, 1 if the feet are (touching water brush), 2 if the waist is (center of the hull of the entity), and 3 if the head is (eyes position)."
	}],
	["GetWaterType", {
		detail: "CBaseEntity.GetWaterType() -> int",
		desc: "It returns the type of water the entity is currently submerged in. 32 for water and 16 for slime."
	}],
	["IsAlive", {
		detail: "CBaseEntity.IsAlive() -> bool",
		desc: "Am I alive?"
	}],
	["IsEFlagSet", {
		detail: "CBaseEntity.IsEFlagSet(flag: FEntityEFlags) -> bool",
		desc: "See [FEntityEFlags](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FEntityEFlags)."
	}],
	["IsPlayer", {
		detail: "CBaseEntity.IsPlayer() -> bool",
		desc: "Checks whether the entity is a player or not."
	}],
	["IsSolid", {
		detail: "CBaseEntity.IsSolid() -> bool"
	}],
	["IsSolidFlagSet", {
		detail: "CBaseEntity.IsSolidFlagSet(flag: FSolid) -> bool",
		desc: "See [FSolid](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FSolid)."
	}],
	["IsValid", {
		detail: "CBaseEntity.IsValid() -> bool",
		desc: "Checks whether the entity still exists. Useful when storing entity handles and needing to check if the entity was not deleted."
	}],
	["KeyValueFromFloat", {
		detail: "CBaseEntity.KeyValueFromFloat(key: string, value: float) -> bool",
		desc: "Executes KeyValue with a float.",
		0: StringParam.NUMBER_KEYVALUE
	}],
	["KeyValueFromInt", {
		detail: "CBaseEntity.KeyValueFromInt(key: string, value: int) -> bool",
		desc: "Executes KeyValue with an int.",
		0: StringParam.NUMBER_KEYVALUE
	}],
	["KeyValueFromString", {
		detail: "CBaseEntity.KeyValueFromString(key: string, value: string) -> bool",
		desc: "Executes KeyValue with a string.",
		0: StringParam.STRING_KEYVALUE
	}],
	["KeyValueFromVector", {
		detail: "CBaseEntity.KeyValueFromVector(key: string, value: Vector) -> bool",
		desc: "Executes KeyValue with a vector.",
		0: StringParam.VECTOR_KEYVALUE
	}],
	["Kill", {
		detail: "CBaseEntity.Kill() -> null",
		desc: "Removes the entity. Equivalent of firing the `Kill` I/O input, but instantaneous."
	}],
	["LocalEyeAngles", {
		detail: "CBaseEntity.LocalEyeAngles() -> handle",
		desc: "Returns the entity's local eye angles."
	}],
	["NextMovePeer", {
		detail: "CBaseEntity.NextMovePeer() -> handle",
		desc: "Returns the next entity parented *with* the entity. Intended for iteration use with `FirstMoveChild()`."
	}],
	["PrecacheModel", {
		detail: "CBaseEntity.PrecacheModel(model_name: string) -> null",
		desc: "Precache a model (`.mdl`) or sprite (`.vmt`). The extension must be specified.",
		0: StringParam.MODEL
	}],
	["PrecacheScriptSound", {
		detail: "CBaseEntity.PrecacheScriptSound(sound_script: string) -> null",
		desc: "Precache a sound script. Same as `PrecacheSoundScript`."
	}],
	["PrecacheSoundScript", {
		detail: "CBaseEntity.PrecacheSoundScript(sound_script: string) -> null",
		desc: "Precache a sound script. Same as `PrecacheScriptSound`."
	}],
	["RemoveEFlags", {
		detail: "CBaseEntity.RemoveEFlags(flags: FEntityEFlags) -> null",
		desc: "See [FEntityEFlags](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FEntityEFlags)."
	}],
	["RemoveFlag", {
		detail: "CBaseEntity.RemoveFlag(flags: FPlayer) -> null",
		desc: "See [FPlayer](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FPlayer)."
	}],
	["RemoveSolidFlags", {
		detail: "CBaseEntity.RemoveSolidFlags(flags: FSolid) -> null",
		desc: "See [FSolid](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FSolid)."
	}],
	["SetAbsAngles", {
		detail: "CBaseEntity.SetAbsAngles(angles: QAngle) -> null",
		desc: "Set entity pitch, yaw, roll as QAngles. Does not work on players, use `SnapEyeAngles` instead."
	}],
	["SetAbsVelocity", {
		detail: "CBaseEntity.SetAbsVelocity(velocity: Vector) -> null",
		desc: "Sets the current absolute velocity of the entity. Does nothing on [VPhysics](https://developer.valvesoftware.com/wiki/VPhysics) objects (such as `prop_physics`). For those, use `SetPhysVelocity` instead."
	}],
	["SetAbsOrigin", {
		detail: "CBaseEntity.SetAbsOrigin(origin: Vector) -> null",
		desc: "Sets the absolute origin of the entity."
	}],
	["SetAngularVelocity", {
		detail: "CBaseEntity.SetAngularVelocity(pitch: float, yaw: float, roll: float) -> null",
		desc: "Set the local angular velocity."
	}],
	["SetCollisionGroup", {
		detail: "CBaseEntity.SetCollisionGroup(group: ECollisionGroup) -> null",
		desc: "Set the current collision group of the entity.\n\nSee [ECollisionGroup](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ECollisionGroup)."
	}],
	["SetDrawEnabled", {
		detail: "CBaseEntity.SetDrawEnabled(toggle: bool) -> null",
		desc: "Enables drawing if you pass true, disables drawing if you pass false."
	}],
	["SetEFlags", {
		detail: "CBaseEntity.SetEFlags(flags: FEntityEFlags) -> null",
		desc: "See [FEntityEFlags](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FEntityEFlags)."
	}],
	["SetForwardVector", {
		detail: "CBaseEntity.SetForwardVector(forward: Vector) -> null",
		desc: "Set the orientation of the entity to have this forward vector."
	}],
	["SetFriction", {
		detail: "CBaseEntity.SetFriction(friction: float) -> null"
	}],
	["SetGravity", {
		detail: "CBaseEntity.SetGravity(gravity: float) -> null",
		desc: "Sets a multiplier for gravity. 1 is default gravity."
	}],
	["SetHealth", {
		detail: "CBaseEntity.SetHealth(health: int) -> null"
	}],
	["SetLocalAngles", {
		detail: "CBaseEntity.SetLocalAngles(angles: QAngle) -> null"
	}],
	["SetLocalOrigin", {
		detail: "CBaseEntity.SetLocalOrigin(origin: Vector) -> null"
	}],
	["SetMaxHealth", {
		detail: "CBaseEntity.SetMaxHealth(health: int) -> null",
		desc: "Sets the maximum health this entity can have. Does not update the current health, so `SetHealth` should be used afterwards."
	}],
	["SetModel", {
		detail: "CBaseEntity.SetModel(model_name: string) -> null",
		desc: "Set a model for this entity.",
		0: StringParam.MODEL
	}],
	["SetMoveType", {
		detail: "CBaseEntity.SetMoveType(movetype: EMoveType, movecollide: EMoveCollide) -> null",
		desc: "See [EMoveType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#EMoveType) ,[EMoveCollide](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#EMoveCollide)."
	}],
	["SetOwner", {
		detail: "CBaseEntity.SetOwner(entity: handle) -> null",
		desc: "Sets this entity's owner."
	}],
	["SetPhysAngularVelocity", {
		detail: "CBaseEntity.SetPhysAngularVelocity(angular_velocity: Vector) -> null"
	}],
	["SetPhysVelocity", {
		detail: "CBaseEntity.SetPhysVelocity(velocity: Vector) -> null"
	}],
	["SetSize", {
		detail: "CBaseEntity.SetSize(mins: Vector, maxs: Vector) -> null",
		desc: "Sets the bounding box's scale for this entity."
	}],
	["SetSolid", {
		detail: "CBaseEntity.SetSolid(solid: ESolidType) -> null",
		desc: "See [ESolidType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ESolidType)."
	}],
	["SetSolidFlags", {
		detail: "CBaseEntity.SetSolidFlags(flags: FSolid) -> null",
		desc: "See [FSolid](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FSolid)."
	}],
	["SetTeam", {
		detail: "CBaseEntity.SetTeam(team: ETFTeam) -> null",
		desc: "Sets entity team.\n\nSee [ETFTeam](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFTeam)."
	}],
	["SetWaterLevel", {
		detail: "CBaseEntity.SetWaterLevel(water_level: int) -> null",
		desc: "This sets how much of the entity is underwater. Setting it to 0 means it is not underwater, 1 if the feet are (touching water brush), 2 if the waist is (center of the hull of the entity), and 3 if the head is (eyes position)."
	}],
	["SetWaterType", {
		detail: "CBaseEntity.SetWaterType(water_type: int) -> null",
		desc: "Set the type of water the entity is currently submerged in. Generic values to use are 32 for water and 16 for slime."
	}],
	["StopSound", {
		detail: "CBaseEntity.StopSound(sound_name: string) -> null",
		desc: "Stops a sound on this entity."
	}],
	["TakeDamage", {
		detail: "CBaseEntity.TakeDamage(damage: float, damage_type: FDmgType, attacker: handle) -> null",
		desc: "Deals damage to the entity.\n\nSee [FDmgType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FDmgType)."
	}],
	["TakeDamageEx", {
		detail: "CBaseEntity.TakeDamageEx(inflictor: handle, attacker: handle, weapon: handle, damage_force: Vector, damage_position: Vector, damage: float, damage_type: FDmgType) -> null",
		desc: "Extended version of `TakeDamage`.\n\nSee [FDmgType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FDmgType)."
	}],
	["TakeDamageCustom", {
		detail: "CBaseEntity.TakeDamageCustom(inflictor: handle, attacker: handle, weapon: handle, damage_force: Vector, damage_position: Vector, damage: float, damage_type: FDmgType, custom_damage_type: ETFDmgCustom) -> null",
		desc: "Extended version of `TakeDamageEx` that can apply a custom damage type.\n\nSee [FDmgType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FDmgType) ,[ETFDmgCustom](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFDmgCustom)."
	}],
	["Teleport", {
		detail: "CBaseEntity.Teleport(use_origin: bool, origin: Vector, use_angles: bool, angles: QAngle, use_velocity: bool, velocity: Vector) -> null",
		desc: "Teleports this entity. For this function, set the bools to false if you want that entity's property unchanged. (do not use null arguments!)"
	}],
	["TerminateScriptScope", {
		detail: "CBaseEntity.TerminateScriptScope() -> null",
		desc: "Clear the current script scope for this entity."
	}],
	["ToggleFlag", {
		detail: "CBaseEntity.ToggleFlag(flags: FPlayer) -> null",
		desc: "See [FPlayer](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FPlayer)."
	}],
	["ValidateScriptScope", {
		detail: "CBaseEntity.ValidateScriptScope() -> bool",
		desc: "Create a script scope for an entity if it doesn't already exist. The return value is always true, unless the script VM is disabled in launch options."
	}],
	/* --------------------------- *
	 * CBaseAnimating              *
	 * --------------------------- */
	["DispatchAnimEvents", {
		detail: "CBaseAnimating.DispatchAnimEvents(entity: handle) -> null",
		desc: "Dispatch animation events to a CBaseAnimating entity."
	}],
	["FindBodygroupByName", {
		detail: "CBaseAnimating.FindBodygroupByName(name: string) -> int",
		desc: "Find a bodygroup ID by name. Returns -1 if the bodygroup does not exist."
	}],
	["GetAttachmentAngles", {
		detail: "CBaseAnimating.GetAttachmentAngles(id: int) -> QAngle",
		desc: "Get an attachment's angles as a QAngle, by ID."
	}],
	["GetAttachmentBone", {
		detail: "CBaseAnimating.GetAttachmentBone(id: int) -> int",
		desc: "Get an attachment's parent bone index by ID."
	}],
	["GetAttachmentOrigin", {
		detail: "CBaseAnimating.GetAttachmentOrigin(id: int) -> Vector",
		desc: "Get an attachment's origin as a Vector, by ID."
	}],
	["GetBodygroup", {
		detail: "CBaseAnimating.GetBodygroup(id: int) -> int",
		desc: "Get the bodygroup value by bodygroup ID."
	}],
	["GetBodygroupName", {
		detail: "CBaseAnimating.GetBodygroupName(id: int) -> string",
		desc: "Get the bodygroup's name by ID."
	}],
	["GetBodygroupPartName", {
		detail: "CBaseAnimating.GetBodygroupPartName(group: int, part: int) -> string",
		desc: "Get the bodygroup's name by group and part."
	}],
	["GetBoneAngles", {
		detail: "CBaseAnimating.GetBoneAngles(id: int) -> QAngle",
		desc: "Get the bone's angles as a QAngle, by ID."
	}],
	["GetBoneOrigin", {
		detail: "CBaseAnimating.GetBoneOrigin(id: int) -> Vector",
		desc: "Get the bone's origin Vector by ID."
	}],
	["GetCycle", {
		detail: "CBaseAnimating.GetCycle() -> float",
		desc: "Gets the model's current animation cycle rate. Ranges from 0.0 to 1.0."
	}],
	["GetModelScale", {
		detail: "CBaseAnimating.GetModelScale() -> float",
		desc: "Get the model's scale."
	}],
	["GetPlaybackRate", {
		detail: "CBaseAnimating.GetPlaybackRate() -> float",
		desc: "Get the current animation's playback rate."
	}],
	["GetSequence", {
		detail: "CBaseAnimating.GetSequence() -> int",
		desc: "Get the current-playing sequence's ID."
	}],
	["GetSequenceActivityName", {
		detail: "CBaseAnimating.GetSequenceActivityName(id: int) -> string",
		desc: "Get the activity name for a sequence by sequence ID."
	}],
	["GetSequenceDuration", {
		detail: "CBaseAnimating.GetSequenceDuration(id: int) -> float",
		desc: "Get a sequence duration in seconds by sequence ID."
	}],
	["GetSequenceName", {
		detail: "CBaseAnimating.GetSequenceName(id: int) -> string",
		desc: "Get a sequence name by sequence ID. Returns \"Not Found!\" if ID is -1, \"Unknown\" if the sequence doesn't exist or \"No model!\" if no model is assigned."
	}],
	["GetSkin", {
		detail: "CBaseAnimating.GetSkin() -> int",
		desc: "Gets the current skin index."
	}],
	["IsSequenceFinished", {
		detail: "CBaseAnimating.IsSequenceFinished() -> bool",
		desc: "Ask whether the main sequence is done playing."
	}],
	["LookupActivity", {
		detail: "CBaseAnimating.LookupActivity(activity: string) -> int",
		desc: "Get the named activity index. Returns -1 if the activity does not exist."
	}],
	["LookupAttachment", {
		detail: "CBaseAnimating.LookupAttachment(name: string) -> int",
		desc: "Get the named attachment index. Returns 0 if the attachment does not exist."
	}],
	["LookupBone", {
		detail: "CBaseAnimating.LookupBone(bone: string) -> int",
		desc: "Get the named bone index. Returns -1 if the bone does not exist."
	}],
	["LookupPoseParameter", {
		detail: "CBaseAnimating.LookupPoseParameter(name: string) -> int",
		desc: "Gets the pose parameter's index. Returns -1 if the pose parameter does not exist."
	}],
	["LookupSequence", {
		detail: "CBaseAnimating.LookupSequence(name: string) -> int",
		desc: "Looks up a sequence by names of sequences or activities. Returns -1 if the sequence does not exist."
	}],
	["ResetSequence", {
		detail: "CBaseAnimating.ResetSequence(id: int) -> null",
		desc: "Reset a sequence by sequence ID. If the ID is different than the current sequence, switch to the new sequence."
	}],
	["SetBodygroup", {
		detail: "CBaseAnimating.SetBodygroup(id: int, value: int) -> null",
		desc: "Set the bodygroup by ID."
	}],
	["SetCycle", {
		detail: "CBaseAnimating.SetCycle(cycle: float) -> null",
		desc: "Sets the model's current animation cycle from 0 to 1."
	}],
	["SetModelSimple", {
		detail: "CBaseAnimating.SetModelSimple(model_name: string) -> null",
		desc: "Set a model for this entity. Matches easier behaviour of the SetModel input, automatically precaches, maintains sequence/cycle if possible. Also clears the bone cache.",
		0: StringParam.MODEL
	}],
	["SetModelScale", {
		detail: "CBaseAnimating.SetModelScale(scale: float, change_duration: float) -> null",
		desc: "Changes a model's scale over time. Set the change duration to 0.0 to change the scale instantly."
	}],
	["SetPlaybackRate", {
		detail: "CBaseAnimating.SetPlaybackRate(rate: float) -> null",
		desc: "Set the current animation's playback rate."
	}],
	["SetPoseParameter", {
		detail: "CBaseAnimating.SetPoseParameter(id: int, value: float) -> float",
		desc: "Sets a pose parameter value. Returns the effective value after clamping or looping."
	}],
	["SetSequence", {
		detail: "CBaseAnimating.SetSequence(id: int) -> null",
		desc: "Plays a sequence by sequence ID."
	}],
	["SetSkin", {
		detail: "CBaseAnimating.SetSkin(index: int) -> null",
		desc: "Sets the model's skin."
	}],
	["StopAnimation", {
		detail: "CBaseAnimating.StopAnimation() -> null",
		desc: "Stop the current animation (same as SetPlaybackRate 0.0)."
	}],
	["StudioFrameAdvance", {
		detail: "CBaseAnimating.StudioFrameAdvance() -> null",
		desc: "Advance animation frame to some time in the future with an automatically calculated interval."
	}],
	["StudioFrameAdvanceManual", {
		detail: "CBaseAnimating.StudioFrameAdvanceManual(dt: float) -> null",
		desc: "Advance animation frame to some time in the future with a manual interval."
	}],
	/* --------------------------- *
	 * CBaseCombatWeapon           *
	 * --------------------------- */
	["CanBeSelected", {
		detail: "CBaseCombatWeapon.CanBeSelected() -> bool",
		desc: "Can this weapon be selected."
	}],
	["Clip1", {
		detail: "CBaseCombatWeapon.Clip1() -> int",
		desc: "Current ammo in clip1."
	}],
	["Clip2", {
		detail: "CBaseCombatWeapon.Clip2() -> int",
		desc: "Current ammo in clip2."
	}],
	["GetDefaultClip1", {
		detail: "CBaseCombatWeapon.GetDefaultClip1() -> int",
		desc: "Default size of clip1."
	}],
	["GetDefaultClip2", {
		detail: "CBaseCombatWeapon.GetDefaultClip2() -> int",
		desc: "Default size of clip2."
	}],
	["GetMaxClip1", {
		detail: "CBaseCombatWeapon.GetMaxClip1() -> int",
		desc: "Max size of clip1."
	}],
	["GetMaxClip2", {
		detail: "CBaseCombatWeapon.GetMaxClip2() -> int",
		desc: "Max size of clip2."
	}], /*
	["GetName", {
		detail: "CBaseCombatWeapon.GetName() -> string",
		desc: "Gets the weapon's internal name (not the targetname!)"
	}],*/
	["GetPosition", {
		detail: "CBaseCombatWeapon.GetPosition() -> int",
		desc: "Gets the weapon's current position."
	}],
	["GetPrimaryAmmoCount", {
		detail: "CBaseCombatWeapon.GetPrimaryAmmoCount() -> int",
		desc: "Current primary ammo count if no clip is used or to give a player if they pick up this weapon legacy style (not TF)."
	}],
	["GetPrimaryAmmoType", {
		detail: "CBaseCombatWeapon.GetPrimaryAmmoType() -> int",
		desc: "Returns the primary ammo type."
	}],
	["GetPrintName", {
		detail: "CBaseCombatWeapon.GetPrintName() -> string",
		desc: "Gets the weapon's print name."
	}],
	["GetSecondaryAmmoCount", {
		detail: "CBaseCombatWeapon.GetSecondaryAmmoCount() -> int",
		desc: "Current secondary ammo count if no clip is used or to give a player if they pick up this weapon legacy style (not TF)."
	}],
	["GetSecondaryAmmoType", {
		detail: "CBaseCombatWeapon.GetSecondaryAmmoType() -> int",
		desc: "Returns the secondary ammo type."
	}],
	["GetSlot", {
		detail: "CBaseCombatWeapon.GetSlot() -> int",
		desc: "Gets the weapon's current slot."
	}],
	["GetSubType", {
		detail: "CBaseCombatWeapon.GetSubType() -> int",
		desc: "Get the weapon subtype."
	}],
	["GetWeaponFlags", {
		detail: "CBaseCombatWeapon.GetWeaponFlags() -> int",
		desc: "Get the weapon flags."
	}],
	["GetWeight", {
		detail: "CBaseCombatWeapon.GetWeight() -> int",
		desc: "Get the weapon weighting/importance."
	}],
	["HasAnyAmmo", {
		detail: "CBaseCombatWeapon.HasAnyAmmo() -> bool",
		desc: "Do we have any ammo?"
	}],
	["HasPrimaryAmmo", {
		detail: "CBaseCombatWeapon.HasPrimaryAmmo() -> bool",
		desc: "Do we have any primary ammo?"
	}],
	["HasSecondaryAmmo", {
		detail: "CBaseCombatWeapon.HasSecondaryAmmo() -> bool",
		desc: "Do we have any secondary ammo?"
	}],
	["IsAllowedToSwitch", {
		detail: "CBaseCombatWeapon.IsAllowedToSwitch() -> bool",
		desc: "Are we allowed to switch to this weapon?"
	}],
	["IsMeleeWeapon", {
		detail: "CBaseCombatWeapon.IsMeleeWeapon() -> bool",
		desc: "Returns whether this is a melee weapon."
	}],
	["PrimaryAttack", {
		detail: "CBaseCombatWeapon.PrimaryAttack() -> null",
		desc: "Force a primary attack."
	}],
	["SecondaryAttack", {
		detail: "CBaseCombatWeapon.SecondaryAttack() -> null",
		desc: "Force a secondary attack."
	}],
	["SetClip1", {
		detail: "CBaseCombatWeapon.SetClip1(amount: int) -> null",
		desc: "Set current ammo in clip1."
	}],
	["SetClip2", {
		detail: "CBaseCombatWeapon.SetClip2(amount: int) -> null",
		desc: "Set current ammo in clip2."
	}],
	["SetCustomViewModel", {
		detail: "CBaseCombatWeapon.SetCustomViewModel(model_name: string) -> null",
		desc: "Sets a custom view model for this weapon by model name.",
		0: StringParam.MODEL
	}],
	["SetCustomViewModelModelIndex", {
		detail: "CBaseCombatWeapon.SetCustomViewModelModelIndex(model_index: int) -> null",
		desc: "Sets a custom view model for this weapon by modelindex."
	}],
	["SetSubType", {
		detail: "CBaseCombatWeapon.SetSubType(subtype: int) -> null",
		desc: "Set the weapon subtype."
	}],
	["UsesClipsForAmmo1", {
		detail: "CBaseCombatWeapon.UsesClipsForAmmo1() -> bool",
		desc: "Do we use clips for ammo 1?"
	}],
	["UsesClipsForAmmo2", {
		detail: "CBaseCombatWeapon.UsesClipsForAmmo2() -> bool",
		desc: "Do we use clips for ammo 2?"
	}],
	["UsesPrimaryAmmo", {
		detail: "CBaseCombatWeapon.UsesPrimaryAmmo() -> bool",
		desc: "Do we use primary ammo?"
	}],
	["UsesSecondaryAmmo", {
		detail: "CBaseCombatWeapon.UsesSecondaryAmmo() -> bool",
		desc: "Do we use secondary ammo?"
	}],
	["VisibleInWeaponSelection", {
		detail: "CBaseCombatWeapon.VisibleInWeaponSelection() -> bool",
		desc: "Is this weapon visible in weapon selection?"
	}],
	/* --------------------------- *
	 * CBaseFlex                   *
	 * --------------------------- */
	["PlayScene", {
		detail: "CBaseFlex.PlayScene(scene_file: string, delay: float) -> float",
		desc: "Play the specified .vcd file, causing the related characters to speak and subtitles to play."
	}],
	/* --------------------------- *
	 * CBaseCombatCharacter        *
	 * --------------------------- */
	["GetLastKnownArea", {
		detail: "CBaseCombatCharacter.GetLastKnownArea() -> handle",
		desc: "Return the last nav area occupied, NULL if unknown."
	}],
	/* --------------------------- *
	 * CBasePlayer                 *
	 * --------------------------- */
	["GetForceLocalDraw", {
		detail: "CBasePlayer.GetForceLocalDraw() -> bool",
		desc: "Whether the player is being forced by SetForceLocalDraw to be drawn."
	}],
	["GetPlayerMaxs", {
		detail: "CBasePlayer.GetPlayerMaxs() -> Vector",
		desc: "Get a vector containing max bounds of the player in local space. The player's model scale will affect the result."
	}],
	["GetPlayerMins", {
		detail: "CBasePlayer.GetPlayerMins() -> Vector",
		desc: "Get a vector containing min bounds of the player in local space. The player's model scale will affect the result."
	}],
	["GetScriptOverlayMaterial", {
		detail: "CBasePlayer.GetScriptOverlayMaterial() -> string",
		desc: "Gets the current overlay material set by SetScriptOverlayMaterial."
	}],
	["IsNoclipping", {
		detail: "CBasePlayer.IsNoclipping() -> bool",
		desc: "Returns true if the player is in noclip mode."
	}],
	["SetForceLocalDraw", {
		detail: "CBasePlayer.SetForceLocalDraw(toggle: bool) -> null",
		desc: "Forces the player to be drawn as if they were in thirdperson."
	}],
	["SetScriptOverlayMaterial", {
		detail: "CBasePlayer.SetScriptOverlayMaterial(material: string) -> null",
		desc: "Sets the overlay material that can't be overriden by other overlays. E.g. Jarate."
	}],
	["SnapEyeAngles", {
		detail: "CBasePlayer.SnapEyeAngles(angles: QAngle) -> null",
		desc: "Snap the player's eye angles to this."
	}],
	["ViewPunch", {
		detail: "CBasePlayer.ViewPunch(angle_offset: QAngle) -> null",
		desc: "Ow! Punches the player's view."
	}],
	["ViewPunchReset", {
		detail: "CBasePlayer.ViewPunchReset(tolerance: float) -> null",
		desc: "Reset's the player's view punch if the offset stays below the given tolerance."
	}],
	/* --------------------------- *
	 * CEconEntity                 *
	 * --------------------------- */
	["AddAttribute", {
		detail: "CEconEntity.AddAttribute(attribute: string, value: float, duration: float) -> null",
		desc: "Add an attribute to the entity. <s>Set duration to 0 or lower for the attribute to be applied forever</s> See the bug below. The attribute must be one that exists in the game, invalid ones will not be added.",
		0: StringParam.ATTRIBUTE
	}],
	["GetAttribute", {
		detail: "CEconEntity.GetAttribute(attribute: string, default_value: float) -> float",
		desc: "Get an attribute float from the entity. If the attribute does not exist, returns `default_value`.",
		0: StringParam.ATTRIBUTE
	}],
	["RemoveAttribute", {
		detail: "CEconEntity.RemoveAttribute(attribute: string) -> null",
		desc: "Remove an attribute from the entity.",
		0: StringParam.ATTRIBUTE
	}],
	["ReapplyProvision", {
		detail: "CEconEntity.ReapplyProvision() -> null",
		desc: "Relinks attributes to provisioners, e.g. calling this on a weapon will add it's attributes to the player."
	}],
	/* --------------------------- *
	 * CTFPlayer                   *
	 * --------------------------- */
	["AddCond", {
		detail: "CTFPlayer.AddCond(cond: ETFCond) -> null",
		desc: "See [ETFCond](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFCond)."
	}],
	["AddCondEx", {
		detail: "CTFPlayer.AddCondEx(cond: ETFCond, duration: float, provider: handle) -> null",
		desc: "See [ETFCond](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFCond)."
	}],
	["AddCurrency", {
		detail: "CTFPlayer.AddCurrency(amount: int) -> null",
		desc: "Kaching! Give the player some cash for game modes with upgrades, ie. MvM. The new value is bounded between 0-30000."
	}],
	["AddCustomAttribute", {
		detail: "CTFPlayer.AddCustomAttribute(attribute: string, value: float, duration: float) -> null",
		desc: "Add a custom attribute to the player. Set duration to 0 or lower for the attribute to be applied forever. The attribute must be one that exists in the game, invalid ones will not be added.",
		0: StringParam.ATTRIBUTE
	}],
	["AddHudHideFlags", {
		detail: "CTFPlayer.AddHudHideFlags(flags: FHideHUD) -> null",
		desc: "Hides a hud element(-s).\n\nSee [FHideHUD](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FHideHUD)."
	}],
	["ApplyPunchImpulseX", {
		detail: "CTFPlayer.ApplyPunchImpulseX(impulse: float) -> bool",
		desc: "Apply a view punch along the pitch angle. Used to flinch players when hit. If the player is a fully charged scoped-in sniper and the weapon has the `aiming_no_flinch` attribute, the punch will not apply. Returns true if the punch was applied."
	}],
	["BleedPlayer", {
		detail: "CTFPlayer.BleedPlayer(duration: float) -> null",
		desc: "Make a player bleed for a set duration of time."
	}],
	["BleedPlayerEx", {
		detail: "CTFPlayer.BleedPlayerEx(duration: float, damage: int, endless: bool, custom_damage_type: ETFDmgCustom) -> null",
		desc: "Make a player bleed for a set duration of time, or forever, with specific damage per tick and damage_custom index.\n\nSee [ETFDmgCustom](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFDmgCustom)."
	}],
	["CancelTaunt", {
		detail: "CTFPlayer.CancelTaunt() -> null",
		desc: "Cancels any taunt in progress."
	}],
	["CanAirDash", {
		detail: "CTFPlayer.CanAirDash() -> bool",
		desc: "Can the player air dash/double jump?"
	}],
	["CanBeDebuffed", {
		detail: "CTFPlayer.CanBeDebuffed() -> bool"
	}],
	["CanBreatheUnderwater", {
		detail: "CTFPlayer.CanBreatheUnderwater() -> bool"
	}],
	["CanDuck", {
		detail: "CTFPlayer.CanDuck() -> bool",
		desc: "Can the player duck?"
	}],
	["CanGetWet", {
		detail: "CTFPlayer.CanGetWet() -> bool",
		desc: "Can the player get wet by jarate/milk?"
	}],
	["CanJump", {
		detail: "CTFPlayer.CanJump() -> bool",
		desc: "Can the player jump? Returns false if the player is taunting or if the `no_jump` attribute is present and non-zero. There is other conditions that prevent jumping but this function by itself doesn't check those."
	}],
	["ClearCustomModelRotation", {
		detail: "CTFPlayer.ClearCustomModelRotation() -> null"
	}],
	["ClearSpells", {
		detail: "CTFPlayer.ClearSpells() -> null"
	}],
	["ClearTauntAttack", {
		detail: "CTFPlayer.ClearTauntAttack() -> null",
		desc: "Stops active taunt from damaging or cancels Rock-Paper-Scissors result."
	}],
	["CanPlayerMove", {
		detail: "CTFPlayer.CanPlayerMove() -> bool",
		desc: "Can the player move?"
	}],
	["DoTauntAttack", {
		detail: "CTFPlayer.DoTauntAttack() -> null",
		desc: "Performs taunts attacks if available. Player must be already taunting and taunt must have a valid attack assigned (`taunt attack name` attribute)."
	}],
	["DropFlag", {
		detail: "CTFPlayer.DropFlag(silent: bool) -> null",
		desc: "Force player to drop the flag (intelligence)."
	}],
	["DropRune", {
		detail: "CTFPlayer.DropRune(apply_force: bool, team: ETFTeam) -> null",
		desc: "Force player to drop the rune.\n\nSee [ETFTeam](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFTeam)."
	}],
	["EndLongTaunt", {
		detail: "CTFPlayer.EndLongTaunt() -> null",
		desc: "Stops a looping taunt (obeys minimum time rules and plays outro animation if available)."
	}],
	["EquipWearableViewModel", {
		detail: "CTFPlayer.EquipWearableViewModel(entity: handle) -> null",
		desc: "Equips a wearable on the viewmodel. Intended to be used with [tf_wearable_vm](https://developer.valvesoftware.com/wiki/tf_wearable_vm) entities."
	}],
	["ExtinguishPlayerBurning", {
		detail: "CTFPlayer.ExtinguishPlayerBurning() -> null"
	}],
	["FiringTalk", {
		detail: "CTFPlayer.FiringTalk() -> null",
		desc: "Makes eg. a heavy go AAAAAAAAAAaAaa like they are firing their minigun."
	}],
	["ForceChangeTeam", {
		detail: "CTFPlayer.ForceChangeTeam(team: ETFTeam, full_team_switch: bool) -> null",
		desc: "Force player to change their team. Setting the bool to true will not remove nemesis relationships or reset the player's class, as well as not slaying the player.\n\nSee [ETFTeam](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFTeam)."
	}],
	["ForceRegenerateAndRespawn", {
		detail: "CTFPlayer.ForceRegenerateAndRespawn() -> null",
		desc: "Force regenerates and respawns the player."
	}],
	["ForceRespawn", {
		detail: "CTFPlayer.ForceRespawn() -> null",
		desc: "Force respawns the player."
	}],
	["GetActiveWeapon", {
		detail: "CTFPlayer.GetActiveWeapon() -> handle",
		desc: "Get the player's current weapon."
	}],
	["GetBackstabs", {
		detail: "CTFPlayer.GetBackstabs() -> int"
	}],
	["GetBonusPoints", {
		detail: "CTFPlayer.GetBonusPoints() -> int"
	}],
	["GetBotType", {
		detail: "CTFPlayer.GetBotType() -> int"
	}],
	["GetBuildingsDestroyed", {
		detail: "CTFPlayer.GetBuildingsDestroyed() -> int"
	}],
	["GetCaptures", {
		detail: "CTFPlayer.GetCaptures() -> int"
	}],
	["GetClassEyeHeight", {
		detail: "CTFPlayer.GetClassEyeHeight() -> Vector",
		desc: "Gets the eye height of the player."
	}],
	["GetCondDuration", {
		detail: "CTFPlayer.GetCondDuration(cond: ETFCond) -> float",
		desc: "Returns duration of the condition. Returns 0 if the cond is not applied. Returns -1 if the cond is infinite.\n\nSee [ETFCond](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFCond)."
	}],
	["GetCustomAttribute", {
		detail: "CTFPlayer.GetCustomAttribute(attribute: string, default_value: float) -> float",
		desc: "Get an attribute float from the player. If the attribute does not exist, returns `default_value`.",
		0: StringParam.ATTRIBUTE
	}],
	["GetCurrency", {
		detail: "CTFPlayer.GetCurrency() -> int",
		desc: "Get player's cash for game modes with upgrades, ie. MvM."
	}],
	["GetCurrentTauntMoveSpeed", {
		detail: "CTFPlayer.GetCurrentTauntMoveSpeed() -> float"
	}],
	["GetDefenses", {
		detail: "CTFPlayer.GetDefenses() -> int"
	}],
	["GetDisguiseAmmoCount", {
		detail: "CTFPlayer.GetDisguiseAmmoCount() -> int"
	}],
	["GetDisguiseTarget", {
		detail: "CTFPlayer.GetDisguiseTarget() -> handle"
	}],
	["GetDisguiseTeam", {
		detail: "CTFPlayer.GetDisguiseTeam() -> int"
	}],
	["GetDominations", {
		detail: "CTFPlayer.GetDominations() -> int"
	}],
	["GetGrapplingHookTarget", {
		detail: "CTFPlayer.GetGrapplingHookTarget() -> handle",
		desc: "What entity is the player grappling?"
	}],
	["GetHeadshots", {
		detail: "CTFPlayer.GetHeadshots() -> int"
	}],
	["GetHealPoints", {
		detail: "CTFPlayer.GetHealPoints() -> int"
	}],
	["GetHealTarget", {
		detail: "CTFPlayer.GetHealTarget() -> handle",
		desc: "Who is the medic healing?"
	}],
	["GetHudHideFlags", {
		detail: "CTFPlayer.GetHudHideFlags() -> int",
		desc: "Gets current hidden hud elements."
	}],
	["GetInvulns", {
		detail: "CTFPlayer.GetInvulns() -> int"
	}],
	["GetKillAssists", {
		detail: "CTFPlayer.GetKillAssists() -> int"
	}],
	["GetLastWeapon", {
		detail: "CTFPlayer.GetLastWeapon() -> handle"
	}],
	["GetNextChangeClassTime", {
		detail: "CTFPlayer.GetNextChangeClassTime() -> float",
		desc: "Get next change class time."
	}],
	["GetNextChangeTeamTime", {
		detail: "CTFPlayer.GetNextChangeTeamTime() -> float",
		desc: "Get next change team time."
	}],
	["GetNextRegenTime", {
		detail: "CTFPlayer.GetNextRegenTime() -> float",
		desc: "Get next health regen time."
	}],
	["GetPlayerClass", {
		detail: "CTFPlayer.GetPlayerClass() -> int"
	}],
	["GetRageMeter", {
		detail: "CTFPlayer.GetRageMeter() -> float"
	}],
	["GetResupplyPoints", {
		detail: "CTFPlayer.GetResupplyPoints() -> int"
	}],
	["GetRevenge", {
		detail: "CTFPlayer.GetRevenge() -> int"
	}],
	["GetScoutHypeMeter", {
		detail: "CTFPlayer.GetScoutHypeMeter() -> float"
	}],
	["GetSpyCloakMeter", {
		detail: "CTFPlayer.GetSpyCloakMeter() -> float"
	}],
	["GetTeleports", {
		detail: "CTFPlayer.GetTeleports() -> int"
	}],
	["GetTauntAttackTime", {
		detail: "CTFPlayer.GetTauntAttackTime() -> float",
		desc: "Timestamp until a taunt attack \"lasts\". 0 if unavailable."
	}],
	["GetTauntRemoveTime", {
		detail: "CTFPlayer.GetTauntRemoveTime() -> float",
		desc: "Timestamp until taunt is stopped."
	}],
	["GetVehicleReverseTime", {
		detail: "CTFPlayer.GetVehicleReverseTime() -> float",
		desc: "Timestamp when kart was reversed."
	}],
	["GetTimeSinceCalledForMedic", {
		detail: "CTFPlayer.GetTimeSinceCalledForMedic() -> float",
		desc: "When did the player last call medic."
	}],
	["GrantOrRemoveAllUpgrades", {
		detail: "CTFPlayer.GrantOrRemoveAllUpgrades(remove: bool, refund: bool) -> null"
	}],
	["HasItem", {
		detail: "CTFPlayer.HasItem() -> bool",
		desc: "Currently holding an item? Eg. capture flag."
	}],
	["HandleTauntCommand", {
		detail: "CTFPlayer.HandleTauntCommand(taunt_slot: int) -> null",
		desc: "Spoofs a taunt command from the player, as if they selected this taunt. This can be abused to give the player any taunt, see the [examples page](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/VScript_Examples#Giving a taunt)."
	}],
	["IgnitePlayer", {
		detail: "CTFPlayer.IgnitePlayer() -> null",
		desc: "Supposed to set the player on fire, but..."
	}],
	["InAirDueToExplosion", {
		detail: "CTFPlayer.InAirDueToExplosion() -> bool"
	}],
	["InAirDueToKnockback", {
		detail: "CTFPlayer.InAirDueToKnockback() -> bool"
	}],
	["InCond", {
		detail: "CTFPlayer.InCond(cond: ETFCond) -> bool",
		desc: "See [ETFCond](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFCond)."
	}],
	["IsAirDashing", {
		detail: "CTFPlayer.IsAirDashing() -> bool"
	}],
	["IsAllowedToRemoveTaunt", {
		detail: "CTFPlayer.IsAllowedToRemoveTaunt() -> bool",
		desc: "Returns true if the taunt will be stopped."
	}],
	["IsAllowedToTaunt", {
		detail: "CTFPlayer.IsAllowedToTaunt() -> bool"
	}],
	["IsBotOfType", {
		detail: "CTFPlayer.IsBotOfType(type: EBotType) -> bool",
		desc: "Returns true if the player matches this bot type. Only one type of bot exists which is reserved for AI bots (not [https://wiki.teamfortress.com/wiki/Bots#Puppet_bots puppet bots]). 0 is used for real players or puppet bots. Use `IsFakeClient` to check for a puppet bot instead.\n\nSee [EBotType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#EBotType)."
	}],
	["IsCallingForMedic", {
		detail: "CTFPlayer.IsCallingForMedic() -> bool",
		desc: "Is this player calling for medic?"
	}],
	["IsCarryingRune", {
		detail: "CTFPlayer.IsCarryingRune() -> bool"
	}],
	["IsControlStunned", {
		detail: "CTFPlayer.IsControlStunned() -> bool"
	}],
	["IsCritBoosted", {
		detail: "CTFPlayer.IsCritBoosted() -> bool"
	}],
	["IsFakeClient", {
		detail: "CTFPlayer.IsFakeClient() -> bool",
		desc: "Returns true if the player is a puppet or AI bot. To check if the player is a AI bot (`CTFBot`) specifically, use `IsBotOfType` instead."
	}],
	["IsFireproof", {
		detail: "CTFPlayer.IsFireproof() -> bool"
	}],
	["IsFullyInvisible", {
		detail: "CTFPlayer.IsFullyInvisible() -> bool"
	}],
	["IsHypeBuffed", {
		detail: "CTFPlayer.IsHypeBuffed() -> bool"
	}],
	["IsImmuneToPushback", {
		detail: "CTFPlayer.IsImmuneToPushback() -> bool"
	}],
	["IsInspecting", {
		detail: "CTFPlayer.IsInspecting() -> bool"
	}],
	["IsInvulnerable", {
		detail: "CTFPlayer.IsInvulnerable() -> bool"
	}],
	["IsJumping", {
		detail: "CTFPlayer.IsJumping() -> bool"
	}],
	["IsMiniBoss", {
		detail: "CTFPlayer.IsMiniBoss() -> bool",
		desc: "Is this player an MvM mini-boss?"
	}],
	["IsParachuteEquipped", {
		detail: "CTFPlayer.IsParachuteEquipped() -> bool"
	}],
	["IsPlacingSapper", {
		detail: "CTFPlayer.IsPlacingSapper() -> bool",
		desc: "Returns true if we placed a sapper in the last few moments."
	}],
	["IsRageDraining", {
		detail: "CTFPlayer.IsRageDraining() -> bool"
	}],
	["IsRegenerating", {
		detail: "CTFPlayer.IsRegenerating() -> bool"
	}],
	["IsSapping", {
		detail: "CTFPlayer.IsSapping() -> bool",
		desc: "Returns true if we are currently sapping."
	}],
	["IsSnared", {
		detail: "CTFPlayer.IsSnared() -> bool"
	}],
	["IsStealthed", {
		detail: "CTFPlayer.IsStealthed() -> bool"
	}],
	["IsTaunting", {
		detail: "CTFPlayer.IsTaunting() -> bool"
	}],
	["IsUsingActionSlot", {
		detail: "CTFPlayer.IsUsingActionSlot() -> bool"
	}],
	["IsViewingCYOAPDA", {
		detail: "CTFPlayer.IsViewingCYOAPDA() -> bool"
	}],
	["Regenerate", {
		detail: "CTFPlayer.Regenerate(refill_health_ammo: bool) -> null",
		desc: "Resupplies a player. If refill health/ammo is set, clears negative conds, gives back player health/ammo."
	}],
	["RemoveAllItems", {
		detail: "CTFPlayer.RemoveAllItems(unused: bool) -> null"
	}],
	["RemoveAllObjects", {
		detail: "CTFPlayer.RemoveAllObjects(explode: bool) -> null",
		desc: "Remove all player objects. Eg. dispensers/sentries."
	}],
	["RemoveCond", {
		detail: "CTFPlayer.RemoveCond(cond: ETFCond) -> null",
		desc: "Removes a condition. Does not remove a condition if the minimum duration has not passed. Does nothing if the condition isn't added (interally does `InCond` check).\n\nSee [ETFCond](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFCond)."
	}],
	["RemoveCondEx", {
		detail: "CTFPlayer.RemoveCondEx(cond: ETFCond, ignore_duration: bool) -> null",
		desc: "Extended version of above function. Allows forcefully removing the condition even if minimum duration is not met.\n\nSee [ETFCond](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFCond)."
	}],
	["RemoveCurrency", {
		detail: "CTFPlayer.RemoveCurrency(amount: int) -> null",
		desc: "Take away money from a player for reasons such as ie. spending. Lower bounded to 0."
	}],
	["RemoveCustomAttribute", {
		detail: "CTFPlayer.RemoveCustomAttribute(attribute: string) -> null",
		desc: "Remove a custom attribute to the player.",
		0: StringParam.ATTRIBUTE
	}],
	["RemoveDisguise", {
		detail: "CTFPlayer.RemoveDisguise() -> null",
		desc: "Undisguise a spy."
	}],
	["RemoveHudHideFlags", {
		detail: "CTFPlayer.RemoveHudHideFlags(flags: FHideHUD) -> null",
		desc: "Unhides a hud element(-s).\n\nSee [FHideHUD](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FHideHUD)."
	}],
	["RemoveInvisibility", {
		detail: "CTFPlayer.RemoveInvisibility() -> null",
		desc: "Un-invisible a spy."
	}],
	["RemoveTeleportEffect", {
		detail: "CTFPlayer.RemoveTeleportEffect() -> null"
	}],
	["ResetScores", {
		detail: "CTFPlayer.ResetScores() -> null"
	}],
	["RollRareSpell", {
		detail: "CTFPlayer.RollRareSpell() -> null"
	}],
	["SetCondDuration", {
		detail: "CTFPlayer.SetCondDuration(cond: ETFCond, duration: float) -> null",
		desc: "See [ETFCond](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFCond)."
	}],
	["SetCurrency", {
		detail: "CTFPlayer.SetCurrency(amount: int) -> null",
		desc: "Set player's cash for game modes with upgrades, ie. MvM. Does not have any bounds checking."
	}],
	["SetCurrentTauntMoveSpeed", {
		detail: "CTFPlayer.SetCurrentTauntMoveSpeed(speed: float) -> null"
	}],
	["SetCustomModel", {
		detail: "CTFPlayer.SetCustomModel(model_name: string) -> null",
		desc: "Sets a custom player model without animations (model will T-pose). To enable animations, use `SetCustomModelWithClassAnimations` instead.",
		0: StringParam.MODEL
	}],
	["SetCustomModelOffset", {
		detail: "CTFPlayer.SetCustomModelOffset(offset: Vector) -> null"
	}],
	["SetCustomModelRotates", {
		detail: "CTFPlayer.SetCustomModelRotates(toggle: bool) -> null"
	}],
	["SetCustomModelRotation", {
		detail: "CTFPlayer.SetCustomModelRotation(angles: QAngle) -> null"
	}],
	["SetCustomModelVisibleToSelf", {
		detail: "CTFPlayer.SetCustomModelVisibleToSelf(toggle: bool) -> null"
	}],
	["SetCustomModelWithClassAnimations", {
		detail: "CTFPlayer.SetCustomModelWithClassAnimations(model_name: string) -> null",
		desc: "Sets a custom player model with full animations.",
		0: StringParam.MODEL
	}],
	["SetDisguiseAmmoCount", {
		detail: "CTFPlayer.SetDisguiseAmmoCount(count: int) -> null"
	}],
	["SetForcedTauntCam", {
		detail: "CTFPlayer.SetForcedTauntCam(toggle: int) -> null"
	}],
	["SetGrapplingHookTarget", {
		detail: "CTFPlayer.SetGrapplingHookTarget(entity: handle, bleed: bool) -> null",
		desc: "Set the player's target grapple entity."
	}],
	["SetHudHideFlags", {
		detail: "CTFPlayer.SetHudHideFlags(flags: FHideHUD) -> null",
		desc: "Force hud hide flags to a value.\n\nSee [FHideHUD](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FHideHUD)."
	}],
	["SetIsMiniBoss", {
		detail: "CTFPlayer.SetIsMiniBoss(toggle: bool) -> null",
		desc: "Make this player an MvM mini-boss."
	}],
	["SetNextChangeClassTime", {
		detail: "CTFPlayer.SetNextChangeClassTime(time: float) -> null",
		desc: "Set next change class time."
	}],
	["SetNextChangeTeamTime", {
		detail: "CTFPlayer.SetNextChangeTeamTime(time: float) -> null",
		desc: "Set next change team time."
	}],
	["SetNextRegenTime", {
		detail: "CTFPlayer.SetNextRegenTime(time: float) -> null",
		desc: "Set next available resupply time."
	}],
	["SetPlayerClass", {
		detail: "CTFPlayer.SetPlayerClass(class_index: ETFClass) -> null",
		desc: "Sets the player class. Updates the player's visuals and model.\n\nSee [ETFClass](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFClass)."
	}],
	["SetRageMeter", {
		detail: "CTFPlayer.SetRageMeter(percent: float) -> null",
		desc: "Sets rage meter from 0 - 100."
	}],
	["SetRPSResult", {
		detail: "CTFPlayer.SetRPSResult(result: int) -> null",
		desc: "Rig the result of Rock-Paper-Scissors (0 - rock, 1 - paper, 2 - scissors)."
	}],
	["SetScoutHypeMeter", {
		detail: "CTFPlayer.SetScoutHypeMeter(percent: float) -> null",
		desc: "Sets hype meter from 0 - 100."
	}],
	["SetSpyCloakMeter", {
		detail: "CTFPlayer.SetSpyCloakMeter(float) -> null",
		desc: "Sets cloakmeter from 0 - 100."
	}],
	["SetVehicleReverseTime", {
		detail: "CTFPlayer.SetVehicleReverseTime(time: float) -> null",
		desc: "Set the timestamp when kart was reversed."
	}],
	["SetUseBossHealthBar", {
		detail: "CTFPlayer.SetUseBossHealthBar(toggle: bool) -> null"
	}],
	["StopTaunt", {
		detail: "CTFPlayer.StopTaunt(remove_prop: bool) -> null",
		desc: "Stops current taunt. If `remove_prop` is true, the taunt prop will be immediately deleted instead of potentially delaying."
	}],
	["StunPlayer", {
		detail: "CTFPlayer.StunPlayer(duration: float, move_speed_reduction: float, flags: TF_STUN, attacker: handle) -> null",
		desc: "Stuns the player for a specified duration. Move speed reduction is a fraction (0 = no reduction. 1 = total reduction, no movement). Flag combinations control the stun type and behavior.\n\nSee [TF_STUN](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#TF_STUN)."
	}],
	["Taunt", {
		detail: "CTFPlayer.Taunt(taunt_index: FTaunts, taunt_concept: MP_CONCEPT) -> null",
		desc: "Performs a taunt if allowed. Concept is the \"voiceline\" index to use with the taunt. For `TAUNT_SHOW_ITEM` and `TAUNT_BASE_WEAPON` this is set automatically. `TAUNT_LONG` is not supported.\n\nSee [FTaunts](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FTaunts) ,[MP_CONCEPT](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#MP_CONCEPT)."
	}],
	["TryToPickupBuilding", {
		detail: "CTFPlayer.TryToPickupBuilding() -> bool",
		desc: "Make the player attempt to pick up a building in front of them."
	}],
	["UpdateSkin", {
		detail: "CTFPlayer.UpdateSkin(skin: int) -> null"
	}],
	["WasInCond", {
		detail: "CTFPlayer.WasInCond(cond: ETFCond) -> bool",
		desc: "See [ETFCond](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFCond)."
	}],
	["Weapon_CanUse", {
		detail: "CTFPlayer.Weapon_CanUse(weapon: handle) -> bool"
	}],
	["Weapon_Drop", {
		detail: "CTFPlayer.Weapon_Drop(weapon: handle) -> null",
		desc: "Does nothing!"
	}],
	["Weapon_DropEx", {
		detail: "CTFPlayer.Weapon_DropEx(weapon: handle, target: Vector, velocity: Vector) -> null",
		desc: "Does nothing!"
	}],
	["Weapon_Equip", {
		detail: "CTFPlayer.Weapon_Equip(weapon: handle) -> null",
		desc: "Equips a weapon in the player. This places it inside the `m_hMyWeapons` array."
	}],
	["Weapon_SetLast", {
		detail: "CTFPlayer.Weapon_SetLast(weapon: handle) -> null"
	}],
	["Weapon_ShootPosition", {
		detail: "CTFPlayer.Weapon_ShootPosition() -> Vector",
		desc: "The same as calling `EyePosition`."
	}],
	["Weapon_Switch", {
		detail: "CTFPlayer.Weapon_Switch(weapon: handle) -> null",
		desc: "Attempts a switch to the given weapon, if present in the player's inventory (`m_hMyWeapons` array)."
	}],
	/* --------------------------- *
	 * CTFBot                      *
	 * --------------------------- */
	["AddBotAttribute", {
		detail: "CTFBot.AddBotAttribute(attribute: FTFBotAttributeType) -> null",
		desc: "Sets attribute flags on this TFBot.\n\nSee [FTFBotAttributeType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FTFBotAttributeType)."
	}],
	["AddBotTag", {
		detail: "CTFBot.AddBotTag(tag: string) -> null",
		desc: "Adds a bot tag."
	}],
	["AddWeaponRestriction", {
		detail: "CTFBot.AddWeaponRestriction(flags: TFBotWeaponRestrictionType) -> null",
		desc: "Adds weapon restriction flags.\n\nSee [TFBotWeaponRestrictionType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#TFBotWeaponRestrictionType)."
	}],
	["ClearAllBotAttributes", {
		detail: "CTFBot.ClearAllBotAttributes() -> null",
		desc: "Clears all attribute flags on this TFBot."
	}],
	["ClearAllBotTags", {
		detail: "CTFBot.ClearAllBotTags() -> null",
		desc: "Clears bot tags."
	}],
	["ClearAllWeaponRestrictions", {
		detail: "CTFBot.ClearAllWeaponRestrictions() -> null",
		desc: "Removes all weapon restriction flags."
	}],
	["ClearAttentionFocus", {
		detail: "CTFBot.ClearAttentionFocus() -> null",
		desc: "Clear current focus."
	}],
	["ClearBehaviorFlag", {
		detail: "CTFBot.ClearBehaviorFlag(flags: TFBOT_BEHAVIOR) -> null",
		desc: "Clear the given behavior flag(s) for this bot.\n\nSee [TFBOT_BEHAVIOR](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#TFBOT_BEHAVIOR)."
	}],
	["DelayedThreatNotice", {
		detail: "CTFBot.DelayedThreatNotice(threat: handle, delay: float) -> null",
		desc: "Notice the threat after a delay in seconds."
	}],
	["DisbandCurrentSquad", {
		detail: "CTFBot.DisbandCurrentSquad() -> null",
		desc: "Forces the current squad to be entirely disbanded by everyone."
	}],
	["FindVantagePoint", {
		detail: "CTFBot.FindVantagePoint(max_distance: float) -> handle",
		desc: "Get the nav area of the closest vantage point (within distance)."
	}],
	["GenerateAndWearItem", {
		detail: "CTFBot.GenerateAndWearItem(item_name: string) -> null",
		desc: "Give me an item!"
	}],
	["GetActionPoint", {
		detail: "CTFBot.GetActionPoint() -> handle",
		desc: "Get the given action point for this bot."
	}],
	["GetAllBotTags", {
		detail: "CTFBot.GetAllBotTags(result: table) -> null",
		desc: "Get all bot tags. The key is the index, and the value is the tag."
	}],
	["GetHomeArea", {
		detail: "CTFBot.GetHomeArea() -> handle",
		desc: "Sets the home nav area of the bot."
	}],
	["GetDifficulty", {
		detail: "CTFBot.GetDifficulty() -> int",
		desc: "Returns the bot's difficulty level. See [Constants.ETFBotDifficultyType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFBotDifficultyType)."
	}],
	["GetMaxVisionRangeOverride", {
		detail: "CTFBot.GetMaxVisionRangeOverride() -> float",
		desc: "Gets the max vision range override for the bot"
	}],
	["GetMission", {
		detail: "CTFBot.GetMission() -> int",
		desc: "Get this bot's current mission. See [ETFBotMissionType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFBotMissionType)."
	}],
	["GetMissionTarget", {
		detail: "CTFBot.GetMissionTarget() -> handle",
		desc: "Get this bot's current mission target."
	}],
	["GetNearestKnownSappableTarget", {
		detail: "CTFBot.GetNearestKnownSappableTarget() -> handle",
		desc: "Gets the nearest known sappable target."
	}],
	["GetPrevMission", {
		detail: "CTFBot.GetPrevMission() -> int",
		desc: "Get this bot's previous mission. See [ETFBotMissionType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFBotMissionType)."
	}],
	["GetSpawnArea", {
		detail: "CTFBot.GetSpawnArea() -> handle",
		desc: "Return the nav area of where we spawned."
	}],
	["GetSquadFormationError", {
		detail: "CTFBot.GetSquadFormationError() -> float",
		desc: "Gets our formation error coefficient."
	}],
	["HasBotAttribute", {
		detail: "CTFBot.HasBotAttribute(attribute: FTFBotAttributeType) -> bool",
		desc: "Checks if this TFBot has the given attributes.\n\nSee [FTFBotAttributeType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FTFBotAttributeType)."
	}],
	["HasBotTag", {
		detail: "CTFBot.HasBotTag(tag: string) -> bool",
		desc: "Checks if this TFBot has the given bot tag."
	}],
	["HasMission", {
		detail: "CTFBot.HasMission(mission: ETFBotMissionType) -> bool",
		desc: "Return true if the given mission is this bot's current mission.\n\nSee [ETFBotMissionType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFBotMissionType)."
	}],
	["HasWeaponRestriction", {
		detail: "CTFBot.HasWeaponRestriction(flags: TFBotWeaponRestrictionType) -> bool",
		desc: "Checks if this TFBot has the given weapon restriction flags.\n\nSee [TFBotWeaponRestrictionType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#TFBotWeaponRestrictionType)."
	}],
	["IsAmmoFull", {
		detail: "CTFBot.IsAmmoFull() -> bool"
	}],
	["IsAmmoLow", {
		detail: "CTFBot.IsAmmoLow() -> bool"
	}],
	["IsAttentionFocused", {
		detail: "CTFBot.IsAttentionFocused() -> bool",
		desc: "Is our attention focused right now?"
	}],
	["IsAttentionFocusedOn", {
		detail: "CTFBot.IsAttentionFocusedOn(entity: handle) -> bool",
		desc: "Is our attention focused on this entity."
	}],
	["IsBehaviorFlagSet", {
		detail: "CTFBot.IsBehaviorFlagSet(flags: TFBOT_BEHAVIOR) -> bool",
		desc: "Return true if the given behavior flag(s) are set for this bot.\n\nSee [TFBOT_BEHAVIOR](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#TFBOT_BEHAVIOR)."
	}],
	["IsDifficulty", {
		detail: "CTFBot.IsDifficulty(difficulty: ETFBotDifficultyType) -> bool",
		desc: "Returns true/false if the bot's difficulty level matches.\n\nSee [ETFBotDifficultyType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFBotDifficultyType)."
	}],
	["IsInASquad", {
		detail: "CTFBot.IsInASquad() -> bool",
		desc: "Checks if we are in a squad."
	}],
	["IsOnAnyMission", {
		detail: "CTFBot.IsOnAnyMission() -> bool",
		desc: "Return true if this bot has a current mission."
	}],
	["IsWeaponRestricted", {
		detail: "CTFBot.IsWeaponRestricted(weapon: handle) -> bool",
		desc: "Checks if the given weapon is restricted for use on the bot."
	}],
	["LeaveSquad", {
		detail: "CTFBot.LeaveSquad() -> null",
		desc: "Makes us leave the current squad (if any)."
	}],
	["PressAltFireButton", {
		detail: "CTFBot.PressAltFireButton(duration: float = -1) -> null"
	}],
	["PressFireButton", {
		detail: "CTFBot.PressFireButton(duration: float = -1) -> null"
	}],
	["PressSpecialFireButton", {
		detail: "CTFBot.PressSpecialFireButton(duration: float = -1) -> null"
	}],
	["RemoveBotAttribute", {
		detail: "CTFBot.RemoveBotAttribute(attribute: FTFBotAttributeType) -> null",
		desc: "Removes attribute flags on this TFBot.\n\nSee [FTFBotAttributeType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FTFBotAttributeType)."
	}],
	["RemoveBotTag", {
		detail: "CTFBot.RemoveBotTag(tag: string) -> null",
		desc: "Removes a bot tag."
	}],
	["RemoveWeaponRestriction", {
		detail: "CTFBot.RemoveWeaponRestriction(flags: TFBotWeaponRestrictionType) -> null",
		desc: "Removes weapon restriction flags.\n\nSee [TFBotWeaponRestrictionType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#TFBotWeaponRestrictionType)."
	}],
	["SetActionPoint", {
		detail: "CTFBot.SetActionPoint(entity: handle) -> null",
		desc: "Set the given action point for this bot."
	}],
	["SetAttentionFocus", {
		detail: "CTFBot.SetAttentionFocus(entity: handle) -> null",
		desc: "Sets our current attention focus to this entity."
	}],
	["SetAutoJump", {
		detail: "CTFBot.SetAutoJump(min_time: float, max_time: float) -> null",
		desc: "Sets if the bot should automatically jump, and how often."
	}],
	["SetBehaviorFlag", {
		detail: "CTFBot.SetBehaviorFlag(flags: TFBOT_BEHAVIOR) -> null",
		desc: "Set the given behavior flag(s) for this bot.\n\nSee [TFBOT_BEHAVIOR](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#TFBOT_BEHAVIOR)."
	}],
	["SetDifficulty", {
		detail: "CTFBot.SetDifficulty(difficulty: ETFBotDifficultyType) -> null",
		desc: "Sets the bots difficulty level.\n\nSee [ETFBotDifficultyType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFBotDifficultyType)."
	}],
	["SetHomeArea", {
		detail: "CTFBot.SetHomeArea(area: handle) -> null",
		desc: "Set the home nav area of the bot, may be null."
	}],
	["SetMaxVisionRangeOverride", {
		detail: "CTFBot.SetMaxVisionRangeOverride(range: float) -> null",
		desc: "Sets max vision range override for the bot."
	}],
	["SetMission", {
		detail: "CTFBot.SetMission(mission: ETFBotMissionType, reset_behavior: bool) -> null",
		desc: "Set this bot's current mission to the given mission.\n\nSee [ETFBotMissionType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFBotMissionType)."
	}],
	["SetMissionTarget", {
		detail: "CTFBot.SetMissionTarget(entity: handle) -> null",
		desc: "Set this bot's mission target to the given entity."
	}],
	["SetPrevMission", {
		detail: "CTFBot.SetPrevMission(mission: ETFBotMissionType) -> null",
		desc: "Set this bot's previous mission to the given mission.\n\nSee [ETFBotMissionType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFBotMissionType)."
	}],
	["SetScaleOverride", {
		detail: "CTFBot.SetScaleOverride(scale: float) -> null",
		desc: "Sets the scale override for the bot."
	}],
	["SetShouldQuickBuild", {
		detail: "CTFBot.SetShouldQuickBuild(toggle: bool) -> null",
		desc: "Sets if the bot should build instantly."
	}],
	["SetSquadFormationError", {
		detail: "CTFBot.SetSquadFormationError(coefficient: float) -> null",
		desc: "Sets our formation error coefficient."
	}],
	["ShouldAutoJump", {
		detail: "CTFBot.ShouldAutoJump() -> bool",
		desc: "Returns if the bot should automatically jump."
	}],
	["ShouldQuickBuild", {
		detail: "CTFBot.ShouldQuickBuild() -> bool",
		desc: "Returns if the bot should build instantly."
	}],
	["UpdateDelayedThreatNotices", {
		detail: "CTFBot.UpdateDelayedThreatNotices() -> null"
	}],
	/* --------------------------- *
	 * CTFBaseBoss                 *
	 * --------------------------- */
	["SetResolvePlayerCollisions", {
		detail: "CTFBaseBoss.SetResolvePlayerCollisions(toggle: bool) -> null",
		desc: "Sets whether the entity should push away players intersecting its bounding box. On by default."
	}],
	/* --------------------------- *
	 * CTFNavArea                  *
	 * --------------------------- */
	["AddIncomingConnection", {
		detail: "CTFNavArea.AddIncomingConnection(area: handle, dir: ENavDirType) -> null",
		desc: "Add areas that connect TO this area by a ONE-WAY link.\n\nSee [ENavDirType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ENavDirType)."
	}],
	["ClearAttributeTF", {
		detail: "CTFNavArea.ClearAttributeTF(bits: FTFNavAttributeType) -> null",
		desc: "Clear TF-specific area attribute bits.\n\nSee [FTFNavAttributeType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FTFNavAttributeType)."
	}],
	["ComputeClosestPointInPortal", {
		detail: "CTFNavArea.ComputeClosestPointInPortal(to: handle, dir: ENavDirType, close_pos: Vector) -> Vector",
		desc: "Compute closest point within the \"portal\" between to an area's direction from the given position.\n\nSee [ENavDirType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ENavDirType)."
	}],
	["ComputeDirection", {
		detail: "CTFNavArea.ComputeDirection(point: Vector) -> int",
		desc: "Return direction from this area to the given point."
	}],
	["ConnectTo", {
		detail: "CTFNavArea.ConnectTo(area: handle, dir: ENavDirType) -> null",
		desc: "Connect this area to given area in given direction.\n\nSee [ENavDirType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ENavDirType)."
	}],
	["Contains", {
		detail: "CTFNavArea.Contains(area: handle) -> bool",
		desc: "Return true if other area is on or above this area, but no others."
	}],
	["ContainsOrigin", {
		detail: "CTFNavArea.ContainsOrigin(point: Vector) -> bool",
		desc: "Return true if given point is on or above this area, but no others."
	}],
	["DebugDrawFilled", {
		detail: "CTFNavArea.DebugDrawFilled(r: int, g: int, b: int, a: int, duration: float, no_depth_test: bool, margin: float) -> null",
		desc: "Draw area as a filled rectangle of the given color."
	}],
	["Disconnect", {
		detail: "CTFNavArea.Disconnect(area: handle) -> null",
		desc: "Disconnect this area from given area."
	}],
	["FindRandomSpot", {
		detail: "CTFNavArea.FindRandomSpot() -> Vector",
		desc: "Get random origin within extent of area."
	}],
	["GetAdjacentArea", {
		detail: "CTFNavArea.GetAdjacentArea(dir: ENavDirType, n: int) -> handle",
		desc: "Return the n'th adjacent area in the given direction.\n\nSee [ENavDirType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ENavDirType)."
	}],
	["GetAdjacentAreas", {
		detail: "CTFNavArea.GetAdjacentAreas(dir: ENavDirType, result: table) -> null",
		desc: "Fills a passed in table with all adjacent areas in the given direction.\n\nSee [ENavDirType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ENavDirType)."
	}],
	["GetAdjacentCount", {
		detail: "CTFNavArea.GetAdjacentCount(dir: ENavDirType) -> int",
		desc: "Get the number of adjacent areas in the given direction.\n\nSee [ENavDirType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ENavDirType)."
	}],
	["GetAttributes", {
		detail: "CTFNavArea.GetAttributes() -> int",
		desc: "Get area attribute bits."
	}],
	["GetAvoidanceObstacleHeight", {
		detail: "CTFNavArea.GetAvoidanceObstacleHeight() -> float",
		desc: "Returns the maximum height of the obstruction above the ground."
	}], /*
	["GetCenter", {
		detail: "CTFNavArea.GetCenter() -> Vector",
		desc: "Get center origin of area."
	}], */
	["GetCorner", {
		detail: "CTFNavArea.GetCorner(dir: ENavDirType) -> Vector",
		desc: "Get corner origin of area.\n\nSee [ENavDirType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ENavDirType)."
	}],
	["GetDistanceSquaredToPoint", {
		detail: "CTFNavArea.GetDistanceSquaredToPoint(pos: Vector) -> float",
		desc: "Return shortest distance between point and this area."
	}],
	["GetDoor", {
		detail: "CTFNavArea.GetDoor() -> handle",
		desc: "Returns the door entity above the area."
	}],
	["GetElevator", {
		detail: "CTFNavArea.GetElevator() -> handle",
		desc: "Returns the elevator if in an elevator's path."
	}],
	["GetElevatorAreas", {
		detail: "CTFNavArea.GetElevatorAreas(result: table) -> null",
		desc: "Fills table with a collection of areas reachable via elevator from this area."
	}],
	["GetID", {
		detail: "CTFNavArea.GetID() -> int",
		desc: "Get area ID."
	}],
	["GetIncomingConnections", {
		detail: "CTFNavArea.GetIncomingConnections(dir: ENavDirType, result: table) -> null",
		desc: "Fills a passed in table with areas connected TO this area by a ONE-WAY link (ie: we have no connection back to them).\n\nSee [ENavDirType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ENavDirType)."
	}],
	["GetParent", {
		detail: "CTFNavArea.GetParent() -> handle",
		desc: "Returns the area just prior to this one in the search path."
	}],
	["GetParentHow", {
		detail: "CTFNavArea.GetParentHow() -> int",
		desc: "Returns how we get from parent to us."
	}],
	["GetPlaceName", {
		detail: "CTFNavArea.GetPlaceName() -> string",
		desc: "Get place name if it exists, null otherwise."
	}],
	["GetPlayerCount", {
		detail: "CTFNavArea.GetPlayerCount(team: ETFTeam) -> int",
		desc: "Return number of players of given team currently within this area (team of zero means any/all).\n\nSee [ETFTeam](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFTeam)."
	}],
	["GetRandomAdjacentArea", {
		detail: "CTFNavArea.GetRandomAdjacentArea(dir: ENavDirType) -> handle",
		desc: "Return a random adjacent area in the given direction.\n\nSee [ENavDirType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ENavDirType)."
	}],
	["GetSizeX", {
		detail: "CTFNavArea.GetSizeX() -> float",
		desc: "Return the area size along the X axis."
	}],
	["GetSizeY", {
		detail: "CTFNavArea.GetSizeY() -> float",
		desc: "Return the area size along the Y axis."
	}],
	["GetTravelDistanceToBombTarget", {
		detail: "CTFNavArea.GetTravelDistanceToBombTarget() -> float",
		desc: "Gets the travel distance to the MvM bomb target."
	}],
	["GetZ", {
		detail: "CTFNavArea.GetZ(pos: Vector) -> float",
		desc: "Return Z of area at (x,y) of `pos`."
	}],
	["HasAttributeTF", {
		detail: "CTFNavArea.HasAttributeTF(bits: FTFNavAttributeType) -> bool",
		desc: "Has TF-specific area attribute bits of the given ones.\n\nSee [FTFNavAttributeType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FTFNavAttributeType)."
	}],
	["HasAttributes", {
		detail: "CTFNavArea.HasAttributes(bits: FNavAttributeType) -> bool",
		desc: "Has area attribute bits of the given ones?.\n\nSee [FNavAttributeType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FNavAttributeType)."
	}],
	["HasAvoidanceObstacle", {
		detail: "CTFNavArea.HasAvoidanceObstacle(maxheight: float) -> bool",
		desc: "Returns true if there's a large, immobile object obstructing this area."
	}],
	["IsBlocked", {
		detail: "CTFNavArea.IsBlocked(team: ETFTeam, affects_flow: bool) -> bool",
		desc: "Return true if team is blocked in this area.\n\nSee [ETFTeam](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFTeam)."
	}],
	["IsBottleneck", {
		detail: "CTFNavArea.IsBottleneck() -> bool",
		desc: "Returns true if area is a bottleneck. (tiny narrow areas with only one path)."
	}],
	["IsCompletelyVisibleToTeam", {
		detail: "CTFNavArea.IsCompletelyVisibleToTeam(team: ETFTeam) -> bool",
		desc: "Return true if given area is completely visible from somewhere in this area by someone on the team.\n\nSee [ETFTeam](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFTeam)."
	}],
	["IsConnected", {
		detail: "CTFNavArea.IsConnected(area: handle, dir: ENavDirType) -> bool",
		desc: "Return true if this area is connected to other area in given direction. (If you set direction to -1 or 4, it will automatically check all directions for a connection).\n\nSee [ENavDirType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ENavDirType)."
	}],
	["IsCoplanar", {
		detail: "CTFNavArea.IsCoplanar(area: handle) -> bool",
		desc: "Return true if this area and given. area are approximately co-planar."
	}],
	["IsDamaging", {
		detail: "CTFNavArea.IsDamaging() -> bool",
		desc: "Return true if this area is marked to have continuous damage."
	}],
	["IsDegenerate", {
		detail: "CTFNavArea.IsDegenerate() -> bool",
		desc: "Return true if this area is badly formed."
	}],
	["IsEdge", {
		detail: "CTFNavArea.IsEdge(dir: ENavDirType) -> bool",
		desc: "Return true if there are no bi-directional links on the given side.\n\nSee [ENavDirType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ENavDirType)."
	}],
	["IsFlat", {
		detail: "CTFNavArea.IsFlat() -> bool",
		desc: "Return true if this area is approximately flat."
	}],
	["IsOverlapping", {
		detail: "CTFNavArea.IsOverlapping(area: handle) -> bool",
		desc: "Return true if `area` overlaps our 2D extents."
	}],
	["IsOverlappingOrigin", {
		detail: "CTFNavArea.IsOverlappingOrigin(pos: Vector, tolerance: float) -> bool",
		desc: "Return true if `pos` is within 2D extents of area."
	}],
	["IsPotentiallyVisibleToTeam", {
		detail: "CTFNavArea.IsPotentiallyVisibleToTeam(team: ETFTeam) -> bool",
		desc: "Return true if any portion of this area is visible to anyone on the given team.\n\nSee [ETFTeam](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFTeam)."
	}],
	["IsReachableByTeam", {
		detail: "CTFNavArea.IsReachableByTeam(team: ETFTeam) -> bool",
		desc: "Is this area reachable by the given team?\n\nSee [ETFTeam](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFTeam)."
	}],
	["IsRoughlySquare", {
		detail: "CTFNavArea.IsRoughlySquare() -> bool",
		desc: "Return true if this area is approximately square."
	}],
	["IsTFMarked", {
		detail: "CTFNavArea.IsTFMarked() -> bool",
		desc: "Is this nav area marked with the current marking scope?"
	}],
	["IsUnderwater", {
		detail: "CTFNavArea.IsUnderwater() -> bool",
		desc: "Return true if area is underwater."
	}],
	["IsValidForWanderingPopulation", {
		detail: "CTFNavArea.IsValidForWanderingPopulation() -> bool",
		desc: "Returns true if area is valid for wandering population."
	}],
	["IsVisible", {
		detail: "CTFNavArea.IsVisible(point: Vector) -> bool",
		desc: "Return true if area is visible from the given eyepoint."
	}],
	["MarkAsBlocked", {
		detail: "CTFNavArea.MarkAsBlocked(team: ETFTeam) -> null",
		desc: "Mark this area as blocked for team.\n\nSee [ETFTeam](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFTeam)."
	}],
	["MarkAsDamaging", {
		detail: "CTFNavArea.MarkAsDamaging(duration: float) -> null",
		desc: "Mark this area is damaging for the next `duration` seconds."
	}],
	["MarkObstacleToAvoid", {
		detail: "CTFNavArea.MarkObstacleToAvoid(height: float) -> null",
		desc: "Marks the obstructed status of the nav area."
	}],
	["RemoveAttributes", {
		detail: "CTFNavArea.RemoveAttributes(bits: FNavAttributeType) -> null",
		desc: "Removes area attribute bits.\n\nSee [FNavAttributeType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FNavAttributeType)."
	}],
	["RemoveOrthogonalConnections", {
		detail: "CTFNavArea.RemoveOrthogonalConnections(dir: ENavDirType) -> null",
		desc: "Removes all connections in directions to left and right of specified direction.\n\nSee [ENavDirType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ENavDirType)."
	}],
	["SetAttributeTF", {
		detail: "CTFNavArea.SetAttributeTF(bits: FTFNavAttributeType) -> null",
		desc: "Set TF-specific area attributes.\n\nSee [FTFNavAttributeType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FTFNavAttributeType)."
	}],
	["SetAttributes", {
		detail: "CTFNavArea.SetAttributes(bits: FNavAttributeType) -> null",
		desc: "Set area attribute bits.\n\nSee [FNavAttributeType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FNavAttributeType)."
	}],
	["SetPlaceName", {
		detail: "CTFNavArea.SetPlaceName(name: string) -> null",
		desc: "Set place name. If you pass null, the place name will be set to nothing."
	}],
	["TFMark", {
		detail: "CTFNavArea.TFMark() -> null",
		desc: "Mark this nav area with the current marking scope."
	}],
	["UnblockArea", {
		detail: "CTFNavArea.UnblockArea() -> null",
		desc: "Unblocks this area."
	}],
	/* --------------------------- *
	 * CScriptKeyValues            *
	 * --------------------------- */
	["FindKey", {
		detail: "CScriptKeyValues.FindKey(key: string) -> CScriptKeyValues",
		desc: "Find a sub key by the key name.",
		0: StringParam.STRING_KEYVALUE
	}],
	["GetFirstSubKey", {
		detail: "CScriptKeyValues.GetFirstSubKey() -> CScriptKeyValues",
		desc: "Return the first sub key object."
	}],
	["GetKeyBool", {
		detail: "CScriptKeyValues.GetKeyBool(key: string) -> bool",
		desc: "Return the key value as a bool.",
		0: StringParam.STRING_KEYVALUE
	}],
	["GetKeyFloat", {
		detail: "CScriptKeyValues.GetKeyFloat(key: string) -> float",
		desc: "Return the key value as a float.",
		0: StringParam.STRING_KEYVALUE
	}],
	["GetKeyInt", {
		detail: "CScriptKeyValues.GetKeyInt(key: string) -> int",
		desc: "Return the key value as an integer.",
		0: StringParam.STRING_KEYVALUE
	}],
	["GetKeyString", {
		detail: "CScriptKeyValues.GetKeyString(key: string) -> string",
		desc: "Return the key value as a string.",
		0: StringParam.STRING_KEYVALUE
	}],
	["GetNextKey", {
		detail: "CScriptKeyValues.GetNextKey() -> CScriptKeyValues",
		desc: "Return the next neighbor key object to the one the method is called on."
	}],
	["IsKeyEmpty", {
		detail: "CScriptKeyValues.IsKeyEmpty(key: string) -> bool",
		desc: "Returns true if the named key has no value.",
		0: StringParam.STRING_KEYVALUE
	}], /*
	["IsValid", {
		detail: "CScriptKeyValues.IsValid() -> bool",
		desc: "Whether the handle belongs to a valid key."
	}], */
	["ReleaseKeyValues", {
		detail: "CScriptKeyValues.ReleaseKeyValues() -> null",
		desc: "Releases the contents of the instance."
	}],
	/* --------------------------- *
	 * CEnvEntityMaker             *
	 * --------------------------- */
	["SpawnEntity", {
		detail: "CEnvEntityMaker.SpawnEntity() -> null",
		desc: "Create an entity at the location of the maker."
	}],
	["SpawnEntityAtEntityOrigin", {
		detail: "CEnvEntityMaker.SpawnEntityAtEntityOrigin(entity: handle) -> null",
		desc: "Create an entity at the location of a specified entity instance."
	}],
	["SpawnEntityAtLocation", {
		detail: "CEnvEntityMaker.SpawnEntityAtLocation(origin: Vector, orientation: Vector) -> null",
		desc: "Create an entity at a specified location and orientation, orientation is Euler angle in degrees (pitch, yaw, roll)."
	}],
	["SpawnEntityAtNamedEntityOrigin", {
		detail: "CEnvEntityMaker.SpawnEntityAtNamedEntityOrigin(targetname: string) -> null",
		desc: "Create an entity at the location of a named entity. If multiple entities have the same name, only the one with the lowest entity index will be targeted."
	}],
	/* --------------------------- *
	 * CFuncTrackTrain             *
	 * --------------------------- */
	["GetFuturePosition", {
		detail: "CFuncTrackTrain.GetFuturePosition(x: float, speed: float) -> Vector",
		desc: "Get a position on the track X seconds in the future."
	}],
	/* --------------------------- *
	 * CPointScriptTemplate        *
	 * --------------------------- */
	["AddTemplate", {
		detail: "CPointScriptTemplate.AddTemplate(classname: string, keyvalues: table) -> null",
		desc: "Add an entity with the given keyvalues to the template spawner, similar to `SpawnEntityFromTable`. The number of templates allowed is unlimited.",
		0: StringParam.CLASSNAME
	}],
	["SetGroupSpawnTables", {
		detail: "CPointScriptTemplate.SetGroupSpawnTables(group: table, spawn: table) -> null",
		desc: "Unused. This only stores a reference to the two tables which is removed when the"
	}],
	/* --------------------------- *
	 * CSceneEntity                *
	 * --------------------------- */
	["AddBroadcastTeamTarget", {
		detail: "CSceneEntity.AddBroadcastTeamTarget(index: int) -> null",
		desc: "Adds a team (by index) to the broadcast list."
	}],
	["EstimateLength", {
		detail: "CSceneEntity.EstimateLength() -> float",
		desc: "Returns length of this scene in seconds."
	}],
	["FindNamedEntity", {
		detail: "CSceneEntity.FindNamedEntity(reference: string) -> handle",
		desc: "Given an entity reference, such as !target, get actual entity from scene object."
	}],
	["IsPaused", {
		detail: "CSceneEntity.IsPaused() -> bool",
		desc: "If this scene is currently paused."
	}],
	["IsPlayingBack", {
		detail: "CSceneEntity.IsPlayingBack() -> bool",
		desc: "If this scene is currently playing."
	}],
	["LoadSceneFromString", {
		detail: "CSceneEntity.LoadSceneFromString(scene_name: string, scene: string) -> bool",
		desc: "Given a dummy scene name and a vcd string, load the scene."
	}],
	["RemoveBroadcastTeamTarget", {
		detail: "CSceneEntity.RemoveBroadcastTeamTarget(index: int) -> null",
		desc: "Removes a team (by index) from the broadcast list."
	}],
	/* --------------------------- *
	 * CCallChainer                *
	 * --------------------------- */
	["CCallChainer", {
		detail: "CCallChainer(function_prefix: string, scope: table = null) -> CCallChainer",
		desc: "Creates a CCallChainer object that'll collect functions that have a matching prefix in the given scope."
	}],
	["PostScriptExecute", {
		detail: "CCallChainer.PostScriptExecute() -> null",
		desc: "Search for all non-native functions with matching prefixes, then push them into the `chains` table."
	}],
	["Call", {
		detail: "CCallChainer.Call(event: string, ...args: any) -> bool",
		desc: "Find an unprefixed function name in the `chains` table and call it with the given arguments."
	}],
	/* --------------------------- *
	 * CSimpleCallChainer          *
	 * --------------------------- */
	["CSimpleCallChainer", {
		detail: "CSimpleCallChainer(prefix: string, scope: table = null, exactMatch: bool = false) -> CSimpleCallChainer",
		desc: "Creates a CSimpleCallChainer object that'll collect functions that have a matching prefix in the given scope, unless it seek for an exact name match."
	}], /*
	["PostScriptExecute", {
		detail: "CSimpleCallChainer.PostScriptExecute() -> null",
		desc: "Begin searching for all non-native functions with matching prefixes, then push them into the `chain` array."
	}],
	["Call", {
		detail: "CSimpleCallChainer.Call(...args: any) -> bool",
		desc: "Call all functions inside the `chain` array with the given arguments."
	}], */
	/* --------------------------- *
	 * NextBotCombatCharacter      *
	 * --------------------------- */
	["ClearImmobileStatus", {
		detail: "NextBotCombatCharacter.ClearImmobileStatus() -> null",
		desc: "Clear immobile status."
	}],
	["FlagForUpdate", {
		detail: "NextBotCombatCharacter.FlagForUpdate(toggle: bool) -> null",
		desc: "Flag this bot for update (or not to update if `toggle` is false)."
	}],
	["GetBodyInterface", {
		detail: "NextBotCombatCharacter.GetBodyInterface() -> INextBotComponent",
		desc: "Get this bot's body interface."
	}],
	["GetBotId", {
		detail: "NextBotCombatCharacter.GetBotId() -> int",
		desc: "Get this bot's id."
	}],
	["GetImmobileDuration", {
		detail: "NextBotCombatCharacter.GetImmobileDuration() -> float",
		desc: "How long have we been immobile."
	}],
	["GetImmobileSpeedThreshold", {
		detail: "NextBotCombatCharacter.GetImmobileSpeedThreshold() -> float",
		desc: "Return units/second below which this actor is considered immobile."
	}],
	["GetIntentionInterface", {
		detail: "NextBotCombatCharacter.GetIntentionInterface() -> INextBotComponent",
		desc: "Get this bot's intention interface."
	}],
	["GetLocomotionInterface", {
		detail: "NextBotCombatCharacter.GetLocomotionInterface() -> ILocomotion",
		desc: "Get this bot's locomotion interface."
	}],
	["GetTickLastUpdate", {
		detail: "NextBotCombatCharacter.GetTickLastUpdate() -> int",
		desc: "Get last update tick."
	}],
	["GetVisionInterface", {
		detail: "NextBotCombatCharacter.GetVisionInterface() -> INextBotComponent",
		desc: "Get this bot's vision interface."
	}],
	["IsEnemy", {
		detail: "NextBotCombatCharacter.IsEnemy(entity: handle) -> bool",
		desc: "Return true if given entity is our enemy."
	}],
	["IsFlaggedForUpdate", {
		detail: "NextBotCombatCharacter.IsFlaggedForUpdate() -> bool",
		desc: "Is this bot flagged for update."
	}],
	["IsFriend", {
		detail: "NextBotCombatCharacter.IsFriend(entity: handle) -> bool",
		desc: "Return true if given entity is our friend."
	}],
	["IsImmobile", {
		detail: "NextBotCombatCharacter.IsImmobile() -> bool",
		desc: "Return true if we haven't moved in awhile."
	}],
	/* --------------------------- *
	 * INextBotComponent           *
	 * --------------------------- */
	["ComputeUpdateInterval", {
		detail: "INextBotComponent/ILocomotion.ComputeUpdateInterval() -> bool",
		desc: "Recomputes the component update interval."
	}],
	["GetUpdateInterval", {
		detail: "INextBotComponent/ILocomotion.GetUpdateInterval() -> float",
		desc: "Returns the component update interval."
	}],
	["Reset", {
		detail: "INextBotComponent/ILocomotion.Reset() -> null",
		desc: "Resets the internal update state"
	}],
	/* --------------------------- *
	 * ILocomotion                 *
	 * --------------------------- */
	["Approach", {
		detail: "ILocomotion.Approach(goal: Vector, goal_weight: float) -> null",
		desc: "The primary locomotive method. Goal determines the destination position to move towards. goal_weight determines the priority of this path, you can set this to 1.0 generally speaking."
	}],
	["ClearStuckStatus", {
		detail: "ILocomotion.ClearStuckStatus(reason: string) -> null",
		desc: "Reset stuck status to un-stuck. Reason message is shown when debugging nextbots."
	}],
	["ClimbUpToLedge", {
		detail: "ILocomotion.ClimbUpToLedge(goal_pos: Vector, goal_forward: Vector, obstacle: handle) -> bool",
		desc: "Initiate a jump to an adjacent high ledge, return false if climb can't start."
	}], /*
	["ComputeUpdateInterval", {
		detail: "ILocomotion.ComputeUpdateInterval() -> bool",
		desc: "Returns false if no time has elapsed."
	}], */
	["DriveTo", {
		detail: "ILocomotion.DriveTo(pos: Vector) -> null",
		desc: "Move the bot to the precise given position immediately, updating internal state."
	}],
	["FaceTowards", {
		detail: "ILocomotion.FaceTowards(target: Vector) -> null",
		desc: "Rotate body to face towards target."
	}],
	["FractionPotentialGap", {
		detail: "ILocomotion.FractionPotentialGap(from: Vector, to: Vector) -> float",
		desc: "If the locomotor cannot jump over the gap, returns the fraction of the jumpable ray."
	}],
	["FractionPotentiallyTraversable", {
		detail: "ILocomotion.FractionPotentiallyTraversable(from: Vector, to: Vector, immediately: bool) -> float",
		desc: "If the locomotor could not move along the line given, returns the fraction of the walkable ray. If `immediately` is true, breakables are considered non-traverseable."
	}],
	["GetDeathDropHeight", {
		detail: "ILocomotion.GetDeathDropHeight() -> float",
		desc: "Distance at which we will die if we fall."
	}],
	["GetDesiredSpeed", {
		detail: "ILocomotion.GetDesiredSpeed() -> float",
		desc: "Get desired speed for locomotor movement."
	}],
	["GetFeet", {
		detail: "ILocomotion.GetFeet() -> Vector",
		desc: "Return position of feet - the driving point where the bot contacts the ground."
	}],
	["GetGround", {
		detail: "ILocomotion.GetGround() -> handle",
		desc: "Return the current ground entity or NULL if not on the ground."
	}],
	["GetGroundMotionVector", {
		detail: "ILocomotion.GetGroundMotionVector() -> Vector",
		desc: "Return unit vector in XY plane describing our direction of motion - even if we are currently not moving."
	}],
	["GetGroundNormal", {
		detail: "ILocomotion.GetGroundNormal() -> Vector",
		desc: "Surface normal of the ground we are in contact with."
	}],
	["GetGroundSpeed", {
		detail: "ILocomotion.GetGroundSpeed() -> float",
		desc: "Return current world space speed in XY plane."
	}],
	["GetMaxAcceleration", {
		detail: "ILocomotion.GetMaxAcceleration() -> float",
		desc: "Return maximum acceleration of locomotor."
	}],
	["GetMaxDeceleration", {
		detail: "ILocomotion.GetMaxDeceleration() -> float",
		desc: "Return maximum deceleration of locomotor."
	}],
	["GetMaxJumpHeight", {
		detail: "ILocomotion.GetMaxJumpHeight() -> float",
		desc: "Return maximum height of a jump."
	}],
	["GetMotionVector", {
		detail: "ILocomotion.GetMotionVector() -> Vector",
		desc: "Return unit vector describing our direction of motion - even if we are currently not moving."
	}],
	["GetRunSpeed", {
		detail: "ILocomotion.GetRunSpeed() -> float",
		desc: "Get maximum running speed."
	}],
	["GetSpeed", {
		detail: "ILocomotion.GetSpeed() -> float",
		desc: "Return current world space speed (magnitude of velocity)."
	}],
	["GetSpeedLimit", {
		detail: "ILocomotion.GetSpeedLimit() -> float",
		desc: "Get maximum speed bot can reach, regardless of desired speed."
	}],
	["GetStepHeight", {
		detail: "ILocomotion.GetStepHeight() -> float",
		desc: "If delta Z is lower than this, we can step up the surface (like a stair step), but if delta Z is greater than this, we have to jump to get up."
	}],
	["GetStuckDuration", {
		detail: "ILocomotion.GetStuckDuration() -> float",
		desc: "Return how long we've been stuck."
	}],
	["GetTraversableSlopeLimit", {
		detail: "ILocomotion.GetTraversableSlopeLimit() -> float",
		desc: "Return Z component of unit normal of steepest traversable slope."
	}], /*
	["GetUpdateInterval", {
		detail: "ILocomotion.GetUpdateInterval() -> float",
		desc: "Returns time between updates."
	}], */
	["GetVelocity", {
		detail: "ILocomotion.GetVelocity() -> Vector",
		desc: "Return current world space velocity."
	}],
	["GetWalkSpeed", {
		detail: "ILocomotion.GetWalkSpeed() -> float",
		desc: "Get maximum walking speed."
	}],
	["HasPotentialGap", {
		detail: "ILocomotion.HasPotentialGap(from: Vector, to: Vector) -> float",
		desc: "Checks if there is a possible gap that will need to be jumped over. Returns fraction of ray from 0 to 1."
	}],
	["IsAbleToClimb", {
		detail: "ILocomotion.IsAbleToClimb() -> bool",
		desc: "Return true if this bot can climb arbitrary geometry it encounters."
	}],
	["IsAbleToJumpAcrossGaps", {
		detail: "ILocomotion.IsAbleToJumpAcrossGaps() -> bool",
		desc: "Return true if this bot can jump across gaps in its path."
	}],
	["IsAreaTraversable", {
		detail: "ILocomotion.IsAreaTraversable(area: handle) -> bool",
		desc: "Return true if given area can be used for navigation."
	}],
	["IsAttemptingToMove", {
		detail: "ILocomotion.IsAttemptingToMove() -> bool",
		desc: "Return true if we have tried to Approach() or DriveTo() very recently."
	}],
	["IsClimbingOrJumping", {
		detail: "ILocomotion.IsClimbingOrJumping() -> bool",
		desc: "Is jumping in any form."
	}],
	["IsClimbingUpToLedge", {
		detail: "ILocomotion.IsClimbingUpToLedge() -> bool",
		desc: "Is climbing up to a high ledge."
	}],
	["IsEntityTraversable", {
		detail: "ILocomotion.IsEntityTraversable(entity: handle, immediately: bool) -> bool",
		desc: "Return true if the entity handle is traversable. If `immediately` is true, breakables are considered non-traverseable."
	}],
	["IsGap", {
		detail: "ILocomotion.IsGap(pos: Vector, forward: Vector) -> bool",
		desc: "Return true if there is a gap at this position."
	}],
	["IsJumpingAcrossGap", {
		detail: "ILocomotion.IsJumpingAcrossGap() -> bool",
		desc: "Is jumping across a gap to the far side."
	}],
	["IsOnGround", {
		detail: "ILocomotion.IsOnGround() -> bool",
		desc: "Return true if standing on something."
	}],
	["IsPotentiallyTraversable", {
		detail: "ILocomotion.IsPotentiallyTraversable(from: Vector, to: Vector, immediately: bool) -> float",
		desc: "Checks if this locomotor could potentially move along the line given. Returns fraction of trace result (1 = clear). If `immediately` is true, breakables are considered non-traverseable."
	}],
	["IsRunning", {
		detail: "ILocomotion.IsRunning() -> bool",
		desc: "Is running?"
	}],
	["IsScrambling", {
		detail: "ILocomotion.IsScrambling() -> bool",
		desc: "Is in the middle of a complex action (climbing a ladder, climbing a ledge, jumping, etc) that shouldn't be interrupted."
	}],
	["IsStuck", {
		detail: "ILocomotion.IsStuck() -> bool",
		desc: "Return true if bot is stuck. If the locomotor cannot make progress, it becomes stuck and can only leave this stuck state by successfully movingand becoming un-stuck."
	}],
	["Jump", {
		detail: "ILocomotion.Jump() -> null",
		desc: "Initiate a simple undirected jump in the air."
	}],
	["JumpAcrossGap", {
		detail: "ILocomotion.JumpAcrossGap(goal_pos: Vector, goal_forward: Vector) -> null",
		desc: "Initiate a jump across an empty volume of space to far side."
	}],
	["OnLandOnGround", {
		detail: "ILocomotion.OnLandOnGround(ground: handle) -> null",
		desc: "Manually run the OnLandOnGround callback. Typically invoked when bot lands on the ground after being in the air."
	}],
	["OnLeaveGround", {
		detail: "ILocomotion.OnLeaveGround(ground: handle) -> null",
		desc: "Manually run the OnLeaveGround callback. Typically invoked when bot leaves ground for any reason."
	}], /*
	["Reset", {
		detail: "ILocomotion.Reset() -> null",
		desc: "Resets motion, stuck state etc."
	}], */
	["Run", {
		detail: "ILocomotion.Run() -> null",
		desc: "Set desired movement speed to running."
	}],
	["SetDesiredSpeed", {
		detail: "ILocomotion.SetDesiredSpeed(speed: float) -> null",
		desc: "Set desired speed for locomotor movement."
	}],
	["SetSpeedLimit", {
		detail: "ILocomotion.SetSpeedLimit(limit: float) -> null",
		desc: "Set maximum speed bot can reach, regardless of desired speed."
	}],
	["Stop", {
		detail: "ILocomotion.Stop() -> null",
		desc: "Set desired movement speed to stopped."
	}],
	["Walk", {
		detail: "ILocomotion.Walk() -> null",
		desc: "Set desired movement speed to walking"
	}],
	/* --------------------------- *
	 * regexp                      *
	 * --------------------------- */
	["regexp", {
		detail: "regexp(pattern: string) -> regexp"
	}],
	["capture", {
		detail: "regexp.capture(str: string, start: int = 0) -> table",
		desc: "Returns an array of tables containing two indexes (\"begin\" and \"end\") of the first match of the regular expression in the string str. An array entry is created for each captured sub expressions. If no match occurs returns null. The search starts from the index start of the string, if start is omitted the search starts from the beginning of the string."
	}],
	["match", {
		detail: "regexp.match(str: string) -> bool",
		desc: "Returns a true if the regular expression matches the string str, otherwise returns false."
	}],
	["search", {
		detail: "regexp.search(str: string, start: int = 0) -> table",
		desc: "Returns a table containing two indexes (\"begin\" and \"end\") of the first match of the regular expression in the string `str`, otherwise if no match occurs returns null. The search starts from the index start of the string, if start is omitted the search starts from the beginning of the string."
	}],
	["subexpcount", {
		detail: "regexp.subexpcount()"
	}],
	/* --------------------------- *
	 * Vector                      *
	 * --------------------------- */
	["Cross", {
		detail: "Vector.Cross(factor: Vector) -> Vector",
		desc: "The vector product of two vectors. Returns a vector orthogonal to the input vectors."
	}],
	["Dot", {
		detail: "Vector.Dot(factor: Vector) -> float",
		desc: "The scalar product of two vectors."
	}],
	["Length", {
		detail: "Vector.Length() -> float",
		desc: "Magnitude of the vector."
	}],
	["LengthSqr", {
		detail: "Vector.LengthSqr() -> float",
		desc: "The magnitude of the vector squared."
	}],
	["Length2D", {
		detail: "Vector.Length2D() -> float",
		desc: "Returns the magnitude of the vector on the x-y plane."
	}],
	["Length2DSqr", {
		detail: "Vector.Length2DSqr() -> float",
		desc: "Returns the square of the magnitude of the vector on the x-y plane."
	}],
	["Norm", {
		detail: "Vector/Quaternion.Norm() -> float",
		desc: "Normalizes the vector/quaternion in place and returns it's length."
	}],
	["Scale", {
		detail: "Vector.Scale(factor: float) -> Vector",
		desc: "Scales the vector magnitude."
	}],
	["ToKVString", {
		detail: "Vector/QAngle/Quaternion.ToKVString() -> string",
		desc: "Returns a string without separations commas."
	}],
	/* --------------------------- *
	 * QAngle                      *
	 * --------------------------- */
	["Forward", {
		detail: "QAngle.Forward() -> Vector",
		desc: "Returns the Forward Vector of the angles."
	}],
	["Left", {
		detail: "QAngle.Left() -> Vector"
	}],
	["Pitch", {
		detail: "QAngle.Pitch() -> float",
		desc: "Returns the pitch angle in degrees."
	}],
	["Roll", {
		detail: "QAngle.Roll() -> float",
		desc: "Returns the roll angle in degrees."
	}], /*
	["ToKVString", {
		detail: "QAngle.ToKVString() -> string",
		desc: "Returns a string with the values separated by one space."
	}],*/
	["ToQuat", {
		detail: "QAngle.ToQuat() -> Quaternion",
		desc: "Returns a quaternion representaion of the orientation."
	}],
	["Up", {
		detail: "QAngle.Up() -> Vector",
		desc: "Returns the Up Vector of the angles."
	}],
	["Yaw", {
		detail: "QAngle.Yaw() -> float",
		desc: "Returns the yaw angle in degrees."
	}],
	/* --------------------------- *
	 * Quaternion                  *
	 * --------------------------- */
	/*
	Dot: {
	detail: "Quaternion.Dot(factor: Quaternion) -> float",
	desc: "The 4D scalar product of two quaternions. represents the angle between the quaternions in the range [1, 0]."
	}, */
	["Invert", {
		detail: "Quaternion.Invert() -> Quaternion",
		desc: "Returns a quaternion with the complimentary rotation."
	}],/*
	["Norm", {
		detail: "Quaternion.Norm() -> float",
		desc: "Normalizes the quaternion."
	}],*/
	["SetPitchYawRoll", {
		detail: "Quaternion.SetPitchYawRoll(pitch: float, yaw: float, roll: float) -> null",
		desc: "Recomputes the quaternion from the supplied Euler angles."
	}],/*
	["ToKVString", {
		detail: "Quaternion.ToKVString() -> string",
		desc: "Returns a string with the values separated by one space."
	}],*/
	["ToQAngle", {
		detail: "Quaternion.ToQAngle() -> QAngle",
		desc: "Returns the angles resulting from the rotation."
	}],
	/* --------------------------- *
	 * String                      *
	 * --------------------------- */

	["find", {
		detail: "string.find(substring: string, start_index: int = null) -> int | null",
		desc: "Looks for the sub-string passed as its first parameter, starting at either the beginning of the string or at a specific character index if one is provided as a second parameter. If the sub-string is found, returns the index at which it first occurs, otherwise returns null."
	}],
	["len", {
		detail: "string/array/table.len() -> int",
		desc: "Returns a string's/array's/table's length."
	}],
	["slice", {
		detail: "string/array.slice(start_index: int, end_index: int = null) -> null",
		desc: "Returns a section of the string/array as new string/array. Copies from start to the end (not included). If start is negative the index is calculated as length + start, if end is negative the index is calculated as length + end. If end is omitted end is equal to the string/array length."
	}],
	["tolower", {
		detail: "string.toupper() -> string",
		desc: "Returns a new string with all upper-case characters converted to lower-case."
	}],
	["toupper", {
		detail: "string.tolower() -> string",
		desc: "Returns a new string with all lower-case characters converted to upper-case."
	}],
	/* --------------------------- *
	 * Array                       *
	 * --------------------------- */
	["append", {
		detail: "array.append(item: any) -> null",
		desc: "Adds an item to the end of an array."
	}],
	["apply", {
		detail: "array.apply(func: function) -> null",
		desc: "Applies a function to all of an array's items."
	}],
	["clear", {
		detail: "table/array.clear() -> null",
		desc: "Removes all of the items from an array/table."
	}],
	["extend", {
		detail: "array.extend(other: array) -> null",
		desc: "Combines two arrays into one."
	}],
	["filter", {
		detail: "array.filter(filter: function) -> null",
		desc: "Applies a filter function to an array's items, storing the results in a new array."
	}], /*
	["find", {
		detail: "array.find(item: any) -> int | null",
		desc: "Finds an index of the value within an array. Returns null if not present."
	}], */
	["insert", {
		detail: "array.insert(index: int, item: any) -> null",
		desc: "Inserts an item into an array at the specified index."
	}], /*
	["len", {
		detail: "array.len() -> int",
		desc: "Returns an array's length."
	}], */
	["map", {
		detail: "array.map(func: function) -> array",
		desc: "Applies a function an array's items, adding the results to a new array."
	}],
	["pop", {
		detail: "array.pop() -> any",
		desc: "Returns and removes the value at the end of the array."
	}],
	["push", {
		detail: "array.push(item: any) -> null",
		desc: "Adds an item to the end of an array."
	}],
	["reduce", {
		detail: "array.reduce(func: function, initializer: any = null) -> any",
		desc: "This method applies the supplied function to all of the items in the target array, starting with the first two. The function returns a single value which is then combined with the next (third) item in the array — and so on until all of the items have been combined into a single value which the method returns."
	}],
	["remove", {
		detail: "array.remove(index: int) -> any",
		desc: "Returns and removes an array item at a specified index."
	}],
	["resize", {
		detail: "array.resize(new_size: int, fill: any = null) -> null",
		desc: "Increases or decreases the size of an array."
	}],
	["reverse", {
		detail: "array.reverse() -> null",
		desc: "Reverses the order of the elements in an array."
	}], /*
	["slice", {
		detail: "array.slice(start_index: int, end_index: int) -> null",
		desc: "Creates a new array from an array."
	}], */
	["sort", {
		detail: "array.sort(compare: function = null) -> null",
		desc: "This method sorts the items within the target array into either a lowest-to-highest order or according to the results of an optional comparison function which may be passed to the method as a parameter. If the items are arrays, blobs, functions, objects and/or tables, they will be sorted by reference not value. The optional comparison function should take two parameters: two values which will be compared in some way. It should return the value -1 if the first value should be placed before the second, or 1 if it should follow the second value. Return 0 if the two values are equivalent."
	}],
	["top", {
		detail: "array.top() -> any",
		desc: "Returns the value at the end of an array."
	}],
	/* --------------------------- *
	 * Table                       *
	 * --------------------------- */
	/*
	["clear", {
		detail: "table.clear() -> null",
		desc: "Removes all of the items from a table."
	}], */
	["getdelegate", {
		detail: "table.getdelegate() -> table",
		desc: "Returns a table's delegate."
	}],
	/*
	["len", {
		detail: "table.len() -> int",
		desc: "Returns an table's length."
	}], */
	["rawdelete", {
		detail: "table.rawdelete(key: any) -> any",
		desc: "This method deletes the target slot without employing delegation. If the table lacks the target slot, the methods returns null, otherwise it returns the value associated with that slot."
	}],
	["rawget", {
		detail: "table/class/handle.rawget(key: any) -> any",
		desc: "Retrieves the value of the specified key without employing delegation."
	}],
	["rawin", {
		detail: "table/class/handle.rawin(key: any) -> bool",
		desc: "Checks for the presence of the specified key in the table/class/handle without employing delegation."
	}],
	["rawset", {
		detail: "table/class/handle.rawset(key: any, value: any) -> any",
		desc: "Sets the value of the specified key without employing delegation."
	}],
	["setdelegate", {
		detail: "table.setdelegate(deletgate: table) -> table",
		desc: "This method assigns the passed table as the target’s new custom delegate. The method always returns the target.To remove a delegate, either assign the target with a new delegate, or pass null."
	}],
	["keys", {
		detail: "table.keys() -> array",
		desc: "Returns an array containing all the keys of the table slots."
	}],
	["values", {
		detail: "table.values() -> array",
		desc: "Returns an array containing all the values of the table slots."
	}],
	/* --------------------------- *
	 * Function                    *
	 * --------------------------- */
	["acall", {
		detail: "function.acall(args: array) -> any",
		desc: "Calls the target function and passes array values into its parameters."
	}],
	["bindenv", {
		detail: "function.bindenv(scope: table/handle) -> function",
		desc: "Clones the target function and binds it to a specified context object."
	}],
	["call", {
		detail: "function.call(scope: table/handle, ...args: any) -> any",
		desc: "Calls the function with a non-default context object."
	}],
	["pcall", {
		detail: "function.pcall(scope: table/handle, ...args: any) -> any",
		desc: "Calls the function with a non-default context object, bypassing Squirrel error callbacks."
	}],
	["pacall", {
		detail: "function.pacall(args: array) -> any",
		desc: "Calls the function with an array of parameters, bypassing Squirrel error callbacks."
	}],
	["setroot", {
		detail: "function.setroot(root: table) -> null",
		desc: "Sets the root table of a closure"
	}],
	["getroot", {
		detail: "function.getroot() -> table",
		desc: "Returns the root table of the closure"
	}],
	["getinfos", {
		detail: "function.getinfos() -> table",
		desc: "Returns a table containing informations about the function, like parameters, name and source name."
	}],
	/* --------------------------- *
	 * Class                       *
	 * --------------------------- */
	["instance", {
		detail: "class.instance() -> handle",
		desc: "Returns a new instance of the class. this function does not invoke the instance constructor. The constructor must be explicitly called (eg. class_inst.constructor(class_inst) )."
	}],
	["getattributes", {
		detail: "class.getattributes(member_name: string) -> any",
		desc: "Returns the attributes of the specified member. if the parameter member is null the function returns the class level attributes."
	}],
	["setattributes", {
		detail: "class.getattributes(member_name: string, value: any) -> any",
		desc: "Sets the attribute of the specified member and returns the previous attribute value. if the parameter member is null the function sets the class level attributes."
	}],
	["newmember", {
		detail: "class.newmember(key: any, value: any, attrs: table = null, static: bool = false) -> null",
		desc: "Sets/adds the slot `key` with the value `val` and attributes `attrs` and if present invokes the _newmember metamethod. If `static` is true the slot will be added as static. If the slot does not exists - it will be created."
	}],
	["rawnewmember", {
		detail: "class.rawnewmember(key: any, value: any, attrs: table = null, static: bool = false) -> null",
		desc: "Sets/adds the slot `key` with the value `val` and attributes `attrs`. If `static` is true the slot will be added as static. If the slot does not exists - it will be created."
	}],

	/* --------------------------- *
	 * Handle                      *
	 * --------------------------- */
	["getclass", {
		detail: "handle.getclass() -> class",
		desc: "Returns the class that created the instance."
	}],
	/* --------------------------- *
	 * Generic                     *
	 * --------------------------- */
	["weakref", {
		detail: "object.weakref() -> weakreference",
		desc: "Returns a weak reference to the object."
	}],
	["tofloat", {
		detail: "int/bool/float/string.tofloat() -> float",
		desc: "Returns float value represented by the integer/bool/float/string. For string it must only contain numeric characters and/or plus and minus symbols. An exception is thrown otherwise."
	}],
	["tointeger", {
		detail: "int/bool/float/string.tointeger(base: int = 10) -> int",
		desc: "Returns integer value represented by the integer/bool/float/string. For string it must only contain numeric characters. An exception is thrown otherwise. Hexadecimal notation is supported (i.e. 0xFF). If a hexadecimal string contains more than 10 characters, including the 0x, returns -1."
	}],
	["tochar", {
		detail: "int/float.tochar() -> int",
		desc: "Returns a string containing a single character represented by the integer/integer part of the float."
	}],
	["tostring", {
		detail: "int/bool/float/string/handle.tostring() -> string",
		desc: "Returns a string representation of the corresponding data type. For handles/tables the default return behaviour can be redefined by using _tostring metamethod in the handle's class / table's delegate."
	}],
	/* --------------------------- *
	 * Weak Reference              *
	 * --------------------------- */
	["ref", {
		detail: "weakreference.ref() -> object",
		desc: "Returns the object that the weak reference is pointing at; null if the object that was point at was destroyed."
	}]
]);

export const deprecatedMethods: Docs = new Map([
	/* --------------------------- *
	 * CBaseEntity                 *
	 * --------------------------- */
	["__KeyValueFromFloat", {
		detail: "CBaseEntity.__KeyValueFromFloat(key: string, value: float) -> bool",
		desc: "`(→ KeyValueFromFloat)`.\n\nBehaves the same as `KeyValueFromFloat`, use that instead.",
		successor: "KeyValueFromFloat",
		0: StringParam.NUMBER_KEYVALUE
	}],
	["__KeyValueFromInt", {
		detail: "CBaseEntity.__KeyValueFromInt(key: string, value: int) -> bool",
		desc: "`(→ KeyValueFromInt)`.\n\nBehaves the same as `KeyValueFromInt`, use that instead.",
		successor: "KeyValueFromInt",
		0: StringParam.NUMBER_KEYVALUE
	}],
	["__KeyValueFromString", {
		detail: "CBaseEntity.__KeyValueFromString(key: string, value: string) -> bool",
		desc: "`(→ KeyValueFromString)`.\n\nBehaves the same as `KeyValueFromString`, use that instead.",
		successor: "KeyValueFromString",
		0: StringParam.STRING_KEYVALUE
	}],
	["__KeyValueFromVector", {
		detail: "CBaseEntity.__KeyValueFromVector(key: string, value: Vector) -> bool",
		desc: "`(→ KeyValueFromVector)`.\n\nBehaves the same as `KeyValueFromVector`, use that instead.",
		successor: "KeyValueFromVector",
		0: StringParam.VECTOR_KEYVALUE
	}],
	["GetAngles", {
		detail: "CBaseEntity.GetAngles() -> Vector",
		desc: "`(→ GetAbsAngles)`.\n\nGet the entity's pitch, yaw, and roll as a **Vector**.",
		successor: "GetAbsAngles"
	}],
	["GetLeftVector", {
		detail: "CBaseEntity.GetLeftVector() -> Vector",
		desc: "`(→ GetRightVector)`.\n\nGet the *right* vector of the entity. This is purely for compatibility.",
		successor: "GetRightVector"
	}],
	["GetVelocity", {
		detail: "CBaseEntity.GetVelocity() -> Vector",
		desc: "`(→ GetAbsVelocity)`.",
		successor: "GetAbsVelocity"
	}],
	["SetAngles", {
		detail: "CBaseEntity.SetAngles(pitch: float, yaw: float, roll: float) -> null",
		desc: "`(→ SetAbsAngles)`.\n\nSet entity angles.",
		successor: "SetAbsAngles"
	}],
	["SetOrigin", {
		detail: "CBaseEntity.SetOrigin(origin: Vector) -> null",
		desc: "`(→ SetAbsOrigin)`.",
		successor: "SetAbsOrigin"
	}],
	["SetVelocity", {
		detail: "CBaseEntity.SetVelocity(velocity: Vector) -> null",
		desc: "`(→ SetAbsVelocity)`.",
		successor: "SetAbsVelocity"
	}]
]);

export const functions: Docs = new Map([
	["AddThinkToEnt", {
		detail: "AddThinkToEnt(entity: handle, function_name: string) -> null",
		desc: "Sets a function in the entity's script to rerun by itself constantly. Pass null as the function name to remove a think function."
	}],
	["AddToScriptHelp", {
		detail: "AddToScriptHelp()"
	}],
	["Assert", {
		detail: "Assert(value: bool, optional_message: string) -> null",
		desc: "Test value and if not true, throws exception, optionally with message."
	}],
	["ClearGameEventCallbacks", {
		detail: "ClearGameEventCallbacks() -> null",
		desc: "Empties the tables of game event callback functions."
	}],
	["CreateProp", {
		detail: "CreateProp(classname: string, origin: Vector, model_name: string, activity: int) -> handle",
		desc: "Create a prop.",
		0: StringParam.CLASSNAME
	}],
	["CreateSceneEntity", {
		detail: "CreateSceneEntity(scene: string) -> handle",
		desc: "Create a scene entity to play the specified scene."
	}],
	["developer", {
		detail: "developer() -> int",
		desc: "The current level of the `developer` console variable."
	}],
	["DispatchParticleEffect", {
		detail: "DispatchParticleEffect(name: string, origin: Vector, direction: Vector) -> null",
		desc: "Dispatches a one-off particle system. To pass angles into this, use the `.Forward()` method on a QAngle."
	}],
	["Document", {
		detail: "Document(symbol_or_table: unknown, item_if_symbol: unknown = null, description_if_symbol: string = null) -> null"
	}],
	["DoEntFire", {
		detail: "DoEntFire(target: string, action: string, value: string, delay: float, activator: handle, caller: handle) -> null",
		desc: "Generate an entity I/O event. The `caller` and `activator` argument takes a `CBaseEntity` script handle, and entities assigned can receive inputs with `target` set to *!self*, or *!activator* / *!caller*. Negative delays are clamped to 0.",
		0: StringParam.TARGETNAME,
		1: StringParam.INPUT
	}],
	["DoIncludeScript", {
		detail: "DoIncludeScript(file: string, handle/scope: table) -> bool",
		desc: "Execute a script and put all its content for the argument passed to the `scope` parameter. The file must have the `.nut` extension."
	}],
	["IncludeScript", {
		detail: "IncludeScript(file: string, scope: table = null) -> bool",
		desc: "Wrapper for DoIncludeScript."
	}],
	["EmitAmbientSoundOn", {
		detail: "EmitAmbientSoundOn(sound_name: string, volume: float, soundlevel: int, pitch: int, entity: handle) -> null",
		desc: "Play named sound on an entity using configurations similar to [this page](https://developer.valvesoftware.com/wiki/ambient_generic]]. Soundlevel is in decibels, see [Soundscripts#SoundLevel](https://developer.valvesoftware.com/wiki/Soundscripts#SoundLevel) for real world equivalents."
	}],
	["StopAmbientSoundOn", {
		detail: "StopAmbientSoundOn(sound_name: string, entity: handle) -> null",
		desc: "Stop named sound on an entity using configurations similar to [ambient_generic](https://developer.valvesoftware.com/wiki/ambient_generic)."
	}],
	["EmitSoundOn", {
		detail: "EmitSoundOn(sound_script: string, entity: handle) -> null",
		desc: "Play named sound on given entity. The sound must be precached first for it to play (using `PrecacheSound` or `PrecacheScriptSound`)."
	}],
	["StopSoundOn", {
		detail: "StopSoundOn(sound_script: string, entity: handle) -> null",
		desc: "Stop named sound on an entity."
	}],
	["EmitSoundOnClient", {
		detail: "EmitSoundOnClient(sound_script: string, player: handle) -> null",
		desc: "Play named sound only on the client for the specified player. The sound must be precached first for it to play (`PrecacheScriptSound`)."
	}],
	["EntFire", {
		detail: "EntFire(target: string, action: string, value: string = \"\", delay: float = 0.0, activator: handle = null) -> null",
		desc: "Wrapper for DoEntFire() that sets `activator` to null, but has no `caller` param. Negative delays are clamped to 0.",
		0: StringParam.TARGETNAME,
		1: StringParam.INPUT
	}],
	["EntFireByHandle", {
		detail: "EntFireByHandle(entity: handle, action: string, value: string, delay: float, activator: handle, caller: handle) -> null",
		desc: "Generate an entity I/O event. First parameter is an entity instance. Negative delays are clamped to 0.",
		0: StringParam.TARGETNAME,
		1: StringParam.INPUT
	}],
	["EntIndexToHScript", {
		detail: "EntIndexToHScript(entindex: int) -> handle",
		desc: "Turn an entity index integer to an HScript representing that entity's script instance."
	}],
	["FileToString", {
		detail: "FileToString(file: string) -> string",
		desc: "Reads a string from file located in the game's *scriptdata* folder. Returns the string from the file, null if no file or file is greater than 16384 bytes."
	}],
	["FindCircularReference", {
		detail: "FindCircularReference()"
	}],
	["FindCircularReferences", {
		detail: "FindCircularReferences()"
	}],
	["FireGameEvent", {
		detail: "FireGameEvent(name: string, params: table) -> bool",
		desc: "Fire a game event to a listening callback function in script. Parameters are passed in a shared table."
	}],
	["FireScriptHook", {
		detail: "FireScriptHook(name: string, params: table) -> bool",
		desc: "Fire a script hook to a listening callback function in script. Parameters are passed in a shared table."
	}],
	["FireScriptEvent", {
		detail: "FireScriptEvent(event: string, params: table) -> null",
		desc: "Wrapper for `__RunEventCallbacks()`."
	}],
	["FrameTime", {
		detail: "FrameTime() -> float",
		desc: "Get the time spent on the server in the last frame. Usually this will be 0.015 (the default tickrate)."
	}],
	["GetDeveloperLevel", {
		detail: "GetDeveloperLevel() -> int",
		desc: "Gets the level of `developer`."
	}],
	["GetFrameCount", {
		detail: "GetFrameCount() -> int",
		desc: "Returns the engines current frame count. The counter does not reset between map changes. This is NOT the tick count."
	}],
	["GetFriction", {
		detail: "GetFriction(player: handle) -> float",
		desc: "Returns the Friction on a player entity, meaningless if not a player."
	}],
	["GetFunctionSignature", {
		detail: "GetFunctionSignature(func: function, prefix: string) -> string"
	}],
	["GetListenServerHost", {
		detail: "GetListenServerHost() -> handle",
		desc: "Get the local player on a listen server. Returns null on dedicated servers."
	}],
	["GetMapName", {
		detail: "GetMapName() -> string",
		desc: "Get the name of the map without extension, e.g. `ctf_2fort`. For workshop maps, this will be in the format `workshop/[name].ugc[id]`."
	}],
	["GetModelIndex", {
		detail: "GetModelIndex(model_name: string) -> int",
		desc: "Returns the index of the named model.",
		0: StringParam.MODEL
	}],
	["GetPlayerFromUserID", {
		detail: "GetPlayerFromUserID(userid: int) -> handle",
		desc: "Given a user id, return the entity, or null."
	}],
	["GetSoundDuration", {
		detail: "GetSoundDuration(sound_name: string, actor_model_name: string) -> float",
		desc: "Returns float duration of the sound. Actor model name is optional and can be left null.",
		0: StringParam.SOUND,
		1: StringParam.MODEL
	}],
	["IsDedicatedServer", {
		detail: "IsDedicatedServer() -> bool",
		desc: "Returns true if this server is a dedicated server."
	}],
	["IsModelPrecached", {
		detail: "IsModelPrecached(model_name: string) -> bool",
		desc: "Checks if the `model_name` is precached.",
		0: StringParam.MODEL
	}],
	["IsSoundPrecached", {
		detail: "IsSoundPrecached(sound_name: string) -> bool",
		desc: "Checks if the `sound_name` is precached."
	}],
	["IsPlayerABot", {
		detail: "IsPlayerABot(player: handle) -> bool",
		desc: "Is this player/entity a puppet or AI bot. To check if the player is a AI bot (`CTFBot`) specifically, use `IsBotOfType` instead."
	}],
	["IsWeakref", {
		detail: "IsWeakref() -> bool"
	}],
	["LocalTime", {
		detail: "LocalTime(result: table) -> null",
		desc: "Fills out a table with the local time (second, minute, hour, day, month, year, dayofweek, dayofyear, daylightsavings). This mirrors the `tm` structure in C++, see the [https://cplusplus.com/reference/ctime/tm/ reference page] for more information."
	}],
	["MakeNamespace", {
		detail: "MakeNamespace()"
	}],
	["MaxClients", {
		detail: "MaxClients() -> float",
		desc: "Get the current number of max clients set by the maxplayers command."
	}],
	["PickupObject", {
		detail: "PickupObject(player: handle, entity: handle) -> null",
		desc: "Object from world is put into the \"Held\" slot of the player. Warning: it will smoothly interpolate from where it is to the players hand - which is a bit goofy if it is on other side of level."
	}],
	["PlayerInstanceFromIndex", {
		detail: "PlayerInstanceFromIndex(index: int) -> CBasePlayer",
		desc: "Get a script handle of a player using the player index."
	}],
	["PrecacheEntityFromTable", {
		detail: "PrecacheEntityFromTable(keyvalues: table) -> bool",
		desc: "Precache an entity from [KeyValues](https://developer.valvesoftware.com/wiki/KeyValues) in a table. Internally this function creates the entity, fire `DispatchSpawn` and removes it instantly. Returns false if the table has no *classname* key, if the value of *classname* is null or empty, or if the entity failed to be created."
	}],
	["PrecacheModel", {
		detail: "PrecacheModel(model_name: string) -> int",
		desc: "Precache a model (`.mdl`) or sprite (`.vmt`) and return model index. The extension must be specified. Returns -1 if null or empty `model_name` is passed in. Missing models/sprites will still return a new index.",
		0: StringParam.MODEL
	}],
	["PrecacheScriptSound", {
		detail: "PrecacheScriptSound(sound_name: string) -> bool",
		desc: "Precache a soundscript. Returns false if soundscript is missing, or if a null or empty sound name is passed in.",
		0: StringParam.SOUND
	}],
	["PrecacheSound", {
		detail: "PrecacheSound(sound_name: string) -> bool",
		desc: "Precache a raw sound. Returns false if a null or empty sound name is passed in.",
		0: StringParam.SOUND
	}],
	["PrintHelp", {
		detail: "PrintHelp() -> null",
		desc: "Equivalent to running `script_help` command."
	}],
	["RandomFloat", {
		detail: "RandomFloat(min: float, max: float) -> float",
		desc: "Generate a random floating-point number within a range, inclusive."
	}],
	["RandomInt", {
		detail: "RandomInt(min: int, max: int) -> int",
		desc: "Generate a random integer within a range, inclusive."
	}],
	["RegisterFunctionDocumentation", {
		detail: "RegisterFunctionDocumentation(func: unknown, name: string, detail: string, desc: string) -> null"
	}],
	["RegisterScriptGameEventListener", {
		detail: "RegisterScriptGameEventListener(event_name: string) -> null",
		desc: "Register as a listener for a game event from script. It's what `__CollectGameEventCallbacks()` uses to register event callbacks to the C++ code."
	}],
	["RegisterScriptHookListener", {
		detail: "RegisterScriptHookListener(name: string) -> null",
		desc: "Register as a listener for a script hook from script."
	}],
	["RetrieveNativeSignature", {
		detail: "RetrieveNativeSignature(func: function) -> string"
	}],
	["RotateOrientation", {
		detail: "RotateOrientation(QAngle, QAngle) -> QAngle",
		desc: "Rotate a QAngle by another QAngle."
	}],
	["RotatePosition", {
		detail: "RotatePosition(origin: Vector, rotation: QAngle, input: Vector) -> Vector",
		desc: "Rotate the input Vector around an origin."
	}],
	["ScreenFade", {
		detail: "ScreenFade(player: handle, red: int, green: int, blue: int, alpha: int, fade_time: float, fade_hold: float, flags: FFADE) -> null",
		desc: "Start a customisable screenfade. If no player is specified, the fade will apply to all players.\n\nSee [FFADE](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FFADE)"
	}],
	["ScreenShake", {
		detail: "ScreenShake(center: Vector, amplitude: float, frequency: float, duration: float, radius: float, command: SHAKE_COMMAND, air_shake: bool) -> null",
		desc: "Start a customisable screenshake. Set `command` to 0 to start a shake, or 1 to stop an existing shake. `air_shake` determines whether the airborne players should be affected by the shake as well.\n\nSee [SHAKE_COMMAND](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#SHAKE_COMMAND)"
	}],
	["ScriptHooksEnabled", {
		detail: "ScriptHooksEnabled() -> bool",
		desc: "Returns whether script hooks are currently enabled."
	}],
	["SendGlobalGameEvent", {
		detail: "SendGlobalGameEvent(event_name: string, params: table) -> bool",
		desc: "Sends a real game event to everything. Parameters are passed in a shared table."
	}],
	["SendToConsole", {
		detail: "SendToConsole(command: string) -> null",
		desc: "Issues a command to the local client, as if they typed in the command in their console. Does nothing on dedicated servers."
	}],
	["SendToServerConsole", {
		detail: "SendToServerConsole(command: string) -> null",
		desc: "Issues a command to the server, as if typed in the console."
	}],
	["SendToConsoleServer", {
		detail: "SendToConsoleServer(command: string) -> null",
		desc: "Copy of SendToServerConsole with another name for compat."
	}],
	["SetFakeClientConVarValue", {
		detail: "SetFakeClientConVarValue(bot: handle, cvar: string, value: string) -> null",
		desc: "Sets a USERINFO client ConVar for a fakeclient."
	}],
	["SetSkyboxTexture", {
		detail: "SetSkyboxTexture(texture: string) -> null",
		desc: "Sets the current skybox texture. The path is relative to \"materials/skybox/\". Only the main name of a skybox texture is needed, for example \"sky_gravel_01\"."
	}],
	["SpawnEntityFromTable", {
		detail: "SpawnEntityFromTable(name: string, keyvalues: table) -> handle",
		desc: "Spawn entity from KeyValues in table - `name` is entity name, rest are KeyValues for spawn.",
		0: StringParam.CLASSNAME
	}],
	["SpawnEntityGroupFromTable", {
		detail: "SpawnEntityGroupFromTable(groups: table) -> bool",
		desc: "Hierarchically spawn an entity group from a set of spawn tables. This computes a spawn order for entities so that parenting is resolved correctly."
	}],
	["StringToFile", {
		detail: "StringToFile(file: string, string: string) -> null",
		desc: "Stores a string as a file, located in the game's *scriptdata* folder."
	}],
	["Time", {
		detail: "Time() -> float",
		desc: "Get the current time since map load in seconds. The time resets on map change."
	}],
	["TraceLine", {
		detail: "TraceLine(start: Vector, end: Vector, ignore: handle) -> float",
		desc: "Trace a ray. Return fraction along line that hits world or models. Optionally, ignore the specified entity."
	}],
	["TraceLinePlayersIncluded", {
		detail: "TraceLinePlayersIncluded(start: Vector, end: Vector, ignore: handle) -> float",
		desc: "Different version of `TraceLine` that also hits players and NPCs."
	}],
	["TraceLineEx", {
		detail: "TraceLineEx(params: table) -> bool",
		desc: "Extended version of `TraceLine`. See the [main page](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/TraceLineEx) for more details.\n\n---\nInput variables of the `params` table. The only required information to make the trace is providing the start and end point. The rest are optional:\n\n```squirrelDoc\nstart: Vector\n```\nPoint where to start the trace, in world coordinates.\n```squirrelDoc\nend: Vector\n```\nPoint where to end the trace, in world coordinates. If the end is the same as the start, this will function as a point check, i.e. is the point inside any geometry.\n```squirrelDoc\nmask: int\n```\nOptional contents bitmask to include or exclude common groups of geometry, such as fences, NPCs, playerclips, etc. Default mask is `MASK_VISIBLE_AND_NPCS`. See constants page for a list of [contents](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FContents) and [common mask](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#MASK) types. By default this will trace against the bounding box of models only. Add `CONTENTS_HITBOX` to the mask to instead perform precise hitbox tests.\n```squirrelDoc\nignore: handle\n```\nOptional entity to ignore when tracing. [worldspawn](https://developer.valvesoftware.com/wiki/worldspawn) cannot be ignored.\n\n---\nOutput variables of the `params` table:\n```squirrelDoc\npos: Vector\n```\nPoint in world coordinates where the trace ended. Equal to end position if nothing was hit.\n```squirrelDoc\nfraction: float\n```\n Fraction from the start to end where the trace ended. E.g. 0.0 is start, 1.0 is end.\n```squirrelDoc\nhit: bool\n```\n Whether the trace hit something.\n```squirrelDoc\nenthit: handle\n```\n If hit, the entity that was hit. This is not written to the table if hit was false.\n```squirrelDoc\nstartsolid: bool\n```\n Whether the trace started inside geometry. Only written if true.\n```squirrelDoc\nallsolid: bool\n```\n If true, plane information is unavailable (started and ended inside geometry or didn't hit anything). Only written if true.\n```squirrelDoc\nstartpos: Vector\n```\n Starting position of the trace in world coordinates. Probably the same as start.\n```squirrelDoc\nendpos: Vector\n```\n Ending position of the trace in world coordinates. Same as end if it didn't hit anything, otherwise this is the hit point.\n```squirrelDoc\nplane_normal: Vector\n```\n If hit, the normal (unit) vector of the surface.\n```squirrelDoc\nplane_dist: float\n```\n If hit, distance of surface plane from origin. Forms a plane equation with plane_normal.\n```squirrelDoc\nsurface_name: string\n```\n If hit, name of the surface's texture that was hit. Not available for displacements or models.\n```squirrelDoc\nsurface_flags: int\n```\nIf hit, bitmask of the surface flags. See [FSurf](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FSurf) constants.\n```squirrelDoc\nsurface_props: int\n```\nIf hit, the [surfaceprop](https://developer.valvesoftware.com/wiki/surfaceprop) of the surface. Note that this is an index rather than a string."
	}],
	["TraceHull", {
		detail: "TraceHull(params: table) -> bool",
		desc: "Trace a [box (AABB)](https://developer.valvesoftware.com/wiki/Bounding_Box). See the [main page](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/TraceHull) for more details.\n\n---\nInput variables of the `params` table. The only required information to make the trace is providing the start, end points and the min/max extents. The rest are optional:\n\n```squirrelDoc\nstart: Vector\n```\nPoint where to start the trace, in world coordinates.\n```squirrelDoc\nend: Vector\n```\nPoint where to end the trace, in world coordinates. If the end is the same as the start, this will function as a point check, i.e. is the point inside any geometry.\n```squirrelDoc\nhullmin: Vector\n```\nThe minimum extent of the box, relative to the start position.\n```squirrelDoc\nhullmax: Vector\n```\nThe maximum extent of the box, relative to the start position.\n```squirrelDoc\nmask: int\n```\nOptional contents bitmask to include or exclude common groups of geometry, such as fences, NPCs, playerclips, etc. Default mask is `MASK_VISIBLE_AND_NPCS`. See constants page for a list of [contents](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FContents) and [common mask](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#MASK) types. `CONTENTS_HITBOX` is not supported.\n```squirrelDoc\nignore: handle\n```\nOptional entity to ignore when tracing. [worldspawn](https://developer.valvesoftware.com/wiki/worldspawn) cannot be ignored.\n\n---\nOutput variables of the `params` table:\n```squirrelDoc\npos: Vector\n```\nPoint in world coordinates where the trace ended. Equal to end position if nothing was hit.\n```squirrelDoc\nfraction: float\n```\nFraction from the start to end where the trace ended. E.g. 0.0 is start, 1.0 is end.\n```squirrelDoc\nhit: bool\n```\nWhether the trace hit something.\n```squirrelDoc\nenthit: handle\n```\nIf hit, the entity that was hit. This is not written to the table if hit was false.\n```squirrelDoc\nstartsolid: bool\n```\nWhether the trace started inside geometry. Only written if true.\n```squirrelDoc\nallsolid: bool\n```\nIf true, plane information is unavailable (started and ended inside geometry or didn't hit anything). Only written if true.\n```squirrelDoc\nstartpos: Vector\n```\nStarting position of the trace in world coordinates. Probably the same as start.\n```squirrelDoc\nendpos: Vector\n```\nEnding position of the trace in world coordinates. Same as end if it didn't hit anything, otherwise this is the hit point.\n```squirrelDoc\nplane_normal: Vector\n```\nIf hit, the normal (unit) vector of the surface.\n```squirrelDoc\nplane_dist: float\n```\nIf hit, distance of surface plane from origin. Forms a plane equation with plane_normal.\n```squirrelDoc\nsurface_name: string\n```\nIf hit, name of the surface's texture that was hit. Not available for displacements or models.\n```squirrelDoc\nsurface_flags: int\n```\nIf hit, bitmask of the surface flags. See [FSurf](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FSurf) constants.\n```squirrelDoc\nsurface_props: int\n```\nIf hit, the [surfaceprop](https://developer.valvesoftware.com/wiki/surfaceprop) of the surface. Note that this is an index rather than a string."
	}],
	["UniqueString", {
		detail: "UniqueString(suffix: string = \"\") -> string",
		desc: "Generate a string guaranteed to be unique across the life of the script VM, with an optional suffix. Useful for adding data to tables when not sure what keys are already in use in that table."
	}],
	["DoUniqueString", {
		detail: "DoUniqueString(suffix: string) -> string",
		desc: "Internal function called by `UniqueString`."
	}],
	["VSquirrel_OnCreateScope", {
		detail: "VSquirrel_OnCreateScope(value: any, scope: table) -> table",
		desc: "Creates a new scope with the name of value in the submitted table (includes unique params)."
	}],
	["VSquirrel_OnReleaseScope", {
		detail: "VSquirrel_OnReleaseScope(created_scope: table) -> null",
		desc: "Removes a scope created via VSquirrel_OnCreateScope."
	}],
	["__CollectEventCallbacks", {
		detail: "__CollectEventCallbacks(scope, prefix, global_table_name, reg_func) -> null",
		desc: "Overloaded function. Its only used for this: `__CollectEventCallbacks(scope, \"OnGameEvent_\", \"GameEventCallbacks\", ::RegisterScriptGameEventListener)`."
	}],
	["__CollectGameEventCallbacks", {
		detail: "__CollectGameEventCallbacks(scope: table) -> null",
		desc: "Wrapper that registers callbacks for both [OnGameEvent_*x* ↑](https://developer.valvesoftware.com/wiki/#Hooks) and `OnScriptEvent_` functions. Done using the `__CollectEventCallbacks` function."
	}],
	["__ReplaceClosures", {
		detail: "__ReplaceClosures(script, scope) -> null"
	}],
	["__RunEventCallbacks", {
		detail: "__RunEventCallbacks(event, params, prefix, global_table_name, warn_if_missing: bool) -> null",
		desc: "Call all functions in the callback array for the given game event."
	}],
	["__RunGameEventCallbacks", {
		detail: "__RunGameEventCallbacks(event, params) -> null",
		desc: "Wrapper for `__RunEventCallbacks()`."
	}],
	["__RunScriptHookCallbacks", {
		detail: "__RunScriptHookCallbacks(event, param) -> null"
	}],
	["AllowThirdPersonCamera", {
		detail: "AllowThirdPersonCamera() -> bool"
	}],
	["ArePlayersInHell", {
		detail: "ArePlayersInHell() -> bool"
	}],
	["FlagsMayBeCapped", {
		detail: "FlagsMayBeCapped() -> bool",
		desc: "May a flag be captured?"
	}],
	["ForceEnableUpgrades", {
		detail: "ForceEnableUpgrades(state: int) -> null",
		desc: "Whether to force on MvM-styled upgrades on/off. 0 -> default, 1 -> force off, 2 -> force on."
	}],
	["ForceEscortPushLogic", {
		detail: "ForceEscortPushLogic(state: int) -> null",
		desc: "Forces payload pushing logic. 0 -> default, 1 -> force off, 2 -> force on."
	}],
	["GameModeUsesCurrency", {
		detail: "GameModeUsesCurrency() -> bool",
		desc: "Does the current gamemode have currency?"
	}],
	["GameModeUsesMiniBosses", {
		detail: "GameModeUsesMiniBosses() -> bool",
		desc: "Does the current gamemode have minibosses?"
	}],
	["GameModeUsesUpgrades", {
		detail: "GameModeUsesUpgrades() -> bool",
		desc: "Does the current gamemode have upgrades?"
	}],
	["GetClassLimit", {
		detail: "GetClassLimit(class: ETFClass) -> int",
		desc: "Get class limit for class.\n\nSee [ETFClass](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFClass)"
	}],
	["GetGravityMultiplier", {
		detail: "GetGravityMultiplier() -> float"
	}],
	["GetMannVsMachineAlarmStatus", {
		detail: "GetMannVsMachineAlarmStatus() -> bool"
	}],
	["GetOvertimeAllowedForCTF", {
		detail: "GetOvertimeAllowedForCTF() -> bool"
	}],
	["GetRoundState", {
		detail: "GetRoundState() -> int",
		desc: "Get current round state. See [Constants.ERoundState](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ERoundState)."
	}],
	["GetStopWatchState", {
		detail: "GetStopWatchState() -> int",
		desc: "Get the current stopwatch state. See [Constants.EStopwatchState](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#EStopwatchState)."
	}],
	["GetWinningTeam", {
		detail: "GetWinningTeam() -> int",
		desc: "Who won!"
	}],
	["HaveStopWatchWinner", {
		detail: "HaveStopWatchWinner() -> bool"
	}],
	["InMatchStartCountdown", {
		detail: "InMatchStartCountdown() -> bool",
		desc: "Are we in the pre-match/setup state?"
	}],
	["InOvertime", {
		detail: "InOvertime() -> bool",
		desc: "Currently in overtime?"
	}],
	["IsAttackDefenseMode", {
		detail: "IsAttackDefenseMode() -> bool"
	}],
	["IsBirthday", {
		detail: "IsBirthday() -> bool",
		desc: "Are we in birthday mode?"
	}],
	["IsCompetitiveMode", {
		detail: "IsCompetitiveMode() -> bool",
		desc: "Playing competitive?"
	}],
	["IsDefaultGameMode", {
		detail: "IsDefaultGameMode() -> bool",
		desc: "The absence of arena, mvm, tournament mode, etc."
	}],
	["IsHolidayActive", {
		detail: "IsHolidayActive(holiday: EHoliday) -> bool",
		desc: "Is the given holiday active?\n\nSee [EHoliday](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#EHoliday)"
	}],
	["IsHolidayMap", {
		detail: "IsHolidayMap(holiday: EHoliday) -> bool",
		desc: "Playing a holiday map?\n\nSee [EHoliday](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#EHoliday)"
	}],
	["IsInArenaMode", {
		detail: "IsInArenaMode() -> bool",
		desc: "Playing arena mode?"
	}],
	["IsInKothMode", {
		detail: "IsInKothMode() -> bool",
		desc: "Playing king of the hill mode?"
	}],
	["IsInMedievalMode", {
		detail: "IsInMedievalMode() -> bool",
		desc: "Playing medieval mode?"
	}],
	["IsInWaitingForPlayers", {
		detail: "IsInWaitingForPlayers() -> bool",
		desc: "Are we waiting for some stragglers?"
	}],
	["IsMannVsMachineMode", {
		detail: "IsMannVsMachineMode() -> bool",
		desc: "Playing MvM? Beep boop."
	}],
	["IsMannVsMachineRespecEnabled", {
		detail: "IsMannVsMachineRespecEnabled() -> bool",
		desc: "Are players allowed to refund their upgrades?"
	}],
	["IsMatchTypeCasual", {
		detail: "IsMatchTypeCasual() -> bool",
		desc: "Playing casual?"
	}],
	["IsMatchTypeCompetitive", {
		detail: "IsMatchTypeCompetitive() -> bool",
		desc: "Playing competitive?"
	}],
	["IsPasstimeMode", {
		detail: "IsPasstimeMode() -> bool",
		desc: "No ball games."
	}],
	["IsPowerupMode", {
		detail: "IsPowerupMode() -> bool",
		desc: "Playing powerup mode? Not compatible with MvM."
	}],
	["IsPVEModeActive", {
		detail: "IsPVEModeActive() -> bool"
	}],
	["IsQuickBuildTime", {
		detail: "IsQuickBuildTime() -> bool",
		desc: "If an engie places a building, will it immediately upgrade? Eg. MvM pre-round etc."
	}],
	["IsTruceActive", {
		detail: "IsTruceActive() -> bool"
	}],
	["IsUsingGrapplingHook", {
		detail: "IsUsingGrapplingHook() -> bool"
	}],
	["IsUsingSpells", {
		detail: "IsUsingSpells() -> bool"
	}],
	["MapHasMatchSummaryStage", {
		detail: "MapHasMatchSummaryStage() -> bool"
	}],
	["MatchmakingShouldUseStopwatchMode", {
		detail: "MatchmakingShouldUseStopwatchMode() -> bool"
	}],
	["PlayerReadyStatus_ArePlayersOnTeamReady", {
		detail: "PlayerReadyStatus_ArePlayersOnTeamReady(team: ETFTeam) -> bool",
		desc: "See [ETFTeam](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFTeam)"
	}],
	["PlayerReadyStatus_HaveMinPlayersToEnable", {
		detail: "PlayerReadyStatus_HaveMinPlayersToEnable() -> bool"
	}],
	["PlayerReadyStatus_ResetState", {
		detail: "PlayerReadyStatus_ResetState() -> null"
	}],
	["PlayersAreOnMatchSummaryStage", {
		detail: "PlayersAreOnMatchSummaryStage() -> bool"
	}],
	["PointsMayBeCaptured", {
		detail: "PointsMayBeCaptured() -> bool",
		desc: "Are points able to be captured?"
	}],
	["SetGravityMultiplier", {
		detail: "SetGravityMultiplier(multiplier: float) -> null"
	}],
	["SetMannVsMachineAlarmStatus", {
		detail: "SetMannVsMachineAlarmStatus(status: bool) -> null"
	}],
	["SetOvertimeAllowedForCTF", {
		detail: "SetOvertimeAllowedForCTF(state: bool) -> null"
	}],
	["SetPlayersInHell", {
		detail: "SetPlayersInHell(state: bool) -> null"
	}],
	["SetUsingSpells", {
		detail: "SetUsingSpells(state: bool) -> null"
	}],
	["UsePlayerReadyStatusMode", {
		detail: "UsePlayerReadyStatusMode() -> bool"
	}],
	["ClientPrint", {
		detail: "ClientPrint(player: CBasePlayer, destination: EHudNotify, message: string) -> null",
		desc: "Print a client message. If you pass null instead of a valid player, the message will be sent to all clients.\n\nSee [EHudNotify](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#EHudNotify)"
	}],
	["DebugDrawBox", {
		detail: "DebugDrawBox(origin: Vector, min: Vector, max: Vector, r: int, g: int, b: int, alpha: int, duration: float) -> null",
		desc: "Draw a debug overlay box."
	}],
	["DebugDrawBoxAngles", {
		detail: "DebugDrawBoxAngles(origin: Vector, min: Vector, max: Vector, direction: QAngle, rgb: Vector, alpha: int, duration: float) -> null",
		desc: "Draw a debug oriented box."
	}],
	["DebugDrawBoxDirection", {
		detail: "DebugDrawBoxDirection(center: Vector, min: Vector, max: Vector, forward: Vector, rgb: Vector, alpha: float, duration: float) -> null",
		desc: "Draw a debug forward box."
	}],
	["DebugDrawCircle", {
		detail: "DebugDrawCircle(center: Vector, rgb: Vector, alpha: float, radius: float, ztest: bool, duration: float) -> null",
		desc: "Draw a debug circle."
	}],
	["DebugDrawClear", {
		detail: "DebugDrawClear() -> null",
		desc: "Try to clear all the debug overlay info."
	}],
	["DebugDrawLine", {
		detail: "DebugDrawLine(start: Vector, end: Vector, red: int, green: int, blue: int, z_test: bool, time: float) -> null",
		desc: "Draw a debug overlay line."
	}],
	["DebugDrawLine_vCol", {
		detail: "DebugDrawLine_vCol(start: Vector, end: Vector, rgb: Vector, ztest: bool, duration: float) -> null",
		desc: "Draw a debug line using color vec."
	}],
	["DebugDrawScreenTextLine", {
		detail: "DebugDrawScreenTextLine(x: float, y: float, line_offset: int, text: string, r: int, g: int, b: int, a: int, duration: float) -> null",
		desc: "Draw text with a line offset."
	}],
	["DebugDrawText", {
		detail: "DebugDrawText(origin: Vector, text: string, use_view_check: bool, duration: float) -> null",
		desc: "Draw text on the screen, starting on the position of `origin`."
	}],
	["__DumpScope", {
		detail: "__DumpScope(indentation: int, scope: table) -> null",
		desc: "Dumps a scope's contents and expands all tables and arrays; this is what the `ent_script_dump` command uses."
	}],
	["DumpObject", {
		detail: "DumpObject(object: handle) -> null",
		desc: "Dumps information about a class or instance."
	}],
	["Msg", {
		detail: "Msg(message: string) -> null",
		desc: "Prints message to console without any line feed after."
	}],
	["printf", {
		detail: "printf(format: string, ...args: any) -> null",
		desc: "Prints message to console with C style formatting. The line feed is not included."
	}],
	["printl", {
		detail: "printl(message: string) -> null",
		desc: "Prints message to console with a line feed after."
	}],
	["realPrint", {
		detail: "realPrint(message: string) -> null",
		desc: "Identical to print. print seems to be a wrapper for this."
	}],
	["Say", {
		detail: "Say(player: CBasePlayer, message: string, team_only: bool) -> null",
		desc: "Calling this will have the specified player send the message to chat, either to team_only (true) or to everyone."
	}],
	["ShowMessage", {
		detail: "ShowMessage(message: string) -> null",
		desc: "Displays a HUD message defined in `scripts/titles.txt` to all clients, similar to an [env_message](https://developer.valvesoftware.com/wiki/env_message) entity."
	}],
	["assert", {
		detail: "assert(exp: bool, message: string = null) -> bool",
		desc: "Throws an assertion error if the given expression evaluates to `false` (i.e. the values <tt>0, 0.0, null</tt> and <tt>false</tt>)."
	}],
	["callee", {
		detail: "callee() -> function",
		desc: "Returns the currently running closure."
	}],
	["castf2i", {
		detail: "castf2i(value: float) -> int",
		desc: "Interprets the float's bytes as if it were a 32-bit integer representation."
	}],
	["casti2f", {
		detail: "casti2f(value: int) -> float",
		desc: "Interprets the integer's bytes as if it were a floating-point encoding."
	}],
	["collectgarbage", {
		detail: "collectgarbage() -> int",
		desc: "Runs the garbage collector and returns the number of reference cycles found(and deleted) This function only works on garbage collector builds."
	}],
	["compilestring", {
		detail: "compilestring(string: string, buffer_name: string = null) -> any",
		desc: "Compiles a string containing a shared script into a function and returns it."
	}], /*
	["dummy", {
		detail: "dummy() -> instance"
	}], */
	["enabledebuginfo", {
		detail: "enabledebuginfo(enable: any) -> null",
		desc: "Enable/disable the debug line information generation at compile time. enable != null enables . enable == null disables."
	}],
	["error", {
		detail: "error(x: string) -> null",
		desc: "Prints x in the standard error output ."
	}],
	["getconsttable", {
		detail: "getconsttable() -> table",
		desc: "Returns the const table of the VM."
	}],
	["getroottable", {
		detail: "getroottable() -> table",
		desc: "Returns the root table of the VM."
	}],
	["getstackinfos", {
		detail: "getstackinfos(level: int) -> table",
		desc: "Returns the stack frame informations at the given stack level (0 is the current function 1 is the caller and so on). If the stack level doesn't exist the function returns null."
	}],
	["newthread", {
		detail: "newthread(threadfunc: function) -> coroutine",
		desc: "Creates a new cooperative thread object(coroutine) and returns it ."
	}],
	["print", {
		detail: "print(message: string) -> string",
		desc: "Prints the given parameter but with no newline unlike `printl()`."
	}],
	["resurrectunreachable", {
		detail: "resurrectunreachable() -> array",
		desc: "Runs the garbage collector and returns an array containing all unreachable object found. If no unreachable object is found, null is returned instead. This function is meant to help debugging reference cycles. This function only works on garbage collector builds."
	}],
	["setconsttable", {
		detail: "setconsttable(new_const: table) -> table",
		desc: "Sets the const table of the VM which also returns the previous const table."
	}],
	["setdebughook", {
		detail: "setdebughook(hook_func: function) -> null",
		desc: "Sets the debug hook."
	}],
	["seterrorhandler", {
		detail: "seterrorhandler(error_handler: function) -> null",
		desc: "Sets the runtime error handler."
	}],
	["setroottable", {
		detail: "setroottable(new_root: table) -> table",
		desc: "Sets the root table of the VM which also returns the previous root table."
	}],
	["suspend", {
		detail: "suspend(ret: any) -> null",
		desc: "Suspends the coroutine that called this function."
	}],
	["swap2", {
		detail: "swap2(value: int) -> int",
		desc: "Swaps bytes 1 and 2 of the integer."
	}],
	["swap4", {
		detail: "swap4(value: int) -> int",
		desc: "Reverse byte order of the four bytes."
	}],
	["swapfloat", {
		detail: "swapfloat(value: float) -> float",
		desc: "Reverse byte order of the four bytes."
	}],
	["type", {
		detail: "type(var) -> string",
		desc: "Returns var._typeof(), i.e. the type of the given parameter as a string"
	}],
	["abs", {
		detail: "abs(x: number) -> number",
		desc: "Returns <nowiki>|x|</nowiki> as integer unlike `fabs()`."
	}],
	["acos", {
		detail: "acos(x: number) -> number",
		desc: "Returns cos<sup>-1</sup>(x), -1 ≤ x ≤ 1."
	}],
	["asin", {
		detail: "asin(x: number) -> number",
		desc: "Returns sin<sup>-1</sup>(x), -1 ≤ x ≤ 1."
	}],
	["atan", {
		detail: "atan(x: number) -> number",
		desc: "Returns tan<sup>-1</sup>(x)."
	}],
	["atan2", {
		detail: "atan2(y: number, x: number) -> number",
		desc: "Returns the angle between the ray from the point (0, 0) through (x, y) and the positive x-axis, confined to (−PI, PI], See also [atan2](https://en.wikipedia.org/wiki/Atan2). Note the order of the parameters x and y!]"
	}],
	["ceil", {
		detail: "ceil(x: number) -> number",
		desc: "Returns the smallest integer that is ≥ x."
	}],
	["cos", {
		detail: "cos(x: number) -> number",
		desc: "Returns cos(x)."
	}],
	["exp", {
		detail: "exp(x: number) -> number",
		desc: "Returns exp(x) = e<sup>x</sup>."
	}],
	["fabs", {
		detail: "fabs(x: number) -> number",
		desc: "Returns <nowiki>|x|</nowiki> as float unlike `abs()`."
	}],
	["floor", {
		detail: "floor(x: number) -> number",
		desc: "Returns the largest integer that is ≤ x."
	}],
	["log", {
		detail: "log(x: number) -> number",
		desc: "Returns log<sub>e</sub>(x) = ln(x)."
	}],
	["log10", {
		detail: "log10(x: number) -> number",
		desc: "Returns log<sub>10</sub>(x)."
	}],
	["pow", {
		detail: "pow(x: number, y: number) -> number",
		desc: "Returns x<sup>y</sup>."
	}],
	["rand", {
		detail: "rand()",
		desc: "Returns a random integer with `0 ≤ rand() ≤ RAND_MAX`."
	}],
	["sin", {
		detail: "sin(x: number) -> number",
		desc: "Returns sin(x)."
	}],
	["sqrt", {
		detail: "sqrt(x: number) -> number",
		desc: "Returns the square root of x."
	}],
	["srand", {
		detail: "srand(seed: number) -> number",
		desc: "Sets the starting point for generating a series of pseudorandom integers."
	}],
	["tan", {
		detail: "tan(x: number) -> number",
		desc: "Returns tan(x)"
	}],
	["endswith", {
		detail: "endswith(str: string, cmp: string) -> bool",
		desc: "Returns true if the end of the string matches the comparison string."
	}],
	["escape", {
		detail: "escape(str: string) -> string",
		desc: "Returns a string with backslashes before characters that need to be escaped: `“ a b t n v f r \\ ” ’ 0 xNN`."
	}],
	["format", {
		detail: "format(format: string, ...args: any) -> string",
		desc: "Returns a [formatted string](https://en.wikipedia.org/wiki/Printf). Same rules as the standard C functions (except * is not supported)."
	}],
	["lstrip", {
		detail: "lstrip(str: string) -> string",
		desc: "Removes whitespace at the beginning of the given string."
	}],
	["rstrip", {
		detail: "rstrip(str: string) -> string",
		desc: "Removes whitespace at the end of the given string."
	}],
	["split", {
		detail: "split(str: string, separator: string, skip_empty: bool = null) -> array",
		desc: "Returns an array of strings split at each point where a separator character occurs in str. The separator is not returned as part of any array element. the parameter separators is a string that specifies the characters as to be used for the splitting. If skipempty is true, empty strings are not added to array."
	}],
	["startswith", {
		detail: "startswith(str: string, cmp: string) -> bool",
		desc: "Returns true if the beginning of the string matches the comparison string."
	}],
	["strip", {
		detail: "strip(str: string) -> string",
		desc: "Removes whitespace at the beginning and end of the given string"
	}],
	["BeginScriptDebug", {
		detail: "BeginScriptDebug() -> null"
	}],
	["EndScriptDebug", {
		detail: "EndScriptDebug() -> null"
	}],
	["ScriptDebugAddTextFilter", {
		detail: "ScriptDebugAddTextFilter() -> null"
	}],
	["ScriptDebugAddTrace", {
		detail: "ScriptDebugAddTrace() -> null"
	}],
	["ScriptDebugAddWatch", {
		detail: "ScriptDebugAddWatch() -> null"
	}],
	["ScriptDebugAddWatches", {
		detail: "ScriptDebugAddWatches() -> null"
	}],
	["ScriptDebugAddWatchPattern", {
		detail: "ScriptDebugAddWatchPattern() -> null"
	}],
	["ScriptDebugClearTraces", {
		detail: "ScriptDebugClearTraces() -> null"
	}],
	["ScriptDebugClearWatches", {
		detail: "ScriptDebugClearWatches() -> null"
	}],
	["ScriptDebugDefaultWatchColor", {
		detail: "ScriptDebugDefaultWatchColor() -> null"
	}],
	["ScriptDebugDraw", {
		detail: "ScriptDebugDraw() -> null"
	}],
	["ScriptDebugDrawWatches", {
		detail: "ScriptDebugDrawWatches() -> null"
	}],
	["ScriptDebugDumpKeys", {
		detail: "ScriptDebugDumpKeys() -> null"
	}],
	["ScriptDebugHook", {
		detail: "ScriptDebugHook() -> null"
	}],
	["ScriptDebugIterateKeys", {
		detail: "ScriptDebugIterateKeys() -> null"
	}],
	["ScriptDebugIterateKeysRecursive", {
		detail: "ScriptDebugIterateKeysRecursive() -> null"
	}],
	["ScriptDebugRemoveTextFilter", {
		detail: "ScriptDebugRemoveTextFilter() -> null"
	}],
	["ScriptDebugRemoveTrace", {
		detail: "ScriptDebugRemoveTrace() -> null"
	}],
	["ScriptDebugRemoveWatch", {
		detail: "ScriptDebugRemoveWatch() -> null"
	}],
	["ScriptDebugRemoveWatches", {
		detail: "ScriptDebugRemoveWatches() -> null"
	}],
	["ScriptDebugRemoveWatchPattern", {
		detail: "ScriptDebugRemoveWatchPattern() -> null"
	}],
	["ScriptDebugText", {
		detail: "ScriptDebugText() -> null"
	}],
	["ScriptDebugTextDraw", {
		detail: "ScriptDebugTextDraw() -> null"
	}],
	["ScriptDebugTextPrint", {
		detail: "ScriptDebugTextPrint() -> null"
	}],
	["ScriptDebugTextTrace", {
		detail: "ScriptDebugTextTrace() -> null"
	}],
	["ScriptDebugTraceAll", {
		detail: "ScriptDebugTraceAll() -> null"
	}],
	["ScriptDebugWatches", {
		detail: "ScriptDebugWatches() -> null"
	}],
	["__VScriptServerDebugHook", {
		detail: "__VScriptServerDebugHook()"
	}],


	["Vector", {
		detail: "Vector(x: float = 0.0, y: float = 0.0, z: float = 0.0) -> Vector",
		desc: "Creates a new vector with the specified Cartesian coordiantes."
	}],

	["QAngle", {
		detail: "QAngle(pitch: float = 0.0, yaw: float = 0.0, roll: float = 0.0) -> QAngle",
		desc: "Creates a new QAngle."
	}],

	["Quaternion", {
		detail: "Quaternion(x: float, y: float, z: float, w: float) -> Quaternion",
		desc: "Creates a new quaternion of the form `w + xi + yj + zk`."
	}],


	["array", {
		detail: "array(length: int, fill: any = null) -> array",
		desc: "Returns a new array of the given length where each element is set to `fill`."
	}],

	["regexp", {
		detail: "regexp(pattern: string) -> regexp"
	}]
	/*
	 * Events
	 */
]);

export const deprecatedFunctions: Docs = new Map([
	["GetPhysAngularVelocity", {
		detail: "GetPhysAngularVelocity(entity: handle) -> Vector",
		desc: "Returns the Angular velocity of the entity.  Deprecated, use the `GetPhysAngularVelocity` method on the entity instead.",
		successor: "GetPhysAngularVelocity"
	}],
	["GetPhysVelocity", {
		detail: "GetPhysVelocity(entity: handle) -> Vector",
		desc: "Returns the velocity of the entity. Deprecated, use the `GetPhysVelocity` method on the entity instead.",
		successor: "GetPhysVelocity"
	}]
]);

export const events: Docs = new Map([
	["Precache", {
		detail: "Precache() -> null",
		desc: "Entity function that is called after the script executes, but before the entity is initialized. Can be used to call precache functions for models and sounds on map load."
	}],
	["ConnectOutputs", {
		detail: "ConnectOutputs(scope: table) -> null",
		desc: "Global function called after an entity with an script assigned spawns (i.e. `vscripts` keyvalue is not blank). Unlike `OnPostSpawn`, this is called immediately and therefore on map respawn, some entities may not exist during this point."
	}],
	["OnPostSpawn", {
		detail: "OnPostSpawn() -> null",
		desc: "Entity function called after the entity is spawned and initialized, at the end of the frame. When map entities are respawned, this effectively runs after all scripts, players etc have been loaded. This could be used to have an entity register itself with a master script, or adjusting the entity parameters in a programmatic way."
	}],
	["OnScriptHook_OnTakeDamage", {
		detail: "OnScriptHook_OnTakeDamage(params: table) -> null",
		desc: "Called each time an entity takes damage. The script can modify the table entries not prefixed with `const`, and these will be sent back to the game code.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nconst_entity: handle\n```\nThe entity which took damage.\n```squirrelDoc\ninflictor: handle\n```\nThe entity which dealt the damage, can be null.\n```squirrelDoc\nweapon: handle\n```\nThe weapon which dealt the damage, can be null.\n```squirrelDoc\nattacker: handle\n```\nThe owner of the damage, can be null.\n```squirrelDoc\ndamage: float\nmax_damage: float\ndamage_bonus: float\n```\nAdditional damage (e.g. from crits).\n```squirrelDoc\ndamage_bonus_provider: handle\n```\nOwner of the damage bonus.\n```squirrelDoc\nconst_base_damage: float\ndamage_force: Vector\ndamage_for_force_calc: float\n```\nThis value does not seem to do anything.\n```squirrelDoc\ndamage_position: Vector\n```\nWorld position of where the damage came from. E.g. end position of a bullet or a rocket.\n```squirrelDoc\nreported_position: Vector\n```\nWorld position of where the damage supposedly came from.\n```squirrelDoc\ndamage_type: int\n```\nCombination of damage types. See [Constants.FDmgType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FDmgType).\n```squirrelDoc\ndamage_custom: int\n```\nBecause of a code oversight, this value is read-only.\n```squirrelDoc\ndamage_stats: int\n```\nSpecial damage type. See [Constants.ETFDmgCustom](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFDmgCustom). Unlike `damage_type`, only one custom damage type can be set.\n```squirrelDoc\nforce_friendly_fire: bool\n```\nIf true, force the damage to friendly fire, regardless of this entity's and attacker's team.\n```squirrelDoc\nammo_type: int\n```\nUnused.\n```squirrelDoc\nplayer_penetration_count: int\n```\nHow many players the damage has penetrated so far.\n```squirrelDoc\ndamaged_other_players: int\n```\nHow many players other than the attacker the damage has been applied to. Used for rocket jump damage reduction.\n```squirrelDoc\ncrit_type: int\n```\nType of crit damage. 0 - None, 1 - Mini, 2 - Full. The numbers correspond to [Constants.ECritType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ECritType).\n```squirrelDoc\nearly_out: bool\n```\nIf set to true by the script, the game's damage routine will not run and it will simply return the currently set damage."
	}],
	["OnGameEvent_achievement_earned", {
		detail: "OnGameEvent_achievement_earned(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player.\n```squirrelDoc\nachievement: int\n```\nAchievement ID"
	}],
	["OnGameEvent_achievement_earned_local", {
		detail: "OnGameEvent_achievement_earned_local(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nachievement: int\n```"
	}],
	["OnGameEvent_achievement_event", {
		detail: "OnGameEvent_achievement_event(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nachievement_name: string\n```\nNon-localized name of achievement.\n```squirrelDoc\ncur_val: int\n```\n\# of steps toward achievement.\n```squirrelDoc\nmax_val: int\n```\nTotal number of steps in achievement"
	}],
	["OnGameEvent_achievement_increment", {
		detail: "OnGameEvent_achievement_increment(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nachievement_id: int\n```\nID of achievement that went up.\n```squirrelDoc\ncur_val: int\n```\n\# of steps toward achievement.\n```squirrelDoc\nmax_val: int\n```\nTotal number of steps in achievement"
	}],
	["OnGameEvent_air_dash", {
		detail: "OnGameEvent_air_dash(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```"
	}],
	["OnGameEvent_ammo_pickup", {
		detail: "OnGameEvent_ammo_pickup(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nammo_index: int\namount: int\ntotal: int\n```"
	}],
	["OnGameEvent_arena_match_maxstreak", {
		detail: "OnGameEvent_arena_match_maxstreak(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nteam: int\nstreak: int\n```"
	}],
	["OnGameEvent_arena_player_notification", {
		detail: "OnGameEvent_arena_player_notification(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\nmessage: int\n```"
	}],
	["OnGameEvent_arena_round_start", {
		detail: "OnGameEvent_arena_round_start(params: table) -> null",
		desc: "called when round is active, players can move"
	}],
	["OnGameEvent_arena_win_panel", {
		detail: "OnGameEvent_arena_win_panel(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\npanel_style: int\n```\nFor client to determine layout.\n```squirrelDoc\nwinning_team: int\nwinreason: int\n```\nThe reason the team won.\n```squirrelDoc\ncappers: string\n```\nString where each character is a player index of someone that capped.\n```squirrelDoc\nflagcaplimit: int\n```\nIf win reason was flag cap limit, the value of the flag cap limit.\n```squirrelDoc\nblue_score: int\nred_score: int\nblue_score_prev: int\nred_score_prev: int\nround_complete: int\n```\nIs this a complete round, or the end of a mini-round.\n```squirrelDoc\nplayer_1: int\nplayer_1_damage: int\nplayer_1_healing: int\nplayer_1_lifetime: int\nplayer_1_kills: int\nplayer_2: int\nplayer_2_damage: int\nplayer_2_healing: int\nplayer_2_lifetime: int\nplayer_2_kills: int\nplayer_3: int\nplayer_3_damage: int\nplayer_3_healing: int\nplayer_3_lifetime: int\nplayer_3_kills: int\nplayer_4: int\nplayer_4_damage: int\nplayer_4_healing: int\nplayer_4_lifetime: int\nplayer_4_kills: int\nplayer_5: int\nplayer_5_damage: int\nplayer_5_healing: int\nplayer_5_lifetime: int\nplayer_5_kills: int\nplayer_6: int\nplayer_6_damage: int\nplayer_6_healing: int\nplayer_6_lifetime: int\nplayer_6_kills: int\n```"
	}],
	["OnGameEvent_arrow_impact", {
		detail: "OnGameEvent_arrow_impact(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nattachedEntity: int\nshooter: int\nboneIndexAttached: int\nbonePositionX: float\nbonePositionY: float\nbonePositionZ: float\nboneAnglesX: float\nboneAnglesY: float\nboneAnglesZ: float\nprojectileType: int\nisCrit: bool\n```"
	}],
	["OnGameEvent_base_player_teleported", {
		detail: "OnGameEvent_base_player_teleported(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex: int\n```"
	}],
	["OnGameEvent_bonus_updated", {
		detail: "OnGameEvent_bonus_updated(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nnumadvanced: int\nnumbronze: int\nnumsilver: int\nnumgold: int\n```"
	}],
	["OnGameEvent_break_breakable", {
		detail: "OnGameEvent_break_breakable(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex: int\nuserid: int\nmaterial: int\n```\nBREAK_GLASS, BREAK_WOOD, etc"
	}],
	["OnGameEvent_break_prop", {
		detail: "OnGameEvent_break_prop(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex: int\nuserid: int\n```"
	}],
	["OnGameEvent_browse_replays", {
		detail: "OnGameEvent_browse_replays(params: table) -> null"
	}],
	["OnGameEvent_building_healed", {
		detail: "OnGameEvent_building_healed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nbuilding: int\nhealer: int\namount: int\n```"
	}],
	["OnGameEvent_building_info_changed", {
		detail: "OnGameEvent_building_info_changed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nbuilding_type: int\nobject_mode: int\nremove: int\n```"
	}],
	["OnGameEvent_cart_updated", {
		detail: "OnGameEvent_cart_updated(params: table) -> null"
	}],
	["OnGameEvent_christmas_gift_grab", {
		detail: "OnGameEvent_christmas_gift_grab(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```"
	}],
	["OnGameEvent_cl_drawline", {
		detail: "OnGameEvent_cl_drawline(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nIndex of the player.\n```squirrelDoc\npanel: int\n```\nType of panel.\n```squirrelDoc\nline: int\n```\nType of line.\n```squirrelDoc\nx: float\ny: float\n```"
	}],
	["OnGameEvent_client_beginconnect", {
		detail: "OnGameEvent_client_beginconnect(params: table) -> null",
		desc: "Client tries to connect to server\n\n---\nVariables of the `params` table:\n```squirrelDoc\naddress: string\n```\nName we used to connect to the server.\n```squirrelDoc\nip: int\nport: int\n```\nServer port.\n```squirrelDoc\nsource: string\n```\nWhat caused us to attempt this connection? (blank for general command line, \"serverbrowser\", \"quickplay\", etc)"
	}],
	["OnGameEvent_client_connected", {
		detail: "OnGameEvent_client_connected(params: table) -> null",
		desc: "Client has completed the challenge / handshake process and is in SIGNONSTATE_CONNECTED\n\n---\nVariables of the `params` table:\n```squirrelDoc\naddress: string\n```\nName we used to connect to the server.\n```squirrelDoc\nip: int\nport: int\n```\nServer port"
	}],
	["OnGameEvent_client_disconnect", {
		detail: "OnGameEvent_client_disconnect(params: table) -> null",
		desc: "Client side disconnect message\n\n---\nVariables of the `params` table:\n```squirrelDoc\nmessage: string\n```\nWhy are we disconnecting? This could be a localization token or an English-language string"
	}],
	["OnGameEvent_client_fullconnect", {
		detail: "OnGameEvent_client_fullconnect(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\naddress: string\n```\nName we used to connect to the server.\n```squirrelDoc\nip: int\nport: int\n```\nServer port"
	}],
	["OnGameEvent_competitive_stats_update", {
		detail: "OnGameEvent_competitive_stats_update(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nEntindex of the player.\n```squirrelDoc\nkills_rank: int\n```\nNum std deviations above.\n```squirrelDoc\nscore_rank: int\ndamage_rank: int\nhealing_rank: int\nsupport_rank: int\n```"
	}],
	["OnGameEvent_competitive_victory", {
		detail: "OnGameEvent_competitive_victory(params: table) -> null"
	}],
	["OnGameEvent_conga_kill", {
		detail: "OnGameEvent_conga_kill(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nEntindex of the player"
	}],
	["OnGameEvent_controlpoint_endtouch", {
		detail: "OnGameEvent_controlpoint_endtouch(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player.\n```squirrelDoc\narea: int\n```\nIndex of the control point area"
	}],
	["OnGameEvent_controlpoint_fake_capture", {
		detail: "OnGameEvent_controlpoint_fake_capture(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player.\n```squirrelDoc\nint_data: int\n```"
	}],
	["OnGameEvent_controlpoint_fake_capture_mult", {
		detail: "OnGameEvent_controlpoint_fake_capture_mult(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player.\n```squirrelDoc\nint_data: int\n```"
	}],
	["OnGameEvent_controlpoint_initialized", {
		detail: "OnGameEvent_controlpoint_initialized(params: table) -> null"
	}],
	["OnGameEvent_controlpoint_pulse_element", {
		detail: "OnGameEvent_controlpoint_pulse_element(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player"
	}],
	["OnGameEvent_controlpoint_starttouch", {
		detail: "OnGameEvent_controlpoint_starttouch(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player.\n```squirrelDoc\narea: int\n```\nIndex of the control point area"
	}],
	["OnGameEvent_controlpoint_timer_updated", {
		detail: "OnGameEvent_controlpoint_timer_updated(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nIndex of the cap being updated.\n```squirrelDoc\ntime: float\n```\nTime"
	}],
	["OnGameEvent_controlpoint_unlock_updated", {
		detail: "OnGameEvent_controlpoint_unlock_updated(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nIndex of the cap being updated.\n```squirrelDoc\ntime: float\n```\nTime"
	}],
	["OnGameEvent_controlpoint_updatecapping", {
		detail: "OnGameEvent_controlpoint_updatecapping(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nIndex of the cap being updated"
	}],
	["OnGameEvent_controlpoint_updateimages", {
		detail: "OnGameEvent_controlpoint_updateimages(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nIndex of the cap being updated"
	}],
	["OnGameEvent_controlpoint_updatelayout", {
		detail: "OnGameEvent_controlpoint_updatelayout(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nIndex of the cap being updated"
	}],
	["OnGameEvent_controlpoint_updateowner", {
		detail: "OnGameEvent_controlpoint_updateowner(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nIndex of the cap being updated"
	}],
	["OnGameEvent_cross_spectral_bridge", {
		detail: "OnGameEvent_cross_spectral_bridge(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nUserid of the player that crossed"
	}],
	["OnGameEvent_crossbow_heal", {
		detail: "OnGameEvent_crossbow_heal(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nhealer: int\n```\nUserid of the Healer.\n```squirrelDoc\ntarget: int\n```\nUserid of the player that got hit.\n```squirrelDoc\namount: int\n```\nAmount that was healed"
	}],
	["OnGameEvent_ctf_flag_captured", {
		detail: "OnGameEvent_ctf_flag_captured(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ncapping_team: int\ncapping_team_score: int\n```"
	}],
	["OnGameEvent_damage_mitigated", {
		detail: "OnGameEvent_damage_mitigated(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nmitigator: int\n```\nUserid of the player who provided the mitigation.\n```squirrelDoc\ndamaged: int\n```\nUserid of the player who took the damage.\n```squirrelDoc\namount: int\n```\nAmount that was mitigated.\n```squirrelDoc\nitemdefindex: int\n```\nDefindex of the item that provided the mitigation"
	}],
	["OnGameEvent_damage_prevented", {
		detail: "OnGameEvent_damage_prevented(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\npreventor: int\n```\nWho prevented the damage.\n```squirrelDoc\nvictim: int\n```\nWho took the damage that was prevented.\n```squirrelDoc\namount: int\n```\nHow much got prevented.\n```squirrelDoc\ncondition: int\n```\nWhich condition did the preventing"
	}],
	["OnGameEvent_damage_resisted", {
		detail: "OnGameEvent_damage_resisted(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex: int\n```"
	}],
	["OnGameEvent_deadringer_cheat_death", {
		detail: "OnGameEvent_deadringer_cheat_death(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nspy: int\n```\nUserid of the Spy that cheat the death.\n```squirrelDoc\nattacker: int\n```\nUserid of the player that caused the cheat death to happen"
	}],
	["OnGameEvent_demoman_det_stickies", {
		detail: "OnGameEvent_demoman_det_stickies(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the detonating player"
	}],
	["OnGameEvent_deploy_buff_banner", {
		detail: "OnGameEvent_deploy_buff_banner(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nbuff_type: int\n```\nType of buff (skin index).\n```squirrelDoc\nbuff_owner: int\n```\nUser ID of the person who gets the banner"
	}],
	["OnGameEvent_doomsday_rocket_open", {
		detail: "OnGameEvent_doomsday_rocket_open(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nteam: int\n```\nWhich team opened the rocket"
	}],
	["OnGameEvent_duck_xp_level_up", {
		detail: "OnGameEvent_duck_xp_level_up(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nlevel: int\n```\nLeveled up to what"
	}],
	["OnGameEvent_duel_status", {
		detail: "OnGameEvent_duel_status(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nkiller: int\nscore_type: int\ninitiator: int\ntarget: int\ninitiator_score: int\ntarget_score: int\n```"
	}],
	["OnGameEvent_econ_inventory_connected", {
		detail: "OnGameEvent_econ_inventory_connected(params: table) -> null"
	}],
	["OnGameEvent_enter_vehicle", {
		detail: "OnGameEvent_enter_vehicle(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nvehicle: int\n```\nEntindex of the vehicle"
	}],
	["OnGameEvent_entered_performance_mode", {
		detail: "OnGameEvent_entered_performance_mode(params: table) -> null"
	}],
	["OnGameEvent_entity_killed", {
		detail: "OnGameEvent_entity_killed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex_killed: int\nentindex_attacker: int\nentindex_inflictor: int\ndamagebits: int\n```"
	}],
	["OnGameEvent_environmental_death", {
		detail: "OnGameEvent_environmental_death(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nkiller: int\n```\nIndex of the killer.\n```squirrelDoc\nvictim: int\n```\nIndex of the victim"
	}],
	["OnGameEvent_escape_hell", {
		detail: "OnGameEvent_escape_hell(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nUserid of the player that escaped"
	}],
	["OnGameEvent_escaped_loot_island", {
		detail: "OnGameEvent_escaped_loot_island(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nUserid of the escaping player"
	}],
	["OnGameEvent_escort_progress", {
		detail: "OnGameEvent_escort_progress(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nteam: int\n```\nWhich team.\n```squirrelDoc\nprogress: float\nreset: bool\n```"
	}],
	["OnGameEvent_escort_recede", {
		detail: "OnGameEvent_escort_recede(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nteam: int\n```\nWhich team.\n```squirrelDoc\nrecedetime: float\n```"
	}],
	["OnGameEvent_escort_speed", {
		detail: "OnGameEvent_escort_speed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nteam: int\n```\nWhich team.\n```squirrelDoc\nspeed: int\nplayers: int\n```"
	}],
	["OnGameEvent_eyeball_boss_escape_imminent", {
		detail: "OnGameEvent_eyeball_boss_escape_imminent(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nlevel: int\ntime_remaining: int\n```"
	}],
	["OnGameEvent_eyeball_boss_escaped", {
		detail: "OnGameEvent_eyeball_boss_escaped(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nlevel: int\n```"
	}],
	["OnGameEvent_eyeball_boss_killed", {
		detail: "OnGameEvent_eyeball_boss_killed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nlevel: int\n```"
	}],
	["OnGameEvent_eyeball_boss_killer", {
		detail: "OnGameEvent_eyeball_boss_killer(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nlevel: int\nplayer_entindex: int\n```"
	}],
	["OnGameEvent_eyeball_boss_stunned", {
		detail: "OnGameEvent_eyeball_boss_stunned(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nlevel: int\nplayer_entindex: int\n```"
	}],
	["OnGameEvent_eyeball_boss_summoned", {
		detail: "OnGameEvent_eyeball_boss_summoned(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nlevel: int\n```"
	}],
	["OnGameEvent_fish_notice", {
		detail: "OnGameEvent_fish_notice(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID who died.\n```squirrelDoc\nvictim_entindex: int\ninflictor_entindex: int\n```\nEnt index of inflictor (a sentry, for example).\n```squirrelDoc\nattacker: int\n```\nUser ID who killed.\n```squirrelDoc\nweapon: string\n```\nWeapon name killer used.\n```squirrelDoc\nweaponid: int\n```\nID of weapon killed used.\n```squirrelDoc\ndamagebits: int\n```\nBits of type of damage.\n```squirrelDoc\ncustomkill: int\n```\nType of custom kill.\n```squirrelDoc\nassister: int\n```\nUser ID of assister.\n```squirrelDoc\nweapon_logclassname: string\n```\nWeapon name that should be printed on the log.\n```squirrelDoc\nstun_flags: int\n```\nVictim's stun flags at the moment of death.\n```squirrelDoc\ndeath_flags: int\n```\nSee [death flags](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#TF_DEATH).\n```squirrelDoc\nsilent_kill: bool\nassister_fallback: string\n```\nContains a string to use if \"assister\" is -1"
	}],
	["OnGameEvent_fish_notice__arm", {
		detail: "OnGameEvent_fish_notice__arm(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID who died.\n```squirrelDoc\nvictim_entindex: int\ninflictor_entindex: int\n```\nEnt index of inflictor (a sentry, for example).\n```squirrelDoc\nattacker: int\n```\nUser ID who killed.\n```squirrelDoc\nweapon: string\n```\nWeapon name killer used.\n```squirrelDoc\nweaponid: int\n```\nID of weapon killed used.\n```squirrelDoc\ndamagebits: int\n```\nBits of type of damage.\n```squirrelDoc\ncustomkill: int\n```\nType of custom kill.\n```squirrelDoc\nassister: int\n```\nUser ID of assister.\n```squirrelDoc\nweapon_logclassname: string\n```\nWeapon name that should be printed on the log.\n```squirrelDoc\nstun_flags: int\n```\nVictim's stun flags at the moment of death.\n```squirrelDoc\ndeath_flags: int\n```\nSee [death flags](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#TF_DEATH).\n```squirrelDoc\nsilent_kill: bool\nassister_fallback: string\n```\nContains a string to use if \"assister\" is -1"
	}],
	["OnGameEvent_flag_carried_in_detection_zone", {
		detail: "OnGameEvent_flag_carried_in_detection_zone(params: table) -> null"
	}],
	["OnGameEvent_flagstatus_update", {
		detail: "OnGameEvent_flagstatus_update(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID of the player who now has the flag.\n```squirrelDoc\nentindex: int\n```\nEnt index of flag"
	}],
	["OnGameEvent_flare_ignite_npc", {
		detail: "OnGameEvent_flare_ignite_npc(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex: int\n```\nEntity ignited"
	}],
	["OnGameEvent_freezecam_started", {
		detail: "OnGameEvent_freezecam_started(params: table) -> null"
	}],
	["OnGameEvent_game_end", {
		detail: "OnGameEvent_game_end(params: table) -> null",
		desc: "A game ended\n\n---\nVariables of the `params` table:\n```squirrelDoc\nwinner: int\n```\nWinner team/user id"
	}],
	["OnGameEvent_game_init", {
		detail: "OnGameEvent_game_init(params: table) -> null",
		desc: "sent when a new game is started"
	}],
	["OnGameEvent_game_message", {
		detail: "OnGameEvent_game_message(params: table) -> null",
		desc: "A message send by game logic to everyone\n\n---\nVariables of the `params` table:\n```squirrelDoc\ntarget: int\n```\n0 = console, 1 = HUD.\n```squirrelDoc\ntext: string\n```\nThe message text"
	}],
	["OnGameEvent_game_newmap", {
		detail: "OnGameEvent_game_newmap(params: table) -> null",
		desc: "Send when new map is completely loaded\n\n---\nVariables of the `params` table:\n```squirrelDoc\nmapname: string\n```\nMap name"
	}],
	["OnGameEvent_game_start", {
		detail: "OnGameEvent_game_start(params: table) -> null",
		desc: "A new game starts\n\n---\nVariables of the `params` table:\n```squirrelDoc\nroundslimit: int\n```\nMax round.\n```squirrelDoc\ntimelimit: int\n```\nTime limit.\n```squirrelDoc\nfraglimit: int\n```\nFrag limit.\n```squirrelDoc\nobjective: string\n```\nRound objective"
	}],
	["OnGameEvent_gameui_activate", {
		detail: "OnGameEvent_gameui_activate(params: table) -> null"
	}],
	["OnGameEvent_gameui_activated", {
		detail: "OnGameEvent_gameui_activated(params: table) -> null"
	}],
	["OnGameEvent_gameui_hidden", {
		detail: "OnGameEvent_gameui_hidden(params: table) -> null"
	}],
	["OnGameEvent_gameui_hide", {
		detail: "OnGameEvent_gameui_hide(params: table) -> null"
	}],
	["OnGameEvent_gc_lost_session", {
		detail: "OnGameEvent_gc_lost_session(params: table) -> null"
	}],
	["OnGameEvent_gc_new_session", {
		detail: "OnGameEvent_gc_new_session(params: table) -> null"
	}],
	["OnGameEvent_halloween_boss_killed", {
		detail: "OnGameEvent_halloween_boss_killed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nboss: int\n```\n1=HHH 2=Monoculus 3=Merasmus.\n```squirrelDoc\nkiller: int\n```\nUserid of the killing player"
	}],
	["OnGameEvent_halloween_duck_collected", {
		detail: "OnGameEvent_halloween_duck_collected(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ncollector: int\n```\nUserid of the collecting player"
	}],
	["OnGameEvent_halloween_pumpkin_grab", {
		detail: "OnGameEvent_halloween_pumpkin_grab(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```"
	}],
	["OnGameEvent_halloween_skeleton_killed", {
		detail: "OnGameEvent_halloween_skeleton_killed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nUserid of the player that killed the skeleton"
	}],
	["OnGameEvent_halloween_soul_collected", {
		detail: "OnGameEvent_halloween_soul_collected(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nintended_target: int\n```\nUserid of the intended target.\n```squirrelDoc\ncollecting_player: int\n```\nUserid of the player who picked up the soul.\n```squirrelDoc\nsoul_count: int\n```\nNumber of souls collected (gift boxes)"
	}],
	["OnGameEvent_helicopter_grenade_punt_miss", {
		detail: "OnGameEvent_helicopter_grenade_punt_miss(params: table) -> null"
	}],
	["OnGameEvent_hide_annotation", {
		detail: "OnGameEvent_hide_annotation(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nid: int\n```"
	}],
	["OnGameEvent_hide_freezepanel", {
		detail: "OnGameEvent_hide_freezepanel(params: table) -> null"
	}],
	["OnGameEvent_hltv_changed_mode", {
		detail: "OnGameEvent_hltv_changed_mode(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\noldmode: int\nnewmode: int\nobs_target: int\n```"
	}],
	["OnGameEvent_hltv_changed_target", {
		detail: "OnGameEvent_hltv_changed_target(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nmode: int\nold_target: int\nobs_target: int\n```"
	}],
	["OnGameEvent_host_quit", {
		detail: "OnGameEvent_host_quit(params: table) -> null"
	}],
	["OnGameEvent_intro_finish", {
		detail: "OnGameEvent_intro_finish(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player"
	}],
	["OnGameEvent_intro_nextcamera", {
		detail: "OnGameEvent_intro_nextcamera(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player"
	}],
	["OnGameEvent_inventory_updated", {
		detail: "OnGameEvent_inventory_updated(params: table) -> null"
	}],
	["OnGameEvent_item_found", {
		detail: "OnGameEvent_item_found(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player.\n```squirrelDoc\nquality: int\n```\nQuality of the item.\n```squirrelDoc\nmethod: int\n```\nMethod by which we acquired the item.\n```squirrelDoc\nitemdef: int\n```\nThe item definition index.\n```squirrelDoc\nisstrange: int\nisunusual: int\nwear: float\n```"
	}],
	["OnGameEvent_item_pickup", {
		detail: "OnGameEvent_item_pickup(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\nitem: string\n```"
	}],
	["OnGameEvent_item_schema_initialized", {
		detail: "OnGameEvent_item_schema_initialized(params: table) -> null"
	}],
	["OnGameEvent_items_acknowledged", {
		detail: "OnGameEvent_items_acknowledged(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nblocker: int\n```\nEntindex of the blocker.\n```squirrelDoc\nvictim: int\n```\nEntindex of the victim"
	}],
	["OnGameEvent_kill_in_hell", {
		detail: "OnGameEvent_kill_in_hell(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nkiller: int\n```\nUserid of the killer.\n```squirrelDoc\nvictim: int\n```\nUserid of the victim"
	}],
	["OnGameEvent_kill_refills_meter", {
		detail: "OnGameEvent_kill_refills_meter(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nEntindex of the player"
	}],
	["OnGameEvent_killed_capping_player", {
		detail: "OnGameEvent_killed_capping_player(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ncp: int\n```\nIndex of the point.\n```squirrelDoc\nkiller: int\n```\nIndex of the killer.\n```squirrelDoc\nvictim: int\n```\nIndex of the victim.\n```squirrelDoc\nassister: int\n```\nIndex of the assister"
	}],
	["OnGameEvent_landed", {
		detail: "OnGameEvent_landed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```"
	}],
	["OnGameEvent_leave_vehicle", {
		detail: "OnGameEvent_leave_vehicle(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nvehicle: int\n```\nEntindex of the vehicle"
	}],
	["OnGameEvent_lobby_updated", {
		detail: "OnGameEvent_lobby_updated(params: table) -> null"
	}],
	["OnGameEvent_localplayer_becameobserver", {
		detail: "OnGameEvent_localplayer_becameobserver(params: table) -> null"
	}],
	["OnGameEvent_localplayer_builtobject", {
		detail: "OnGameEvent_localplayer_builtobject(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nobject: int\n```\nType of object built.\n```squirrelDoc\nobject_mode: int\n```\nUsed for teleporters: entrance vs. exit.\n```squirrelDoc\nindex: int\n```\nIndex of the object"
	}],
	["OnGameEvent_localplayer_changeclass", {
		detail: "OnGameEvent_localplayer_changeclass(params: table) -> null"
	}],
	["OnGameEvent_localplayer_changedisguise", {
		detail: "OnGameEvent_localplayer_changedisguise(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ndisguised: bool\n```"
	}],
	["OnGameEvent_localplayer_changeteam", {
		detail: "OnGameEvent_localplayer_changeteam(params: table) -> null"
	}],
	["OnGameEvent_localplayer_chargeready", {
		detail: "OnGameEvent_localplayer_chargeready(params: table) -> null",
		desc: "local player has full medic charge"
	}],
	["OnGameEvent_localplayer_healed", {
		detail: "OnGameEvent_localplayer_healed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\namount: int\n```"
	}],
	["OnGameEvent_localplayer_pickup_weapon", {
		detail: "OnGameEvent_localplayer_pickup_weapon(params: table) -> null"
	}],
	["OnGameEvent_localplayer_respawn", {
		detail: "OnGameEvent_localplayer_respawn(params: table) -> null"
	}],
	["OnGameEvent_localplayer_score_changed", {
		detail: "OnGameEvent_localplayer_score_changed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nscore: int\n```"
	}],
	["OnGameEvent_localplayer_winddown", {
		detail: "OnGameEvent_localplayer_winddown(params: table) -> null",
		desc: "local player minigun winddown"
	}],
	["OnGameEvent_mainmenu_stabilized", {
		detail: "OnGameEvent_mainmenu_stabilized(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nattacker: int\nvictim: int\nassister: int\n```"
	}],
	["OnGameEvent_match_invites_updated", {
		detail: "OnGameEvent_match_invites_updated(params: table) -> null"
	}],
	["OnGameEvent_medic_death", {
		detail: "OnGameEvent_medic_death(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID who died.\n```squirrelDoc\nattacker: int\n```\nUser ID who killed.\n```squirrelDoc\nhealing: int\n```\nAmount healed in this life.\n```squirrelDoc\ncharged: bool\n```\nHad a full ubercharge?"
	}],
	["OnGameEvent_medic_defended", {
		detail: "OnGameEvent_medic_defended(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\nmedic: int\n```"
	}],
	["OnGameEvent_medigun_shield_blocked_damage", {
		detail: "OnGameEvent_medigun_shield_blocked_damage(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID of the player using the shield.\n```squirrelDoc\ndamage: float\n```\nDamage that was blocked"
	}],
	["OnGameEvent_merasmus_escape_warning", {
		detail: "OnGameEvent_merasmus_escape_warning(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nlevel: int\ntime_remaining: int\n```"
	}],
	["OnGameEvent_merasmus_escaped", {
		detail: "OnGameEvent_merasmus_escaped(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nlevel: int\n```"
	}],
	["OnGameEvent_merasmus_killed", {
		detail: "OnGameEvent_merasmus_killed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nlevel: int\n```"
	}],
	["OnGameEvent_merasmus_prop_found", {
		detail: "OnGameEvent_merasmus_prop_found(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nUserid of the player that found the prop Merasmus was hiding in"
	}],
	["OnGameEvent_merasmus_stunned", {
		detail: "OnGameEvent_merasmus_stunned(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nUserid of the stunning player"
	}],
	["OnGameEvent_merasmus_summoned", {
		detail: "OnGameEvent_merasmus_summoned(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nlevel: int\n```"
	}],
	["OnGameEvent_minigame_win", {
		detail: "OnGameEvent_minigame_win(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nteam: int\n```\nWhich team won the minigame.\n```squirrelDoc\ntype: int\n```\nWhat type of minigame was won"
	}],
	["OnGameEvent_minigame_won", {
		detail: "OnGameEvent_minigame_won(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nUserid of the winning player.\n```squirrelDoc\ngame: int\n```\nIndex of the game"
	}],
	["OnGameEvent_mvm_adv_wave_complete_no_gates", {
		detail: "OnGameEvent_mvm_adv_wave_complete_no_gates(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nWave index"
	}],
	["OnGameEvent_mvm_adv_wave_killed_stun_radio", {
		detail: "OnGameEvent_mvm_adv_wave_killed_stun_radio(params: table) -> null"
	}],
	["OnGameEvent_mvm_begin_wave", {
		detail: "OnGameEvent_mvm_begin_wave(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nwave_index: int\nmax_waves: int\nadvanced: int\n```"
	}],
	["OnGameEvent_mvm_bomb_alarm_triggered", {
		detail: "OnGameEvent_mvm_bomb_alarm_triggered(params: table) -> null"
	}],
	["OnGameEvent_mvm_bomb_carrier_killed", {
		detail: "OnGameEvent_mvm_bomb_carrier_killed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nlevel: int\n```\nUpgrade level of the carrier"
	}],
	["OnGameEvent_mvm_bomb_deploy_reset_by_player", {
		detail: "OnGameEvent_mvm_bomb_deploy_reset_by_player(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```"
	}],
	["OnGameEvent_mvm_bomb_reset_by_player", {
		detail: "OnGameEvent_mvm_bomb_reset_by_player(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```"
	}],
	["OnGameEvent_mvm_creditbonus_all", {
		detail: "OnGameEvent_mvm_creditbonus_all(params: table) -> null"
	}],
	["OnGameEvent_mvm_creditbonus_all_advanced", {
		detail: "OnGameEvent_mvm_creditbonus_all_advanced(params: table) -> null"
	}],
	["OnGameEvent_mvm_creditbonus_wave", {
		detail: "OnGameEvent_mvm_creditbonus_wave(params: table) -> null"
	}],
	["OnGameEvent_mvm_kill_robot_delivering_bomb", {
		detail: "OnGameEvent_mvm_kill_robot_delivering_bomb(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player"
	}],
	["OnGameEvent_mvm_mannhattan_pit", {
		detail: "OnGameEvent_mvm_mannhattan_pit(params: table) -> null"
	}],
	["OnGameEvent_mvm_medic_powerup_shared", {
		detail: "OnGameEvent_mvm_medic_powerup_shared(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player"
	}],
	["OnGameEvent_mvm_mission_complete", {
		detail: "OnGameEvent_mvm_mission_complete(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nmission: string\n```"
	}],
	["OnGameEvent_mvm_mission_update", {
		detail: "OnGameEvent_mvm_mission_update(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nclass: int\ncount: int\n```"
	}],
	["OnGameEvent_mvm_pickup_currency", {
		detail: "OnGameEvent_mvm_pickup_currency(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player.\n```squirrelDoc\ncurrency: int\n```"
	}],
	["OnGameEvent_mvm_quick_sentry_upgrade", {
		detail: "OnGameEvent_mvm_quick_sentry_upgrade(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player"
	}],
	["OnGameEvent_mvm_reset_stats", {
		detail: "OnGameEvent_mvm_reset_stats(params: table) -> null"
	}],
	["OnGameEvent_mvm_scout_marked_for_death", {
		detail: "OnGameEvent_mvm_scout_marked_for_death(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player"
	}],
	["OnGameEvent_mvm_sentrybuster_detonate", {
		detail: "OnGameEvent_mvm_sentrybuster_detonate(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the target player.\n```squirrelDoc\ndet_x: float\ndet_y: float\ndet_z: float\n```\nOrigin of the sentry buster"
	}],
	["OnGameEvent_mvm_sentrybuster_killed", {
		detail: "OnGameEvent_mvm_sentrybuster_killed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nsentry_buster: int\n```\nEntindex"
	}],
	["OnGameEvent_mvm_sniper_headshot_currency", {
		detail: "OnGameEvent_mvm_sniper_headshot_currency(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID of the player.\n```squirrelDoc\ncurrency: int\n```\nCurrency collected"
	}],
	["OnGameEvent_mvm_tank_destroyed_by_players", {
		detail: "OnGameEvent_mvm_tank_destroyed_by_players(params: table) -> null"
	}],
	["OnGameEvent_mvm_wave_complete", {
		detail: "OnGameEvent_mvm_wave_complete(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nadvanced: bool\n```\nIs this an advanced popfile"
	}],
	["OnGameEvent_mvm_wave_failed", {
		detail: "OnGameEvent_mvm_wave_failed(params: table) -> null"
	}],
	["OnGameEvent_nav_blocked", {
		detail: "OnGameEvent_nav_blocked(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\narea: int\nblocked: bool\n```"
	}],
	["OnGameEvent_npc_hurt", {
		detail: "OnGameEvent_npc_hurt(params: table) -> null",
		desc: "Fired when an Engineer building ([obj_sentrygun](https://developer.valvesoftware.com/wiki/obj_sentrygun), [obj_dispenser](https://developer.valvesoftware.com/wiki/obj_dispenser), [obj_teleporter](https://developer.valvesoftware.com/wiki/obj_teleporter)), [base_boss](https://developer.valvesoftware.com/wiki/base_boss), MvM tank ([tank_boss](https://developer.valvesoftware.com/wiki/tank_boss)) or Halloween enemy ([headless_hatman](https://developer.valvesoftware.com/wiki/headless_hatman), [eyeball_boss](https://developer.valvesoftware.com/wiki/eyeball_boss), [merasmus](https://developer.valvesoftware.com/wiki/merasmus), [tf_zombie](https://developer.valvesoftware.com/wiki/tf_zombie)) is damaged.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nentindex: int\nhealth: int\nattacker_player: int\nweaponid: int\ndamageamount: int\ncrit: bool\nboss: int\n```\n1=HHH 2=Monoculus 3=Merasmus"
	}],
	["OnGameEvent_num_cappers_changed", {
		detail: "OnGameEvent_num_cappers_changed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nIndex of the trigger.\n```squirrelDoc\ncount: int\n```\nNumber of cappers (-1 for blocked)"
	}],
	["OnGameEvent_object_deflected", {
		detail: "OnGameEvent_object_deflected(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nPlayer who deflected the object.\n```squirrelDoc\nownerid: int\n```\nOwner of the object.\n```squirrelDoc\nweaponid: int\n```\nWeapon id (0 means the player in ownerid was pushed).\n```squirrelDoc\nobject_entindex: int\n```\nEntindex of the object that got deflected"
	}],
	["OnGameEvent_object_destroyed", {
		detail: "OnGameEvent_object_destroyed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID who died.\n```squirrelDoc\nattacker: int\n```\nUser ID who killed.\n```squirrelDoc\nassister: int\n```\nUser ID of assister.\n```squirrelDoc\nweapon: string\n```\nWeapon name killer used.\n```squirrelDoc\nweaponid: int\n```\nId of the weapon used.\n```squirrelDoc\nobjecttype: int\n```\nType of object destroyed.\n```squirrelDoc\nindex: int\n```\nIndex of the object destroyed.\n```squirrelDoc\nwas_building: bool\n```\nObject was being built when it died.\n```squirrelDoc\nteam: int\n```\nBuilding's team"
	}],
	["OnGameEvent_object_detonated", {
		detail: "OnGameEvent_object_detonated(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID of the object owner.\n```squirrelDoc\nobjecttype: int\n```\nType of object removed.\n```squirrelDoc\nindex: int\n```\nIndex of the object removed"
	}],
	["OnGameEvent_object_removed", {
		detail: "OnGameEvent_object_removed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID of the object owner.\n```squirrelDoc\nobjecttype: int\n```\nType of object removed.\n```squirrelDoc\nindex: int\n```\nIndex of the object removed"
	}],
	["OnGameEvent_overtime_nag", {
		detail: "OnGameEvent_overtime_nag(params: table) -> null"
	}],
	["OnGameEvent_parachute_deploy", {
		detail: "OnGameEvent_parachute_deploy(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nEntindex of the player"
	}],
	["OnGameEvent_parachute_holster", {
		detail: "OnGameEvent_parachute_holster(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nEntindex of the player"
	}],
	["OnGameEvent_party_chat", {
		detail: "OnGameEvent_party_chat(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nsteamid: string\n```\nSteamID (64-bit value converted to string) of user who said or did the thing. May be.\n```squirrelDoc\ntext: string\n```\nThe message. May have different meaning for some types.\n```squirrelDoc\ntype: int\n```\nWhat sort of message? ETFPartyChatType enum"
	}],
	["OnGameEvent_party_criteria_changed", {
		detail: "OnGameEvent_party_criteria_changed(params: table) -> null"
	}],
	["OnGameEvent_party_invites_changed", {
		detail: "OnGameEvent_party_invites_changed(params: table) -> null"
	}],
	["OnGameEvent_party_member_join", {
		detail: "OnGameEvent_party_member_join(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nsteamid: string\n```\nSteamID (64-bit value converted to string) of joined"
	}],
	["OnGameEvent_party_member_leave", {
		detail: "OnGameEvent_party_member_leave(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nsteamid: string\n```\nSteamID (64-bit value converted to string) of leaver"
	}],
	["OnGameEvent_party_pref_changed", {
		detail: "OnGameEvent_party_pref_changed(params: table) -> null"
	}],
	["OnGameEvent_party_queue_state_changed", {
		detail: "OnGameEvent_party_queue_state_changed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nmatchgroup: int\n```\nETFMatchGroup"
	}],
	["OnGameEvent_party_updated", {
		detail: "OnGameEvent_party_updated(params: table) -> null"
	}],
	["OnGameEvent_pass_ball_blocked", {
		detail: "OnGameEvent_pass_ball_blocked(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nowner: int\nblocker: int\n```"
	}],
	["OnGameEvent_pass_ball_stolen", {
		detail: "OnGameEvent_pass_ball_stolen(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nvictim: int\nattacker: int\n```"
	}],
	["OnGameEvent_pass_free", {
		detail: "OnGameEvent_pass_free(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nowner: int\nattacker: int\n```"
	}],
	["OnGameEvent_pass_get", {
		detail: "OnGameEvent_pass_get(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nowner: int\nteam: int\n```"
	}],
	["OnGameEvent_pass_pass_caught", {
		detail: "OnGameEvent_pass_pass_caught(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\npasser: int\ncatcher: int\ndist: float\nduration: float\n```"
	}],
	["OnGameEvent_pass_score", {
		detail: "OnGameEvent_pass_score(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nscorer: int\nassister: int\npoints: int\n```"
	}],
	["OnGameEvent_path_track_passed", {
		detail: "OnGameEvent_path_track_passed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\n[entity handle](https://developer.valvesoftware.com/wiki/CHandle) of the node being passed(not the index!)"
	}],
	["OnGameEvent_payload_pushed", {
		detail: "OnGameEvent_payload_pushed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\npusher: int\n```\nUserid of the player who pushed.\n```squirrelDoc\ndistance: int\n```\nHow far they pushed"
	}],
	["OnGameEvent_physgun_pickup", {
		detail: "OnGameEvent_physgun_pickup(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex: int\n```\nEntity picked up"
	}],
	["OnGameEvent_player_abandoned_match", {
		detail: "OnGameEvent_player_abandoned_match(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ngame_over: bool\n```"
	}],
	["OnGameEvent_player_account_changed", {
		detail: "OnGameEvent_player_account_changed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nold_value: int\nnew_value: int\n```"
	}],
	["OnGameEvent_player_activate", {
		detail: "OnGameEvent_player_activate(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID on server"
	}],
	["OnGameEvent_player_askedforball", {
		detail: "OnGameEvent_player_askedforball(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```"
	}],
	["OnGameEvent_player_bonuspoints", {
		detail: "OnGameEvent_player_bonuspoints(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\npoints: int\nplayer_entindex: int\nsource_entindex: int\n```"
	}],
	["OnGameEvent_player_buff", {
		detail: "OnGameEvent_player_buff(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID of the player the buff is being applied to.\n```squirrelDoc\nbuff_owner: int\n```\nUser ID of the player with the banner.\n```squirrelDoc\nbuff_type: int\n```\nType of buff"
	}],
	["OnGameEvent_player_builtobject", {
		detail: "OnGameEvent_player_builtobject(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID of the builder.\n```squirrelDoc\nobject: int\n```\nType of object built.\n```squirrelDoc\nindex: int\n```\nIndex of the object"
	}],
	["OnGameEvent_player_buyback", {
		detail: "OnGameEvent_player_buyback(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\ncost: int\n```"
	}],
	["OnGameEvent_player_calledformedic", {
		detail: "OnGameEvent_player_calledformedic(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```"
	}],
	["OnGameEvent_player_carryobject", {
		detail: "OnGameEvent_player_carryobject(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID of the builder.\n```squirrelDoc\nobject: int\n```\nType of object built.\n```squirrelDoc\nindex: int\n```\nIndex of the object"
	}],
	["OnGameEvent_player_changeclass", {
		detail: "OnGameEvent_player_changeclass(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID who changed class.\n```squirrelDoc\nclass: int\n```\nClass that they changed to"
	}],
	["OnGameEvent_player_changename", {
		detail: "OnGameEvent_player_changename(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID on server.\n```squirrelDoc\noldname: string\n```\nPlayers old (current) name.\n```squirrelDoc\nnewname: string\n```\nPlayers new name"
	}],
	["OnGameEvent_player_chargedeployed", {
		detail: "OnGameEvent_player_chargedeployed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID of medic who deployed charge.\n```squirrelDoc\ntargetid: int\n```\nUser ID of who the medic charged"
	}],
	["OnGameEvent_player_chat", {
		detail: "OnGameEvent_player_chat(params: table) -> null",
		desc: "A public player chat\n\n---\nVariables of the `params` table:\n```squirrelDoc\nteamonly: bool\n```\nTrue if team only chat.\n```squirrelDoc\nuserid: int\n```\nChatting player.\n```squirrelDoc\ntext: string\n```\nChat text"
	}],
	["OnGameEvent_player_class", {
		detail: "OnGameEvent_player_class(params: table) -> null",
		desc: "A player changed his class\n\n---\nVariables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID on server.\n```squirrelDoc\nclass: string\n```\nNew player class / model"
	}],
	["OnGameEvent_player_connect", {
		detail: "OnGameEvent_player_connect(params: table) -> null",
		desc: "A new client has connected. This does NOT fire between level changes as the player is already connected. Use `player_spawn` instead if you need to catch every player entity that is created.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nname: string\n```\nPlayer name.\n```squirrelDoc\nindex: int\n```\nPlayer slot (entity index-1).\n```squirrelDoc\nuserid: int\n```\nUser ID on server (unique on server).\n```squirrelDoc\nnetworkid: string\n```\nPlayer network (i.e steam) id.\n```squirrelDoc\naddress: string\n```\nip:port.\n```squirrelDoc\nbot: int\n```\nIs a bot"
	}],
	["OnGameEvent_player_connect_client", {
		detail: "OnGameEvent_player_connect_client(params: table) -> null",
		desc: "A new client connected\n\n---\nVariables of the `params` table:\n```squirrelDoc\nname: string\n```\nPlayer name.\n```squirrelDoc\nindex: int\n```\nPlayer slot (entity index-1).\n```squirrelDoc\nuserid: int\n```\nUser ID on server (unique on server).\n```squirrelDoc\nnetworkid: string\n```\nPlayer network (i.e steam) id.\n```squirrelDoc\nbot: int\n```\nIs a bot"
	}],
	["OnGameEvent_player_currency_changed", {
		detail: "OnGameEvent_player_currency_changed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ncurrency: int\n```"
	}],
	["OnGameEvent_player_damage_dodged", {
		detail: "OnGameEvent_player_damage_dodged(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ndamage: int\n```"
	}],
	["OnGameEvent_player_damaged", {
		detail: "OnGameEvent_player_damaged(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\namount: int\ntype: int\n```"
	}],
	["OnGameEvent_player_death", {
		detail: "OnGameEvent_player_death(params: table) -> null",
		desc: "Fired when a player dies. This shows up in the kill feed.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID who died.\n```squirrelDoc\nvictim_entindex: int\ninflictor_entindex: int\n```\nEnt index of inflictor (a sentry, for example).\n```squirrelDoc\nattacker: int\n```\nUser ID who killed.\n```squirrelDoc\nweapon: string\n```\nWeapon name killer used.\n```squirrelDoc\nweaponid: int\n```\nID of weapon killer used.\n```squirrelDoc\ndamagebits: int\n```\nBits of type of damage.\n```squirrelDoc\ncustomkill: int\n```\nType of custom kill.\n```squirrelDoc\nassister: int\n```\nUser ID of assister.\n```squirrelDoc\nweapon_logclassname: string\n```\nWeapon name that should be printed on the log.\n```squirrelDoc\nstun_flags: int\n```\nVictim's stun flags at the moment of death.\n```squirrelDoc\ndeath_flags: int\n```\nSee [death flags](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#TF_DEATH).\n```squirrelDoc\nsilent_kill: bool\nplayerpenetratecount: int\nassister_fallback: string\n```\nContains a string to use if \"assister\" is -1.\n```squirrelDoc\nkill_streak_total: int\n```\nKill streak count (level).\n```squirrelDoc\nkill_streak_wep: int\n```\nKill streak for killing weapon.\n```squirrelDoc\nkill_streak_assist: int\n```\nKill streak for assister count.\n```squirrelDoc\nkill_streak_victim: int\n```\nVictims kill streak.\n```squirrelDoc\nducks_streaked: int\n```\nDuck streak increment from this kill.\n```squirrelDoc\nduck_streak_total: int\n```\nDuck streak count for attacker.\n```squirrelDoc\nduck_streak_assist: int\n```\nDuck streak count for assister.\n```squirrelDoc\nduck_streak_victim: int\n```\n(former) duck streak count for victim.\n```squirrelDoc\nrocket_jump: bool\n```\nWas the victim rocket jumping.\n```squirrelDoc\nweapon_def_index: int\n```\nItem def index of weapon killer used.\n```squirrelDoc\ncrit_type: int\n```\nCrit type of kill. 0: None 1: Mini 2: Full.\n```squirrelDoc\ndominated: int\n```\nDid killer dominate victim with this kill.\n```squirrelDoc\nassister_dominated: int\n```\nDid assister dominate victim with this kill.\n```squirrelDoc\nrevenge: int\n```\nDid killer get revenge on victim with this kill.\n```squirrelDoc\nassister_revenge: int\n```\nDid assister get revenge on victim with this kill.\n```squirrelDoc\nfirst_blood: bool\n```\nWas this a first blood kill.\n```squirrelDoc\nfeign_death: bool\n```\nThe victim is feign death."
	}],
	["OnGameEvent_player_destroyed_pipebomb", {
		detail: "OnGameEvent_player_destroyed_pipebomb(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```"
	}],
	["OnGameEvent_player_directhit_stun", {
		detail: "OnGameEvent_player_directhit_stun(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nattacker: int\n```\nEntindex of the attacker.\n```squirrelDoc\nvictim: int\n```\nEntindex of the victim"
	}],
	["OnGameEvent_player_disconnect", {
		detail: "OnGameEvent_player_disconnect(params: table) -> null",
		desc: "A client has disconnected. The player handle and script scope still exists when this event fires, as it persists for a frame after disconnect.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID on server.\n```squirrelDoc\nreason: string\n```\n\"self\", \"kick\", \"ban\", \"cheat\", \"error\".\n```squirrelDoc\nname: string\n```\nPlayer name.\n```squirrelDoc\nnetworkid: string\n```\nPlayer network (i.e steam) id.\n```squirrelDoc\nbot: int\n```\nIs a bot"
	}],
	["OnGameEvent_player_domination", {
		detail: "OnGameEvent_player_domination(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ndominator: int\n```\nUserID of who gained domination.\n```squirrelDoc\ndominated: int\n```\nUserID of who got dominated.\n```squirrelDoc\ndominations: int\n```\nNumber of dominations this dominator has"
	}],
	["OnGameEvent_player_dropobject", {
		detail: "OnGameEvent_player_dropobject(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID of the builder.\n```squirrelDoc\nobject: int\n```\nType of object built.\n```squirrelDoc\nindex: int\n```\nIndex of the object"
	}],
	["OnGameEvent_player_escort_score", {
		detail: "OnGameEvent_player_escort_score(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\npoints: int\n```"
	}],
	["OnGameEvent_player_extinguished", {
		detail: "OnGameEvent_player_extinguished(params: table) -> null",
		desc: "Sent when a burning player is extinguished by a medic.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nvictim: int\n```\nEntindex of the player that was extinguished.\n```squirrelDoc\nhealer: int\n```\nEntindex of the player who did the extinguishing.\n```squirrelDoc\nitemdefindex: int\n```\nItem defindex that did the extinguishing"
	}],
	["OnGameEvent_player_healed", {
		detail: "OnGameEvent_player_healed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\npatient: int\nhealer: int\namount: int\n```"
	}],
	["OnGameEvent_player_healedbymedic", {
		detail: "OnGameEvent_player_healedbymedic(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nmedic: int\n```"
	}],
	["OnGameEvent_player_healedmediccall", {
		detail: "OnGameEvent_player_healedmediccall(params: table) -> null",
		desc: "Local player heals someone who called for medic.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUserid of person who got healed"
	}],
	["OnGameEvent_player_healonhit", {
		detail: "OnGameEvent_player_healonhit(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\namount: int\nentindex: int\nweapon_def_index: int\n```\nItem def index of the healing weapon"
	}],
	["OnGameEvent_player_highfive_cancel", {
		detail: "OnGameEvent_player_highfive_cancel(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex: int\n```"
	}],
	["OnGameEvent_player_highfive_start", {
		detail: "OnGameEvent_player_highfive_start(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex: int\n```"
	}],
	["OnGameEvent_player_highfive_success", {
		detail: "OnGameEvent_player_highfive_success(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ninitiator_entindex: int\npartner_entindex: int\n```"
	}],
	["OnGameEvent_player_hintmessage", {
		detail: "OnGameEvent_player_hintmessage(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nhintmessage: string\n```\nLocalizable string of a hint"
	}],
	["OnGameEvent_player_hurt", {
		detail: "OnGameEvent_player_hurt(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nIf <= 0, then this will play the killsound.\n```squirrelDoc\nhealth: int\nattacker: int\ndamageamount: int\ncustom: int\nshowdisguisedcrit: bool\n```\nIf our attribute specifically crits disguised enemies we need to show it on the client.\n```squirrelDoc\ncrit: bool\n```\nLegacy only, use `bonuseffect`.\n```squirrelDoc\nminicrit: bool\n```\nLegacy only, use `bonuseffect`.\n```squirrelDoc\nallseecrit: bool\nweaponid: int\nbonuseffect: int\n```\nType of damage effect.\nSee [constants page](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#kBonusEffect)."
	}],
	["OnGameEvent_player_ignited", {
		detail: "OnGameEvent_player_ignited(params: table) -> null",
		desc: "Sent when a player is ignited, only to the two players involved.\n\n---\nVariables of the `params` table:\n```squirrelDoc\npyro_entindex: int\n```\nEntindex of the pyro who ignited the victim.\n```squirrelDoc\nvictim_entindex: int\n```\nEntindex of the player ignited by the pyro.\n```squirrelDoc\nweaponid: int\n```\nWeaponid of the weapon used"
	}],
	["OnGameEvent_player_ignited_inv", {
		detail: "OnGameEvent_player_ignited_inv(params: table) -> null",
		desc: "Sent when a player is ignited by a pyro who is being invulned, only to the medic who's doing the invulning.\n\n---\nVariables of the `params` table:\n```squirrelDoc\npyro_entindex: int\n```\nEntindex of the pyro who ignited the victim.\n```squirrelDoc\nvictim_entindex: int\n```\nEntindex of the player ignited by the pyro.\n```squirrelDoc\nmedic_entindex: int\n```\nEntindex of the medic releasing the invuln"
	}],
	["OnGameEvent_player_info", {
		detail: "OnGameEvent_player_info(params: table) -> null",
		desc: "A player changed his name.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nname: string\n```\nPlayer name.\n```squirrelDoc\nindex: int\n```\nPlayer slot (entity index-1).\n```squirrelDoc\nuserid: int\n```\nUser ID on server (unique on server).\n```squirrelDoc\nnetworkid: string\n```\nPlayer network (i.e steam) id.\n```squirrelDoc\nbot: bool\n```\nTrue if player is a AI bot"
	}],
	["OnGameEvent_player_initial_spawn", {
		detail: "OnGameEvent_player_initial_spawn(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```\nEntindex of the player"
	}],
	["OnGameEvent_player_invulned", {
		detail: "OnGameEvent_player_invulned(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\nmedic_userid: int\n```"
	}],
	["OnGameEvent_player_jarated", {
		detail: "OnGameEvent_player_jarated(params: table) -> null",
		desc: "Sent when a player is jarated, only to the two players involved.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nthrower_entindex: int\n```\nEntindex of the player who threw the jarate.\n```squirrelDoc\nvictim_entindex: int\n```\nEntindex of the player receiving it"
	}],
	["OnGameEvent_player_jarated_fade", {
		detail: "OnGameEvent_player_jarated_fade(params: table) -> null",
		desc: "Sent when a player is jarated, only to the two players involved.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nthrower_entindex: int\n```\nEntindex of the player who threw the jarate.\n```squirrelDoc\nvictim_entindex: int\n```\nEntindex of the player receiving it"
	}],
	["OnGameEvent_player_killed_achievement_zone", {
		detail: "OnGameEvent_player_killed_achievement_zone(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nattacker: int\n```\nEntindex of the attacker.\n```squirrelDoc\nvictim: int\n```\nEntindex of the victim.\n```squirrelDoc\nzone_id: int\n```\nType of area (0 for general, 1 for capture zone)"
	}],
	["OnGameEvent_player_mvp", {
		detail: "OnGameEvent_player_mvp(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```"
	}],
	["OnGameEvent_player_pinned", {
		detail: "OnGameEvent_player_pinned(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\npinned: int\n```"
	}],
	["OnGameEvent_player_regenerate", {
		detail: "OnGameEvent_player_regenerate(params: table) -> null"
	}],
	["OnGameEvent_player_rocketpack_pushed", {
		detail: "OnGameEvent_player_rocketpack_pushed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\npusher: int\n```\nUserID of who pushed.\n```squirrelDoc\npushed: int\n```\nUserID of who got pushed"
	}],
	["OnGameEvent_player_sapped_object", {
		detail: "OnGameEvent_player_sapped_object(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID of the spy.\n```squirrelDoc\nownerid: int\n```\nUser ID of the building owner.\n```squirrelDoc\nobject: int\nsapperid: int\n```\nIndex of the sapper"
	}],
	["OnGameEvent_player_say", {
		detail: "OnGameEvent_player_say(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID on server.\n```squirrelDoc\ntext: string\n```\nThe say text"
	}],
	["OnGameEvent_player_score", {
		detail: "OnGameEvent_player_score(params: table) -> null",
		desc: "Players scores changed.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID on server.\n```squirrelDoc\nkills: int\n```\nNumber of kills.\n```squirrelDoc\ndeaths: int\n```\nNumber of deaths.\n```squirrelDoc\nscore: int\n```\nTotal game score"
	}],
	["OnGameEvent_player_score_changed", {
		detail: "OnGameEvent_player_score_changed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\ndelta: int\n```"
	}],
	["OnGameEvent_player_shield_blocked", {
		detail: "OnGameEvent_player_shield_blocked(params: table) -> null",
		desc: "Sent when a player is jarated, only to the two players involved.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nattacker_entindex: int\n```\nEntindex of the player who threw the jarate.\n```squirrelDoc\nblocker_entindex: int\n```\nEntindex of the player receiving it"
	}],
	["OnGameEvent_player_shoot", {
		detail: "OnGameEvent_player_shoot(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID on server.\n```squirrelDoc\nweapon: int\n```\nWeapon ID.\n```squirrelDoc\nmode: int\n```\nWeapon mode"
	}],
	["OnGameEvent_player_spawn", {
		detail: "OnGameEvent_player_spawn(params: table) -> null",
		desc: "This event will be sent once when the player entity is created, i.e. they joined the server or they are loading in after a map change. In this case, `team` is equal to 0 (unassigned). Each time afterwards, the event will only be fired when the player spawns alive on red or blue team. This is also fired once when [SourceTV](https://developer.valvesoftware.com/wiki/SourceTV) is loaded in.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID who spawned.\n```squirrelDoc\nteam: int\n```\nTeam they spawned on.\n```squirrelDoc\nclass: int\n```\nClass they spawned as"
	}],
	["OnGameEvent_player_stats_updated", {
		detail: "OnGameEvent_player_stats_updated(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nforceupload: bool\n```"
	}],
	["OnGameEvent_player_stealsandvich", {
		detail: "OnGameEvent_player_stealsandvich(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nowner: int\ntarget: int\n```"
	}],
	["OnGameEvent_player_stunned", {
		detail: "OnGameEvent_player_stunned(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nstunner: int\nvictim: int\nvictim_capping: bool\nbig_stun: bool\n```"
	}],
	["OnGameEvent_player_team", {
		detail: "OnGameEvent_player_team(params: table) -> null",
		desc: "Fired when player joins a team.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID on server.\n```squirrelDoc\nteam: int\n```\nTeam id.\n```squirrelDoc\noldteam: int\n```\nOld team id.\n```squirrelDoc\ndisconnect: bool\n```\nTeam change because player disconnects.\n```squirrelDoc\nautoteam: bool\n```\nTrue if the player was auto assigned to the team.\n```squirrelDoc\nsilent: bool\n```\nIf true wont print the team join messages.\n```squirrelDoc\nname: string\n```\nPlayer's name"
	}],
	["OnGameEvent_player_teleported", {
		detail: "OnGameEvent_player_teleported(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUserid of the player.\n```squirrelDoc\nbuilderid: int\n```\nUserid of the player who built the teleporter.\n```squirrelDoc\ndist: float\n```\nDistance the player was teleported"
	}],
	["OnGameEvent_player_turned_to_ghost", {
		detail: "OnGameEvent_player_turned_to_ghost(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID of the player who changed to a ghost"
	}],
	["OnGameEvent_player_upgraded", {
		detail: "OnGameEvent_player_upgraded(params: table) -> null"
	}],
	["OnGameEvent_player_upgradedobject", {
		detail: "OnGameEvent_player_upgradedobject(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID of the builder.\n```squirrelDoc\nobject: int\n```\nType of object built.\n```squirrelDoc\nindex: int\n```\nIndex of the object.\n```squirrelDoc\nisbuilder: bool\n```"
	}],
	["OnGameEvent_player_use", {
		detail: "OnGameEvent_player_use(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID on server.\n```squirrelDoc\nentity: int\n```\nEntity used by player"
	}],
	["OnGameEvent_player_used_powerup_bottle", {
		detail: "OnGameEvent_player_used_powerup_bottle(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\ntype: int\ntime: float\n```"
	}],
	["OnGameEvent_playing_commentary", {
		detail: "OnGameEvent_playing_commentary(params: table) -> null"
	}],
	["OnGameEvent_post_inventory_application", {
		detail: "OnGameEvent_post_inventory_application(params: table) -> null",
		desc: "Fired when the player has items resupplied, i.e. when the player spawns or touches resupply ([func_regenerate](https://developer.valvesoftware.com/wiki/func_regenerate)).\n\n---\nVariables of the `params` table:\n```squirrelDoc\nuserid: int\n```"
	}],
	["OnGameEvent_projectile_direct_hit", {
		detail: "OnGameEvent_projectile_direct_hit(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nattacker: int\n```\nIndex of the player who shot the projectile.\n```squirrelDoc\nvictim: int\n```\nIndex of the player who got direct-ht.\n```squirrelDoc\nweapon_def_index: int\n```\nDefindex of the direct hitting weapon"
	}],
	["OnGameEvent_projectile_removed", {
		detail: "OnGameEvent_projectile_removed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nattacker: int\nweapon_def_index: int\nnum_hit: int\nnum_direct_hit: int\n```"
	}],
	["OnGameEvent_pumpkin_lord_killed", {
		detail: "OnGameEvent_pumpkin_lord_killed(params: table) -> null"
	}],
	["OnGameEvent_pumpkin_lord_summoned", {
		detail: "OnGameEvent_pumpkin_lord_summoned(params: table) -> null"
	}],
	["OnGameEvent_pve_win_panel", {
		detail: "OnGameEvent_pve_win_panel(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\npanel_style: int\n```\nFor client to determine layout.\n```squirrelDoc\nwinning_team: int\nwinreason: int\n```\nThe reason the team won"
	}],
	["OnGameEvent_quest_map_data_changed", {
		detail: "OnGameEvent_quest_map_data_changed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nigniter: int\n```\nEntindex of the igniter.\n```squirrelDoc\ndouser: int\n```\nEntindex of the douser.\n```squirrelDoc\nvictim: int\n```\nEntindex of the victim"
	}],
	["OnGameEvent_quest_objective_completed", {
		detail: "OnGameEvent_quest_objective_completed(params: table) -> null",
		desc: "For prediction.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nquest_item_id_low: int\nquest_item_id_hi: int\nquest_objective_id: int\nscorer_user_id: int\n```"
	}],
	["OnGameEvent_quest_progress", {
		detail: "OnGameEvent_quest_progress(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nowner: int\nscorer: int\ntype: int\ncompleted: bool\nquest_defindex: int\n```"
	}],
	["OnGameEvent_quest_request", {
		detail: "OnGameEvent_quest_request(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nrequest: int\nmsg: string\n```\nProtobuf serialized to a string"
	}],
	["OnGameEvent_quest_response", {
		detail: "OnGameEvent_quest_response(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nrequest: int\nsuccess: bool\nmsg: string\n```\nProtobuf serialized to a string"
	}],
	["OnGameEvent_quest_turn_in_state", {
		detail: "OnGameEvent_quest_turn_in_state(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nstate: int\n```\nMaps to EQuestTurnInState"
	}],
	["OnGameEvent_questlog_opened", {
		detail: "OnGameEvent_questlog_opened(params: table) -> null"
	}],
	["OnGameEvent_ragdoll_dissolved", {
		detail: "OnGameEvent_ragdoll_dissolved(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex: int\n```"
	}],
	["OnGameEvent_raid_spawn_mob", {
		detail: "OnGameEvent_raid_spawn_mob(params: table) -> null"
	}],
	["OnGameEvent_raid_spawn_squad", {
		detail: "OnGameEvent_raid_spawn_squad(params: table) -> null"
	}],
	["OnGameEvent_rd_player_score_points", {
		detail: "OnGameEvent_rd_player_score_points(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\nmethod: int\namount: int\n```"
	}],
	["OnGameEvent_rd_robot_impact", {
		detail: "OnGameEvent_rd_robot_impact(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex: int\nimpulse_x: float\nimpulse_y: float\nimpulse_z: float\n```"
	}],
	["OnGameEvent_rd_robot_killed", {
		detail: "OnGameEvent_rd_robot_killed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID who died.\n```squirrelDoc\nvictim_entindex: int\ninflictor_entindex: int\n```\nEnt index of inflictor (a sentry, for example).\n```squirrelDoc\nattacker: int\n```\nUser ID who killed.\n```squirrelDoc\nweapon: string\n```\nWeapon name killer used.\n```squirrelDoc\nweaponid: int\n```\nID of weapon killed used.\n```squirrelDoc\ndamagebits: int\n```\nBits of type of damage.\n```squirrelDoc\ncustomkill: int\n```\nType of custom kill.\n```squirrelDoc\nweapon_logclassname: string\n```\nWeapon name that should be printed on the log"
	}],
	["OnGameEvent_rd_rules_state_changed", {
		detail: "OnGameEvent_rd_rules_state_changed(params: table) -> null"
	}],
	["OnGameEvent_rd_team_points_changed", {
		detail: "OnGameEvent_rd_team_points_changed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\npoints: int\nteam: int\nmethod: int\n```"
	}],
	["OnGameEvent_recalculate_holidays", {
		detail: "OnGameEvent_recalculate_holidays(params: table) -> null"
	}],
	["OnGameEvent_recalculate_truce", {
		detail: "OnGameEvent_recalculate_truce(params: table) -> null"
	}],
	["OnGameEvent_rematch_failed_to_create", {
		detail: "OnGameEvent_rematch_failed_to_create(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nmap_index: int\n```\nWhat they voted for.\n```squirrelDoc\nvote: int\n```\nWhat the vote was"
	}],
	["OnGameEvent_remove_nemesis_relationships", {
		detail: "OnGameEvent_remove_nemesis_relationships(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player who should reset"
	}],
	["OnGameEvent_replay_endrecord", {
		detail: "OnGameEvent_replay_endrecord(params: table) -> null"
	}],
	["OnGameEvent_replay_replaysavailable", {
		detail: "OnGameEvent_replay_replaysavailable(params: table) -> null"
	}],
	["OnGameEvent_replay_saved", {
		detail: "OnGameEvent_replay_saved(params: table) -> null"
	}],
	["OnGameEvent_replay_servererror", {
		detail: "OnGameEvent_replay_servererror(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nerror: string\n```"
	}],
	["OnGameEvent_replay_sessioninfo", {
		detail: "OnGameEvent_replay_sessioninfo(params: table) -> null",
		desc: "Sent when the server begins recording, or when a client first connects - only sent once per recording session.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nsn: string\n```\nSession name.\n```squirrelDoc\ndi: int\n```\nDump interval.\n```squirrelDoc\ncb: int\n```\nCurrent block.\n```squirrelDoc\nst: int\n```\nSession start tick"
	}],
	["OnGameEvent_replay_startrecord", {
		detail: "OnGameEvent_replay_startrecord(params: table) -> null",
		desc: "Sent when the server begins recording - only used to display UI"
	}],
	["OnGameEvent_replay_youtube_stats", {
		detail: "OnGameEvent_replay_youtube_stats(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nviews: int\nlikes: int\nfavorited: int\n```"
	}],
	["OnGameEvent_respawn_ghost", {
		detail: "OnGameEvent_respawn_ghost(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nreviver: int\n```\nUserid of the reviving player.\n```squirrelDoc\nghost: int\n```\nUserid of the player that got revived"
	}],
	["OnGameEvent_restart_timer_time", {
		detail: "OnGameEvent_restart_timer_time(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ntime: int\n```\nHow much time is left"
	}],
	["OnGameEvent_revive_player_complete", {
		detail: "OnGameEvent_revive_player_complete(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex: int\n```\nEntindex of the medic"
	}],
	["OnGameEvent_revive_player_notify", {
		detail: "OnGameEvent_revive_player_notify(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex: int\nmarker_entindex: int\n```"
	}],
	["OnGameEvent_revive_player_stopped", {
		detail: "OnGameEvent_revive_player_stopped(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nentindex: int\n```"
	}],
	["OnGameEvent_rocket_jump", {
		detail: "OnGameEvent_rocket_jump(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\nplaysound: bool\n```"
	}],
	["OnGameEvent_rocket_jump_landed", {
		detail: "OnGameEvent_rocket_jump_landed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```"
	}],
	["OnGameEvent_rocketpack_landed", {
		detail: "OnGameEvent_rocketpack_landed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```"
	}],
	["OnGameEvent_rocketpack_launch", {
		detail: "OnGameEvent_rocketpack_launch(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\nplaysound: bool\n```"
	}],
	["OnGameEvent_round_end", {
		detail: "OnGameEvent_round_end(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nwinner: int\n```\nWinner team/user i.\n```squirrelDoc\nreason: int\n```\nReson why team won.\n```squirrelDoc\nmessage: string\n```\nEnd round message"
	}],
	["OnGameEvent_round_start", {
		detail: "OnGameEvent_round_start(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ntimelimit: int\n```\nRound time limit in seconds.\n```squirrelDoc\nfraglimit: int\n```\nFrag limit in seconds.\n```squirrelDoc\nobjective: string\n```\nRound objective"
	}],
	["OnGameEvent_rps_taunt_event", {
		detail: "OnGameEvent_rps_taunt_event(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nwinner: int\n```\nEntindex of the winning player.\n```squirrelDoc\nwinner_rps: int\n```\nWinner's selection.\n```squirrelDoc\nloser: int\n```\nEntindex of the losing player.\n```squirrelDoc\nloser_rps: int\n```\nLoser's selection"
	}],
	["OnGameEvent_schema_updated", {
		detail: "OnGameEvent_schema_updated(params: table) -> null"
	}],
	["OnGameEvent_scorestats_accumulated_reset", {
		detail: "OnGameEvent_scorestats_accumulated_reset(params: table) -> null",
		desc: "Fired when round resets due to `mp_restartgame`."
	}],
	["OnGameEvent_scorestats_accumulated_update", {
		detail: "OnGameEvent_scorestats_accumulated_update(params: table) -> null",
		desc: "Fired right before map entities are cleaned up for a round restart. \n\nThis event is not fired in Mann Vs Machine mode. For MvM, use `recalculate_holidays` and check if `GetRoundState() == 3` is true, which indicates a mission reset.\n\n"
	}],
	["OnGameEvent_scout_grand_slam", {
		detail: "OnGameEvent_scout_grand_slam(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nscout_id: int\ntarget_id: int\n```"
	}],
	["OnGameEvent_scout_slamdoll_landed", {
		detail: "OnGameEvent_scout_slamdoll_landed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ntarget_index: int\nx: float\ny: float\nz: float\n```"
	}],
	["OnGameEvent_sentry_on_go_active", {
		detail: "OnGameEvent_sentry_on_go_active(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\n```"
	}],
	["OnGameEvent_server_addban", {
		detail: "OnGameEvent_server_addban(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nname: string\n```\nPlayer name.\n```squirrelDoc\nuserid: int\n```\nUser ID on server.\n```squirrelDoc\nnetworkid: string\n```\nPlayer network (i.e steam) id.\n```squirrelDoc\nip: string\n```\nIP address.\n```squirrelDoc\nduration: string\n```\nLength of the ban.\n```squirrelDoc\nby: string\n```\nBanned by...\n```squirrelDoc\nkicked: bool\n```\nWhether the player was also kicked"
	}],
	["OnGameEvent_server_changelevel_failed", {
		detail: "OnGameEvent_server_changelevel_failed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nlevelname: string\n```\nThe level name that failed changelevel"
	}],
	["OnGameEvent_server_cvar", {
		detail: "OnGameEvent_server_cvar(params: table) -> null",
		desc: "A server console var has changed.\n\n---\nVariables of the `params` table:\n```squirrelDoc\ncvarname: string\n```\nCvar name, eg \"mp_roundtime\".\n```squirrelDoc\ncvarvalue: string\n```\nNew cvar value"
	}],
	["OnGameEvent_server_message", {
		detail: "OnGameEvent_server_message(params: table) -> null",
		desc: "A generic server message.\n\n---\nVariables of the `params` table:\n```squirrelDoc\ntext: string\n```\nThe message text"
	}],
	["OnGameEvent_server_removeban", {
		detail: "OnGameEvent_server_removeban(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nnetworkid: string\n```\nPlayer network (i.e steam) id.\n```squirrelDoc\nip: string\n```\nIP address.\n```squirrelDoc\nby: string\n```\nRemoved by..."
	}],
	["OnGameEvent_server_shutdown", {
		detail: "OnGameEvent_server_shutdown(params: table) -> null",
		desc: "Server shut down.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nreason: string\n```\nReason why server was shut down"
	}],
	["OnGameEvent_server_spawn", {
		detail: "OnGameEvent_server_spawn(params: table) -> null",
		desc: "Send once a server starts.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nhostname: string\n```\nPublic host name.\n```squirrelDoc\naddress: string\n```\nHostame, IP or DNS name.\n```squirrelDoc\nip: int\nport: int\n```\nServer port.\n```squirrelDoc\ngame: string\n```\nGame dir.\n```squirrelDoc\nmapname: string\n```\nMap name.\n```squirrelDoc\nmaxplayers: int\n```\nMax players.\n```squirrelDoc\nos: string\n```\nWIN32, LINUX.\n```squirrelDoc\ndedicated: bool\n```\nTrue if dedicated server.\n```squirrelDoc\npassword: bool\n```\nTrue if password protected"
	}],
	["OnGameEvent_show_annotation", {
		detail: "OnGameEvent_show_annotation(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nworldPosX: float\nworldPosY: float\nworldPosZ: float\nworldNormalX: float\nworldNormalY: float\nworldNormalZ: float\nid: int\ntext: string\n```\nName (unlocalized).\n```squirrelDoc\nlifetime: float\nvisibilityBitfield: int\n```\nBitfield of the players that can see this. If 0, everyone can see it.\n```squirrelDoc\nfollow_entindex: int\n```\nIf this is set, follow this entity.\n```squirrelDoc\nshow_distance: bool\nplay_sound: string\nshow_effect: bool\n```"
	}],
	["OnGameEvent_show_class_layout", {
		detail: "OnGameEvent_show_class_layout(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nshow: bool\n```"
	}],
	["OnGameEvent_show_freezepanel", {
		detail: "OnGameEvent_show_freezepanel(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nkiller: int\n```\nEntindex of the killer entity"
	}],
	["OnGameEvent_show_match_summary", {
		detail: "OnGameEvent_show_match_summary(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nsuccess: bool\n```"
	}],
	["OnGameEvent_show_vs_panel", {
		detail: "OnGameEvent_show_vs_panel(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nshow: bool\n```"
	}],
	["OnGameEvent_single_player_death", {
		detail: "OnGameEvent_single_player_death(params: table) -> null"
	}],
	["OnGameEvent_skeleton_killed_quest", {
		detail: "OnGameEvent_skeleton_killed_quest(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nUserid of the player that killed the skeleton"
	}],
	["OnGameEvent_skeleton_king_killed_quest", {
		detail: "OnGameEvent_skeleton_king_killed_quest(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nUserid of the player that killed the skeleton"
	}],
	["OnGameEvent_slap_notice", {
		detail: "OnGameEvent_slap_notice(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID who died.\n```squirrelDoc\nvictim_entindex: int\ninflictor_entindex: int\n```\nEnt index of inflictor (a sentry, for example).\n```squirrelDoc\nattacker: int\n```\nUser ID who killed.\n```squirrelDoc\nweapon: string\n```\nWeapon name killer used.\n```squirrelDoc\nweaponid: int\n```\nID of weapon killed used.\n```squirrelDoc\ndamagebits: int\n```\nBits of type of damage.\n```squirrelDoc\ncustomkill: int\n```\nType of custom kill.\n```squirrelDoc\nassister: int\n```\nUser ID of assister.\n```squirrelDoc\nweapon_logclassname: string\n```\nWeapon name that should be printed on the log.\n```squirrelDoc\nstun_flags: int\n```\nVictim's stun flags at the moment of death.\n```squirrelDoc\ndeath_flags: int\n```\nSee [death flags](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#TF_DEATH).\n```squirrelDoc\nsilent_kill: bool\nassister_fallback: string\n```\nContains a string to use if \"assister\" is -1.\n```squirrelDoc\ntotalhits: int\n```\nNumber of hits his player has done"
	}],
	["OnGameEvent_spec_target_updated", {
		detail: "OnGameEvent_spec_target_updated(params: table) -> null"
	}],
	["OnGameEvent_special_score", {
		detail: "OnGameEvent_special_score(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nIndex of the scorer"
	}],
	["OnGameEvent_spy_pda_reset", {
		detail: "OnGameEvent_spy_pda_reset(params: table) -> null"
	}],
	["OnGameEvent_stats_resetround", {
		detail: "OnGameEvent_stats_resetround(params: table) -> null"
	}],
	["OnGameEvent_sticky_jump", {
		detail: "OnGameEvent_sticky_jump(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\nplaysound: bool\n```"
	}],
	["OnGameEvent_sticky_jump_landed", {
		detail: "OnGameEvent_sticky_jump_landed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```"
	}],
	["OnGameEvent_store_pricesheet_updated", {
		detail: "OnGameEvent_store_pricesheet_updated(params: table) -> null"
	}],
	["OnGameEvent_tagged_player_as_it", {
		detail: "OnGameEvent_tagged_player_as_it(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nUserid of the tagging player"
	}],
	["OnGameEvent_take_armor", {
		detail: "OnGameEvent_take_armor(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\namount: int\ntotal: int\n```"
	}],
	["OnGameEvent_take_health", {
		detail: "OnGameEvent_take_health(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\namount: int\ntotal: int\n```"
	}],
	["OnGameEvent_team_info", {
		detail: "OnGameEvent_team_info(params: table) -> null",
		desc: "Info about team.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nteamid: int\n```\nUnique team id.\n```squirrelDoc\nteamname: string\n```\nTeam name eg \"Team Blue\""
	}],
	["OnGameEvent_team_leader_killed", {
		detail: "OnGameEvent_team_leader_killed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nkiller: int\n```\nIndex of the killer.\n```squirrelDoc\nvictim: int\n```\nIndex of the victim"
	}],
	["OnGameEvent_team_score", {
		detail: "OnGameEvent_team_score(params: table) -> null",
		desc: "Team score changed.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nteamid: int\n```\nTeam id.\n```squirrelDoc\nscore: int\n```\nTotal team score"
	}],
	["OnGameEvent_teamplay_alert", {
		detail: "OnGameEvent_teamplay_alert(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nalert_type: int\n```\nWhich alert type is this (scramble, etc)?"
	}],
	["OnGameEvent_teamplay_broadcast_audio", {
		detail: "OnGameEvent_teamplay_broadcast_audio(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nteam: int\n```\nWhich team should hear the broadcast. 0 will make everyone hear it.\n```squirrelDoc\nsound: string\n```\nSound to play.\n```squirrelDoc\nadditional_flags: int\n```\nAdditional sound flags to pass through to sound system.\n```squirrelDoc\nplayer: int\n```\nEntindex of the player source or -1"
	}],
	["OnGameEvent_teamplay_capture_blocked", {
		detail: "OnGameEvent_teamplay_capture_blocked(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ncp: int\n```\nIndex of the point that was blocked.\n```squirrelDoc\ncpname: string\n```\nName of the point.\n```squirrelDoc\nblocker: int\n```\nIndex of the player that blocked the cap.\n```squirrelDoc\nvictim: int\n```\nIndex of the player that died, causing the block"
	}],
	["OnGameEvent_teamplay_capture_broken", {
		detail: "OnGameEvent_teamplay_capture_broken(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ncp: int\ncpname: string\ntime_remaining: float\n```"
	}],
	["OnGameEvent_teamplay_flag_event", {
		detail: "OnGameEvent_teamplay_flag_event(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nPlayer this event involves.\n```squirrelDoc\ncarrier: int\n```\nThe carrier if needed.\n```squirrelDoc\neventtype: int\n```\nPick up, capture, defend, dropped.\n```squirrelDoc\nhome: int\n```\nWhether or not the flag was home (only set for TF_FLAGEVENT_PICKUP).\n```squirrelDoc\nteam: int\n```\nWhich team the flag beints to"
	}],
	["OnGameEvent_teamplay_game_over", {
		detail: "OnGameEvent_teamplay_game_over(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nreason: string\n```\nWhy the game is over ( timelimit, winlimit )"
	}],
	["OnGameEvent_teamplay_map_time_remaining", {
		detail: "OnGameEvent_teamplay_map_time_remaining(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nseconds: int\n```"
	}],
	["OnGameEvent_teamplay_overtime_begin", {
		detail: "OnGameEvent_teamplay_overtime_begin(params: table) -> null"
	}],
	["OnGameEvent_teamplay_overtime_end", {
		detail: "OnGameEvent_teamplay_overtime_end(params: table) -> null"
	}],
	["OnGameEvent_teamplay_point_captured", {
		detail: "OnGameEvent_teamplay_point_captured(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ncp: int\n```\nIndex of the point that was captured.\n```squirrelDoc\ncpname: string\n```\nName of the point.\n```squirrelDoc\nteam: int\n```\nWhich team capped.\n```squirrelDoc\ncappers: string\n```\nString where each character is a player index of someone that capped"
	}],
	["OnGameEvent_teamplay_point_locked", {
		detail: "OnGameEvent_teamplay_point_locked(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ncp: int\n```\nIndex of the point being captured.\n```squirrelDoc\ncpname: string\n```\nName of the point.\n```squirrelDoc\nteam: int\n```\nWhich team currently owns the point"
	}],
	["OnGameEvent_teamplay_point_startcapture", {
		detail: "OnGameEvent_teamplay_point_startcapture(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ncp: int\n```\nIndex of the point being captured.\n```squirrelDoc\ncpname: string\n```\nName of the point.\n```squirrelDoc\nteam: int\n```\nWhich team currently owns the point.\n```squirrelDoc\ncapteam: int\n```\nWhich team is capping.\n```squirrelDoc\ncappers: string\n```\nString where each character is a player index of someone capping.\n```squirrelDoc\ncaptime: float\n```\nTime between when this cap started and when the point last changed hands"
	}],
	["OnGameEvent_teamplay_point_unlocked", {
		detail: "OnGameEvent_teamplay_point_unlocked(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ncp: int\n```\nIndex of the point being captured.\n```squirrelDoc\ncpname: string\n```\nName of the point.\n```squirrelDoc\nteam: int\n```\nWhich team currently owns the point"
	}],
	["OnGameEvent_teamplay_pre_round_time_left", {
		detail: "OnGameEvent_teamplay_pre_round_time_left(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ntime: int\n```"
	}],
	["OnGameEvent_teamplay_ready_restart", {
		detail: "OnGameEvent_teamplay_ready_restart(params: table) -> null"
	}],
	["OnGameEvent_teamplay_restart_round", {
		detail: "OnGameEvent_teamplay_restart_round(params: table) -> null"
	}],
	["OnGameEvent_teamplay_round_active", {
		detail: "OnGameEvent_teamplay_round_active(params: table) -> null",
		desc: "Called when round is active, players can move"
	}],
	["OnGameEvent_teamplay_round_restart_seconds", {
		detail: "OnGameEvent_teamplay_round_restart_seconds(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nseconds: int\n```"
	}],
	["OnGameEvent_teamplay_round_selected", {
		detail: "OnGameEvent_teamplay_round_selected(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nround: string\n```\nName of the round selected"
	}],
	["OnGameEvent_teamplay_round_stalemate", {
		detail: "OnGameEvent_teamplay_round_stalemate(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nreason: int\n```\nWhy the stalemate is occuring"
	}],
	["OnGameEvent_teamplay_round_start", {
		detail: "OnGameEvent_teamplay_round_start(params: table) -> null",
		desc: "Round restart.\n\n---\nVariables of the `params` table:\n```squirrelDoc\nfull_reset: bool\n```\nIs this a full reset of the map"
	}],
	["OnGameEvent_teamplay_round_win", {
		detail: "OnGameEvent_teamplay_round_win(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nteam: int\n```\nWhich team won the round.\n```squirrelDoc\nwinreason: int\n```\nThe reason the team won.\n```squirrelDoc\nflagcaplimit: int\n```\nIf win reason was flag cap limit, the value of the flag cap limit.\n```squirrelDoc\nfull_round: int\n```\nWas this a full round or a mini-round.\n```squirrelDoc\nround_time: float\n```\nElapsed time of this round.\n```squirrelDoc\nlosing_team_num_caps: int\n```\nNumber of caps this round by losing team.\n```squirrelDoc\nwas_sudden_death: int\n```\nDid a team win this after entering sudden death"
	}],
	["OnGameEvent_teamplay_setup_finished", {
		detail: "OnGameEvent_teamplay_setup_finished(params: table) -> null"
	}],
	["OnGameEvent_teamplay_suddendeath_begin", {
		detail: "OnGameEvent_teamplay_suddendeath_begin(params: table) -> null"
	}],
	["OnGameEvent_teamplay_suddendeath_end", {
		detail: "OnGameEvent_teamplay_suddendeath_end(params: table) -> null"
	}],
	["OnGameEvent_teamplay_team_ready", {
		detail: "OnGameEvent_teamplay_team_ready(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nteam: int\n```\nWhich team is ready"
	}],
	["OnGameEvent_teamplay_teambalanced_player", {
		detail: "OnGameEvent_teamplay_teambalanced_player(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nplayer: int\n```\nEntindex of the player.\n```squirrelDoc\nteam: int\n```\nWhich team the player is being moved to"
	}],
	["OnGameEvent_teamplay_timer_flash", {
		detail: "OnGameEvent_teamplay_timer_flash(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ntime_remaining: int\n```\nHow many seconds until the round ends"
	}],
	["OnGameEvent_teamplay_timer_time_added", {
		detail: "OnGameEvent_teamplay_timer_time_added(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ntimer: int\n```\nEntindex of the timer.\n```squirrelDoc\nseconds_added: int\n```\nHow many seconds were added to the round timer"
	}],
	["OnGameEvent_teamplay_update_timer", {
		detail: "OnGameEvent_teamplay_update_timer(params: table) -> null"
	}],
	["OnGameEvent_teamplay_waiting_abouttoend", {
		detail: "OnGameEvent_teamplay_waiting_abouttoend(params: table) -> null"
	}],
	["OnGameEvent_teamplay_waiting_begins", {
		detail: "OnGameEvent_teamplay_waiting_begins(params: table) -> null"
	}],
	["OnGameEvent_teamplay_waiting_ends", {
		detail: "OnGameEvent_teamplay_waiting_ends(params: table) -> null"
	}],
	["OnGameEvent_teamplay_win_panel", {
		detail: "OnGameEvent_teamplay_win_panel(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\npanel_style: int\n```\nFor client to determine layout.\n```squirrelDoc\nwinning_team: int\nwinreason: int\n```\nThe reason the team won.\n```squirrelDoc\ncappers: string\n```\nString where each character is a player index of someone that capped.\n```squirrelDoc\nflagcaplimit: int\n```\nIf win reason was flag cap limit, the value of the flag cap limit.\n```squirrelDoc\nblue_score: int\n```\nRed team score.\n```squirrelDoc\nred_score: int\n```\nBlue team score.\n```squirrelDoc\nblue_score_prev: int\n```\nPrevious red team score.\n```squirrelDoc\nred_score_prev: int\n```\nPrevious blue team score.\n```squirrelDoc\nround_complete: int\n```\nIs this a complete round, or the end of a mini-round.\n```squirrelDoc\nrounds_remaining: int\n```\nNumber of rounds remaining for wining team, if mini-round.\n```squirrelDoc\nplayer_1: int\nplayer_1_points: int\nplayer_2: int\nplayer_2_points: int\nplayer_3: int\nplayer_3_points: int\nkillstreak_player_1: int\nkillstreak_player_1_count: int\ngame_over: int\n```"
	}],
	["OnGameEvent_teams_changed", {
		detail: "OnGameEvent_teams_changed(params: table) -> null"
	}],
	["OnGameEvent_tf_game_over", {
		detail: "OnGameEvent_tf_game_over(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nreason: string\n```\nWhy the game is over ( timelimit, winlimit )"
	}],
	["OnGameEvent_tf_map_time_remaining", {
		detail: "OnGameEvent_tf_map_time_remaining(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nseconds: int\n```"
	}],
	["OnGameEvent_throwable_hit", {
		detail: "OnGameEvent_throwable_hit(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID who died.\n```squirrelDoc\nvictim_entindex: int\ninflictor_entindex: int\n```\nEnt index of inflictor (a sentry, for example).\n```squirrelDoc\nattacker: int\n```\nUser ID who killed.\n```squirrelDoc\nweapon: string\n```\nWeapon name killer used.\n```squirrelDoc\nweaponid: int\n```\nID of weapon killed used.\n```squirrelDoc\ndamagebits: int\n```\nBits of type of damage.\n```squirrelDoc\ncustomkill: int\n```\nType of custom kill.\n```squirrelDoc\nassister: int\n```\nUser ID of assister.\n```squirrelDoc\nweapon_logclassname: string\n```\nWeapon name that should be printed on the log.\n```squirrelDoc\nstun_flags: int\n```\nVictim's stun flags at the moment of death.\n```squirrelDoc\ndeath_flags: int\n```\nSee [death flags](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#TF_DEATH).\n```squirrelDoc\nsilent_kill: bool\nassister_fallback: string\n```\nContains a string to use if \"assister\" is -1.\n```squirrelDoc\ntotalhits: int\n```\nNumber of hits his player has done"
	}],
	["OnGameEvent_tournament_enablecountdown", {
		detail: "OnGameEvent_tournament_enablecountdown(params: table) -> null"
	}],
	["OnGameEvent_tournament_stateupdate", {
		detail: "OnGameEvent_tournament_stateupdate(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nuserid: int\n```\nUser ID on server.\n```squirrelDoc\nnamechange: bool\nreadystate: int\nnewname: string\n```\nPlayers new name"
	}],
	["OnGameEvent_training_complete", {
		detail: "OnGameEvent_training_complete(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nnext_map: string\n```\nNext map (if any).\n```squirrelDoc\nmap: string\n```\nThe name of the map this screen is on..\n```squirrelDoc\ntext: string\n```\nText to show"
	}],
	["OnGameEvent_update_status_item", {
		detail: "OnGameEvent_update_status_item(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nindex: int\nobject: int\n```"
	}],
	["OnGameEvent_upgrades_file_changed", {
		detail: "OnGameEvent_upgrades_file_changed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\npath: string\n```"
	}],
	["OnGameEvent_user_data_downloaded", {
		detail: "OnGameEvent_user_data_downloaded(params: table) -> null",
		desc: "Fired when achievements/stats are downloaded from Steam or XBox Live"
	}],
	["OnGameEvent_vote_cast", {
		detail: "OnGameEvent_vote_cast(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nvote_option: int\n```\nWhich option the player voted on.\n```squirrelDoc\nteam: int\nentityid: int\n```\nEntity id of the voter.\n```squirrelDoc\nvoteidx: int\n```"
	}],
	["OnGameEvent_vote_changed", {
		detail: "OnGameEvent_vote_changed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nvote_option1: int\nvote_option2: int\nvote_option3: int\nvote_option4: int\nvote_option5: int\npotentialVotes: int\nvoteidx: int\n```"
	}],
	["OnGameEvent_vote_ended", {
		detail: "OnGameEvent_vote_ended(params: table) -> null"
	}],
	["OnGameEvent_vote_failed", {
		detail: "OnGameEvent_vote_failed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nteam: int\nvoteidx: int\n```"
	}],
	["OnGameEvent_vote_maps_changed", {
		detail: "OnGameEvent_vote_maps_changed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ntype: int\ndefindex: int\ncreated: bool\ndeleted: bool\nerase_history: bool\n```"
	}],
	["OnGameEvent_vote_options", {
		detail: "OnGameEvent_vote_options(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ncount: int\n```\nNumber of options — up to MAX_VOTE_OPTIONS.\n```squirrelDoc\noption1: string\noption2: string\noption3: string\noption4: string\noption5: string\nvoteidx: int\n```"
	}],
	["OnGameEvent_vote_passed", {
		detail: "OnGameEvent_vote_passed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ndetails: string\nparam1: string\nteam: int\nvoteidx: int\n```"
	}],
	["OnGameEvent_vote_started", {
		detail: "OnGameEvent_vote_started(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nissue: string\nparam1: string\nteam: int\ninitiator: int\n```\nEntity id of the player who initiated the vote.\n```squirrelDoc\nvoteidx: int\n```"
	}],
	["OnGameEvent_weapon_equipped", {
		detail: "OnGameEvent_weapon_equipped(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\nclass: string\nentindex: int\n```"
	}],
	["OnGameEvent_winlimit_changed", {
		detail: "OnGameEvent_winlimit_changed(params: table) -> null",
		desc: "Variables of the `params` table:\n```squirrelDoc\ndelay: float\n```"
	}]
]);

export const builtInConstants: Docs = new Map([
	["_charsize_", {
		detail: "_charsize_: int",
		desc: "Value: `1`"
	}],
	["_floatsize_", {
		detail: "_floatsize_: int",
		desc: "Value: `4`"
	}],
	["_intsize_", {
		detail: "_intsize_: int",
		desc: "Value:\n\n32-bit: `4`\n\n64-bit: `8`"
	}],
	["_version_", {
		detail: "_version_: string",
		desc: "Value: \"Squirrel 3.2 stable\""
	}],
	["_versionnumber_", {
		detail: "_versionnumber_: integer",
		desc: "Value: `320`"
	}],
	["RAND_MAX", {
		detail: "RAND_MAX: integer",
		desc: "Value:\n\nWindows: `32768`\n\nLinux: `2147483647`"
	}],
	["PI", {
		detail: "PI: float",
		desc: "Value: `3.14159`"
	}]
]);

export const builtInVariables: Docs = new Map([
	["Convars", {
		detail: "Convars: Convars",
		desc: "Provides an interface to read and change the values of console variables."
	}],
	["Entities", {
		detail: "Entities: CEntities",
		desc: "Provides access to currently spawned entities."
	}],
	["EntityOutputs", {
		detail: "EntityOutputs: CScriptEntityOutputs",
		desc: "Provides access to currently spawned entities."
	}],
	["NavMesh", {
		detail: "NavMesh: CNavMesh",
		desc: "Provides access to the maps NavMesh and NavAreas."
	}],
	["NetProps", {
		detail: "NetProps: CNetPropManager",
		desc: "Allows reading and updating the network properties of an entity."
	}],
	["PlayerVoiceListener", {
		detail: "PlayerVoiceListener: CPlayerVoiceListener",
		desc: "Tracks if any player is using voice and for how long."
	}],
	["__FILE__", {
		detail: "__FILE__: string",
		desc: "File name of the currently executing script."
	}],
	["__LINE__", {
		detail: "__LINE__: int",
		desc: "Line number of the currently executing code."
	}],
	["Constants", {
		detail: "Constants: table",
		desc: "Enumerations for various function arguments or netprops."
	}],
	["Documentation", {
		detail: "Documentation: table",
		desc: "Contains the printed strings from the script_help command."
	}],
	["GameEventCallbacks", {
		detail: "GameEventCallbacks: table",
		desc: "Table of registered game event callbacks."
	}],
	["print_indent", {
		detail: "print_indent: int",
		desc: "Value: `0`\n\nSpaces to indent prints by, except ones from realPrint."
	}],
	["_PublishedHelp", {
		detail: "_PublishedHelp: table",
		desc: "NONE"
	}],



	["ScriptEventCallbacks", {
		detail: "ScriptEventCallbacks: table",
		desc: "Table of registered script event callbacks."
	}],
	["ScriptHookCallbacks", {
		detail: "ScriptHookCallbacks: table",
		desc: "Table of registered script hook callbacks."
	}],
	["ScriptDebugDefaultWatchColor", {
		detail: "ScriptDebugDefaultWatchColor: array",
		desc: "Value: [0, 192, 0]."
	}],
	["ScriptDebugDrawTextEnabled", {
		detail: "ScriptDebugDrawTextEnabled: bool",
		desc: "Value: `true`"
	}],
	["criptDebugDrawWatchesEnabled", {
		detail: "ScriptDebugDrawWatchesEnabled: bool",
		desc: "Value: `true`"
	}],
	["ScriptDebugInDebugDraw", {
		detail: "ScriptDebugInDebugDraw: bool",
		desc: "Value: `false`"
	}],
	["ScriptDebugText", {
		detail: "ScriptDebugText: array",
		desc: "Value: `NONE`"
	}],
	["ScriptDebugTextIndent", {
		detail: "ScriptDebugTextIndent: integer",
		desc: "Value: `0`"
	}],
	["ScriptDebugTextFilters", {
		detail: "ScriptDebugTextFilters: table",
		desc: "Value: `NONE`"
	}],
	["ScriptDebugTraces", {
		detail: "ScriptDebugTraces: table",
		desc: "Value: `NONE`"
	}],
	["ScriptDebugTraceAllOn", {
		detail: "ScriptDebugTraceAllOn: bool",
		desc: "Value: `false`"
	}],
	["ScriptDebugWatches", {
		detail: "ScriptDebugWatches: array",
		desc: "Value: `NONE`"
	}],

	["self", {
		detail: "self: handle",
		desc: "Default scope variable which indicates what entity this scope belongs to."
	}],
	["__vname", {
		detail: "__vname: string",
		desc: "Default scope variable with it's own script ID."
	}],
	["__vrefs", {
		detail: "__vrefs: int"
	}]
]);

export const instancesMethods: InstanceDocs = new Map([
	["Convars", new Map([
		["GetBool", {
			detail: "Convars.GetBool(name: string) -> bool",
			desc: "Returns the convar as a bool. May return null if no such convar.",
			0: StringParam.CONVAR
		}],
		["GetClientConvarValue", {
			detail: "Convars.GetClientConvarValue(name: string, entindex: int) -> string",
			desc: "Returns the convar value for the entindex as a string. Only works on client convars with the FCVAR_USERINFO flag.",
			1: StringParam.CLIENT_CONVAR
		}],
		["GetInt", {
			detail: "Convars.GetInt(name: string) -> int",
			desc: "Returns the convar as an int. May return null if no such convar.",
			0: StringParam.CONVAR
		}],
		["GetStr", {
			detail: "Convars.GetStr(name: string) -> string",
			desc: "Returns the convar as a string. May return null if no such convar. Returns `hunter2` if a protected convar is accessed.",
			0: StringParam.CONVAR
		}],
		["GetFloat", {
			detail: "Convars.GetFloat(name: string) -> float",
			desc: "Returns the convar as a float. May return null if no such convar.",
			0: StringParam.CONVAR
		}],
		["IsConVarOnAllowList", {
			detail: "Convars.IsConVarOnAllowList(name: string) -> bool",
			desc: "Checks if the convar is allowed to be used and is in cfg/vscript_convar_allowlist.txt. Please be nice with this and use it for *compatibility* if you need check support and NOT to force server owners to allow hostname to be set... or else this will simply lie and return true in future. ;-) You have been warned!",
			0: StringParam.CONVAR
		}],
		["SetValue", {
			detail: "Convars.SetValue(name: string, value: any) -> null",
			desc: "Sets the value of the convar. The convar must be in cfg/vscript_convar_allowlist.txt to be set. Convars marked as cheat-only can be set even if *sv_cheats* is off. Convars marked as dev-only (i.e. not visible in console) can also be set. Supported types are bool, int, float, string. The original value of the convar is saved and is reset on map change, in other words convar changes will not persist across maps.",
			0: StringParam.CONVAR
		}]
	])],

	["Entities", new Map([
		["CreateByClassname", {
			detail: "CEntities.CreateByClassname(classname: string) -> handle",
			desc: "Creates an entity by classname.",
			0: StringParam.CLASSNAME
		}],
		["DispatchSpawn", {
			detail: "CEntities.DispatchSpawn(entity: handle) -> null",
			desc: "Dispatches spawn of an entity! Use this on entities created via `CreateByClassname` to actually spawn them into the world."
		}],
		["FindByClassname", {
			detail: "CEntities.FindByClassname(previous: handle, classname: string) -> handle",
			desc: "Find entities by the string of their `classname` keyvalue. Pass `null` value to start an iteration, or reference to a previously found entity to continue a search.",
			1: StringParam.CLASSNAME
		}],
		["FindByClassnameNearest", {
			detail: "CEntities.FindByClassnameNearest(classname: string, center: Vector, radius: float) -> handle",
			desc: "Find entities by classname nearest to a point within a radius.",
			0: StringParam.CLASSNAME
		}],
		["FindByClassnameWithin", {
			detail: "CEntities.FindByClassnameWithin(previous: handle, classname: string, center: Vector, radius: float) -> handle",
			desc: "Find entities by classname within a radius. Pass `null` to start an iteration, or reference to a previously found entity to continue a search.",
			1: StringParam.CLASSNAME
		}],
		["FindByModel", {
			detail: "CEntities.FindByModel(previous: handle, model_name: string) -> handle",
			desc: "Find entities by the string of their `model` keyvalue. Pass `null` to start an iteration, or reference to a previously found entity to continue a search.",
			1: StringParam.MODEL
		}],
		["FindByName", {
			detail: "CEntities.FindByName(previous: handle, targetname: string) -> handle",
			desc: "Find entities by the string of their",
			1: StringParam.TARGETNAME
		}],
		["FindByNameNearest", {
			detail: "CEntities.FindByNameNearest(targetname: string, center: Vector, radius: float) -> handle",
			desc: "Find entities by targetname nearest to a point within a radius.",
			0: StringParam.TARGETNAME
		}],
		["FindByNameWithin", {
			detail: "CEntities.FindByNameWithin(previous: handle, targetname: string, center: Vector, radius: float) -> handle",
			desc: "Find entities by targetname within a radius. Pass `null` to start an iteration, or reference to a previously found entity to continue a search.",
			1: StringParam.TARGETNAME
		}],
		["FindByTarget", {
			detail: "CEntities.FindByTarget(previous: handle, target: string) -> handle",
			desc: "Find entities by the string of their `target` keyvalue."
		}],
		["FindInSphere", {
			detail: "CEntities.FindInSphere(previous: handle, center: Vector, radius: float) -> handle",
			desc: "Find entities within a radius. Pass `null` to start an iteration, or reference to a previously found entity to continue a search."
		}],
		["First", {
			detail: "CEntities.First() -> handle",
			desc: "Begin an iteration over the list of entities. The first entity is always [worldspawn](https://developer.valvesoftware.com/wiki/worldspawn)."
		}],
		["Next", {
			detail: "CEntities.Next(previous: handle) -> handle",
			desc: "At the given reference of a previously-found entity, returns the next one after it in the list."
		}]
	])],

	["EntityOutputs", new Map([
		["AddOutput", {
			detail: "CScriptEntityOutputs.AddOutput(entity: handle, output_name: string, targetname: string, input_name: string, parameter: string, delay: float, times_to_fire: int) -> null",
			desc: "Adds a new output to the entity.",
			1: StringParam.OUTPUT
		}],
		["GetNumElements", {
			detail: "CScriptEntityOutputs.GetNumElements(entity: handle, output_name: string) -> int",
			desc: "Returns the number of array elements.",
			1: StringParam.OUTPUT
		}],
		["GetOutputTable", {
			detail: "CScriptEntityOutputs.GetOutputTable(entity: handle, output_name: string, table, array_element: int) -> null",
			desc: "Fills the passed table with output information.",
			1: StringParam.OUTPUT
		}],
		["HasAction", {
			detail: "CScriptEntityOutputs.HasAction(entity: handle, output_name: string) -> bool",
			desc: "Returns true if an action exists for the output.",
			1: StringParam.OUTPUT
		}],
		["HasOutput", {
			detail: "CScriptEntityOutputs.HasOutput(entity: handle, output_name: string) -> bool",
			desc: "Returns true if the output exists.",
			1: StringParam.OUTPUT
		}],
		["RemoveOutput", {
			detail: "CScriptEntityOutputs.RemoveOutput(entity: handle, output_name: string, targetname: string, input_name: string, parameter: string) -> null",
			desc: "Removes an output from the entity.",
			1: StringParam.OUTPUT
		}]
	])],

	["NavMesh", new Map([
		["FindNavAreaAlongRay", {
			detail: "CNavMesh.FindNavAreaAlongRay(start_pos: Vector, end_pos: Vector, ignore_area: handle) -> handle",
			desc: "Get nav area from ray."
		}],
		["GetAllAreas", {
			detail: "CNavMesh.GetAllAreas(result: table) -> null",
			desc: "Fills a passed in table of all nav areas."
		}],
		["GetAreasWithAttributes", {
			detail: "CNavMesh.GetAreasWithAttributes(bits: FNavAttributeType, result: table) -> null",
			desc: "Fills a passed in table of all nav areas that have the specified attributes.\n\nSee [FNavAttributeType](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#FNavAttributeType)."
		}],
		["GetNavArea", {
			detail: "CNavMesh.GetNavArea(origin: Vector, beneath: float) -> handle",
			desc: "Given a position in the world, return the nav area that is closest to or below that height."
		}],
		["GetNavAreaByID", {
			detail: "CNavMesh.GetNavAreaByID(area_id: int) -> handle",
			desc: "Get nav area by ID."
		}],
		["GetNavAreaCount", {
			detail: "CNavMesh.GetNavAreaCount() -> int",
			desc: "Return total number of nav areas."
		}],
		["GetNavAreasFromBuildPath", {
			detail: "CNavMesh.GetNavAreasFromBuildPath(start_area: handle, end_area: handle, goal_pos: Vector, max_path_length: float, team: ETFTeam, ignore_nav_blockers: bool, result: table) -> bool",
			desc: "Fills the table with areas from a path. Returns whether a path was found. If `end_area` is NULL, will compute a path as close as possible to `goal_pos`.\n\nSee [ETFTeam](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFTeam)."
		}],
		["GetNavAreasInRadius", {
			detail: "CNavMesh.GetNavAreasInRadius(origin: Vector, radius: float, result: table) -> null",
			desc: "Fills a passed in table of nav areas within radius."
		}],
		["GetNavAreasOverlappingEntityExtent", {
			detail: "CNavMesh.GetNavAreasOverlappingEntityExtent(entity: handle, result: table) -> null",
			desc: "Fills passed in table with areas overlapping entity's extent."
		}],
		["GetNearestNavArea", {
			detail: "CNavMesh.GetNearestNavArea(origin: Vector, max_distance: float, check_los: bool, check_ground: bool) -> handle",
			desc: "Given a position in the world, return the nav area that is closest to or below that height."
		}],
		["GetObstructingEntities", {
			detail: "CNavMesh.GetObstructingEntities(result: table) -> null",
			desc: "Fills a passed in table of all obstructing entities."
		}],
		["NavAreaBuildPath", {
			detail: "CNavMesh.NavAreaBuildPath(start_area: handle, end_erea: handle, goal_pos: Vector, max_path_length: float, team: ETFTeam, ignore_nav_blockers: bool) -> bool",
			desc: "Returns true if a path exists.\n\nSee [ETFTeam](https://developer.valvesoftware.com/wiki/Team_Fortress_2/Scripting/Script_Functions/Constants#ETFTeam)."
		}],
		["NavAreaTravelDistance", {
			detail: "CNavMesh.NavAreaTravelDistance(start_area: handle, end_area: handle, max_path_length: float) -> float",
			desc: "Compute distance between two areas. Return -1 if can't reach `end_area` from `start_area`."
		}],
		["RegisterAvoidanceObstacle", {
			detail: "CNavMesh.RegisterAvoidanceObstacle(entity: handle) -> null",
			desc: "Registers avoidance obstacle."
		}],
		["UnregisterAvoidanceObstacle", {
			detail: "CNavMesh.UnregisterAvoidanceObstacle(entity: handle) -> null",
			desc: "Unregisters avoidance obstacle."
		}]
	])],
	["NetProps", new Map([
		["GetPropArraySize", {
			detail: "CNetPropManager.GetPropArraySize(entity: handle, property_name: string) -> int",
			desc: "Returns the size of an netprop array, or -1.",
			1: StringParam.ARRAY_PROPERTY
		}],
		["GetPropEntity", {
			detail: "CNetPropManager.GetPropEntity(entity: handle, property_name: string) -> handle",
			desc: "Reads an EHANDLE-valued netprop (21 bit integer). Returns the script handle of the entity.",
			1: StringParam.ENTITY_PROPERTY
		}],
		["GetPropEntityArray", {
			detail: "CNetPropManager.GetPropEntityArray(entity: handle, property_name: string, array_element: int) -> handle",
			desc: "Reads an EHANDLE-valued netprop (21 bit integer) from an array. Returns the script handle of the entity.",
			1: StringParam.ENTITY_ARRAY_PROPERTY
		}],
		["GetPropBool", {
			detail: "CNetPropManager.GetPropBool(entity: handle, property_name: string) -> bool",
			desc: "Reads a boolean-valued netprop.",
			1: StringParam.BOOL_PROPERTY
		}],
		["GetPropBoolArray", {
			detail: "CNetPropManager.GetPropBoolArray(entity: handle, property_name: string, array_element: int) -> bool",
			desc: "Reads a boolean-valued netprop from an array.",
			1: StringParam.BOOL_ARRAY_PROPERTY
		}],
		["GetPropFloat", {
			detail: "CNetPropManager.GetPropFloat(entity: handle, property_name: string) -> float",
			desc: "Reads a float-valued netprop.",
			1: StringParam.FLOAT_PROPERTY
		}],
		["GetPropFloatArray", {
			detail: "CNetPropManager.GetPropFloatArray(entity: handle, property_name: string, array_element: int) -> float",
			desc: "Reads a float-valued netprop from an array.",
			1: StringParam.FLOAT_ARRAY_PROPERTY
		}],
		["GetPropInfo", {
			detail: "CNetPropManager.GetPropInfo(entity: handle, property_name: string, array_element: int, result: table) -> bool",
			desc: "Fills in a passed table with property info for the provided entity.",
			1: StringParam.PROPERTY
		}],
		["GetPropInt", {
			detail: "CNetPropManager.GetPropInt(entity: handle, property_name: string) -> int",
			desc: "Reads an integer-valued netprop.",
			1: StringParam.INT_PROPERTY
		}],
		["GetPropIntArray", {
			detail: "CNetPropManager.GetPropIntArray(entity: handle, property_name: string, array_element: int) -> int",
			desc: "Reads an integer-valued netprop from an array.",
			1: StringParam.INT_ARRAY_PROPERTY
		}],
		["GetPropString", {
			detail: "CNetPropManager.GetPropString(entity: handle, property_name: string) -> string",
			desc: "Reads an string-valued netprop.",
			1: StringParam.STRING_PROPERTY
		}],
		["GetPropStringArray", {
			detail: "CNetPropManager.GetPropStringArray(entity: handle, property_name: string, array_element: int) -> string",
			desc: "Reads an string-valued netprop from an array.",
			1: StringParam.STRING_ARRAY_PROPERTY
		}],
		["GetPropType", {
			detail: "CNetPropManager.GetPropType(entity: handle, property_name: string) -> string",
			desc: "Returns the name of the netprop type as a string.",
			1: StringParam.PROPERTY
		}],
		["GetPropVector", {
			detail: "CNetPropManager.GetPropVector(entity: handle, property_name: string) -> Vector",
			desc: "Reads a 3D vector-valued netprop.",
			1: StringParam.VECTOR_PROPERTY
		}],
		["GetPropVectorArray", {
			detail: "CNetPropManager.GetPropVectorArray(entity: handle, property_name: string, array_element: int) -> Vector",
			desc: "Reads a 3D vector-valued netprop from an array.",
			1: StringParam.VECTOR_ARRAY_PROPERTY
		}],
		["GetTable", {
			detail: "CNetPropManager.GetTable(entity: handle, prop_type: int, result: table) -> null",
			desc: "Fills in a passed table with all props of a specified type for the provided entity (set prop_type to 0 for SendTable or 1 for DataMap)."
		}],
		["HasProp", {
			detail: "CNetPropManager.HasProp(entity: handle, property_name: string) -> bool",
			desc: "Checks if a netprop exists.",
			1: StringParam.PROPERTY
		}],
		["SetPropBool", {
			detail: "CNetPropManager.SetPropBool(entity: handle, property_name: string, value: bool) -> null",
			desc: "Sets a netprop to the specified boolean.",
			1: StringParam.BOOL_PROPERTY
		}],
		["SetPropBoolArray", {
			detail: "CNetPropManager.SetPropBoolArray(entity: handle, property_name: string, value: bool, array_element: int) -> null",
			desc: "Sets a netprop from an array to the specified boolean.",
			1: StringParam.BOOL_ARRAY_PROPERTY
		}],
		["SetPropEntity", {
			detail: "CNetPropManager.SetPropEntity(entity: handle, property_name: string, value: handle) -> null",
			desc: "Sets an EHANDLE-valued netprop (21 bit integer) to reference the specified entity.",
			1: StringParam.ENTITY_PROPERTY
		}],
		["SetPropEntityArray", {
			detail: "CNetPropManager.SetPropEntityArray(entity: handle, property_name: string, value: handle, array_element: int) -> null",
			desc: "Sets an EHANDLE-valued netprop (21 bit integer) from an array to reference the specified entity.",
			1: StringParam.ENTITY_ARRAY_PROPERTY
		}],
		["SetPropFloat", {
			detail: "CNetPropManager.SetPropFloat(entity: handle, property_name: string, value: float) -> null",
			desc: "Sets a netprop to the specified float.",
			1: StringParam.FLOAT_PROPERTY
		}],
		["SetPropFloatArray", {
			detail: "CNetPropManager.SetPropFloatArray(entity: handle, property_name: string, value: float, array_element: int) -> null",
			desc: "Sets a netprop from an array to the specified float.",
			1: StringParam.FLOAT_ARRAY_PROPERTY
		}],
		["SetPropInt", {
			detail: "CNetPropManager.SetPropInt(entity: handle, property_name: string, value: int) -> null",
			desc: "Sets a netprop to the specified integer.",
			1: StringParam.INT_PROPERTY
		}],
		["SetPropIntArray", {
			detail: "CNetPropManager.SetPropIntArray(entity: handle, property_name: string, value: int, array_element: int) -> null",
			desc: "Sets a netprop from an array to the specified integer.",
			1: StringParam.INT_ARRAY_PROPERTY
		}],
		["SetPropString", {
			detail: "CNetPropManager.SetPropString(entity: handle, property_name: string, value: string) -> null",
			desc: "Sets a netprop to the specified string.",
			1: StringParam.STRING_PROPERTY
		}],
		["SetPropStringArray", {
			detail: "CNetPropManager.SetPropStringArray(entity: handle, property_name: string, value: string, array_element: int) -> null",
			desc: "Sets a netprop from an array to the specified string.",
			1: StringParam.STRING_ARRAY_PROPERTY
		}],
		["SetPropVector", {
			detail: "CNetPropManager.SetPropVector(entity: handle, property_name: string, value: Vector) -> null",
			desc: "Sets a netprop to the specified vector.",
			1: StringParam.VECTOR_PROPERTY
		}],
		["SetPropVectorArray", {
			detail: "CNetPropManager.SetPropVectorArray(entity: handle, property_name: string, value: Vector, array_element: int) -> null",
			desc: "Sets a netprop from an array to the specified vector.",
			1: StringParam.VECTOR_ARRAY_PROPERTY
		}]
	])],
	["PlayerVoiceListener", new Map([
		["GetPlayerSpeechDuration", {
			detail: "CPlayerVoiceListener.GetPlayerSpeechDuration(player_index: int) -> float",
			desc: "Returns the number of seconds the player has been continuously speaking."
		}],
		["IsPlayerSpeaking", {
			detail: "CPlayerVoiceListener.IsPlayerSpeaking(player_index: int) -> bool",
			desc: "Returns whether the player specified is speaking."
		}]
	])]
]);

export const instancesVariables: InstanceDocs = new Map([
	["Constants", new Map([
		["EBotType", {
			detail: "EBotType: enum"
		}],
		["ECollisionGroup", {
			detail: "ECollisionGroup: enum"
		}],
		["ECritType", {
			detail: "ECritType: enum"
		}],
		["EHitGroup", {
			detail: "EHitGroup: enum"
		}],
		["EHoliday", {
			detail: "EHoliday: enum"
		}],
		["EHudNotify", {
			detail: "EHudNotify: enum"
		}],
		["EMoveCollide", {
			detail: "EMoveCollide: enum"
		}],
		["EMoveType", {
			detail: "EMoveType: enum"
		}],
		["ENavCornerType", {
			detail: "ENavCornerType: enum"
		}],
		["ENavDirType", {
			detail: "ENavDirType: enum"
		}],
		["ENavRelativeDirType", {
			detail: "ENavRelativeDirType: enum"
		}],
		["ENavTraverseType", {
			detail: "ENavTraverseType: enum"
		}],
		["ERenderFx", {
			detail: "ERenderFx: enum"
		}],
		["ERenderMode", {
			detail: "ERenderMode: enum"
		}],
		["ERoundState", {
			detail: "ERoundState: enum"
		}],
		["EScriptRecipientFilter", {
			detail: "EScriptRecipientFilter: enum"
		}],
		["ESolidType", {
			detail: "ESolidType: enum"
		}],
		["ESpectatorMode", {
			detail: "ESpectatorMode: enum"
		}],
		["EStopwatchState", {
			detail: "EStopwatchState: enum"
		}],
		["ETFBotDifficultyType", {
			detail: "ETFBotDifficultyType: enum"
		}],
		["ETFClass", {
			detail: "ETFClass: enum"
		}],
		["ETFCond", {
			detail: "ETFCond: enum"
		}],
		["ETFDmgCustom", {
			detail: "ETFDmgCustom: enum"
		}],
		["ETFTeam", {
			detail: "ETFTeam: enum"
		}],
		["Math", {
			detail: "Math: enum"
		}],
		["Server", {
			detail: "Server: enum"
		}],
		["FButtons", {
			detail: "FButtons: enum"
		}],
		["FContents", {
			detail: "FContents: enum"
		}],
		["FDmgType", {
			detail: "FDmgType: enum"
		}],
		["FEntityEffects", {
			detail: "FEntityEffects: enum"
		}],
		["FEntityEFlags", {
			detail: "FEntityEFlags: enum"
		}],
		["FHideHUD", {
			detail: "FHideHUD: enum"
		}],
		["FNavAttributeType", {
			detail: "FNavAttributeType: enum"
		}],
		["FPlayer", {
			detail: "FPlayer: enum"
		}],
		["FSolid", {
			detail: "FSolid: enum"
		}],
		["FSurf", {
			detail: "FSurf: enum"
		}],
		["FTaunts", {
			detail: "FTaunts: enum"
		}],
		["FTFBotAttributeType", {
			detail: "FTFBotAttributeType: enum"
		}],
		["FTFNavAttributeType", {
			detail: "FTFNavAttributeType: enum"
		}]
	])],
	["EBotType", new Map([
		["TF_BOT_TYPE", {
			detail: "TF_BOT_TYPE: int",
			desc: "Value: `1337`"
		}]
	])],
	["ECollisionGroup", new Map([
		["COLLISION_GROUP_NONE", {
			detail: "COLLISION_GROUP_NONE: int",
			desc: "Value: `0`"
		}],
		["COLLISION_GROUP_DEBRIS", {
			detail: "COLLISION_GROUP_DEBRIS: int",
			desc: "Value: `1`"
		}],
		["COLLISION_GROUP_DEBRIS_TRIGGER", {
			detail: "COLLISION_GROUP_DEBRIS_TRIGGER: int",
			desc: "Value: `2`"
		}],
		["COLLISION_GROUP_INTERACTIVE_DEBRIS", {
			detail: "COLLISION_GROUP_INTERACTIVE_DEBRIS: int",
			desc: "Value: `3`"
		}],
		["COLLISION_GROUP_INTERACTIVE", {
			detail: "COLLISION_GROUP_INTERACTIVE: int",
			desc: "Value: `4`"
		}],
		["COLLISION_GROUP_PLAYER", {
			detail: "COLLISION_GROUP_PLAYER: int",
			desc: "Value: `5`"
		}],
		["COLLISION_GROUP_BREAKABLE_GLASS", {
			detail: "COLLISION_GROUP_BREAKABLE_GLASS: int",
			desc: "Value: `6`"
		}],
		["COLLISION_GROUP_VEHICLE", {
			detail: "COLLISION_GROUP_VEHICLE: int",
			desc: "Value: `7`"
		}],
		["COLLISION_GROUP_PLAYER_MOVEMENT", {
			detail: "COLLISION_GROUP_PLAYER_MOVEMENT: int",
			desc: "Value: `8`"
		}],
		["COLLISION_GROUP_NPC", {
			detail: "COLLISION_GROUP_NPC: int",
			desc: "Value: `9`"
		}],
		["COLLISION_GROUP_IN_VEHICLE", {
			detail: "COLLISION_GROUP_IN_VEHICLE: int",
			desc: "Value: `10`"
		}],
		["COLLISION_GROUP_WEAPON", {
			detail: "COLLISION_GROUP_WEAPON: int",
			desc: "Value: `11`"
		}],
		["COLLISION_GROUP_VEHICLE_CLIP", {
			detail: "COLLISION_GROUP_VEHICLE_CLIP: int",
			desc: "Value: `12`"
		}],
		["COLLISION_GROUP_PROJECTILE", {
			detail: "COLLISION_GROUP_PROJECTILE: int",
			desc: "Value: `13`"
		}],
		["COLLISION_GROUP_DOOR_BLOCKER", {
			detail: "COLLISION_GROUP_DOOR_BLOCKER: int",
			desc: "Value: `14`"
		}],
		["COLLISION_GROUP_PASSABLE_DOOR", {
			detail: "COLLISION_GROUP_PASSABLE_DOOR: int",
			desc: "Value: `15`"
		}],
		["COLLISION_GROUP_DISSOLVING", {
			detail: "COLLISION_GROUP_DISSOLVING: int",
			desc: "Value: `16`"
		}],
		["COLLISION_GROUP_PUSHAWAY", {
			detail: "COLLISION_GROUP_PUSHAWAY: int",
			desc: "Value: `17`"
		}],
		["COLLISION_GROUP_NPC_ACTOR", {
			detail: "COLLISION_GROUP_NPC_ACTOR: int",
			desc: "Value: `18`"
		}],
		["COLLISION_GROUP_NPC_SCRIPTED", {
			detail: "COLLISION_GROUP_NPC_SCRIPTED: int",
			desc: "Value: `19`"
		}],
		["LAST_SHARED_COLLISION_GROUP", {
			detail: "LAST_SHARED_COLLISION_GROUP: int",
			desc: "Value: `20`"
		}]
	])],
	["ECritType", new Map([
		["CRIT_NONE", {
			detail: "CRIT_NONE: int",
			desc: "Value: `0`"
		}],
		["CRIT_MINI", {
			detail: "CRIT_MINI: int",
			desc: "Value: `1`"
		}],
		["CRIT_FULL", {
			detail: "CRIT_FULL: int",
			desc: "Value: `2`"
		}]
	])],
	["EHitGroup", new Map([
		["HITGROUP_GENERIC", {
			detail: "HITGROUP_GENERIC: int",
			desc: "Value: `0`\n\nBug: This supposed to be `0` instead of the `null`"
		}],
		["HITGROUP_HEAD", {
			detail: "HITGROUP_HEAD: int",
			desc: "Value: `1`"
		}],
		["HITGROUP_CHEST", {
			detail: "HITGROUP_CHEST: int",
			desc: "Value: `2`"
		}],
		["HITGROUP_STOMACH", {
			detail: "HITGROUP_STOMACH: int",
			desc: "Value: `3`"
		}],
		["HITGROUP_LEFTARM", {
			detail: "HITGROUP_LEFTARM: int",
			desc: "Value: `4`"
		}],
		["HITGROUP_RIGHTARM", {
			detail: "HITGROUP_RIGHTARM: int",
			desc: "Value: `5`"
		}],
		["HITGROUP_LEFTLEG", {
			detail: "HITGROUP_LEFTLEG: int",
			desc: "Value: `6`"
		}],
		["HITGROUP_RIGHTLEG", {
			detail: "HITGROUP_RIGHTLEG: int",
			desc: "Value: `7`"
		}],
		["HITGROUP_GEAR", {
			detail: "HITGROUP_GEAR: int",
			desc: "Value: `10`"
		}]
	])],
	["EHoliday", new Map([
		["kHoliday_None", {
			detail: "kHoliday_None: int",
			desc: "Value: `0`"
		}],
		["kHoliday_TFBirthday", {
			detail: "kHoliday_TFBirthday: int",
			desc: "Value: `1`"
		}],
		["kHoliday_Halloween", {
			detail: "kHoliday_Halloween: int",
			desc: "Value: `2`"
		}],
		["kHoliday_Christmas", {
			detail: "kHoliday_Christmas: int",
			desc: "Value: `3`"
		}],
		["kHoliday_CommunityUpdate", {
			detail: "kHoliday_CommunityUpdate: int",
			desc: "Value: `4`"
		}],
		["kHoliday_EOTL", {
			detail: "kHoliday_EOTL: int",
			desc: "Value: `5`"
		}],
		["kHoliday_Valentines", {
			detail: "kHoliday_Valentines: int",
			desc: "Value: `6`"
		}],
		["kHoliday_MeetThePyro", {
			detail: "kHoliday_MeetThePyro: int",
			desc: "Value: `7`"
		}],
		["kHoliday_FullMoon", {
			detail: "kHoliday_FullMoon: int",
			desc: "Value: `8`"
		}],
		["kHoliday_HalloweenOrFullMoon", {
			detail: "kHoliday_HalloweenOrFullMoon: int",
			desc: "Value: `9`"
		}],
		["kHoliday_HalloweenOrFullMoonOrValentines", {
			detail: "kHoliday_HalloweenOrFullMoonOrValentines: int",
			desc: "Value: `10`"
		}],
		["kHoliday_AprilFools", {
			detail: "kHoliday_AprilFools: int",
			desc: "Value: `11`"
		}],
		["kHoliday_Soldier", {
			detail: "kHoliday_Soldier: int",
			desc: "Value: `12`"
		}],
		["kHoliday_Summer", {
			detail: "kHoliday_Summer: int",
			desc: "Value: `13`"
		}],
		["kHolidayCount", {
			detail: "kHolidayCount: int",
			desc: "Value: `14`"
		}]
	])],
	["EHudNotify", new Map([
		["HUD_PRINTNOTIFY", {
			detail: "HUD_PRINTNOTIFY: int",
			desc: "Value: `1`"
		}],
		["HUD_PRINTCONSOLE", {
			detail: "HUD_PRINTCONSOLE: int",
			desc: "Value: `2`"
		}],
		["HUD_PRINTTALK", {
			detail: "HUD_PRINTTALK: int",
			desc: "Value: `3`"
		}],
		["HUD_PRINTCENTER", {
			detail: "HUD_PRINTCENTER: int",
			desc: "Value: `4`"
		}]
	])],
	["EMoveCollide", new Map([
		["MOVECOLLIDE_DEFAULT", {
			detail: "MOVECOLLIDE_DEFAULT: int",
			desc: "Value: `0`"
		}],
		["MOVECOLLIDE_FLY_BOUNCE", {
			detail: "MOVECOLLIDE_FLY_BOUNCE: int",
			desc: "Value: `1`"
		}],
		["MOVECOLLIDE_FLY_CUSTOM", {
			detail: "MOVECOLLIDE_FLY_CUSTOM: int",
			desc: "Value: `2`"
		}],
		["MOVECOLLIDE_FLY_SLIDE", {
			detail: "MOVECOLLIDE_FLY_SLIDE: int",
			desc: "Value: `3`"
		}],
		["MOVECOLLIDE_MAX_BITS", {
			detail: "MOVECOLLIDE_MAX_BITS: int",
			desc: "Value: `3`"
		}],
		["MOVECOLLIDE_COUNT", {
			detail: "MOVECOLLIDE_COUNT: int",
			desc: "Value: `4`"
		}]
	])],
	["EMoveType", new Map([
		["MOVETYPE_NONE", {
			detail: "MOVETYPE_NONE: int",
			desc: "Value: `0`"
		}],
		["MOVETYPE_ISOMETRIC", {
			detail: "MOVETYPE_ISOMETRIC: int",
			desc: "Value: `1`"
		}],
		["MOVETYPE_WALK", {
			detail: "MOVETYPE_WALK: int",
			desc: "Value: `2`"
		}],
		["MOVETYPE_STEP", {
			detail: "MOVETYPE_STEP: int",
			desc: "Value: `3`"
		}],
		["MOVETYPE_FLY", {
			detail: "MOVETYPE_FLY: int",
			desc: "Value: `4`"
		}],
		["MOVETYPE_FLYGRAVITY", {
			detail: "MOVETYPE_FLYGRAVITY: int",
			desc: "Value: `5`"
		}],
		["MOVETYPE_VPHYSICS", {
			detail: "MOVETYPE_VPHYSICS: int",
			desc: "Value: `6`"
		}],
		["MOVETYPE_PUSH", {
			detail: "MOVETYPE_PUSH: int",
			desc: "Value: `7`"
		}],
		["MOVETYPE_NOCLIP", {
			detail: "MOVETYPE_NOCLIP: int",
			desc: "Value: `8`"
		}],
		["MOVETYPE_LADDER", {
			detail: "MOVETYPE_LADDER: int",
			desc: "Value: `9`"
		}],
		["MOVETYPE_OBSERVER", {
			detail: "MOVETYPE_OBSERVER: int",
			desc: "Value: `10`"
		}],
		["MOVETYPE_CUSTOM", {
			detail: "MOVETYPE_CUSTOM: int",
			desc: "Value: `11`"
		}],
		["MOVETYPE_LAST", {
			detail: "MOVETYPE_LAST: int",
			desc: "Value: `11`"
		}]
	])],
	["ENavCornerType", new Map([
		["NORTH_WEST", {
			detail: "NORTH_WEST: int",
			desc: "Value: `0`"
		}],
		["NORTH_EAST", {
			detail: "NORTH_EAST: int",
			desc: "Value: `1`"
		}],
		["SOUTH_EAST", {
			detail: "SOUTH_EAST: int",
			desc: "Value: `2`"
		}],
		["SOUTH_WEST", {
			detail: "SOUTH_WEST: int",
			desc: "Value: `3`"
		}],
		["NUM_CORNERS", {
			detail: "NUM_CORNERS: int",
			desc: "Value: `4`"
		}]
	])],
	["ENavDirType", new Map([
		["NORTH", {
			detail: "NORTH: int",
			desc: "Value: `0`"
		}],
		["EAST", {
			detail: "EAST: int",
			desc: "Value: `1`"
		}],
		["SOUTH", {
			detail: "SOUTH: int",
			desc: "Value: `2`"
		}],
		["WEST", {
			detail: "WEST: int",
			desc: "Value: `3`"
		}],
		["NUM_DIRECTIONS", {
			detail: "NUM_DIRECTIONS: int",
			desc: "Value: `4`"
		}]
	])],
	["ENavRelativeDirType", new Map([
		["FORWARD", {
			detail: "FORWARD: int",
			desc: "Value: `0`"
		}],
		["RIGHT", {
			detail: "RIGHT: int",
			desc: "Value: `1`"
		}],
		["BACKWARD", {
			detail: "BACKWARD: int",
			desc: "Value: `2`"
		}],
		["LEFT", {
			detail: "LEFT: int",
			desc: "Value: `3`"
		}],
		["UP", {
			detail: "UP: int",
			desc: "Value: `4`"
		}],
		["DOWN", {
			detail: "DOWN: int",
			desc: "Value: `5`"
		}],
		["NUM_RELATIVE_DIRECTIONS", {
			detail: "NUM_RELATIVE_DIRECTIONS: int",
			desc: "Value: `6`"
		}]
	])],
	["ENavTraverseType", new Map([
		["GO_NORTH", {
			detail: "GO_NORTH: int",
			desc: "Value: `0`"
		}],
		["GO_EAST", {
			detail: "GO_EAST: int",
			desc: "Value: `1`"
		}],
		["GO_SOUTH", {
			detail: "GO_SOUTH: int",
			desc: "Value: `2`"
		}],
		["GO_WEST", {
			detail: "GO_WEST: int",
			desc: "Value: `3`"
		}],
		["GO_LADDER_UP", {
			detail: "GO_LADDER_UP: int",
			desc: "Value: `4`"
		}],
		["GO_LADDER_DOWN", {
			detail: "GO_LADDER_DOWN: int",
			desc: "Value: `5`"
		}],
		["GO_JUMP", {
			detail: "GO_JUMP: int",
			desc: "Value: `6`"
		}],
		["GO_ELEVATOR_UP", {
			detail: "GO_ELEVATOR_UP: int",
			desc: "Value: `7`"
		}],
		["GO_ELEVATOR_DOWN", {
			detail: "GO_ELEVATOR_DOWN: int",
			desc: "Value: `8`"
		}],
		["NUM_TRAVERSE_TYPES", {
			detail: "NUM_TRAVERSE_TYPES: int",
			desc: "Value: `9`"
		}]
	])],
	["ERenderFx", new Map([
		["kRenderFxNone", {
			detail: "kRenderFxNone: int",
			desc: "Value: `0`"
		}],
		["kRenderFxPulseSlow", {
			detail: "kRenderFxPulseSlow: int",
			desc: "Value: `1`"
		}],
		["kRenderFxPulseFast", {
			detail: "kRenderFxPulseFast: int",
			desc: "Value: `2`"
		}],
		["kRenderFxPulseSlowWide", {
			detail: "kRenderFxPulseSlowWide: int",
			desc: "Value: `3`"
		}],
		["kRenderFxPulseFastWide", {
			detail: "kRenderFxPulseFastWide: int",
			desc: "Value: `4`"
		}],
		["kRenderFxFadeSlow", {
			detail: "kRenderFxFadeSlow: int",
			desc: "Value: `5`"
		}],
		["kRenderFxFadeFast", {
			detail: "kRenderFxFadeFast: int",
			desc: "Value: `6`"
		}],
		["kRenderFxSolidSlow", {
			detail: "kRenderFxSolidSlow: int",
			desc: "Value: `7`"
		}],
		["kRenderFxSolidFast", {
			detail: "kRenderFxSolidFast: int",
			desc: "Value: `8`"
		}],
		["kRenderFxStrobeSlow", {
			detail: "kRenderFxStrobeSlow: int",
			desc: "Value: `9`"
		}],
		["kRenderFxStrobeFast", {
			detail: "kRenderFxStrobeFast: int",
			desc: "Value: `10`"
		}],
		["kRenderFxStrobeFaster", {
			detail: "kRenderFxStrobeFaster: int",
			desc: "Value: `11`"
		}],
		["kRenderFxFlickerSlow", {
			detail: "kRenderFxFlickerSlow: int",
			desc: "Value: `12`"
		}],
		["kRenderFxFlickerFast", {
			detail: "kRenderFxFlickerFast: int",
			desc: "Value: `13`"
		}],
		["kRenderFxNoDissipation", {
			detail: "kRenderFxNoDissipation: int",
			desc: "Value: `14`"
		}],
		["kRenderFxDistort", {
			detail: "kRenderFxDistort: int",
			desc: "Value: `15`"
		}],
		["kRenderFxHologram", {
			detail: "kRenderFxHologram: int",
			desc: "Value: `16`"
		}],
		["kRenderFxExplode", {
			detail: "kRenderFxExplode: int",
			desc: "Value: `17`"
		}],
		["kRenderFxGlowShell", {
			detail: "kRenderFxGlowShell: int",
			desc: "Value: `18`"
		}],
		["kRenderFxClampMinScale", {
			detail: "kRenderFxClampMinScale: int",
			desc: "Value: `19`"
		}],
		["kRenderFxEnvRain", {
			detail: "kRenderFxEnvRain: int",
			desc: "Value: `20`"
		}],
		["kRenderFxEnvSnow", {
			detail: "kRenderFxEnvSnow: int",
			desc: "Value: `21`"
		}],
		["kRenderFxSpotlight", {
			detail: "kRenderFxSpotlight: int",
			desc: "Value: `22`"
		}],
		["kRenderFxRagdoll", {
			detail: "kRenderFxRagdoll: int",
			desc: "Value: `23`"
		}],
		["kRenderFxPulseFastWider", {
			detail: "kRenderFxPulseFastWider: int",
			desc: "Value: `24`"
		}],
		["kRenderFxMax", {
			detail: "kRenderFxMax: int",
			desc: "Value: `25`"
		}]
	])],
	["ERenderMode", new Map([
		["kRenderNormal", {
			detail: "kRenderNormal: int",
			desc: "Value: `0`"
		}],
		["kRenderTransColor", {
			detail: "kRenderTransColor: int",
			desc: "Value: `1`"
		}],
		["kRenderTransTexture", {
			detail: "kRenderTransTexture: int",
			desc: "Value: `2`"
		}],
		["kRenderGlow", {
			detail: "kRenderGlow: int",
			desc: "Value: `3`"
		}],
		["kRenderTransAlpha", {
			detail: "kRenderTransAlpha: int",
			desc: "Value: `4`"
		}],
		["kRenderTransAdd", {
			detail: "kRenderTransAdd: int",
			desc: "Value: `5`"
		}],
		["kRenderEnvironmental", {
			detail: "kRenderEnvironmental: int",
			desc: "Value: `6`"
		}],
		["kRenderTransAddFrameBlend", {
			detail: "kRenderTransAddFrameBlend: int",
			desc: "Value: `7`"
		}],
		["kRenderTransAlphaAdd", {
			detail: "kRenderTransAlphaAdd: int",
			desc: "Value: `8`"
		}],
		["kRenderWorldGlow", {
			detail: "kRenderWorldGlow: int",
			desc: "Value: `9`"
		}],
		["kRenderNone", {
			detail: "kRenderNone: int",
			desc: "Value: `10`"
		}],
		["kRenderModeCount", {
			detail: "kRenderModeCount: int",
			desc: "Value: `11`"
		}]
	])],
	["ERoundState", new Map([
		["GR_STATE_INIT", {
			detail: "GR_STATE_INIT: int",
			desc: "Value: `0`"
		}],
		["GR_STATE_PREGAME", {
			detail: "GR_STATE_PREGAME: int",
			desc: "Value: `1`"
		}],
		["GR_STATE_STARTGAME", {
			detail: "GR_STATE_STARTGAME: int",
			desc: "Value: `2`"
		}],
		["GR_STATE_PREROUND", {
			detail: "GR_STATE_PREROUND: int",
			desc: "Value: `3`"
		}],
		["GR_STATE_RND_RUNNING", {
			detail: "GR_STATE_RND_RUNNING: int",
			desc: "Value: `4`"
		}],
		["GR_STATE_TEAM_WIN", {
			detail: "GR_STATE_TEAM_WIN: int",
			desc: "Value: `5`"
		}],
		["GR_STATE_RESTART", {
			detail: "GR_STATE_RESTART: int",
			desc: "Value: `6`"
		}],
		["GR_STATE_STALEMATE", {
			detail: "GR_STATE_STALEMATE: int",
			desc: "Value: `7`"
		}],
		["GR_STATE_GAME_OVER", {
			detail: "GR_STATE_GAME_OVER: int",
			desc: "Value: `8`"
		}],
		["GR_STATE_BONUS", {
			detail: "GR_STATE_BONUS: int",
			desc: "Value: `9`"
		}],
		["GR_STATE_BETWEEN_RNDS", {
			detail: "GR_STATE_BETWEEN_RNDS: int",
			desc: "Value: `10`"
		}],
		["GR_NUM_ROUND_STATES", {
			detail: "GR_NUM_ROUND_STATES: int",
			desc: "Value: `11`"
		}]
	])],
	["EScriptRecipientFilter", new Map([
		["RECIPIENT_FILTER_DEFAULT", {
			detail: "RECIPIENT_FILTER_DEFAULT: int",
			desc: "Value: `0`"
		}],
		["RECIPIENT_FILTER_PAS_ATTENUATION", {
			detail: "RECIPIENT_FILTER_PAS_ATTENUATION: int",
			desc: "Value: `1`"
		}],
		["RECIPIENT_FILTER_PAS", {
			detail: "RECIPIENT_FILTER_PAS: int",
			desc: "Value: `2`"
		}],
		["RECIPIENT_FILTER_PVS", {
			detail: "RECIPIENT_FILTER_PVS: int",
			desc: "Value: `3`"
		}],
		["RECIPIENT_FILTER_SINGLE_PLAYER", {
			detail: "RECIPIENT_FILTER_SINGLE_PLAYER: int",
			desc: "Value: `4`"
		}],
		["RECIPIENT_FILTER_GLOBAL", {
			detail: "RECIPIENT_FILTER_GLOBAL: int",
			desc: "Value: `5`"
		}],
		["RECIPIENT_FILTER_TEAM", {
			detail: "RECIPIENT_FILTER_TEAM: int",
			desc: "Value: `6`"
		}]
	])],
	["ESolidType", new Map([
		["SOLID_NONE", {
			detail: "SOLID_NONE: int",
			desc: "Value: `0`"
		}],
		["SOLID_BSP", {
			detail: "SOLID_BSP: int",
			desc: "Value: `1`"
		}],
		["SOLID_BBOX", {
			detail: "SOLID_BBOX: int",
			desc: "Value: `2`"
		}],
		["SOLID_OBB", {
			detail: "SOLID_OBB: int",
			desc: "Value: `3`"
		}],
		["SOLID_OBB_YAW", {
			detail: "SOLID_OBB_YAW: int",
			desc: "Value: `4`"
		}],
		["SOLID_CUSTOM", {
			detail: "SOLID_CUSTOM: int",
			desc: "Value: `5`"
		}],
		["SOLID_VPHYSICS", {
			detail: "SOLID_VPHYSICS: int",
			desc: "Value: `6`"
		}],
		["SOLID_LAST", {
			detail: "SOLID_LAST: int",
			desc: "Value: `7`"
		}]
	])],
	["ESpectatorMode", new Map([
		["OBS_MODE_NONE", {
			detail: "OBS_MODE_NONE: int",
			desc: "Value: `0`"
		}],
		["OBS_MODE_DEATHCAM", {
			detail: "OBS_MODE_DEATHCAM: int",
			desc: "Value: `1`"
		}],
		["OBS_MODE_FREEZECAM", {
			detail: "OBS_MODE_FREEZECAM: int",
			desc: "Value: `2`"
		}],
		["OBS_MODE_FIXED", {
			detail: "OBS_MODE_FIXED: int",
			desc: "Value: `3`"
		}],
		["OBS_MODE_IN_EYE", {
			detail: "OBS_MODE_IN_EYE: int",
			desc: "Value: `4`"
		}],
		["OBS_MODE_CHASE", {
			detail: "OBS_MODE_CHASE: int",
			desc: "Value: `5`"
		}],
		["OBS_MODE_POI", {
			detail: "OBS_MODE_POI: int",
			desc: "Value: `6`"
		}],
		["OBS_MODE_ROAMING", {
			detail: "OBS_MODE_ROAMING: int",
			desc: "Value: `7`"
		}],
		["NUM_OBSERVER_MODES", {
			detail: "NUM_OBSERVER_MODES: int",
			desc: "Value: `8`"
		}]
	])],
	["EStopwatchState", new Map([
		["STOPWATCH_CAPTURE_TIME_NOT_SET", {
			detail: "STOPWATCH_CAPTURE_TIME_NOT_SET: int",
			desc: "Value: `0`"
		}],
		["STOPWATCH_RUNNING", {
			detail: "STOPWATCH_RUNNING: int",
			desc: "Value: `1`"
		}],
		["STOPWATCH_OVERTIME", {
			detail: "STOPWATCH_OVERTIME: int",
			desc: "Value: `2`"
		}]
	])],
	["ETFBotDifficultyType", new Map([
		["EASY", {
			detail: "EASY: int",
			desc: "Value: `0`"
		}],
		["NORMAL", {
			detail: "NORMAL: int",
			desc: "Value: `1`"
		}],
		["HARD", {
			detail: "HARD: int",
			desc: "Value: `2`"
		}],
		["EXPERT", {
			detail: "EXPERT: int",
			desc: "Value: `3`"
		}],
		["NUM_DIFFICULTY_LEVELS", {
			detail: "NUM_DIFFICULTY_LEVELS: int",
			desc: "Value: `4`"
		}],
		["UNDEFINED", {
			detail: "UNDEFINED: int",
			desc: "Value: `-1`"
		}]
	])],
	["ETFClass", new Map([
		["TF_CLASS_UNDEFINED", {
			detail: "TF_CLASS_UNDEFINED: int",
			desc: "Value: `0`"
		}],
		["TF_CLASS_SCOUT", {
			detail: "TF_CLASS_SCOUT: int",
			desc: "Value: `1`"
		}],
		["TF_CLASS_SNIPER", {
			detail: "TF_CLASS_SNIPER: int",
			desc: "Value: `2`"
		}],
		["TF_CLASS_SOLDIER", {
			detail: "TF_CLASS_SOLDIER: int",
			desc: "Value: `3`"
		}],
		["TF_CLASS_DEMOMAN", {
			detail: "TF_CLASS_DEMOMAN: int",
			desc: "Value: `4`"
		}],
		["TF_CLASS_MEDIC", {
			detail: "TF_CLASS_MEDIC: int",
			desc: "Value: `5`"
		}],
		["TF_CLASS_HEAVYWEAPONS", {
			detail: "TF_CLASS_HEAVYWEAPONS: int",
			desc: "Value: `6`"
		}],
		["TF_CLASS_PYRO", {
			detail: "TF_CLASS_PYRO: int",
			desc: "Value: `7`"
		}],
		["TF_CLASS_SPY", {
			detail: "TF_CLASS_SPY: int",
			desc: "Value: `8`"
		}],
		["TF_CLASS_ENGINEER", {
			detail: "TF_CLASS_ENGINEER: int",
			desc: "Value: `9`"
		}],
		["TF_CLASS_CIVILIAN", {
			detail: "TF_CLASS_CIVILIAN: int",
			desc: "Value: `10`"
		}],
		["TF_CLASS_COUNT_ALL", {
			detail: "TF_CLASS_COUNT_ALL: int",
			desc: "Value: `11`"
		}],
		["TF_CLASS_RANDOM", {
			detail: "TF_CLASS_RANDOM: int",
			desc: "Value: `12`"
		}]
	])],
	["ETFCond", new Map([
		["TF_COND_AIMING", {
			detail: "TF_COND_AIMING: int",
			desc: "Value: `0`"
		}],
		["TF_COND_ZOOMED", {
			detail: "TF_COND_ZOOMED: int",
			desc: "Value: `1`"
		}],
		["TF_COND_DISGUISING", {
			detail: "TF_COND_DISGUISING: int",
			desc: "Value: `2`"
		}],
		["TF_COND_DISGUISED", {
			detail: "TF_COND_DISGUISED: int",
			desc: "Value: `3`"
		}],
		["TF_COND_STEALTHED", {
			detail: "TF_COND_STEALTHED: int",
			desc: "Value: `4`"
		}],
		["TF_COND_INVULNERABLE", {
			detail: "TF_COND_INVULNERABLE: int",
			desc: "Value: `5`"
		}],
		["TF_COND_TELEPORTED", {
			detail: "TF_COND_TELEPORTED: int",
			desc: "Value: `6`"
		}],
		["TF_COND_TAUNTING", {
			detail: "TF_COND_TAUNTING: int",
			desc: "Value: `7`"
		}],
		["TF_COND_INVULNERABLE_WEARINGOFF", {
			detail: "TF_COND_INVULNERABLE_WEARINGOFF: int",
			desc: "Value: `8`"
		}],
		["TF_COND_STEALTHED_BLINK", {
			detail: "TF_COND_STEALTHED_BLINK: int",
			desc: "Value: `9`"
		}],
		["TF_COND_SELECTED_TO_TELEPORT", {
			detail: "TF_COND_SELECTED_TO_TELEPORT: int",
			desc: "Value: `10`"
		}],
		["TF_COND_CRITBOOSTED", {
			detail: "TF_COND_CRITBOOSTED: int",
			desc: "Value: `11`"
		}],
		["TF_COND_TMPDAMAGEBONUS", {
			detail: "TF_COND_TMPDAMAGEBONUS: int",
			desc: "Value: `12`"
		}],
		["TF_COND_FEIGN_DEATH", {
			detail: "TF_COND_FEIGN_DEATH: int",
			desc: "Value: `13`"
		}],
		["TF_COND_PHASE", {
			detail: "TF_COND_PHASE: int",
			desc: "Value: `14`"
		}],
		["TF_COND_STUNNED", {
			detail: "TF_COND_STUNNED: int",
			desc: "Value: `15`"
		}],
		["TF_COND_OFFENSEBUFF", {
			detail: "TF_COND_OFFENSEBUFF: int",
			desc: "Value: `16`"
		}],
		["TF_COND_SHIELD_CHARGE", {
			detail: "TF_COND_SHIELD_CHARGE: int",
			desc: "Value: `17`"
		}],
		["TF_COND_DEMO_BUFF", {
			detail: "TF_COND_DEMO_BUFF: int",
			desc: "Value: `18`"
		}],
		["TF_COND_ENERGY_BUFF", {
			detail: "TF_COND_ENERGY_BUFF: int",
			desc: "Value: `19`"
		}],
		["TF_COND_RADIUSHEAL", {
			detail: "TF_COND_RADIUSHEAL: int",
			desc: "Value: `20`"
		}],
		["TF_COND_HEALTH_BUFF", {
			detail: "TF_COND_HEALTH_BUFF: int",
			desc: "Value: `21`"
		}],
		["TF_COND_BURNING", {
			detail: "TF_COND_BURNING: int",
			desc: "Value: `22`"
		}],
		["TF_COND_HEALTH_OVERHEALED", {
			detail: "TF_COND_HEALTH_OVERHEALED: int",
			desc: "Value: `23`"
		}],
		["TF_COND_URINE", {
			detail: "TF_COND_URINE: int",
			desc: "Value: `24`"
		}],
		["TF_COND_BLEEDING", {
			detail: "TF_COND_BLEEDING: int",
			desc: "Value: `25`"
		}],
		["TF_COND_DEFENSEBUFF", {
			detail: "TF_COND_DEFENSEBUFF: int",
			desc: "Value: `26`"
		}],
		["TF_COND_MAD_MILK", {
			detail: "TF_COND_MAD_MILK: int",
			desc: "Value: `27`"
		}],
		["TF_COND_MEGAHEAL", {
			detail: "TF_COND_MEGAHEAL: int",
			desc: "Value: `28`"
		}],
		["TF_COND_REGENONDAMAGEBUFF", {
			detail: "TF_COND_REGENONDAMAGEBUFF: int",
			desc: "Value: `29`"
		}],
		["TF_COND_MARKEDFORDEATH", {
			detail: "TF_COND_MARKEDFORDEATH: int",
			desc: "Value: `30`"
		}],
		["TF_COND_NOHEALINGDAMAGEBUFF", {
			detail: "TF_COND_NOHEALINGDAMAGEBUFF: int",
			desc: "Value: `31`"
		}],
		["TF_COND_SPEED_BOOST", {
			detail: "TF_COND_SPEED_BOOST: int",
			desc: "Value: `32`"
		}],
		["TF_COND_CRITBOOSTED_PUMPKIN", {
			detail: "TF_COND_CRITBOOSTED_PUMPKIN: int",
			desc: "Value: `33`"
		}],
		["TF_COND_CRITBOOSTED_USER_BUFF", {
			detail: "TF_COND_CRITBOOSTED_USER_BUFF: int",
			desc: "Value: `34`"
		}],
		["TF_COND_CRITBOOSTED_DEMO_CHARGE", {
			detail: "TF_COND_CRITBOOSTED_DEMO_CHARGE: int",
			desc: "Value: `35`"
		}],
		["TF_COND_SODAPOPPER_HYPE", {
			detail: "TF_COND_SODAPOPPER_HYPE: int",
			desc: "Value: `36`"
		}],
		["TF_COND_CRITBOOSTED_FIRST_BLOOD", {
			detail: "TF_COND_CRITBOOSTED_FIRST_BLOOD: int",
			desc: "Value: `37`"
		}],
		["TF_COND_CRITBOOSTED_BONUS_TIME", {
			detail: "TF_COND_CRITBOOSTED_BONUS_TIME: int",
			desc: "Value: `38`"
		}],
		["TF_COND_CRITBOOSTED_CTF_CAPTURE", {
			detail: "TF_COND_CRITBOOSTED_CTF_CAPTURE: int",
			desc: "Value: `39`"
		}],
		["TF_COND_CRITBOOSTED_ON_KILL", {
			detail: "TF_COND_CRITBOOSTED_ON_KILL: int",
			desc: "Value: `40`"
		}],
		["TF_COND_CANNOT_SWITCH_FROM_MELEE", {
			detail: "TF_COND_CANNOT_SWITCH_FROM_MELEE: int",
			desc: "Value: `41`"
		}],
		["TF_COND_DEFENSEBUFF_NO_CRIT_BLOCK", {
			detail: "TF_COND_DEFENSEBUFF_NO_CRIT_BLOCK: int",
			desc: "Value: `42`"
		}],
		["TF_COND_REPROGRAMMED", {
			detail: "TF_COND_REPROGRAMMED: int",
			desc: "Value: `43`"
		}],
		["TF_COND_CRITBOOSTED_RAGE_BUFF", {
			detail: "TF_COND_CRITBOOSTED_RAGE_BUFF: int",
			desc: "Value: `44`"
		}],
		["TF_COND_DEFENSEBUFF_HIGH", {
			detail: "TF_COND_DEFENSEBUFF_HIGH: int",
			desc: "Value: `45`"
		}],
		["TF_COND_SNIPERCHARGE_RAGE_BUFF", {
			detail: "TF_COND_SNIPERCHARGE_RAGE_BUFF: int",
			desc: "Value: `46`"
		}],
		["TF_COND_DISGUISE_WEARINGOFF", {
			detail: "TF_COND_DISGUISE_WEARINGOFF: int",
			desc: "Value: `47`"
		}],
		["TF_COND_MARKEDFORDEATH_SILENT", {
			detail: "TF_COND_MARKEDFORDEATH_SILENT: int",
			desc: "Value: `48`"
		}],
		["TF_COND_DISGUISED_AS_DISPENSER", {
			detail: "TF_COND_DISGUISED_AS_DISPENSER: int",
			desc: "Value: `49`"
		}],
		["TF_COND_SAPPED", {
			detail: "TF_COND_SAPPED: int",
			desc: "Value: `50`"
		}],
		["TF_COND_INVULNERABLE_HIDE_UNLESS_DAMAGED", {
			detail: "TF_COND_INVULNERABLE_HIDE_UNLESS_DAMAGED: int",
			desc: "Value: `51`"
		}],
		["TF_COND_INVULNERABLE_USER_BUFF", {
			detail: "TF_COND_INVULNERABLE_USER_BUFF: int",
			desc: "Value: `52`"
		}],
		["TF_COND_HALLOWEEN_BOMB_HEAD", {
			detail: "TF_COND_HALLOWEEN_BOMB_HEAD: int",
			desc: "Value: `53`"
		}],
		["TF_COND_HALLOWEEN_THRILLER", {
			detail: "TF_COND_HALLOWEEN_THRILLER: int",
			desc: "Value: `54`"
		}],
		["TF_COND_RADIUSHEAL_ON_DAMAGE", {
			detail: "TF_COND_RADIUSHEAL_ON_DAMAGE: int",
			desc: "Value: `55`"
		}],
		["TF_COND_CRITBOOSTED_CARD_EFFECT", {
			detail: "TF_COND_CRITBOOSTED_CARD_EFFECT: int",
			desc: "Value: `56`"
		}],
		["TF_COND_INVULNERABLE_CARD_EFFECT", {
			detail: "TF_COND_INVULNERABLE_CARD_EFFECT: int",
			desc: "Value: `57`"
		}],
		["TF_COND_MEDIGUN_UBER_BULLET_RESIST", {
			detail: "TF_COND_MEDIGUN_UBER_BULLET_RESIST: int",
			desc: "Value: `58`"
		}],
		["TF_COND_MEDIGUN_UBER_BLAST_RESIST", {
			detail: "TF_COND_MEDIGUN_UBER_BLAST_RESIST: int",
			desc: "Value: `59`"
		}],
		["TF_COND_MEDIGUN_UBER_FIRE_RESIST", {
			detail: "TF_COND_MEDIGUN_UBER_FIRE_RESIST: int",
			desc: "Value: `60`"
		}],
		["TF_COND_MEDIGUN_SMALL_BULLET_RESIST", {
			detail: "TF_COND_MEDIGUN_SMALL_BULLET_RESIST: int",
			desc: "Value: `61`"
		}],
		["TF_COND_MEDIGUN_SMALL_BLAST_RESIST", {
			detail: "TF_COND_MEDIGUN_SMALL_BLAST_RESIST: int",
			desc: "Value: `62`"
		}],
		["TF_COND_MEDIGUN_SMALL_FIRE_RESIST", {
			detail: "TF_COND_MEDIGUN_SMALL_FIRE_RESIST: int",
			desc: "Value: `63`"
		}],
		["TF_COND_STEALTHED_USER_BUFF", {
			detail: "TF_COND_STEALTHED_USER_BUFF: int",
			desc: "Value: `64`"
		}],
		["TF_COND_MEDIGUN_DEBUFF", {
			detail: "TF_COND_MEDIGUN_DEBUFF: int",
			desc: "Value: `65`"
		}],
		["TF_COND_STEALTHED_USER_BUFF_FADING", {
			detail: "TF_COND_STEALTHED_USER_BUFF_FADING: int",
			desc: "Value: `66`"
		}],
		["TF_COND_BULLET_IMMUNE", {
			detail: "TF_COND_BULLET_IMMUNE: int",
			desc: "Value: `67`"
		}],
		["TF_COND_BLAST_IMMUNE", {
			detail: "TF_COND_BLAST_IMMUNE: int",
			desc: "Value: `68`"
		}],
		["TF_COND_FIRE_IMMUNE", {
			detail: "TF_COND_FIRE_IMMUNE: int",
			desc: "Value: `69`"
		}],
		["TF_COND_PREVENT_DEATH", {
			detail: "TF_COND_PREVENT_DEATH: int",
			desc: "Value: `70`"
		}],
		["TF_COND_MVM_BOT_STUN_RADIOWAVE", {
			detail: "TF_COND_MVM_BOT_STUN_RADIOWAVE: int",
			desc: "Value: `71`"
		}],
		["TF_COND_HALLOWEEN_SPEED_BOOST", {
			detail: "TF_COND_HALLOWEEN_SPEED_BOOST: int",
			desc: "Value: `72`"
		}],
		["TF_COND_HALLOWEEN_QUICK_HEAL", {
			detail: "TF_COND_HALLOWEEN_QUICK_HEAL: int",
			desc: "Value: `73`"
		}],
		["TF_COND_HALLOWEEN_GIANT", {
			detail: "TF_COND_HALLOWEEN_GIANT: int",
			desc: "Value: `74`"
		}],
		["TF_COND_HALLOWEEN_TINY", {
			detail: "TF_COND_HALLOWEEN_TINY: int",
			desc: "Value: `75`"
		}],
		["TF_COND_HALLOWEEN_IN_HELL", {
			detail: "TF_COND_HALLOWEEN_IN_HELL: int",
			desc: "Value: `76`"
		}],
		["TF_COND_HALLOWEEN_GHOST_MODE", {
			detail: "TF_COND_HALLOWEEN_GHOST_MODE: int",
			desc: "Value: `77`"
		}],
		["TF_COND_MINICRITBOOSTED_ON_KILL", {
			detail: "TF_COND_MINICRITBOOSTED_ON_KILL: int",
			desc: "Value: `78`"
		}],
		["TF_COND_OBSCURED_SMOKE", {
			detail: "TF_COND_OBSCURED_SMOKE: int",
			desc: "Value: `79`"
		}],
		["TF_COND_PARACHUTE_ACTIVE", {
			detail: "TF_COND_PARACHUTE_ACTIVE: int",
			desc: "Value: `80`"
		}],
		["TF_COND_BLASTJUMPING", {
			detail: "TF_COND_BLASTJUMPING: int",
			desc: "Value: `81`"
		}],
		["TF_COND_HALLOWEEN_KART", {
			detail: "TF_COND_HALLOWEEN_KART: int",
			desc: "Value: `82`"
		}],
		["TF_COND_HALLOWEEN_KART_DASH", {
			detail: "TF_COND_HALLOWEEN_KART_DASH: int",
			desc: "Value: `83`"
		}],
		["TF_COND_BALLOON_HEAD", {
			detail: "TF_COND_BALLOON_HEAD: int",
			desc: "Value: `84`"
		}],
		["TF_COND_MELEE_ONLY", {
			detail: "TF_COND_MELEE_ONLY: int",
			desc: "Value: `85`"
		}],
		["TF_COND_SWIMMING_CURSE", {
			detail: "TF_COND_SWIMMING_CURSE: int",
			desc: "Value: `86`"
		}],
		["TF_COND_FREEZE_INPUT", {
			detail: "TF_COND_FREEZE_INPUT: int",
			desc: "Value: `87`"
		}],
		["TF_COND_HALLOWEEN_KART_CAGE", {
			detail: "TF_COND_HALLOWEEN_KART_CAGE: int",
			desc: "Value: `88`"
		}],
		["TF_COND_DONOTUSE_0", {
			detail: "TF_COND_DONOTUSE_0: int",
			desc: "Value: `89`"
		}],
		["TF_COND_RUNE_STRENGTH", {
			detail: "TF_COND_RUNE_STRENGTH: int",
			desc: "Value: `90`"
		}],
		["TF_COND_RUNE_HASTE", {
			detail: "TF_COND_RUNE_HASTE: int",
			desc: "Value: `91`"
		}],
		["TF_COND_RUNE_REGEN", {
			detail: "TF_COND_RUNE_REGEN: int",
			desc: "Value: `92`"
		}],
		["TF_COND_RUNE_RESIST", {
			detail: "TF_COND_RUNE_RESIST: int",
			desc: "Value: `93`"
		}],
		["TF_COND_RUNE_VAMPIRE", {
			detail: "TF_COND_RUNE_VAMPIRE: int",
			desc: "Value: `94`"
		}],
		["TF_COND_RUNE_REFLECT", {
			detail: "TF_COND_RUNE_REFLECT: int",
			desc: "Value: `95`"
		}],
		["TF_COND_RUNE_PRECISION", {
			detail: "TF_COND_RUNE_PRECISION: int",
			desc: "Value: `96`"
		}],
		["TF_COND_RUNE_AGILITY", {
			detail: "TF_COND_RUNE_AGILITY: int",
			desc: "Value: `97`"
		}],
		["TF_COND_GRAPPLINGHOOK", {
			detail: "TF_COND_GRAPPLINGHOOK: int",
			desc: "Value: `98`"
		}],
		["TF_COND_GRAPPLINGHOOK_SAFEFALL", {
			detail: "TF_COND_GRAPPLINGHOOK_SAFEFALL: int",
			desc: "Value: `99`"
		}],
		["TF_COND_GRAPPLINGHOOK_LATCHED", {
			detail: "TF_COND_GRAPPLINGHOOK_LATCHED: int",
			desc: "Value: `100`"
		}],
		["TF_COND_GRAPPLINGHOOK_BLEEDING", {
			detail: "TF_COND_GRAPPLINGHOOK_BLEEDING: int",
			desc: "Value: `101`"
		}],
		["TF_COND_AFTERBURN_IMMUNE", {
			detail: "TF_COND_AFTERBURN_IMMUNE: int",
			desc: "Value: `102`"
		}],
		["TF_COND_RUNE_KNOCKOUT", {
			detail: "TF_COND_RUNE_KNOCKOUT: int",
			desc: "Value: `103`"
		}],
		["TF_COND_RUNE_IMBALANCE", {
			detail: "TF_COND_RUNE_IMBALANCE: int",
			desc: "Value: `104`"
		}],
		["TF_COND_CRITBOOSTED_RUNE_TEMP", {
			detail: "TF_COND_CRITBOOSTED_RUNE_TEMP: int",
			desc: "Value: `105`"
		}],
		["TF_COND_PASSTIME_INTERCEPTION", {
			detail: "TF_COND_PASSTIME_INTERCEPTION: int",
			desc: "Value: `106`"
		}],
		["TF_COND_SWIMMING_NO_EFFECTS", {
			detail: "TF_COND_SWIMMING_NO_EFFECTS: int",
			desc: "Value: `107`"
		}],
		["TF_COND_PURGATORY", {
			detail: "TF_COND_PURGATORY: int",
			desc: "Value: `108`"
		}],
		["TF_COND_RUNE_KING", {
			detail: "TF_COND_RUNE_KING: int",
			desc: "Value: `109`"
		}],
		["TF_COND_RUNE_PLAGUE", {
			detail: "TF_COND_RUNE_PLAGUE: int",
			desc: "Value: `110`"
		}],
		["TF_COND_RUNE_SUPERNOVA", {
			detail: "TF_COND_RUNE_SUPERNOVA: int",
			desc: "Value: `111`"
		}],
		["TF_COND_PLAGUE", {
			detail: "TF_COND_PLAGUE: int",
			desc: "Value: `112`"
		}],
		["TF_COND_KING_BUFFED", {
			detail: "TF_COND_KING_BUFFED: int",
			desc: "Value: `113`"
		}],
		["TF_COND_TEAM_GLOWS", {
			detail: "TF_COND_TEAM_GLOWS: int",
			desc: "Value: `114`"
		}],
		["TF_COND_KNOCKED_INTO_AIR", {
			detail: "TF_COND_KNOCKED_INTO_AIR: int",
			desc: "Value: `115`"
		}],
		["TF_COND_COMPETITIVE_WINNER", {
			detail: "TF_COND_COMPETITIVE_WINNER: int",
			desc: "Value: `116`"
		}],
		["TF_COND_COMPETITIVE_LOSER", {
			detail: "TF_COND_COMPETITIVE_LOSER: int",
			desc: "Value: `117`"
		}],
		["TF_COND_HEALING_DEBUFF", {
			detail: "TF_COND_HEALING_DEBUFF: int",
			desc: "Value: `118`"
		}],
		["TF_COND_PASSTIME_PENALTY_DEBUFF", {
			detail: "TF_COND_PASSTIME_PENALTY_DEBUFF: int",
			desc: "Value: `119`"
		}],
		["TF_COND_GRAPPLED_TO_PLAYER", {
			detail: "TF_COND_GRAPPLED_TO_PLAYER: int",
			desc: "Value: `120`"
		}],
		["TF_COND_GRAPPLED_BY_PLAYER", {
			detail: "TF_COND_GRAPPLED_BY_PLAYER: int",
			desc: "Value: `121`"
		}],
		["TF_COND_PARACHUTE_DEPLOYED", {
			detail: "TF_COND_PARACHUTE_DEPLOYED: int",
			desc: "Value: `122`"
		}],
		["TF_COND_GAS", {
			detail: "TF_COND_GAS: int",
			desc: "Value: `123`"
		}],
		["TF_COND_BURNING_PYRO", {
			detail: "TF_COND_BURNING_PYRO: int",
			desc: "Value: `124`"
		}],
		["TF_COND_ROCKETPACK", {
			detail: "TF_COND_ROCKETPACK: int",
			desc: "Value: `125`"
		}],
		["TF_COND_LOST_FOOTING", {
			detail: "TF_COND_LOST_FOOTING: int",
			desc: "Value: `126`"
		}],
		["TF_COND_AIR_CURRENT", {
			detail: "TF_COND_AIR_CURRENT: int",
			desc: "Value: `127`"
		}],
		["TF_COND_HALLOWEEN_HELL_HEAL", {
			detail: "TF_COND_HALLOWEEN_HELL_HEAL: int",
			desc: "Value: `128`"
		}],
		["TF_COND_POWERUPMODE_DOMINANT", {
			detail: "TF_COND_POWERUPMODE_DOMINANT: int",
			desc: "Value: `129`"
		}],
		["TF_COND_IMMUNE_TO_PUSHBACK", {
			detail: "TF_COND_IMMUNE_TO_PUSHBACK: int",
			desc: "Value: `130`"
		}],
		["TF_COND_INVALID", {
			detail: "TF_COND_INVALID: int",
			desc: "Value: `-1`"
		}]
	])],
	["ETFDmgCustom", new Map([
		["TF_DMG_CUSTOM_NONE", {
			detail: "TF_DMG_CUSTOM_NONE: int",
			desc: "Value: `0`"
		}],
		["TF_DMG_CUSTOM_HEADSHOT", {
			detail: "TF_DMG_CUSTOM_HEADSHOT: int",
			desc: "Value: `1`"
		}],
		["TF_DMG_CUSTOM_BACKSTAB", {
			detail: "TF_DMG_CUSTOM_BACKSTAB: int",
			desc: "Value: `2`"
		}],
		["TF_DMG_CUSTOM_BURNING", {
			detail: "TF_DMG_CUSTOM_BURNING: int",
			desc: "Value: `3`"
		}],
		["TF_DMG_WRENCH_FIX", {
			detail: "TF_DMG_WRENCH_FIX: int",
			desc: "Value: `4`"
		}],
		["TF_DMG_CUSTOM_MINIGUN", {
			detail: "TF_DMG_CUSTOM_MINIGUN: int",
			desc: "Value: `5`"
		}],
		["TF_DMG_CUSTOM_SUICIDE", {
			detail: "TF_DMG_CUSTOM_SUICIDE: int",
			desc: "Value: `6`"
		}],
		["TF_DMG_CUSTOM_TAUNTATK_HADOUKEN", {
			detail: "TF_DMG_CUSTOM_TAUNTATK_HADOUKEN: int",
			desc: "Value: `7`"
		}],
		["TF_DMG_CUSTOM_BURNING_FLARE", {
			detail: "TF_DMG_CUSTOM_BURNING_FLARE: int",
			desc: "Value: `8`"
		}],
		["TF_DMG_CUSTOM_TAUNTATK_HIGH_NOON", {
			detail: "TF_DMG_CUSTOM_TAUNTATK_HIGH_NOON: int",
			desc: "Value: `9`"
		}],
		["TF_DMG_CUSTOM_TAUNTATK_GRAND_SLAM", {
			detail: "TF_DMG_CUSTOM_TAUNTATK_GRAND_SLAM: int",
			desc: "Value: `10`"
		}],
		["TF_DMG_CUSTOM_PENETRATE_MY_TEAM", {
			detail: "TF_DMG_CUSTOM_PENETRATE_MY_TEAM: int",
			desc: "Value: `11`"
		}],
		["TF_DMG_CUSTOM_PENETRATE_ALL_PLAYERS", {
			detail: "TF_DMG_CUSTOM_PENETRATE_ALL_PLAYERS: int",
			desc: "Value: `12`"
		}],
		["TF_DMG_CUSTOM_TAUNTATK_FENCING", {
			detail: "TF_DMG_CUSTOM_TAUNTATK_FENCING: int",
			desc: "Value: `13`"
		}],
		["TF_DMG_CUSTOM_PENETRATE_NONBURNING_TEAMMATE", {
			detail: "TF_DMG_CUSTOM_PENETRATE_NONBURNING_TEAMMATE: int",
			desc: "Value: `14`"
		}],
		["TF_DMG_CUSTOM_TAUNTATK_ARROW_STAB", {
			detail: "TF_DMG_CUSTOM_TAUNTATK_ARROW_STAB: int",
			desc: "Value: `15`"
		}],
		["TF_DMG_CUSTOM_TELEFRAG", {
			detail: "TF_DMG_CUSTOM_TELEFRAG: int",
			desc: "Value: `16`"
		}],
		["TF_DMG_CUSTOM_BURNING_ARROW", {
			detail: "TF_DMG_CUSTOM_BURNING_ARROW: int",
			desc: "Value: `17`"
		}],
		["TF_DMG_CUSTOM_FLYINGBURN", {
			detail: "TF_DMG_CUSTOM_FLYINGBURN: int",
			desc: "Value: `18`"
		}],
		["TF_DMG_CUSTOM_PUMPKIN_BOMB", {
			detail: "TF_DMG_CUSTOM_PUMPKIN_BOMB: int",
			desc: "Value: `19`"
		}],
		["TF_DMG_CUSTOM_DECAPITATION", {
			detail: "TF_DMG_CUSTOM_DECAPITATION: int",
			desc: "Value: `20`"
		}],
		["TF_DMG_CUSTOM_TAUNTATK_GRENADE", {
			detail: "TF_DMG_CUSTOM_TAUNTATK_GRENADE: int",
			desc: "Value: `21`"
		}],
		["TF_DMG_CUSTOM_BASEBALL", {
			detail: "TF_DMG_CUSTOM_BASEBALL: int",
			desc: "Value: `22`"
		}],
		["TF_DMG_CUSTOM_CHARGE_IMPACT", {
			detail: "TF_DMG_CUSTOM_CHARGE_IMPACT: int",
			desc: "Value: `23`"
		}],
		["TF_DMG_CUSTOM_TAUNTATK_BARBARIAN_SWING", {
			detail: "TF_DMG_CUSTOM_TAUNTATK_BARBARIAN_SWING: int",
			desc: "Value: `24`"
		}],
		["TF_DMG_CUSTOM_AIR_STICKY_BURST", {
			detail: "TF_DMG_CUSTOM_AIR_STICKY_BURST: int",
			desc: "Value: `25`"
		}],
		["TF_DMG_CUSTOM_DEFENSIVE_STICKY", {
			detail: "TF_DMG_CUSTOM_DEFENSIVE_STICKY: int",
			desc: "Value: `26`"
		}],
		["TF_DMG_CUSTOM_PICKAXE", {
			detail: "TF_DMG_CUSTOM_PICKAXE: int",
			desc: "Value: `27`"
		}],
		["TF_DMG_CUSTOM_ROCKET_DIRECTHIT", {
			detail: "TF_DMG_CUSTOM_ROCKET_DIRECTHIT: int",
			desc: "Value: `28`"
		}],
		["TF_DMG_CUSTOM_TAUNTATK_UBERSLICE", {
			detail: "TF_DMG_CUSTOM_TAUNTATK_UBERSLICE: int",
			desc: "Value: `29`"
		}],
		["TF_DMG_CUSTOM_PLAYER_SENTRY", {
			detail: "TF_DMG_CUSTOM_PLAYER_SENTRY: int",
			desc: "Value: `30`"
		}],
		["TF_DMG_CUSTOM_STANDARD_STICKY", {
			detail: "TF_DMG_CUSTOM_STANDARD_STICKY: int",
			desc: "Value: `31`"
		}],
		["TF_DMG_CUSTOM_SHOTGUN_REVENGE_CRIT", {
			detail: "TF_DMG_CUSTOM_SHOTGUN_REVENGE_CRIT: int",
			desc: "Value: `32`"
		}],
		["TF_DMG_CUSTOM_TAUNTATK_ENGINEER_GUITAR_SMASH", {
			detail: "TF_DMG_CUSTOM_TAUNTATK_ENGINEER_GUITAR_SMASH: int",
			desc: "Value: `33`"
		}],
		["TF_DMG_CUSTOM_BLEEDING", {
			detail: "TF_DMG_CUSTOM_BLEEDING: int",
			desc: "Value: `34`"
		}],
		["TF_DMG_CUSTOM_GOLD_WRENCH", {
			detail: "TF_DMG_CUSTOM_GOLD_WRENCH: int",
			desc: "Value: `35`"
		}],
		["TF_DMG_CUSTOM_CARRIED_BUILDING", {
			detail: "TF_DMG_CUSTOM_CARRIED_BUILDING: int",
			desc: "Value: `36`"
		}],
		["TF_DMG_CUSTOM_COMBO_PUNCH", {
			detail: "TF_DMG_CUSTOM_COMBO_PUNCH: int",
			desc: "Value: `37`"
		}],
		["TF_DMG_CUSTOM_TAUNTATK_ENGINEER_ARM_KILL", {
			detail: "TF_DMG_CUSTOM_TAUNTATK_ENGINEER_ARM_KILL: int",
			desc: "Value: `38`"
		}],
		["TF_DMG_CUSTOM_FISH_KILL", {
			detail: "TF_DMG_CUSTOM_FISH_KILL: int",
			desc: "Value: `39`"
		}],
		["TF_DMG_CUSTOM_TRIGGER_HURT", {
			detail: "TF_DMG_CUSTOM_TRIGGER_HURT: int",
			desc: "Value: `40`"
		}],
		["TF_DMG_CUSTOM_DECAPITATION_BOSS", {
			detail: "TF_DMG_CUSTOM_DECAPITATION_BOSS: int",
			desc: "Value: `41`"
		}],
		["TF_DMG_CUSTOM_STICKBOMB_EXPLOSION", {
			detail: "TF_DMG_CUSTOM_STICKBOMB_EXPLOSION: int",
			desc: "Value: `42`"
		}],
		["TF_DMG_CUSTOM_AEGIS_ROUND", {
			detail: "TF_DMG_CUSTOM_AEGIS_ROUND: int",
			desc: "Value: `43`"
		}],
		["TF_DMG_CUSTOM_FLARE_EXPLOSION", {
			detail: "TF_DMG_CUSTOM_FLARE_EXPLOSION: int",
			desc: "Value: `44`"
		}],
		["TF_DMG_CUSTOM_BOOTS_STOMP", {
			detail: "TF_DMG_CUSTOM_BOOTS_STOMP: int",
			desc: "Value: `45`"
		}],
		["TF_DMG_CUSTOM_PLASMA", {
			detail: "TF_DMG_CUSTOM_PLASMA: int",
			desc: "Value: `46`"
		}],
		["TF_DMG_CUSTOM_PLASMA_CHARGED", {
			detail: "TF_DMG_CUSTOM_PLASMA_CHARGED: int",
			desc: "Value: `47`"
		}],
		["TF_DMG_CUSTOM_PLASMA_GIB", {
			detail: "TF_DMG_CUSTOM_PLASMA_GIB: int",
			desc: "Value: `48`"
		}],
		["TF_DMG_CUSTOM_PRACTICE_STICKY", {
			detail: "TF_DMG_CUSTOM_PRACTICE_STICKY: int",
			desc: "Value: `49`"
		}],
		["TF_DMG_CUSTOM_EYEBALL_ROCKET", {
			detail: "TF_DMG_CUSTOM_EYEBALL_ROCKET: int",
			desc: "Value: `50`"
		}],
		["TF_DMG_CUSTOM_HEADSHOT_DECAPITATION", {
			detail: "TF_DMG_CUSTOM_HEADSHOT_DECAPITATION: int",
			desc: "Value: `51`"
		}],
		["TF_DMG_CUSTOM_TAUNTATK_ARMAGEDDON", {
			detail: "TF_DMG_CUSTOM_TAUNTATK_ARMAGEDDON: int",
			desc: "Value: `52`"
		}],
		["TF_DMG_CUSTOM_FLARE_PELLET", {
			detail: "TF_DMG_CUSTOM_FLARE_PELLET: int",
			desc: "Value: `53`"
		}],
		["TF_DMG_CUSTOM_CLEAVER", {
			detail: "TF_DMG_CUSTOM_CLEAVER: int",
			desc: "Value: `54`"
		}],
		["TF_DMG_CUSTOM_CLEAVER_CRIT", {
			detail: "TF_DMG_CUSTOM_CLEAVER_CRIT: int",
			desc: "Value: `55`"
		}],
		["TF_DMG_CUSTOM_SAPPER_RECORDER_DEATH", {
			detail: "TF_DMG_CUSTOM_SAPPER_RECORDER_DEATH: int",
			desc: "Value: `56`"
		}],
		["TF_DMG_CUSTOM_MERASMUS_PLAYER_BOMB", {
			detail: "TF_DMG_CUSTOM_MERASMUS_PLAYER_BOMB: int",
			desc: "Value: `57`"
		}],
		["TF_DMG_CUSTOM_MERASMUS_GRENADE", {
			detail: "TF_DMG_CUSTOM_MERASMUS_GRENADE: int",
			desc: "Value: `58`"
		}],
		["TF_DMG_CUSTOM_MERASMUS_ZAP", {
			detail: "TF_DMG_CUSTOM_MERASMUS_ZAP: int",
			desc: "Value: `59`"
		}],
		["TF_DMG_CUSTOM_MERASMUS_DECAPITATION", {
			detail: "TF_DMG_CUSTOM_MERASMUS_DECAPITATION: int",
			desc: "Value: `60`"
		}],
		["TF_DMG_CUSTOM_CANNONBALL_PUSH", {
			detail: "TF_DMG_CUSTOM_CANNONBALL_PUSH: int",
			desc: "Value: `61`"
		}],
		["TF_DMG_CUSTOM_TAUNTATK_ALLCLASS_GUITAR_RIFF", {
			detail: "TF_DMG_CUSTOM_TAUNTATK_ALLCLASS_GUITAR_RIFF: int",
			desc: "Value: `62`"
		}],
		["TF_DMG_CUSTOM_THROWABLE", {
			detail: "TF_DMG_CUSTOM_THROWABLE: int",
			desc: "Value: `63`"
		}],
		["TF_DMG_CUSTOM_THROWABLE_KILL", {
			detail: "TF_DMG_CUSTOM_THROWABLE_KILL: int",
			desc: "Value: `64`"
		}],
		["TF_DMG_CUSTOM_SPELL_TELEPORT", {
			detail: "TF_DMG_CUSTOM_SPELL_TELEPORT: int",
			desc: "Value: `65`"
		}],
		["TF_DMG_CUSTOM_SPELL_SKELETON", {
			detail: "TF_DMG_CUSTOM_SPELL_SKELETON: int",
			desc: "Value: `66`"
		}],
		["TF_DMG_CUSTOM_SPELL_MIRV", {
			detail: "TF_DMG_CUSTOM_SPELL_MIRV: int",
			desc: "Value: `67`"
		}],
		["TF_DMG_CUSTOM_SPELL_METEOR", {
			detail: "TF_DMG_CUSTOM_SPELL_METEOR: int",
			desc: "Value: `68`"
		}],
		["TF_DMG_CUSTOM_SPELL_LIGHTNING", {
			detail: "TF_DMG_CUSTOM_SPELL_LIGHTNING: int",
			desc: "Value: `69`"
		}],
		["TF_DMG_CUSTOM_SPELL_FIREBALL", {
			detail: "TF_DMG_CUSTOM_SPELL_FIREBALL: int",
			desc: "Value: `70`"
		}],
		["TF_DMG_CUSTOM_SPELL_MONOCULUS", {
			detail: "TF_DMG_CUSTOM_SPELL_MONOCULUS: int",
			desc: "Value: `71`"
		}],
		["TF_DMG_CUSTOM_SPELL_BLASTJUMP", {
			detail: "TF_DMG_CUSTOM_SPELL_BLASTJUMP: int",
			desc: "Value: `72`"
		}],
		["TF_DMG_CUSTOM_SPELL_BATS", {
			detail: "TF_DMG_CUSTOM_SPELL_BATS: int",
			desc: "Value: `73`"
		}],
		["TF_DMG_CUSTOM_SPELL_TINY", {
			detail: "TF_DMG_CUSTOM_SPELL_TINY: int",
			desc: "Value: `74`"
		}],
		["TF_DMG_CUSTOM_KART", {
			detail: "TF_DMG_CUSTOM_KART: int",
			desc: "Value: `75`"
		}],
		["TF_DMG_CUSTOM_GIANT_HAMMER", {
			detail: "TF_DMG_CUSTOM_GIANT_HAMMER: int",
			desc: "Value: `76`"
		}],
		["TF_DMG_CUSTOM_RUNE_REFLECT", {
			detail: "TF_DMG_CUSTOM_RUNE_REFLECT: int",
			desc: "Value: `77`"
		}],
		["TF_DMG_CUSTOM_DRAGONS_FURY_IGNITE", {
			detail: "TF_DMG_CUSTOM_DRAGONS_FURY_IGNITE: int",
			desc: "Value: `78`"
		}],
		["TF_DMG_CUSTOM_DRAGONS_FURY_BONUS_BURNING", {
			detail: "TF_DMG_CUSTOM_DRAGONS_FURY_BONUS_BURNING: int",
			desc: "Value: `79`"
		}],
		["TF_DMG_CUSTOM_SLAP_KILL", {
			detail: "TF_DMG_CUSTOM_SLAP_KILL: int",
			desc: "Value: `80`"
		}],
		["TF_DMG_CUSTOM_CROC", {
			detail: "TF_DMG_CUSTOM_CROC: int",
			desc: "Value: `81`"
		}],
		["TF_DMG_CUSTOM_TAUNTATK_GASBLAST", {
			detail: "TF_DMG_CUSTOM_TAUNTATK_GASBLAST: int",
			desc: "Value: `82`"
		}],
		["TF_DMG_CUSTOM_AXTINGUISHER_BOOSTED", {
			detail: "TF_DMG_CUSTOM_AXTINGUISHER_BOOSTED: int",
			desc: "Value: `83`"
		}],
		["TF_DMG_CUSTOM_KRAMPUS_MELEE", {
			detail: "TF_DMG_CUSTOM_KRAMPUS_MELEE: int",
			desc: "Value: `84`"
		}],
		["TF_DMG_CUSTOM_KRAMPUS_RANGED", {
			detail: "TF_DMG_CUSTOM_KRAMPUS_RANGED: int",
			desc: "Value: `85`"
		}],
		["TF_DMG_CUSTOM_END", {
			detail: "TF_DMG_CUSTOM_END: int",
			desc: "Value: `86`"
		}]
	])],
	["ETFTeam", new Map([
		["TEAM_UNASSIGNED", {
			detail: "TEAM_UNASSIGNED: int",
			desc: "Value: `0`\n\nBug: This is supposed to be `0` instead of `null`"
		}],
		["TEAM_SPECTATOR", {
			detail: "TEAM_SPECTATOR: int",
			desc: "Value: `1`"
		}],
		["TF_TEAM_PVE_DEFENDERS", {
			detail: "TF_TEAM_PVE_DEFENDERS: int",
			desc: "Value: `2`"
		}],
		["TF_TEAM_RED", {
			detail: "TF_TEAM_RED: int",
			desc: "Value: `2`"
		}],
		["TF_TEAM_BLUE", {
			detail: "TF_TEAM_BLUE: int",
			desc: "Value: `3`"
		}],
		["TF_TEAM_PVE_INVADERS", {
			detail: "TF_TEAM_PVE_INVADERS: int",
			desc: "Value: `3`"
		}],
		["TF_TEAM_COUNT", {
			detail: "TF_TEAM_COUNT: int",
			desc: "Value: `4`"
		}],
		["TF_TEAM_PVE_INVADERS_GIANTS", {
			detail: "TF_TEAM_PVE_INVADERS_GIANTS: int",
			desc: "Value: `4`"
		}],
		["TEAM_ANY", {
			detail: "TEAM_ANY: int",
			desc: "Value: `-2`"
		}],
		["TEAM_INVALID", {
			detail: "TEAM_INVALID: int",
			desc: "Value: `-1`"
		}]
	])],
	["Math", new Map([
		["Zero", {
			detail: "Zero: int",
			desc: "Value: `0`"
		}],
		["Epsilon", {
			detail: "Epsilon: float",
			desc: "Value: `1.19209e-07`"
		}],
		["GoldenRatio", {
			detail: "GoldenRatio: float",
			desc: "Value: `1.61803`"
		}],
		["One", {
			detail: "One: int",
			desc: "Value: `1`"
		}],
		["Sqrt2", {
			detail: "Sqrt2: float",
			desc: "Value: `1.41421`"
		}],
		["Sqrt3", {
			detail: "Sqrt3: float",
			desc: "Value: `1.73205`"
		}],
		["E", {
			detail: "E: float",
			desc: "Value: `2.71828`"
		}],
		["Pi", {
			detail: "Pi: float",
			desc: "Value: `3.14159`"
		}],
		["Tau", {
			detail: "Tau: int",
			desc: "Value: `6.28319`"
		}]
	])],
	["Server", new Map([
		["ConstantNamingConvention", {
			detail: "ConstantNamingConvention: string",
			desc: "Value: \"Constants are named as follows: F -> flags, E -> enums, (nothing) -> random values/constants\""
		}],
		["DIST_EPSILON", {
			detail: "DIST_EPSILON: float",
			desc: "Value: `0`.03125"
		}],
		["MAX_PLAYERS", {
			detail: "MAX_PLAYERS: int",
			desc: "Value: `101`"
		}],
		["MAX_EDICTS", {
			detail: "MAX_EDICTS: int",
			desc: "Value: `2048`"
		}]
	])],
	["FButtons", new Map([
		["IN_ATTACK", {
			detail: "IN_ATTACK: int",
			desc: "Value: `1`"
		}],
		["IN_JUMP", {
			detail: "IN_JUMP: int",
			desc: "Value: `2`"
		}],
		["IN_DUCK", {
			detail: "IN_DUCK: int",
			desc: "Value: `4`"
		}],
		["IN_FORWARD", {
			detail: "IN_FORWARD: int",
			desc: "Value: `8`"
		}],
		["IN_BACK", {
			detail: "IN_BACK: int",
			desc: "Value: `16`"
		}],
		["IN_USE", {
			detail: "IN_USE: int",
			desc: "Value: `32`"
		}],
		["IN_CANCEL", {
			detail: "IN_CANCEL: int",
			desc: "Value: `64`"
		}],
		["IN_LEFT", {
			detail: "IN_LEFT: int",
			desc: "Value: `128`"
		}],
		["IN_RIGHT", {
			detail: "IN_RIGHT: int",
			desc: "Value: `256`"
		}],
		["IN_MOVELEFT", {
			detail: "IN_MOVELEFT: int",
			desc: "Value: `512`"
		}],
		["IN_MOVERIGHT", {
			detail: "IN_MOVERIGHT: int",
			desc: "Value: `1024`"
		}],
		["IN_ATTACK2", {
			detail: "IN_ATTACK2: int",
			desc: "Value: `2048`"
		}],
		["IN_RUN", {
			detail: "IN_RUN: int",
			desc: "Value: `4096`"
		}],
		["IN_RELOAD", {
			detail: "IN_RELOAD: int",
			desc: "Value: `8192`"
		}],
		["IN_ALT1", {
			detail: "IN_ALT1: int",
			desc: "Value: `16384`"
		}],
		["IN_ALT2", {
			detail: "IN_ALT2: int",
			desc: "Value: `32768`"
		}],
		["IN_SCORE", {
			detail: "IN_SCORE: int",
			desc: "Value: `65536`"
		}],
		["IN_SPEED", {
			detail: "IN_SPEED: int",
			desc: "Value: `131072`"
		}],
		["IN_WALK", {
			detail: "IN_WALK: int",
			desc: "Value: `262144`"
		}],
		["IN_ZOOM", {
			detail: "IN_ZOOM: int",
			desc: "Value: `524288`"
		}],
		["IN_WEAPON1", {
			detail: "IN_WEAPON1: int",
			desc: "Value: `1048576`"
		}],
		["IN_WEAPON2", {
			detail: "IN_WEAPON2: int",
			desc: "Value: `2097152`"
		}],
		["IN_BULLRUSH", {
			detail: "IN_BULLRUSH: int",
			desc: "Value: `4194304`"
		}],
		["IN_GRENADE1", {
			detail: "IN_GRENADE1: int",
			desc: "Value: `8388608`"
		}],
		["IN_GRENADE2", {
			detail: "IN_GRENADE2: int",
			desc: "Value: `16777216`"
		}],
		["IN_ATTACK3", {
			detail: "IN_ATTACK3: int",
			desc: "Value: `33554432`"
		}]
	])],
	["FContents", new Map([
		["CONTENTS_EMPTY", {
			detail: "CONTENTS_EMPTY: int",
			desc: "Value: `0`\n\nBug: This is supposed to be `0` instead of `null`"
		}],
		["CONTENTS_SOLID", {
			detail: "CONTENTS_SOLID: int",
			desc: "Value: `1`"
		}],
		["CONTENTS_WINDOW", {
			detail: "CONTENTS_WINDOW: int",
			desc: "Value: `2`"
		}],
		["CONTENTS_AUX", {
			detail: "CONTENTS_AUX: int",
			desc: "Value: `4`"
		}],
		["CONTENTS_GRATE", {
			detail: "CONTENTS_GRATE: int",
			desc: "Value: `8`"
		}],
		["CONTENTS_SLIME", {
			detail: "CONTENTS_SLIME: int",
			desc: "Value: `16`"
		}],
		["CONTENTS_WATER", {
			detail: "CONTENTS_WATER: int",
			desc: "Value: `32`"
		}],
		["CONTENTS_BLOCKLOS", {
			detail: "CONTENTS_BLOCKLOS: int",
			desc: "Value: `64`"
		}],
		["CONTENTS_OPAQUE", {
			detail: "CONTENTS_OPAQUE: int",
			desc: "Value: `128`"
		}],
		["LAST_VISIBLE_CONTENTS", {
			detail: "LAST_VISIBLE_CONTENTS: int",
			desc: "Value: `128`"
		}],
		["ALL_VISIBLE_CONTENTS", {
			detail: "ALL_VISIBLE_CONTENTS: int",
			desc: "Value: `255`"
		}],
		["CONTENTS_TESTFOGVOLUME", {
			detail: "CONTENTS_TESTFOGVOLUME: int",
			desc: "Value: `256`"
		}],
		["CONTENTS_UNUSED", {
			detail: "CONTENTS_UNUSED: int",
			desc: "Value: `512`"
		}],
		["CONTENTS_UNUSED6", {
			detail: "CONTENTS_UNUSED6: int",
			desc: "Value: `1024`"
		}],
		["CONTENTS_TEAM1", {
			detail: "CONTENTS_TEAM1: int",
			desc: "Value: `2048`"
		}],
		["CONTENTS_TEAM2", {
			detail: "CONTENTS_TEAM2: int",
			desc: "Value: `4096`"
		}],
		["CONTENTS_IGNORE_NODRAW_OPAQUE", {
			detail: "CONTENTS_IGNORE_NODRAW_OPAQUE: int",
			desc: "Value: `8192`"
		}],
		["CONTENTS_MOVEABLE", {
			detail: "CONTENTS_MOVEABLE: int",
			desc: "Value: `16384`"
		}],
		["CONTENTS_AREAPORTAL", {
			detail: "CONTENTS_AREAPORTAL: int",
			desc: "Value: `32768`"
		}],
		["CONTENTS_PLAYERCLIP", {
			detail: "CONTENTS_PLAYERCLIP: int",
			desc: "Value: `65536`"
		}],
		["CONTENTS_MONSTERCLIP", {
			detail: "CONTENTS_MONSTERCLIP: int",
			desc: "Value: `131072`"
		}],
		["CONTENTS_CURRENT_0", {
			detail: "CONTENTS_CURRENT_0: int",
			desc: "Value: `262144`"
		}],
		["CONTENTS_CURRENT_90", {
			detail: "CONTENTS_CURRENT_90: int",
			desc: "Value: `524288`"
		}],
		["CONTENTS_CURRENT_180", {
			detail: "CONTENTS_CURRENT_180: int",
			desc: "Value: `1048576`"
		}],
		["CONTENTS_CURRENT_270", {
			detail: "CONTENTS_CURRENT_270: int",
			desc: "Value: `2097152`"
		}],
		["CONTENTS_CURRENT_UP", {
			detail: "CONTENTS_CURRENT_UP: int",
			desc: "Value: `4194304`"
		}],
		["CONTENTS_CURRENT_DOWN", {
			detail: "CONTENTS_CURRENT_DOWN: int",
			desc: "Value: `8388608`"
		}],
		["CONTENTS_ORIGIN", {
			detail: "CONTENTS_ORIGIN: int",
			desc: "Value: `16777216`"
		}],
		["CONTENTS_MONSTER", {
			detail: "CONTENTS_MONSTER: int",
			desc: "Value: `33554432`"
		}],
		["CONTENTS_DEBRIS", {
			detail: "CONTENTS_DEBRIS: int",
			desc: "Value: `67108864`"
		}],
		["CONTENTS_DETAIL", {
			detail: "CONTENTS_DETAIL: int",
			desc: "Value: `134217728`"
		}],
		["CONTENTS_TRANSLUCENT", {
			detail: "CONTENTS_TRANSLUCENT: int",
			desc: "Value: `268435456`"
		}],
		["CONTENTS_LADDER", {
			detail: "CONTENTS_LADDER: int",
			desc: "Value: `536870912`"
		}],
		["CONTENTS_HITBOX", {
			detail: "CONTENTS_HITBOX: int",
			desc: "Value: `1073741824`"
		}]
	])],
	["FDmgType", new Map([
		["DMG_GENERIC", {
			detail: "DMG_GENERIC: int",
			desc: "Value: `0`\n\nBug: This is supposed to be `0` instead of `null`"
		}],
		["DMG_CRUSH", {
			detail: "DMG_CRUSH: int",
			desc: "Value: `1`"
		}],
		["DMG_BULLET", {
			detail: "DMG_BULLET: int",
			desc: "Value: `2`"
		}],
		["DMG_SLASH", {
			detail: "DMG_SLASH: int",
			desc: "Value: `4`"
		}],
		["DMG_BURN", {
			detail: "DMG_BURN: int",
			desc: "Value: `8`"
		}],
		["DMG_VEHICLE", {
			detail: "DMG_VEHICLE: int",
			desc: "Value: `16`"
		}],
		["DMG_FALL", {
			detail: "DMG_FALL: int",
			desc: "Value: `32`"
		}],
		["DMG_BLAST", {
			detail: "DMG_BLAST: int",
			desc: "Value: `64`"
		}],
		["DMG_CLUB", {
			detail: "DMG_CLUB: int",
			desc: "Value: `128`"
		}],
		["DMG_SHOCK", {
			detail: "DMG_SHOCK: int",
			desc: "Value: `256`"
		}],
		["DMG_SONIC", {
			detail: "DMG_SONIC: int",
			desc: "Value: `512`"
		}],
		["DMG_ENERGYBEAM", {
			detail: "DMG_ENERGYBEAM: int",
			desc: "Value: `1024`"
		}],
		["DMG_PREVENT_PHYSICS_FORCE", {
			detail: "DMG_PREVENT_PHYSICS_FORCE: int",
			desc: "Value: `2048`"
		}],
		["DMG_NEVERGIB", {
			detail: "DMG_NEVERGIB: int",
			desc: "Value: `4096`"
		}],
		["DMG_ALWAYSGIB", {
			detail: "DMG_ALWAYSGIB: int",
			desc: "Value: `8192`"
		}],
		["DMG_DROWN", {
			detail: "DMG_DROWN: int",
			desc: "Value: `16384`"
		}],
		["DMG_PARALYZE", {
			detail: "DMG_PARALYZE: int",
			desc: "Value: `32768`"
		}],
		["DMG_NERVEGAS", {
			detail: "DMG_NERVEGAS: int",
			desc: "Value: `65536`"
		}],
		["DMG_POISON", {
			detail: "DMG_POISON: int",
			desc: "Value: `131072`"
		}],
		["DMG_RADIATION", {
			detail: "DMG_RADIATION: int",
			desc: "Value: `262144`"
		}],
		["DMG_DROWNRECOVER", {
			detail: "DMG_DROWNRECOVER: int",
			desc: "Value: `524288`"
		}],
		["DMG_ACID", {
			detail: "DMG_ACID: int",
			desc: "Value: `1048576`"
		}],
		["DMG_SLOWBURN", {
			detail: "DMG_SLOWBURN: int",
			desc: "Value: `2097152`"
		}],
		["DMG_REMOVENORAGDOLL", {
			detail: "DMG_REMOVENORAGDOLL: int",
			desc: "Value: `4194304`"
		}],
		["DMG_PHYSGUN", {
			detail: "DMG_PHYSGUN: int",
			desc: "Value: `8388608`"
		}],
		["DMG_PLASMA", {
			detail: "DMG_PLASMA: int",
			desc: "Value: `16777216`"
		}],
		["DMG_AIRBOAT", {
			detail: "DMG_AIRBOAT: int",
			desc: "Value: `33554432`"
		}],
		["DMG_DISSOLVE", {
			detail: "DMG_DISSOLVE: int",
			desc: "Value: `67108864`"
		}],
		["DMG_BLAST_SURFACE", {
			detail: "DMG_BLAST_SURFACE: int",
			desc: "Value: `134217728`"
		}],
		["DMG_DIRECT", {
			detail: "DMG_DIRECT: int",
			desc: "Value: `268435456`"
		}],
		["DMG_BUCKSHOT", {
			detail: "DMG_BUCKSHOT: int",
			desc: "Value: `536870912`"
		}]
	])],
	["FEntityEffects", new Map([
		["EF_BONEMERGE", {
			detail: "EF_BONEMERGE: int",
			desc: "Value: `1`"
		}],
		["EF_BRIGHTLIGHT", {
			detail: "EF_BRIGHTLIGHT: int",
			desc: "Value: `2`"
		}],
		["EF_DIMLIGHT", {
			detail: "EF_DIMLIGHT: int",
			desc: "Value: `4`"
		}],
		["EF_NOINTERP", {
			detail: "EF_NOINTERP: int",
			desc: "Value: `8`"
		}],
		["EF_MAX_BITS", {
			detail: "EF_MAX_BITS: int",
			desc: "Value: `10`"
		}],
		["EF_NOSHADOW", {
			detail: "EF_NOSHADOW: int",
			desc: "Value: `16`"
		}],
		["EF_NODRAW", {
			detail: "EF_NODRAW: int",
			desc: "Value: `32`"
		}],
		["EF_NORECEIVESHADOW", {
			detail: "EF_NORECEIVESHADOW: int",
			desc: "Value: `64`"
		}],
		["EF_BONEMERGE_FASTCULL", {
			detail: "EF_BONEMERGE_FASTCULL: int",
			desc: "Value: `128`"
		}],
		["EF_ITEM_BLINK", {
			detail: "EF_ITEM_BLINK: int",
			desc: "Value: `256`"
		}],
		["EF_PARENT_ANIMATES", {
			detail: "EF_PARENT_ANIMATES: int",
			desc: "Value: `512`"
		}]
	])],
	["FEntityEFlags", new Map([
		["EFL_KILLME", {
			detail: "EFL_KILLME: int",
			desc: "Value: `1`"
		}],
		["EFL_DORMANT", {
			detail: "EFL_DORMANT: int",
			desc: "Value: `2`"
		}],
		["EFL_NOCLIP_ACTIVE", {
			detail: "EFL_NOCLIP_ACTIVE: int",
			desc: "Value: `4`"
		}],
		["EFL_SETTING_UP_BONES", {
			detail: "EFL_SETTING_UP_BONES: int",
			desc: "Value: `8`"
		}],
		["EFL_HAS_PLAYER_CHILD", {
			detail: "EFL_HAS_PLAYER_CHILD: int",
			desc: "Value: `16`"
		}],
		["EFL_KEEP_ON_RECREATE_ENTITIES", {
			detail: "EFL_KEEP_ON_RECREATE_ENTITIES: int",
			desc: "Value: `16`"
		}],
		["EFL_DIRTY_SHADOWUPDATE", {
			detail: "EFL_DIRTY_SHADOWUPDATE: int",
			desc: "Value: `32`"
		}],
		["EFL_NOTIFY", {
			detail: "EFL_NOTIFY: int",
			desc: "Value: `64`"
		}],
		["EFL_FORCE_CHECK_TRANSMIT", {
			detail: "EFL_FORCE_CHECK_TRANSMIT: int",
			desc: "Value: `128`"
		}],
		["EFL_BOT_FROZEN", {
			detail: "EFL_BOT_FROZEN: int",
			desc: "Value: `256`"
		}],
		["EFL_SERVER_ONLY", {
			detail: "EFL_SERVER_ONLY: int",
			desc: "Value: `512`"
		}],
		["EFL_NO_AUTO_EDICT_ATTACH", {
			detail: "EFL_NO_AUTO_EDICT_ATTACH: int",
			desc: "Value: `1024`"
		}],
		["EFL_DIRTY_ABSTRANSFORM", {
			detail: "EFL_DIRTY_ABSTRANSFORM: int",
			desc: "Value: `2048`"
		}],
		["EFL_DIRTY_ABSVELOCITY", {
			detail: "EFL_DIRTY_ABSVELOCITY: int",
			desc: "Value: `4096`"
		}],
		["EFL_DIRTY_ABSANGVELOCITY", {
			detail: "EFL_DIRTY_ABSANGVELOCITY: int",
			desc: "Value: `8192`"
		}],
		["EFL_DIRTY_SURROUNDING_COLLISION_BOUNDS", {
			detail: "EFL_DIRTY_SURROUNDING_COLLISION_BOUNDS: int",
			desc: "Value: `16384`"
		}],
		["EFL_DIRTY_SPATIAL_PARTITION", {
			detail: "EFL_DIRTY_SPATIAL_PARTITION: int",
			desc: "Value: `32768`"
		}],
		["EFL_FORCE_ALLOW_MOVEPARENT", {
			detail: "EFL_FORCE_ALLOW_MOVEPARENT: int",
			desc: "Value: `65536`"
		}],
		["EFL_IN_SKYBOX", {
			detail: "EFL_IN_SKYBOX: int",
			desc: "Value: `131072`"
		}],
		["EFL_USE_PARTITION_WHEN_NOT_SOLID", {
			detail: "EFL_USE_PARTITION_WHEN_NOT_SOLID: int",
			desc: "Value: `262144`"
		}],
		["EFL_TOUCHING_FLUID", {
			detail: "EFL_TOUCHING_FLUID: int",
			desc: "Value: `524288`"
		}],
		["EFL_IS_BEING_LIFTED_BY_BARNACLE", {
			detail: "EFL_IS_BEING_LIFTED_BY_BARNACLE: int",
			desc: "Value: `1048576`"
		}],
		["EFL_NO_ROTORWASH_PUSH", {
			detail: "EFL_NO_ROTORWASH_PUSH: int",
			desc: "Value: `2097152`"
		}],
		["EFL_NO_THINK_FUNCTION", {
			detail: "EFL_NO_THINK_FUNCTION: int",
			desc: "Value: `4194304`"
		}],
		["EFL_NO_GAME_PHYSICS_SIMULATION", {
			detail: "EFL_NO_GAME_PHYSICS_SIMULATION: int",
			desc: "Value: `8388608`"
		}],
		["EFL_CHECK_UNTOUCH", {
			detail: "EFL_CHECK_UNTOUCH: int",
			desc: "Value: `16777216`"
		}],
		["EFL_DONTBLOCKLOS", {
			detail: "EFL_DONTBLOCKLOS: int",
			desc: "Value: `33554432`"
		}],
		["EFL_DONTWALKON", {
			detail: "EFL_DONTWALKON: int",
			desc: "Value: `67108864`"
		}],
		["EFL_NO_DISSOLVE", {
			detail: "EFL_NO_DISSOLVE: int",
			desc: "Value: `134217728`"
		}],
		["EFL_NO_MEGAPHYSCANNON_RAGDOLL", {
			detail: "EFL_NO_MEGAPHYSCANNON_RAGDOLL: int",
			desc: "Value: `268435456`"
		}],
		["EFL_NO_WATER_VELOCITY_CHANGE", {
			detail: "EFL_NO_WATER_VELOCITY_CHANGE: int",
			desc: "Value: `536870912`"
		}],
		["EFL_NO_PHYSCANNON_INTERACTION", {
			detail: "EFL_NO_PHYSCANNON_INTERACTION: int",
			desc: "Value: `1073741824`"
		}],
		["EFL_NO_DAMAGE_FORCES", {
			detail: "EFL_NO_DAMAGE_FORCES: int",
			desc: "Value: `2147483648`"
		}]
	])],
	["FHideHUD", new Map([
		["HIDEHUD_WEAPONSELECTION", {
			detail: "HIDEHUD_WEAPONSELECTION: int",
			desc: "Value: `1`"
		}],
		["HIDEHUD_FLASHLIGHT", {
			detail: "HIDEHUD_FLASHLIGHT: int",
			desc: "Value: `2`"
		}],
		["HIDEHUD_ALL", {
			detail: "HIDEHUD_ALL: int",
			desc: "Value: `4`"
		}],
		["HIDEHUD_HEALTH", {
			detail: "HIDEHUD_HEALTH: int",
			desc: "Value: `8`"
		}],
		["HIDEHUD_PLAYERDEAD", {
			detail: "HIDEHUD_PLAYERDEAD: int",
			desc: "Value: `16`"
		}],
		["HIDEHUD_BITCOUNT", {
			detail: "HIDEHUD_BITCOUNT: int",
			desc: "Value: `18`"
		}],
		["HIDEHUD_NEEDSUIT", {
			detail: "HIDEHUD_NEEDSUIT: int",
			desc: "Value: `32`"
		}],
		["HIDEHUD_MISCSTATUS", {
			detail: "HIDEHUD_MISCSTATUS: int",
			desc: "Value: `64`"
		}],
		["HIDEHUD_CHAT", {
			detail: "HIDEHUD_CHAT: int",
			desc: "Value: `128`"
		}],
		["HIDEHUD_CROSSHAIR", {
			detail: "HIDEHUD_CROSSHAIR: int",
			desc: "Value: `256`"
		}],
		["HIDEHUD_VEHICLE_CROSSHAIR", {
			detail: "HIDEHUD_VEHICLE_CROSSHAIR: int",
			desc: "Value: `512`"
		}],
		["HIDEHUD_INVEHICLE", {
			detail: "HIDEHUD_INVEHICLE: int",
			desc: "Value: `1024`"
		}],
		["HIDEHUD_BONUS_PROGRESS", {
			detail: "HIDEHUD_BONUS_PROGRESS: int",
			desc: "Value: `2048`"
		}],
		["HIDEHUD_BUILDING_STATUS", {
			detail: "HIDEHUD_BUILDING_STATUS: int",
			desc: "Value: `4096`"
		}],
		["HIDEHUD_CLOAK_AND_FEIGN", {
			detail: "HIDEHUD_CLOAK_AND_FEIGN: int",
			desc: "Value: `8192`"
		}],
		["HIDEHUD_PIPES_AND_CHARGE", {
			detail: "HIDEHUD_PIPES_AND_CHARGE: int",
			desc: "Value: `16384`"
		}],
		["HIDEHUD_METAL", {
			detail: "HIDEHUD_METAL: int",
			desc: "Value: `32768`"
		}],
		["HIDEHUD_TARGET_ID", {
			detail: "HIDEHUD_TARGET_ID: int",
			desc: "Value: `65536`"
		}],
		["HIDEHUD_MATCH_STATUS", {
			detail: "HIDEHUD_MATCH_STATUS: int",
			desc: "Value: `131072`"
		}]
	])],
	["FNavAttributeType", new Map([
		["NAV_MESH_INVALID", {
			detail: "NAV_MESH_INVALID: int",
			desc: "Value: `0`"
		}],
		["NAV_MESH_CROUCH", {
			detail: "NAV_MESH_CROUCH: int",
			desc: "Value: `1`"
		}],
		["NAV_MESH_JUMP", {
			detail: "NAV_MESH_JUMP: int",
			desc: "Value: `2`"
		}],
		["NAV_MESH_PRECISE", {
			detail: "NAV_MESH_PRECISE: int",
			desc: "Value: `4`"
		}],
		["NAV_MESH_NO_JUMP", {
			detail: "NAV_MESH_NO_JUMP: int",
			desc: "Value: `8`"
		}],
		["NAV_MESH_STOP", {
			detail: "NAV_MESH_STOP: int",
			desc: "Value: `16`"
		}],
		["NAV_MESH_RUN", {
			detail: "NAV_MESH_RUN: int",
			desc: "Value: `32`"
		}],
		["NAV_MESH_WALK", {
			detail: "NAV_MESH_WALK: int",
			desc: "Value: `64`"
		}],
		["NAV_MESH_AVOID", {
			detail: "NAV_MESH_AVOID: int",
			desc: "Value: `128`"
		}],
		["NAV_MESH_TRANSIENT", {
			detail: "NAV_MESH_TRANSIENT: int",
			desc: "Value: `256`"
		}],
		["NAV_MESH_DONT_HIDE", {
			detail: "NAV_MESH_DONT_HIDE: int",
			desc: "Value: `512`"
		}],
		["NAV_MESH_STAND", {
			detail: "NAV_MESH_STAND: int",
			desc: "Value: `1024`"
		}],
		["NAV_MESH_NO_HOSTAGES", {
			detail: "NAV_MESH_NO_HOSTAGES: int",
			desc: "Value: `2048`"
		}],
		["NAV_MESH_STAIRS", {
			detail: "NAV_MESH_STAIRS: int",
			desc: "Value: `4096`"
		}],
		["NAV_MESH_NO_MERGE", {
			detail: "NAV_MESH_NO_MERGE: int",
			desc: "Value: `8192`"
		}],
		["NAV_MESH_OBSTACLE_TOP", {
			detail: "NAV_MESH_OBSTACLE_TOP: int",
			desc: "Value: `16384`"
		}],
		["NAV_MESH_CLIFF", {
			detail: "NAV_MESH_CLIFF: int",
			desc: "Value: `32768`"
		}],
		["NAV_MESH_FIRST_CUSTOM", {
			detail: "NAV_MESH_FIRST_CUSTOM: int",
			desc: "Value: `65536`"
		}],
		["NAV_MESH_LAST_CUSTOM", {
			detail: "NAV_MESH_LAST_CUSTOM: int",
			desc: "Value: `67108864`"
		}],
		["NAV_MESH_FUNC_COST", {
			detail: "NAV_MESH_FUNC_COST: int",
			desc: "Value: `536870912`"
		}],
		["NAV_MESH_HAS_ELEVATOR", {
			detail: "NAV_MESH_HAS_ELEVATOR: int",
			desc: "Value: `1073741824`"
		}],
		["NAV_MESH_NAV_BLOCKER", {
			detail: "NAV_MESH_NAV_BLOCKER: int",
			desc: "Value: `2147483648`"
		}]
	])],
	["FPlayer", new Map([
		["FL_ONGROUND", {
			detail: "FL_ONGROUND: int",
			desc: "Value: `1`"
		}],
		["FL_DUCKING", {
			detail: "FL_DUCKING: int",
			desc: "Value: `2`"
		}],
		["FL_ANIMDUCKING", {
			detail: "FL_ANIMDUCKING: int",
			desc: "Value: `4`"
		}],
		["FL_WATERJUMP", {
			detail: "FL_WATERJUMP: int",
			desc: "Value: `8`"
		}],
		["PLAYER_FLAG_BITS", {
			detail: "PLAYER_FLAG_BITS: int",
			desc: "Value: `11`"
		}],
		["FL_ONTRAIN", {
			detail: "FL_ONTRAIN: int",
			desc: "Value: `16`"
		}],
		["FL_INRAIN", {
			detail: "FL_INRAIN: int",
			desc: "Value: `32`"
		}],
		["FL_FROZEN", {
			detail: "FL_FROZEN: int",
			desc: "Value: `64`"
		}],
		["FL_ATCONTROLS", {
			detail: "FL_ATCONTROLS: int",
			desc: "Value: `128`"
		}],
		["FL_CLIENT", {
			detail: "FL_CLIENT: int",
			desc: "Value: `256`"
		}],
		["FL_FAKECLIENT", {
			detail: "FL_FAKECLIENT: int",
			desc: "Value: `512`"
		}],
		["FL_INWATER", {
			detail: "FL_INWATER: int",
			desc: "Value: `1024`"
		}],
		["FL_FLY", {
			detail: "FL_FLY: int",
			desc: "Value: `2048`"
		}],
		["FL_SWIM", {
			detail: "FL_SWIM: int",
			desc: "Value: `4096`"
		}],
		["FL_CONVEYOR", {
			detail: "FL_CONVEYOR: int",
			desc: "Value: `8192`"
		}],
		["FL_NPC", {
			detail: "FL_NPC: int",
			desc: "Value: `16384`"
		}],
		["FL_GODMODE", {
			detail: "FL_GODMODE: int",
			desc: "Value: `32768`"
		}],
		["FL_NOTARGET", {
			detail: "FL_NOTARGET: int",
			desc: "Value: `65536`"
		}],
		["FL_AIMTARGET", {
			detail: "FL_AIMTARGET: int",
			desc: "Value: `131072`"
		}],
		["FL_PARTIALGROUND", {
			detail: "FL_PARTIALGROUND: int",
			desc: "Value: `262144`"
		}],
		["FL_STATICPROP", {
			detail: "FL_STATICPROP: int",
			desc: "Value: `524288`"
		}],
		["FL_GRAPHED", {
			detail: "FL_GRAPHED: int",
			desc: "Value: `1048576`"
		}],
		["FL_GRENADE", {
			detail: "FL_GRENADE: int",
			desc: "Value: `2097152`"
		}],
		["FL_STEPMOVEMENT", {
			detail: "FL_STEPMOVEMENT: int",
			desc: "Value: `4194304`"
		}],
		["FL_DONTTOUCH", {
			detail: "FL_DONTTOUCH: int",
			desc: "Value: `8388608`"
		}],
		["FL_BASEVELOCITY", {
			detail: "FL_BASEVELOCITY: int",
			desc: "Value: `16777216`"
		}],
		["FL_WORLDBRUSH", {
			detail: "FL_WORLDBRUSH: int",
			desc: "Value: `33554432`"
		}],
		["FL_OBJECT", {
			detail: "FL_OBJECT: int",
			desc: "Value: `67108864`"
		}],
		["FL_KILLME", {
			detail: "FL_KILLME: int",
			desc: "Value: `134217728`"
		}],
		["FL_ONFIRE", {
			detail: "FL_ONFIRE: int",
			desc: "Value: `268435456`"
		}],
		["FL_DISSOLVING", {
			detail: "FL_DISSOLVING: int",
			desc: "Value: `536870912`"
		}],
		["FL_TRANSRAGDOLL", {
			detail: "FL_TRANSRAGDOLL: int",
			desc: "Value: `1073741824`"
		}],
		["FL_UNBLOCKABLE_BY_PLAYER", {
			detail: "FL_UNBLOCKABLE_BY_PLAYER: int",
			desc: "Value: `2147483648`"
		}]
	])],
	["FSolid", new Map([
		["FSOLID_CUSTOMRAYTEST", {
			detail: "FSOLID_CUSTOMRAYTEST: int",
			desc: "Value: `1`"
		}],
		["FSOLID_CUSTOMBOXTEST", {
			detail: "FSOLID_CUSTOMBOXTEST: int",
			desc: "Value: `2`"
		}],
		["FSOLID_NOT_SOLID", {
			detail: "FSOLID_NOT_SOLID: int",
			desc: "Value: `4`"
		}],
		["FSOLID_TRIGGER", {
			detail: "FSOLID_TRIGGER: int",
			desc: "Value: `8`"
		}],
		["FSOLID_MAX_BITS", {
			detail: "FSOLID_MAX_BITS: int",
			desc: "Value: `10`"
		}],
		["FSOLID_NOT_STANDABLE", {
			detail: "FSOLID_NOT_STANDABLE: int",
			desc: "Value: `16`"
		}],
		["FSOLID_VOLUME_CONTENTS", {
			detail: "FSOLID_VOLUME_CONTENTS: int",
			desc: "Value: `32`"
		}],
		["FSOLID_FORCE_WORLD_ALIGNED", {
			detail: "FSOLID_FORCE_WORLD_ALIGNED: int",
			desc: "Value: `64`"
		}],
		["FSOLID_USE_TRIGGER_BOUNDS", {
			detail: "FSOLID_USE_TRIGGER_BOUNDS: int",
			desc: "Value: `128`"
		}],
		["FSOLID_ROOT_PARENT_ALIGNED", {
			detail: "FSOLID_ROOT_PARENT_ALIGNED: int",
			desc: "Value: `256`"
		}],
		["FSOLID_TRIGGER_TOUCH_DEBRIS", {
			detail: "FSOLID_TRIGGER_TOUCH_DEBRIS: int",
			desc: "Value: `512`"
		}]
	])],
	["FSurf", new Map([
		["SURF_LIGHT", {
			detail: "SURF_LIGHT: int",
			desc: "Value: `1`"
		}],
		["SURF_SKY2D", {
			detail: "SURF_SKY2D: int",
			desc: "Value: `2`"
		}],
		["SURF_SKY", {
			detail: "SURF_SKY: int",
			desc: "Value: `4`"
		}],
		["SURF_WARP", {
			detail: "SURF_WARP: int",
			desc: "Value: `8`"
		}],
		["SURF_TRANS", {
			detail: "SURF_TRANS: int",
			desc: "Value: `16`"
		}],
		["SURF_NOPORTAL", {
			detail: "SURF_NOPORTAL: int",
			desc: "Value: `32`"
		}],
		["SURF_TRIGGER", {
			detail: "SURF_TRIGGER: int",
			desc: "Value: `64`"
		}],
		["SURF_NODRAW", {
			detail: "SURF_NODRAW: int",
			desc: "Value: `128`"
		}],
		["SURF_HINT", {
			detail: "SURF_HINT: int",
			desc: "Value: `256`"
		}],
		["SURF_SKIP", {
			detail: "SURF_SKIP: int",
			desc: "Value: `512`"
		}],
		["SURF_NOLIGHT", {
			detail: "SURF_NOLIGHT: int",
			desc: "Value: `1024`"
		}],
		["SURF_BUMPLIGHT", {
			detail: "SURF_BUMPLIGHT: int",
			desc: "Value: `2048`"
		}],
		["SURF_NOSHADOWS", {
			detail: "SURF_NOSHADOWS: int",
			desc: "Value: `4096`"
		}],
		["SURF_NODECALS", {
			detail: "SURF_NODECALS: int",
			desc: "Value: `8192`"
		}],
		["SURF_NOCHOP", {
			detail: "SURF_NOCHOP: int",
			desc: "Value: `16384`"
		}],
		["SURF_HITBOX", {
			detail: "SURF_HITBOX: int",
			desc: "Value: `32768`"
		}]
	])],
	["FTaunts", new Map([
		["TAUNT_BASE_WEAPON", {
			detail: "TAUNT_BASE_WEAPON: int",
			desc: "Value: `0`"
		}],
		["TAUNT_MISC_ITEM", {
			detail: "TAUNT_MISC_ITEM: int",
			desc: "Value: `1`"
		}],
		["TAUNT_SHOW_ITEM", {
			detail: "TAUNT_SHOW_ITEM: int",
			desc: "Value: `2`"
		}],
		["TAUNT_LONG", {
			detail: "TAUNT_LONG: int",
			desc: "Value: `3`"
		}],
		["TAUNT_SPECIAL", {
			detail: "TAUNT_SPECIAL: int",
			desc: "Value: `4`"
		}]
	])],
	["FTFBotAttributeType", new Map([
		["REMOVE_ON_DEATH", {
			detail: "REMOVE_ON_DEATH: int",
			desc: "Value: `1`"
		}],
		["AGGRESSIVE", {
			detail: "AGGRESSIVE: int",
			desc: "Value: `2`"
		}],
		["IS_NPC", {
			detail: "IS_NPC: int",
			desc: "Value: `4`"
		}],
		["SUPPRESS_FIRE", {
			detail: "SUPPRESS_FIRE: int",
			desc: "Value: `8`"
		}],
		["DISABLE_DODGE", {
			detail: "DISABLE_DODGE: int",
			desc: "Value: `16`"
		}],
		["BECOME_SPECTATOR_ON_DEATH", {
			detail: "BECOME_SPECTATOR_ON_DEATH: int",
			desc: "Value: `32`"
		}],
		["QUOTA_MANANGED", {
			detail: "QUOTA_MANANGED: int",
			desc: "Value: `64`"
		}],
		["RETAIN_BUILDINGS", {
			detail: "RETAIN_BUILDINGS: int",
			desc: "Value: `128`"
		}],
		["SPAWN_WITH_FULL_CHARGE", {
			detail: "SPAWN_WITH_FULL_CHARGE: int",
			desc: "Value: `256`"
		}],
		["ALWAYS_CRIT", {
			detail: "ALWAYS_CRIT: int",
			desc: "Value: `512`"
		}],
		["IGNORE_ENEMIES", {
			detail: "IGNORE_ENEMIES: int",
			desc: "Value: `1024`"
		}],
		["HOLD_FIRE_UNTIL_FULL_RELOAD", {
			detail: "HOLD_FIRE_UNTIL_FULL_RELOAD: int",
			desc: "Value: `2048`"
		}],
		["PRIORITIZE_DEFENSE", {
			detail: "PRIORITIZE_DEFENSE: int",
			desc: "Value: `4096`"
		}],
		["ALWAYS_FIRE_WEAPON", {
			detail: "ALWAYS_FIRE_WEAPON: int",
			desc: "Value: `8192`"
		}],
		["TELEPORT_TO_HINT", {
			detail: "TELEPORT_TO_HINT: int",
			desc: "Value: `16384`"
		}],
		["MINIBOSS", {
			detail: "MINIBOSS: int",
			desc: "Value: `32768`"
		}],
		["USE_BOSS_HEALTH_BAR", {
			detail: "USE_BOSS_HEALTH_BAR: int",
			desc: "Value: `65536`"
		}],
		["IGNORE_FLAG", {
			detail: "IGNORE_FLAG: int",
			desc: "Value: `131072`"
		}],
		["AUTO_JUMP", {
			detail: "AUTO_JUMP: int",
			desc: "Value: `262144`"
		}],
		["AIR_CHARGE_ONLY", {
			detail: "AIR_CHARGE_ONLY: int",
			desc: "Value: `524288`"
		}],
		["PREFER_VACCINATOR_BULLETS", {
			detail: "PREFER_VACCINATOR_BULLETS: int",
			desc: "Value: `1048576`"
		}],
		["PREFER_VACCINATOR_BLAST", {
			detail: "PREFER_VACCINATOR_BLAST: int",
			desc: "Value: `2097152`"
		}],
		["PREFER_VACCINATOR_FIRE", {
			detail: "PREFER_VACCINATOR_FIRE: int",
			desc: "Value: `4194304`"
		}],
		["BULLET_IMMUNE", {
			detail: "BULLET_IMMUNE: int",
			desc: "Value: `8388608`"
		}],
		["BLAST_IMMUNE", {
			detail: "BLAST_IMMUNE: int",
			desc: "Value: `16777216`"
		}],
		["FIRE_IMMUNE", {
			detail: "FIRE_IMMUNE: int",
			desc: "Value: `33554432`"
		}],
		["PARACHUTE", {
			detail: "PARACHUTE: int",
			desc: "Value: `67108864`"
		}],
		["PROJECTILE_SHIELD", {
			detail: "PROJECTILE_SHIELD: int",
			desc: "Value: `134217728`"
		}]
	])],
	["FTFNavAttributeType", new Map([
		["TF_NAV_INVALID", {
			detail: "TF_NAV_INVALID: int",
			desc: "Value: `0`"
		}],
		["TF_NAV_BLOCKED", {
			detail: "TF_NAV_BLOCKED: int",
			desc: "Value: `1`"
		}],
		["TF_NAV_SPAWN_ROOM_RED", {
			detail: "TF_NAV_SPAWN_ROOM_RED: int",
			desc: "Value: `2`"
		}],
		["TF_NAV_SPAWN_ROOM_BLUE", {
			detail: "TF_NAV_SPAWN_ROOM_BLUE: int",
			desc: "Value: `4`"
		}],
		["TF_NAV_SPAWN_ROOM_EXIT", {
			detail: "TF_NAV_SPAWN_ROOM_EXIT: int",
			desc: "Value: `8`"
		}],
		["TF_NAV_HAS_AMMO", {
			detail: "TF_NAV_HAS_AMMO: int",
			desc: "Value: `16`"
		}],
		["TF_NAV_HAS_HEALTH", {
			detail: "TF_NAV_HAS_HEALTH: int",
			desc: "Value: `32`"
		}],
		["TF_NAV_CONTROL_POINT", {
			detail: "TF_NAV_CONTROL_POINT: int",
			desc: "Value: `64`"
		}],
		["TF_NAV_BLUE_SENTRY_DANGER", {
			detail: "TF_NAV_BLUE_SENTRY_DANGER: int",
			desc: "Value: `128`"
		}],
		["TF_NAV_RED_SENTRY_DANGER", {
			detail: "TF_NAV_RED_SENTRY_DANGER: int",
			desc: "Value: `256`"
		}],
		["TF_NAV_BLUE_SETUP_GATE", {
			detail: "TF_NAV_BLUE_SETUP_GATE: int",
			desc: "Value: `2048`"
		}],
		["TF_NAV_RED_SETUP_GATE", {
			detail: "TF_NAV_RED_SETUP_GATE: int",
			desc: "Value: `4096`"
		}],
		["TF_NAV_BLOCKED_AFTER_POINT_CAPTURE", {
			detail: "TF_NAV_BLOCKED_AFTER_POINT_CAPTURE: int",
			desc: "Value: `8192`"
		}],
		["TF_NAV_BLOCKED_UNTIL_POINT_CAPTURE", {
			detail: "TF_NAV_BLOCKED_UNTIL_POINT_CAPTURE: int",
			desc: "Value: `16384`"
		}],
		["TF_NAV_BLUE_ONE_WAY_DOOR", {
			detail: "TF_NAV_BLUE_ONE_WAY_DOOR: int",
			desc: "Value: `32768`"
		}],
		["TF_NAV_RED_ONE_WAY_DOOR", {
			detail: "TF_NAV_RED_ONE_WAY_DOOR: int",
			desc: "Value: `65536`"
		}],
		["TF_NAV_WITH_SECOND_POINT", {
			detail: "TF_NAV_WITH_SECOND_POINT: int",
			desc: "Value: `131072`"
		}],
		["TF_NAV_WITH_THIRD_POINT", {
			detail: "TF_NAV_WITH_THIRD_POINT: int",
			desc: "Value: `262144`"
		}],
		["TF_NAV_WITH_FOURTH_POINT", {
			detail: "TF_NAV_WITH_FOURTH_POINT: int",
			desc: "Value: `524288`"
		}],
		["TF_NAV_WITH_FIFTH_POINT", {
			detail: "TF_NAV_WITH_FIFTH_POINT: int",
			desc: "Value: `1048576`"
		}],
		["TF_NAV_SNIPER_SPOT", {
			detail: "TF_NAV_SNIPER_SPOT: int",
			desc: "Value: `2097152`"
		}],
		["TF_NAV_SENTRY_SPOT", {
			detail: "TF_NAV_SENTRY_SPOT: int",
			desc: "Value: `4194304`"
		}],
		["TF_NAV_ESCAPE_ROUTE", {
			detail: "TF_NAV_ESCAPE_ROUTE: int",
			desc: "Value: `8388608`"
		}],
		["TF_NAV_ESCAPE_ROUTE_VISIBLE", {
			detail: "TF_NAV_ESCAPE_ROUTE_VISIBLE: int",
			desc: "Value: `16777216`"
		}],
		["TF_NAV_NO_SPAWNING", {
			detail: "TF_NAV_NO_SPAWNING: int",
			desc: "Value: `33554432`"
		}],
		["TF_NAV_RESCUE_CLOSET", {
			detail: "TF_NAV_RESCUE_CLOSET: int",
			desc: "Value: `67108864`"
		}],
		["TF_NAV_BOMB_CAN_DROP_HERE", {
			detail: "TF_NAV_BOMB_CAN_DROP_HERE: int",
			desc: "Value: `134217728`"
		}],
		["TF_NAV_DOOR_NEVER_BLOCKS", {
			detail: "TF_NAV_DOOR_NEVER_BLOCKS: int",
			desc: "Value: `268435456`"
		}],
		["TF_NAV_DOOR_ALWAYS_BLOCKS", {
			detail: "TF_NAV_DOOR_ALWAYS_BLOCKS: int",
			desc: "Value: `536870912`"
		}],
		["TF_NAV_UNBLOCKABLE", {
			detail: "TF_NAV_UNBLOCKABLE: int",
			desc: "Value: `1073741824`"
		}],
		["TF_NAV_PERSISTENT_ATTRIBUTES", {
			detail: "TF_NAV_PERSISTENT_ATTRIBUTES: int",
			desc: "Value: `1988098048`"
		}]
	])]
]);

export const otherMethods: Docs = new Map();
export const otherVariables: Docs = new Map();

// Combine instances methods/constants into a single one

for (const [instanceName, innerMap] of instancesVariables) {
	// hardocode 
	let append = "Constants.";
	if (instanceName === "Constants") {
		append = '';
	}

	for (const [name, doc] of innerMap) {
		otherVariables.set(name, {
			...doc,
			append: append + instanceName + '.'
		});
	}
}

for (const [instanceName, innerMap] of instancesMethods) {
	for (const [name, doc] of innerMap) {
		otherMethods.set(name, {
			...doc,
			append: instanceName + '.'
		});
	}
}

export const docSnippets: Docs = new Map([
	["abstract", {
		desc: "This member must be implemented (or overridden) by the inheritor.",
		detail: "",
	}],
	["access", {
		desc: "Specify the access level of this member (private, public, or protected).",
		detail: "<private|protected|public>",
		snippet: "${1|private,protected,public|}"
	}],
	["alias", {
		desc: "Treat a member as if it had a different name.",
		detail: "<aliasNamepath>",
		snippet: "${1:aliasNamepath}"
	}],
	["augments", {
		desc: "Indicate that a symbol inherits from, ands adds to, a parent symbol.",
		detail: "<namepath>",
		snippet: "${1:namepath}"
	}],
	["author", {
		desc: "Identify the author of an item.",
		detail: "<name> [<emailAddress>]",
		snippet: "${1:name} [${2:emailAddress}]"
	}],
	["borrows", {
		desc: "This object uses something from another object.",
		detail: "<that namepath> as <this namepath>",
		snippet: "${1:refNamePath} as ${1:thisNamePath}"
	}],
	["callback", {
		desc: "Document a callback function.",
		detail: "<namepath>",
		snippet: "${1:namepath}"
	}],
	["class", {
		desc: "This function is intended to be called with the \"new\" keyword.",
		detail: "[<type> <name>]",
	}],
	["classdesc", {
		desc: "Use the following text to describe the entire class.",
		detail: "<some description>",
		snippet: "${1:description}"
	}],
	["constant", {
		desc: "Document an object as a constant.",
		detail: "[<type> <name>]",
	}],
	["constructs", {
		desc: "This function member will be the constructor for the previous class.",
		detail: "[<name>]",
	}],
	["copyright", {
		desc: "Document some copyright information.",
		detail: "<copyright text>",
		snippet: "${1:copyright text}"
	}],
	["default", {
		desc: "Document the default value.",
		detail: "[<some value>]",
	}],
	["deprecated", {
		desc: "Document that this is no longer the preferred way.",
		detail: "[<some text>]",
		snippet: "${1:text}"
	}],
	["description", {
		desc: "Describe a symbol.",
		detail: "<some description>",
		snippet: "${1:description}"
	}],
	["enum", {
		desc: "Document a collection of related properties.",
		detail: "[<type>]",
		snippet: "{${1:type}}"
	}],
	["event", {
		desc: "Document an event.",
		detail: "<classname>#[event:]<eventName>",
		snippet: "${1:classname}#${2:eventName}"
	}],
	["example", {
		desc: "Provide an example of how to use a documented item.",
		detail: ""
	}],
	["exports", {
		desc: "Identify the member that is exported by a JavaScript module.",
		detail: "<moduleName>",
		snippet: "${1:moduleName}"
	}],
	["external", {
		desc: "Identifies an external class, namespace, or module.",
		detail: "<nameOfExternal>",
		snippet: "${1:nameOfExternal}"
	}],
	["file", {
		desc: "Describe a file.",
		detail: ""
	}],
	["fires", {
		desc: "Describe the events this method may fire.",
		detail: "<classname>#[event:]<eventName>",
		snippet: "${1:classname}#${2:eventName}"
	}],
	["function", {
		desc: "Describe a function or method.",
		detail: "[<FunctionName>]",
		snippet: "${1:FunctionName}"
	}],
	["global", {
		desc: "Document a global object.",
		detail: ""
	}],
	["ignore", {
		desc: "Omit a symbol from the documentation.",
		detail: ""
	}],
	["implements", {
		desc: "This symbol implements an interface.",
		detail: "{<typeExpression>}",
		snippet: "{${1:typeExpression}}"
	}],
	["inheritdoc", {
		desc: "Indicate that a symbol should inherit its parent's documentation.",
		detail: ""
	}],
	["inner", {
		desc: "Document an inner object.",
		detail: ""
	}],
	["instance", {
		desc: "Document an instance member.",
		detail: ""
	}],
	["interface", {
		desc: "This symbol is an interface that others can implement.",
		detail: "[<name>]",
		snippet: "${1:name}"
	}],
	["kind", {
		desc: "What kind of symbol is this?",
		detail: "<kindName>",
		snippet: "${1|class,constant,event,external,file,function,member,mixin,module,namespace,typedef|}"
	}],
	["lends", {
		desc: "Document properties on an object literal as if they belonged to a symbol with a given name.",
		detail: "<namepath>",
		snippet: "${1:namepath}"
	}],
	["license", {
		desc: "Identify the license that applies to this code.",
		detail: "<identifier>",
		snippet: "${1:identifier}"
	}],
	["listens", {
		desc: "List the events that a symbol listens for.",
		detail: "<eventName>",
		snippet: "${1:eventName}"
	}],
	["member", {
		desc: "Document a member.",
		detail: "[<type>] [<name>]",
		snippet: "{${1:type}} ${2:name}"
	}],
	["memberof", {
		desc: "This symbol belongs to a parent symbol.",
		detail: "<parentNamepath>",
		snippet: "${1:parentNamepath}"
	}],
	["memberof!", {
		desc: "Force this symbol to belongs to a parent symbol.",
		detail: "<parentNamepath>",
		snippet: "${1:parentNamepath}"
	}],
	["mixes", {
		desc: "This object mixes in all the members from another object.",
		detail: "<otherObjectPath>",
		snippet: "${1:otherObjectPath}"
	}],
	["mixin", {
		desc: "Document a mixin object.",
		detail: "[<mixinName>]",
		snippet: "${1:mixinName}"
	}],
	["module", {
		desc: "Document a JavaScript module.",
		detail: "[[{<type>}] <moduleName>]",
		snippet: "{${1:type}} ${2:moduleName}"
	}],
	["name", {
		desc: "Document the name of an object.",
		detail: "<namepath>",
		snippet: "${1:namepath}"
	}],
	["namespace", {
		desc: "Document a namespace object.",
		detail: "[[{<type>}] <SomeName>]",
		snippet: "{${1:type}} ${2:SomeName}"
	}],
	["override", {
		desc: "Indicate that a symbol overrides its parent.",
		detail: ""
	}],
	["param", {
		desc: " Document the parameter to a function.",
		detail: "[[{<type>}] <name> [<Param description>]]",
		snippet: "{${1:type}} ${2:name} ${3:description}"
	}],
	["private", {
		desc: "This symbol is meant to be private.",
		detail: ""
	}],
	["property", {
		desc: "Document a property of an object.",
		detail: "[[{<type>}] <name> [<Property description>]]",
		snippet: "{${1:type}} ${2:name} ${3:description}"
	}],
	["protected", {
		desc: "This symbol is meant to be protected.",
		detail: ""
	}],
	["public", {
		desc: "This symbol is meant to be public.",
		detail: ""
	}],
	["readonly", {
		desc: "This symbol is meant to be read-only.",
		detail: ""
	}],
	["requires", {
		desc: "This file requires a JavaScript module.",
		detail: "<someModuleName>",
		snippet: "${1:someModuleName}"
	}],
	["returns", {
		desc: "Document the return value of a function.",
		detail: "[{<type>} [<Return description>]]",
		snippet: "{${1:type}} ${2:description}"
	}],
	["see", {
		desc: "Refer to some other documentation for more information.",
		detail: "<namepath>|<text>",
		snippet: "${1|namepath,text|}"
	}],
	["since", {
		desc: "When was this feature added?",
		detail: "<versionDescription>",
		snippet: "${1:versionDescription}"
	}],
	["static", {
		desc: "Document a static member.",
		detail: ""
	}],
	["summary", {
		desc: "A shorter version of the full description.",
		detail: ""
	}],
	["this", {
		desc: "What does the 'this' keyword refer to here?",
		detail: "<namepath>",
		snippet: "${1:namepath}"
	}],
	["throws", {
		desc: "Describe what errors could be thrown.",
		detail: "[{<type>}] [<free-form description>]",
		snippet: "{${1:type}} ${2:description}"
	}],
	["todo", {
		desc: "Document tasks to be completed.",
		detail: ""
	}],
	["tutorial", {
		desc: "Insert a link to an included tutorial file.",
		detail: ""
	}],
	["type", {
		desc: "Document the type of an object.",
		detail: "{typeName}",
		snippet: "{${1:typeName}}"
	}],
	["typedef", {
		desc: "Document a custom type.",
		detail: "[<type>] <namepath>",
		snippet: "{${1:type}} ${1:namepath}"
	}],
	["variation", {
		desc: "Distinguish different objects with the same name.",
		detail: "<variationNumber>",
		snippet: "${1:variationNumber}"
	}],
	["version", {
		desc: "Documents the version number of an item.",
		detail: "<versionDescription>",
		snippet: "${1:versionDescription}"
	}]
]);

const synonyms: [string, string][] = [
	["virtual", "abstract"],
	["extends", "augments"],
	["constructor", "class"],
	["const", "constant"],
	["defaultvalue", "default"],
	["desc", "description"],
	["host", "external"],
	["fileoverview", "file"],
	["overview", "file"],
	["emits", "fires"],
	["func", "function"],
	["method", "function"],
	["var", "function"],
	["arg", "param"],
	["argument", "param"],
	["prop", "property"],
	["return", "returns"],
	["exception", "throws"]
];

synonyms.forEach(([synonym, original]) => {
	if (!docSnippets.has(synonym)) {
		docSnippets.set(synonym, docSnippets.get(original)!);
	}
});
