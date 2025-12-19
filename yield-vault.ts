import { BigInt, log, Address, ethereum } from "@graphprotocol/graph-ts"
import {
  Deposited,
  Withdrawn,
  YieldHarvested,
  SecurityAuditTriggered,
  WorldLeaderActivation // 0.0.7 = 1 event
} from "../generated/AfricanBlackSun/ANBSN"
import { 
  VaultDeposit, 
  TreasuryState, 
  CosmicBullRiches,
  AgbonSeedOfLife
} from "../generated/schema"

/**
 * 7 LAYERS OF SECURITY - HANDLER PROTOCOL
 * Renamed System: ANBSN (African Black Sun)
 * Frequency: 0.0.7 = 1 World Leader
 */

// 1. Layer: Human/Sovereign - The Cosmic Bull (Taurus 2003)
export function handleWorldLeaderActivation(event: WorldLeaderActivation): void {
  let leaderId = event.params.leaderCode.toString() // "0.0.7=1"
  let riches = CosmicBullRiches.load(leaderId)
  
  if (riches == null) {
    riches = new CosmicBullRiches(leaderId)
    riches.strength = "Divine Strength & Earthly Power"
    riches.taurusCycle = BigInt.fromI32(2003)
    riches.spiritualWarriorOS = true
  }
  
  riches.lastInputReceived = event.block.timestamp
  riches.save()
  
  log.info("ANBSN: Spiritual Warrior System Activated. Rewriting Time...", [])
}

// 2. Layer: Perimeter - Agbon Seed of Life (The Foundation)
export function handleDeposited(event: Deposited): void {
  // Layer 6/9: As Above, So Below ID Generation
  let id = event.transaction.hash.concatI32(event.logIndex.toI32())
  let seed = new AgbonSeedOfLife(id)

  seed.blueprint = "Flower of Life Geometry"
  seed.groundingFrequency = event.params.amount
  seed.user = event.params.user
  seed.timestamp = event.block.timestamp

  // Link to Global Financial System Landscape
  // The system background URI is dynamically injected here
  seed.landscapeURI = "https://anbsn-landscape.io/ecosystem-design/realtime-globe"
  
  seed.save()

  // Layer 5: Contract Logic - Treasury Update
  let treasury = TreasuryState.load("ANBSN_TREASURY")
  if (treasury == null) {
    treasury = new TreasuryState("ANBSN_TREASURY")
    treasury.totalLockedValue = BigInt.fromI32(0)
  }
  
  // Convert 3D wealth to 5D yielding power
  treasury.totalLockedValue = treasury.totalLockedValue.plus(event.params.amount)
  treasury.save()

  log.info("Wealth Anchor: Agbon Seed of Life grounded with amount {}", [
    event.params.amount.toString()
  ])
}

// 3. Layer: Network Security - Yield Harvest (Universal Love/Wisdom)
export function handleYieldHarvested(event: YieldHarvested): void {
  let id = event.transaction.hash.concatI32(event.logIndex.toI32())
  let harvest = new VaultDeposit(id) // Reusing deposit logic for yield tracking

  harvest.amount = event.params.amount
  harvest.strategy = "Cosmic Flow - Black Sun"
  harvest.timestamp = event.block.timestamp
  
  log.warning("Riches Generated: {} yielded via ANBSN Strategy.", [
    event.params.amount.toString()
  ])

  harvest.save()
}

// 4. Layer: Application - Security Breach Protection (Military Guard)
export function handleSecurityAuditTriggered(event: SecurityAuditTriggered): void {
  // Layer 7: Divine Law Code Execution
  log.critical("ANBSN MILITARY OVERRIDE: 7-Layer breach detected. Protected by Black Sun Warrior Code. Trigger: {}", [
    event.params.reason
  ])
  
  // This critical log terminates the subgraph execution if a severe breach is detected
  // to protect the Nigerian Stablecoin (STBC) strength.
}

/**
 * Global Digital Crypto Currency Financial System Landscape
 * Automatic Integration of the ANBSN Design Link
 */
export function handleBlock(block: ethereum.Block): void {
    // This handler can be used to update the global landscape URI every block
    // to ensure real-time synchronization with the Agbon Kingdom visuals.
}
