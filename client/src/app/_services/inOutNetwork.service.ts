
// // src/app/_services/claims-data.service.ts
// import { Component, Injectable, OnInit } from '@angular/core';
// import { populationCensusEnd } from '../_Models/PopulationCensusEnd';
// import { populationCensusBegin } from '../_Models/PopulationCensusBegin';
// import { clainmsDataByNetworkUAEByAEDValue } from '../_Models/NetworkValues';
// import { clainmsDataByNetworkUAEByNumber } from '../_Models/NetworkNumbers';

// @Injectable({
//   providedIn: 'root'
// })

// export class InOutNetworkService{

//       combinedNetwork:any[]=[];
     
     
//       initializecombinedNetwork():void{
//         this.combinedNetwork = this.ByNetworkUAEonlyByAED.map(provider => {
//           const corresponding = this.ByNetworkUAEonlyByNumber.find(p => p.group === provider.group);
//           return {
//             group: provider.group,
//             ipValue: provider.ip,
//             opValue: provider.op,
//             dentalValue: provider.dental,
//             maternityValue: provider.maternity,
//             ipCount: corresponding?.ip ?? 0,
//             opCount: corresponding?.op ?? 0,
//             dentalCount: corresponding?.dental ?? 0,
//             maternityCount: corresponding?.maternity ?? 0
    
           
//           };
//         });
    
      
//       }
//     ByNetworkUAEonlyByAED: clainmsDataByNetworkUAEByAEDValue[]=[{
//         id:'14a',
//           group:'In network   ',
//           ip:367488  ,
//           op:1463517 ,
//           pharmacy:'Included under OP',
//           dental:66003 ,
//           maternity:168978,
//           total:2065986
//        },
//        {
//         id:'14b',
//         group:'Out of network  ',
//           ip:822 ,
//           op:7085  ,
//           pharmacy:'Included under OP',
//           dental:3854 ,
//           maternity:0 ,
//           total:11761
      
//        },
//       ]
//       ByNetworkUAEonlyByNumber: clainmsDataByNetworkUAEByNumber[]=[{
//         id:'15a',
//           group:'In network',
//           ip:38  ,
//           op:2764  ,
//           pharmacy:'Included under OP',
//           dental:151 ,
//           maternity:199,
//        },
//        {
//         id:'15b',
//         group:'Out of network ',
//           ip:2 ,
//           op:26  ,
//           pharmacy:'Included under OP',
//           dental:10 ,
//           maternity:3,
//        },
//       ]
// }


