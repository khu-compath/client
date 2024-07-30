import i18n from "i18n-js"
import React from "react"
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native"
import { isRTL, translate, TxKeyPath } from "../i18n"
import { colors, typography } from "../theme"

type Sizes = keyof typeof $sizeStyles
type Weights = keyof typeof typography.primary
type Presets = keyof typeof $presets

export interface TextProps extends RNTextProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: i18n.TranslateOptions
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * One of the different types of text presets.
   */
  preset?: Presets
  /**
   * Text weight modifier.
   */
  weight?: Weights
  /**
   * Text size modifier.
   */
  size?: Sizes
  /**
   * Children components.
   */
  children?: React.ReactNode
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Text/}
 * @param {TextProps} props - The props for the `Text` component.
 * @returns {JSX.Element} The rendered `Text` component.
 */
export function Text(props: TextProps): JSX.Element {
  const { weight, size, tx, txOptions, text, children, style: $styleOverride, ...rest } = props

  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const preset: Presets = props.preset ?? "c5"
  const $styles: StyleProp<TextStyle> = [
    $rtlStyle,
    $presets[preset],
    weight && $fontWeightStyles[weight],
    size && $sizeStyles[size],
    $styleOverride,
  ]

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  )
}

const $sizeStyles = {
  xl: { fontSize: 25, lineHeight: 30, letterSpacing: -1 } satisfies TextStyle,
  lg: { fontSize: 20, lineHeight: 25, letterSpacing: 0 } satisfies TextStyle,
  md: { fontSize: 18, lineHeight: 23, letterSpacing: 0 } satisfies TextStyle,
  sm: { fontSize: 15, lineHeight: 18, letterSpacing: 0 } satisfies TextStyle,
}

const $fontWeightStyles = Object.entries(typography.primary).reduce((acc, [weight, fontFamily]) => {
  return { ...acc, [weight]: { fontFamily } }
}, {}) as Record<Weights, TextStyle>

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.regular,
  { color: colors.text },
]

const $presets = {
  c1: [$baseStyle, $sizeStyles.xl, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  c2: [$baseStyle, $sizeStyles.lg, $fontWeightStyles.semiBold] as StyleProp<TextStyle>,

  c3: [$baseStyle, $sizeStyles.md, $fontWeightStyles.semiBold] as StyleProp<TextStyle>,

  c4: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.semiBold] as StyleProp<TextStyle>,

  c5: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.regular] as StyleProp<TextStyle>,

  c6: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.medium] as StyleProp<TextStyle>,

  c7: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.regular] as StyleProp<TextStyle>,
}

const $rtlStyle: TextStyle = isRTL ? { writingDirection: "rtl" } : {}
