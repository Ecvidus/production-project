type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    console.log(...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className));
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}
