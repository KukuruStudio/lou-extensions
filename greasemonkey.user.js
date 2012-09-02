// ==UserScript==
// @name		lou-extensions
// @namespace	github/lou-extensions
// @description	Collection of extensions for Lord of Ultima (http://www.lordofultima.com/)
// @include		http://prodgame*.lordofultima.com/*
// @version		0.7.0
// @run-at		document_end
// @grant		GM_info
// @grant		GM_getResourceText
// @grant		GM_getResourceURL
// @icon		icons/icon48.png
// @require		.lib/lou-extensions.js
// @resource	compat_qooxdoo                                  compat/compat_qooxdoo.js
// @resource	compat_lou                                      compat/compat_lou.js
// @resource	lib_greasemonkey_light                          .lib/greasemonkey_light.js
// @resource	lib_sprintf                                     .lib/sprintf-0.7-beta1.js
// @resource	lou_bos_const									louBos/bos_const.js
// @resource	lou_bos_LocalizedStrings						louBos/bos_LocalizedStrings.js
// @resource	lou_bos_gui_ResourcesFillerWidget				louBos/bos_gui_ResourcesFillerWidget.js
// @resource	lou_bos_BatchResourcesFiller					louBos/bos_BatchResourcesFiller.js
// @resource	lou_bos_ResourcesFiller							louBos/bos_ResourcesFiller.js
// @resource	lou_bos_Server									louBos/bos_Server.js
// @resource	lou_bos_Storage									louBos/bos_Storage.js
// @resource	lou_bos_net_CommandManager						louBos/bos_net_CommandManager.js
// @resource	lou_bos_Tweaks									louBos/bos_Tweaks.js
// @resource	lou_bos_Main									louBos/bos_Main.js
// @resource	lou_bos_SharestringConverter					louBos/bos_SharestringConverter.js
// @resource	lou_bos_Utils									louBos/bos_Utils.js
// @resource	lou_bos_CityTypes								louBos/bos_CityTypes.js
// @resource	lou_bos_City									louBos/bos_City.js
// @resource	lou_bos_gui_SummaryPage							louBos/bos_gui_SummaryPage.js
// @resource	lou_bos_gui_TradeOrdersPage						louBos/bos_gui_TradeOrdersPage.js
// @resource	lou_bos_gui_TradeRouteWidget					louBos/bos_gui_TradeRouteWidget.js
// @resource	lou_bos_gui_PurifyOptionsWidget					louBos/bos_gui_PurifyOptionsWidget.js
// @resource	lou_bos_gui_PurifyResourcesPage					louBos/bos_gui_PurifyResourcesPage.js
// @resource	lou_bos_gui_TradeRoutesPage						louBos/bos_gui_TradeRoutesPage.js
// @resource	lou_bos_gui_MyAlliancePage						louBos/bos_gui_MyAlliancePage.js
// @resource	lou_bos_gui_IntelligenceOptionsWidget			louBos/bos_gui_IntelligenceOptionsWidget.js
// @resource	lou_bos_gui_IntelligencePage					louBos/bos_gui_IntelligencePage.js
// @resource	lou_bos_gui_PlayerInfoPage						louBos/bos_gui_PlayerInfoPage.js
// @resource	lou_bos_gui_AllianceInfoPage					louBos/bos_gui_AllianceInfoPage.js
// @resource	lou_bos_gui_IncomingAttacksPage					louBos/bos_gui_IncomingAttacksPage.js
// @resource	lou_bos_gui_MassRecruitmentOptionsWidget		louBos/bos_gui_MassRecruitmentOptionsWidget.js
// @resource	lou_bos_gui_MassRecruitmentPage					louBos/bos_gui_MassRecruitmentPage.js
// @resource	lou_bos_gui_UnitOrdersPage						louBos/bos_gui_UnitOrdersPage.js
// @resource	lou_bos_gui_RegionPage							louBos/bos_gui_RegionPage.js
// @resource	lou_bos_gui_DungeonsPage						louBos/bos_gui_DungeonsPage.js
// @resource	lou_bos_gui_CastlesPage							louBos/bos_gui_CastlesPage.js
// @resource	lou_bos_gui_CitiesPage							louBos/bos_gui_CitiesPage.js
// @resource	lou_bos_gui_OptionsPage							louBos/bos_gui_OptionsPage.js
// @resource	lou_bos_gui_MilitaryPage						louBos/bos_gui_MilitaryPage.js
// @resource	lou_bos_gui_DefendersPage						louBos/bos_gui_DefendersPage.js
// @resource	lou_bos_gui_ExtraSummaryWidget					louBos/bos_gui_ExtraSummaryWidget.js
// @resource	lou_bos_gui_SummaryWidget						louBos/bos_gui_SummaryWidget.js
// @resource	lou_bos_gui_FoodCalculatorWidget				louBos/bos_gui_FoodCalculatorWidget.js
// @resource	lou_bos_gui_RecruitmentSpeedCalculatorWidget	louBos/bos_gui_RecruitmentSpeedCalculatorWidget.js
// @resource	lou_bos_gui_CombatCalculatorWidget				louBos/bos_gui_CombatCalculatorWidget.js
// @resource	lou_bos_ui_table_cellrenderer_Default			louBos/bos_ui_table_cellrenderer_Default.js
// @resource	lou_bos_ui_table_cellrenderer_HumanTime			louBos/bos_ui_table_cellrenderer_HumanTime.js
// @resource	lou_bos_ui_table_cellrenderer_ClickableLook		louBos/bos_ui_table_cellrenderer_ClickableLook.js
// @resource	lou_bos_ui_table_cellrenderer_Resource			louBos/bos_ui_table_cellrenderer_Resource.js
// @resource	lou_bos_ui_table_cellrenderer_FullAt			louBos/bos_ui_table_cellrenderer_FullAt.js
// @resource	lou_bos_ui_table_Table							louBos/bos_ui_table_Table.js
// @resource	lou_tweak_globals							    louTweak/louTweak_globals.js
// @resource	lou_tweak_LocalizedStrings					    louTweak/louTweak_LocalizedStrings.js
// @resource	lou_tweak_main							    	louTweak/louTweak_main.js
// @resource	lou_tweak_queueTimesLabel				    	louTweak/louTweak_queueTimesLabel.js
// @resource	lou_tweak_incomingResourcesLabel		    	louTweak/louTweak_incomingResourcesLabel.js
// @resource	lou_tweak_optionsPage					    	louTweak/louTweak_optionsPage.js
// @resource	lou_tweak_overlayObject					    	louTweak/louTweak_overlayObject.js
// @resource	lou_tweak_layoutWindow					    	louTweak/louTweak_layoutWindow.js
// @resource	lou_tweak_miniMap						    	louTweak/louTweak_miniMap.js
// @resource	lou_tweak_checkIfLoaded					    	louTweak/louTweak_checkIfLoaded.js
// ==/UserScript==

/**
 * Main function
 */
try {
	console.log("[lou-extensions] Loading LOU extensions.");
	
	var info = getScriptMetaData();
	
	if (info.resources.length > 0) {
		loadExtensions(info);
	} else {
		console.log("[lou-extensions] No resources found in MetaData block. No lou-extensions were injected");
	}
} catch (e) {
	console.log("[lou-extensions]" + e.toSource());
}
