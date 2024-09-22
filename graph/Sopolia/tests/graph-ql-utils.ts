import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { getNum, incrementDone } from "../generated/graphQL/graphQL"

export function creategetNumEvent(param0: BigInt): getNum {
  let getNumEvent = changetype<getNum>(newMockEvent())

  getNumEvent.parameters = new Array()

  getNumEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromUnsignedBigInt(param0))
  )

  return getNumEvent
}

export function createincrementDoneEvent(param0: BigInt): incrementDone {
  let incrementDoneEvent = changetype<incrementDone>(newMockEvent())

  incrementDoneEvent.parameters = new Array()

  incrementDoneEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromUnsignedBigInt(param0))
  )

  return incrementDoneEvent
}
