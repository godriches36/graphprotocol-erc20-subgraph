import {
   Approval
 } from "../generated/Lido/Lido"
 import {
   ApprovalQuery
 } from "../generated/schema"

 export function ApprovalHandler(event: Approval): void {
   let entity = new ApprovalQuery(
     event.transaction.hash.toHex() + '-' + event.logIndex.toString()
   )

   entity.owner = event.params.owner
   entity.spender = event.params.spender
   entity.value = event.params.value

   entity.save()
 }
