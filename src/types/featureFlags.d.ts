declare const featureFlags: FeatureFlagsState;

type FeatureFlagsState = { [featureFlag in FeatureFlags]: boolean };

type FeatureFlags = keyof typeof import('featureFlags.config').default;
