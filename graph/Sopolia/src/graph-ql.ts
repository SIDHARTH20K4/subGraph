import {
  getNum as getNumEvent,
  incrementDone as incrementDoneEvent
} from "../generated/graphQL/graphQL"
import { getNum, incrementDone } from "../generated/schema"

export function handlegetNum(event: getNumEvent): void {
  let entity = new getNum(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.param0 = event.params.param0

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleincrementDone(event: incrementDoneEvent): void {
  let entity = new incrementDone(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.param0 = event.params.param0

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
