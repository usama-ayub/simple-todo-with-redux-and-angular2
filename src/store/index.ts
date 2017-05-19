import 'redux/dist/redux';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { combineReducers } from 'redux';


import { todoReducers} from './reducers/todo';
import { authReducer } from './reducers/auth';
import { AuthActions } from './actions/auth';
import { TodoActions } from './action/todo';

export { Observable, Subscription, BehaviorSubject, Subject } from 'rxjs';
export { select, NgRedux } from 'ng2-redux';
export { bindActionCreators } from 'redux';


export { AuthActions } from './actions/auth';
export { TodoActions } from './actions/todo';
export interface IAppState {
    todos: [any],
    auth: any
}
const AppReducer = combineReducers<IAppState>({
    todos: todoReducers,
    auth: authReducer
})
@NgModule({
    imports: [
        NgReduxModule
    ],
    providers: [
       AuthActions,
       TodoActions
    ]
})

export class StoreModule {
    constructor(
        private ngRedux: NgRedux<IAppState>,
        private devTool: DevToolsExtension,
        
    ) {
        const middleware = [
        
        ];
        this.ngRedux.configureStore(
            AppReducer,
            <any>{}, // Defailt State
            middleware, // Middlewares
            [devTool.isEnabled() ? devTool.enhancer() : f => f] // Enhancers
        )
    }
}