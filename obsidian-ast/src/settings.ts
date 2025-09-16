import { App, PluginSettingTab, Setting } from "obsidian";
import type AstPlugin from "./main";
import { LOG_LEVEL_LABELS, LOG_LEVELS, type LogLevel } from "./logger";

export interface AstSettings {
  enableMdTag: boolean;
  enableInlineField: boolean;
  enableCallout: boolean;
  enableNestedHeadings: boolean;
  enableDirectives: boolean;
  logLevel: LogLevel;
}

export const DEFAULT_SETTINGS: AstSettings = {
  enableMdTag: true,
  enableInlineField: true,
  enableCallout: true,
  enableNestedHeadings: true,
  enableDirectives: true,
  logLevel: "info",
};

export class AstSettingsTab extends PluginSettingTab {
  plugin: AstPlugin;

  constructor(app: App, plugin: AstPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "AST Tools – Settings" });

    new Setting(containerEl)
      .setName("Log level")
      .setDesc("Controls how much information is printed to the developer console.")
      .addDropdown(drop => {
        for (const level of LOG_LEVELS) {
          drop.addOption(level, LOG_LEVEL_LABELS[level]);
        }
        drop
          .setValue(this.plugin.settings.logLevel)
          .onChange(async value => {
            this.plugin.settings.logLevel = value as LogLevel;
            await this.plugin.saveSettings();
          });
      });

    new Setting(containerEl)
      .setName("MdTag (#tag)")
      .setDesc("Enable custom mdTag inline syntax.")
      .addToggle(t =>
        t.setValue(this.plugin.settings.enableMdTag)
         .onChange(async v => { this.plugin.settings.enableMdTag = v; await this.plugin.saveSettings(); })
      );

    new Setting(containerEl)
      .setName("InlineField ([key:: value], (key:: value), key:: value)")
      .setDesc("Enable InlineField inline syntax.")
      .addToggle(t =>
        t.setValue(this.plugin.settings.enableInlineField)
         .onChange(async v => { this.plugin.settings.enableInlineField = v; await this.plugin.saveSettings(); })
      );

    new Setting(containerEl)
      .setName("Callouts (> [!type][+|-]? Title)")
      .setDesc("Promote blockquotes starting with [!type] into callout nodes.")
      .addToggle(t =>
        t.setValue(this.plugin.settings.enableCallout)
         .onChange(async v => { this.plugin.settings.enableCallout = v; await this.plugin.saveSettings(); })
      );


      new Setting(containerEl)
      .setName("Nested Headings (## Heading)")
      .setDesc("Make a hierarchy headings from the text")
      .addToggle(t =>
        t.setValue(this.plugin.settings.enableNestedHeadings)
         .onChange(async v => { this.plugin.settings.enableNestedHeadings = v; await this.plugin.saveSettings(); })
      );

      new Setting(containerEl)
      .setName("Directives (:::directive ... :::)")
      .setDesc("Enable custom directives as mdast nodes.")
      .addToggle(t =>
        t.setValue(this.plugin.settings.enableDirectives)
         .onChange(async v => { this.plugin.settings.enableDirectives = v; await this.plugin.saveSettings(); })
      );

    // Optional: a "Reparse all cached files" action
    new Setting(containerEl)
      .setName("Clear AST cache")
      .setDesc("Forces reparsing of notes with the current settings.")
      .addButton(b =>
        b.setButtonText("Clear").onClick(async () => {
          (this.plugin as any).cache?.clear?.();
          // No await save needed; this is just a cache flush.
          new (window as any).Notice?.("AST cache cleared");
        })
      );
  }
}
