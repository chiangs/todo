/**
 * Create an action with a payload
 */
export interface IActionsWithPayload<TypeAction, TypePayload> {
	type: TypeAction;
	payload: TypePayload;
}

/**
 * Create an action that does not have a payload
 */
export interface IActionsWithoutPayload<TypeAction> {
	type: TypeAction;
}

/**
 * Create an action with no payload
 */
export function createAction<TypeAction>(
	actionType: TypeAction
): () => IActionsWithoutPayload<TypeAction> {
	return (): IActionsWithoutPayload<TypeAction> => {
		return {
			type: actionType
		};
	};
}

/**
 * Create an action that has a strongly typed string literal name with a strongly typed payload
 */
export function createActionPayload<TypeAction, TypePayload>(
	actionType: TypeAction
): (payload: TypePayload) => IActionsWithPayload<TypeAction, TypePayload> {
	return (p: TypePayload): IActionsWithPayload<TypeAction, TypePayload> => {
		return {
			payload: p,
			type: actionType
		};
	};
}

/**
 * A very general type that means to be "an object with a many field created with createActionPayload and createAction
 */
interface IActionCreatorsMapObject {
	[key: string]: (
		...args: any[]
	) => IActionsWithPayload<any, any> | IActionsWithoutPayload<any>;
}

/**
 * Use this Type to merge several action object that has field created with createActionPayload or createAction
 * E.g. type ReducerWithActionFromTwoObjects = ActionsUnion<typeof ActionsObject1 & typeof ActionsObject2>;
 */
export type ActionsUnion<A extends IActionCreatorsMapObject> = ReturnType<
	A[keyof A]
>;

export const updatedState = <T>(state: T, updatedProps): T =>
	Object.assign({}, state, updatedProps);
