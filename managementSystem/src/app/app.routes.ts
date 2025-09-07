import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { Databinding } from './components/databinding/databinding';
import { SignalEx } from './components/signal-ex/signal-ex';

export const routes: Routes = [
    {
        path: 'admin',
        component: Admin
    }, 
    {
        path: 'control',
        component: ControlFlow
    },
    {
        path: 'binding',
        component: Databinding
    },
    {
        path: 'signal',
        component: SignalEx
    }
];
