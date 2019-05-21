type CurrentVariantProp<Variant extends string, VariantConfig> = {
  [name in Exclude<Variant, '_'>]: name extends keyof VariantConfig
    ? VariantConfig[name]
    : true
};

type DefaultVariantsProps<Variants extends string> = {
  [name in Exclude<Variants, '_'>]?: false
};

type CurrentVariantProps<
  VariantNames extends string,
  CurrentVariant extends VariantNames,
  VariantConfig
> = CurrentVariantProp<CurrentVariant, VariantConfig> &
  DefaultVariantsProps<Exclude<VariantNames, CurrentVariant>> &
  Pick<VariantConfig, Exclude<keyof VariantConfig, VariantNames>>;

interface VariantsConfig {
  [name: string]: object;
}

type KeyOf<T> = Extract<keyof T, string>;

type VariantsUnionProps<
  Config extends VariantsConfig,
  Variants extends KeyOf<Config>
> = Variants extends KeyOf<Config>
  ? CurrentVariantProps<KeyOf<Config>, Variants, Config[Variants]>
  : never;

export type VariantsProps<
  Configuration extends VariantsConfig
> = VariantsUnionProps<Configuration, KeyOf<Configuration>>;

export type VariantProps<
  Config extends VariantsConfig,
  CurrentVariant extends KeyOf<Config>
> = CurrentVariantProps<KeyOf<Config>, CurrentVariant, Config[CurrentVariant]>;
