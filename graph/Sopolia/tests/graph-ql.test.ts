import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { getNum } from "../generated/schema"
import { getNum as getNumEvent } from "../generated/graphQL/graphQL"
import { handlegetNum } from "../src/graph-ql"
import { creategetNumEvent } from "./graph-ql-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let param0 = BigInt.fromI32(234)
    let newgetNumEvent = creategetNumEvent(param0)
    handlegetNum(newgetNumEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("getNum created and stored", () => {
    assert.entityCount("getNum", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "getNum",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "param0",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
