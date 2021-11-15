import { animate, state, style, transition, trigger } from "@angular/animations";

export let fadeInOut = trigger ('fadeInOut',[
                       state('In', style({
                           opacity:1
                       })),

                       state('Out', style({
                           opacity:0
                       })),

                       transition('* => In', [animate(2000)]),
                       transition('In => Out', [animate(3000)])
                    ])
