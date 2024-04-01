import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        scrollTo?: string | null | undefined;
        isCurrentlyActive?: boolean | undefined;
        color?: string | undefined;
    };
    events: {
        click: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type NavbarItemProps = typeof __propDef.props;
export declare type NavbarItemEvents = typeof __propDef.events;
export declare type NavbarItemSlots = typeof __propDef.slots;
export default class NavbarItem extends SvelteComponentTyped<NavbarItemProps, NavbarItemEvents, NavbarItemSlots> {
}
export {};
