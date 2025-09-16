import { App, PluginSettingTab, Setting } from "obsidian";
import type ASTComponentRenderer from "./main";
import { LOG_LEVEL_LABELS, LOG_LEVELS, type LogLevel } from "./logger";

export interface RendererSettings {
  logLevel: LogLevel;
}

export const DEFAULT_SETTINGS: RendererSettings = {
  logLevel: "info",
};

export class RendererSettingsTab extends PluginSettingTab {
  constructor(app: App, private readonly plugin: ASTComponentRenderer) {
    super(app, plugin);
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "AST Component Renderer – Settings" });

    new Setting(containerEl)
      .setName("Log level")
      .setDesc("Controls how much logging is emitted to the developer console.")
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
  }
}
