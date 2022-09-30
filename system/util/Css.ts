/**
 * Types/Interfaces
*/

export type CssUnevaluatedPrimitive = boolean | string;
export type CssClassNames = Array<CssUnevaluatedPrimitive>;

/**
 * Functions
*/

/**
 * @return {string}
 */
function join(...classNames: CssClassNames): string {
  let joined = '';

  for (const cls of classNames) {
    if (!cls) {
      continue;
    }

    let tmp = '';

    if (Array.isArray(cls)) {
      tmp = join(cls);
    } else if (typeof cls === 'string') {
      tmp = cls.trim();
    }

    if (tmp) {
      joined = joined + (joined ? ' ' : '') + tmp;
    }
  }

  return joined || undefined;
}

/**
 * Utility
*/

export const Css = {
  join,
};
