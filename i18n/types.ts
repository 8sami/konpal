import type en from "./dictionaries/en.json"

export type Dictionary = typeof en
export type CommonDictionary = Dictionary["common"]
export type HeaderDictionary = Dictionary["header"]
export type FooterDictionary = Dictionary["footer"]
export type HomeDictionary = Dictionary["home"]
