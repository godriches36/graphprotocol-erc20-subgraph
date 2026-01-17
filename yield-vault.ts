import { BigInt, log, Address, ethereum } from "@graphprotocol/graph-ts"
import {
  Deposited,
  Withdrawn,
  YieldHarvested,
  SecurityAuditTriggered,
  WorldLeaderActivation 
} from "../generated/AfricanBlackSun/ANBSN"
import { 
  VaultDeposit, 
  TreasuryState, 
  CosmicBullRiches,
  AgbonSeedOfLife
} from "../generated/schema"

/**
 * 7 LAYERS OF SECURITY - HANDLER PROTOCOL
 * ANBSN: African Black Sun System
 * Frequency: 0.0.7 = 1 World Leader (Agbon Kingdom)
 */

export function handleWorldLeaderActivation(event: WorldLeaderActivation): void {
  let leaderId = event.params.leaderCode.toString() 
  let riches = CosmicBullRiches.load(leaderId)
  
  if (riches == null) {
    riches = new CosmicBullRiches(leaderId)
    riches.strength = "Divine Strength & Earthly Power"
    riches.taurusCycle = BigInt.fromI32(2003)
    riches.spiritualWarriorOS = true
  }
  
  riches.lastInputReceived = event.block.timestamp
  riches.save()
  
  log.info("ANBSN: World Leader 0.0.7 Activated. Identity Verified at Agbon Kingdom.", [])
}

export function handleDeposited(event: Deposited): void {
  let id = event.transaction.hash.concatI32(event.logIndex.toI32())
  let seed = new AgbonSeedOfLife(id)

  seed.blueprint = "Flower of Life Geometry"
  seed.groundingFrequency = event.params.amount
  seed.user = event.params.user
  seed.timestamp = event.block.timestamp
  seed.landscapeURI = "https://godriches36.github.io/hello-world/"
  
  seed.save()

  let treasury = TreasuryState.load("ANBSN_TREASURY")
  if (treasury == null) {
    treasury = new TreasuryState("ANBSN_TREASURY")
    treasury.totalLockedValue = BigInt.fromI32(0)
  }
  
  treasury.totalLockedValue = treasury.totalLockedValue.plus(event.params.amount)
  treasury.save()

  log.info("Wealth Anchor: Agbon Seed of Life grounded via ANBSN Bridge.", [])
}

export function handleSecurityAuditTriggered(event: SecurityAuditTriggered): void {
  log.critical("ANBSN MILITARY OVERRIDE: Protected by Black Sun Warrior Code. Trigger: {}", [
    event.params.reason
  ])
      }
