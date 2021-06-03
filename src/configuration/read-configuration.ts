import * as vscode from 'vscode';
import { legatoSection, AllSettings } from '../models';

export function getGutterIndicatorHeight() {
  return readConfiguration<number>(AllSettings.GutterIndicatorHeight);
}

export function getGutterIndicatorOffset() {
  return readConfiguration<number>(AllSettings.GutterIndicatorOffset);
}

export function getGutterIndicatorTransparency() {
  const percentage = readConfiguration<number>(AllSettings.GutterIndicatorTransparency);
  const hex = Math.floor((percentage * 255) / 100).toString(16);
  return hex;
}

export function getGutterIndicatorWidth() {
  return readConfiguration<number>(AllSettings.GutterIndicatorWidth);
}

export function readConfiguration<T>(setting: AllSettings, defaultValue?: T | undefined) {
  const value: T | undefined = vscode.workspace
    .getConfiguration(legatoSection)
    .get<T | undefined>(setting, defaultValue);
  return value as T;
}
