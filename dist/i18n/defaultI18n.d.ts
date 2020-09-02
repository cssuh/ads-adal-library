import { StringLookup, InteractionRequiredContext } from '../models';
export declare class EnUsStringLookup implements StringLookup {
    getSimpleString(code: number): string;
    getInteractionRequiredString({ tenant, resource }: InteractionRequiredContext): string;
}
