import { Counter } from 'entities/Counter/ui/Counter';
import type { CounterSchema } from 'entities/Counter/model/types/counterSchema';
import { counterReducer } from './model/slice/counterSlice';

export {
    CounterSchema,
    Counter,
    counterReducer,
};
