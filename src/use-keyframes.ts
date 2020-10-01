import * as React from 'react'

/**
 * Custom hook to simulate some basic use of the `@keyframes` on the CSS,
 * but using only inline-style and JS
 *
 * @param {T} options.initialValue - The property initial value
 * @param {T} options.toValue - The property final value
 * @param {number} options.timeInSeconds - The time to execute the animation in seconds
 *
 * @returns [value, timeInSeconds] - The tuple containing the current value and the time in seconds
 *
 * - Simple example using the hook to simulate a fade-in/fade-out animation
 * @example
 *
 * ```tsx
 * function App() {
 *   const [opacity, timeInSeconds] = useKeyframes<number>({
 *     initialValue: 1,
 *     toValue: 0,
 *     timeInSeconds: 0.75
 *   });
 *   const style: React.CSSProperties = {
 *     width: 100,
 *     height: 100,
 *     background: "gray",
 *     marginTop: "10px",
 *     marginLeft: "10px",
 *     float: "left",
 *     opacity,
 *     position: "relative",
 *     transition: `opacity ${timeInSeconds}s linear`
 *   };
 *   return (
 *     <View
 *       style={{
 *         position: "absolute",
 *         top: 0,
 *         left: 0,
 *         width: "100%",
 *         height: "100%",
 *         background: "black",
 *         overflow: "hidden"
 *       }}
 *     >
 *       <View style={style} />
 *       <View style={style} />
 *       <View style={style} />
 *       <View style={style} />
 *     </View>
 *   );
 * }
 * ```
 *
 */
function useKeyframes<T>({
  initialValue,
  toValue,
  timeInSeconds
}: {
  initialValue: T
  toValue: T
  timeInSeconds: number
}): [T, number] {
  const [value, setValue] = React.useState<T>(initialValue)
  React.useEffect(() => {
    const timing = setInterval(() => {
      if (value === initialValue) {
        setValue(toValue)
      } else {
        setValue(initialValue)
      }
      clearInterval(timing)
      return () => clearInterval(timing)
    }, timeInSeconds * 1000)
  }, [value, toValue, initialValue, timeInSeconds])
  return [value, timeInSeconds]
}

export default useKeyframes
