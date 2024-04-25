export interface IServiceTwoParameters<P, O, R> {
    execute(parameter: P, otherParameter: O): Promise<R>;
}
