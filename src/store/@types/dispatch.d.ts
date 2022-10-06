type Action = import('@reduxjs/toolkit').Action;
type AnyAction = import('@reduxjs/toolkit').AnyAction;

interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): T;
}
