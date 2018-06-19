/**
 *
 */
export function bind<T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor?: TypedPropertyDescriptor<T>
): TypedPropertyDescriptor<T> | void;
export function bind(): MethodDecorator;

/**
 * @param caseSensitive Makes cache keys case-insensitive
 * @param cache Presupply cache storage, for seeding or sharing entries
 */

export function memoize<T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor?: TypedPropertyDescriptor<T>
): TypedPropertyDescriptor<T> | void;
export function memoize(caseSensitive?: boolean, cache?: Object): MethodDecorator;
/**
 * @param delay number
 */
export function throttle<T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor?: TypedPropertyDescriptor<T>
): TypedPropertyDescriptor<T> | void;
export function throttle(delay?: number): MethodDecorator;

/**
 * @param delay number
 */
export function debounce<T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor?: TypedPropertyDescriptor<T>
): TypedPropertyDescriptor<T> | void;
export function debounce(delay?: number): MethodDecorator;