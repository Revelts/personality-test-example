// Simplified and more accurate personality calculation algorithm
// Based on feedback: results should match user's choices better

import { PersonalityResult, Scores, personalityTypes } from './results';

export function calculatePersonalityV2(scores: Scores): PersonalityResult {
  // Calculate total engagement
  const total = scores.logical + scores.creative + scores.empathetic + scores.leader + scores.adventurer;
  
  // Find top traits
  const scoreArray = [
    { type: 'logical', value: scores.logical },
    { type: 'creative', value: scores.creative },
    { type: 'empathetic', value: scores.empathetic },
    { type: 'leader', value: scores.leader },
    { type: 'adventurer', value: scores.adventurer }
  ].sort((a, b) => b.value - a.value);

  const primary = scoreArray[0].type as keyof Scores;
  const secondary = scoreArray[1].type as keyof Scores;
  const primaryScore = scoreArray[0].value;
  const secondaryScore = scoreArray[1].value;
  const gap = primaryScore - secondaryScore;
  
  console.log('Scores:', scores);
  console.log('Primary:', primary, primaryScore, '| Secondary:', secondary, secondaryScore, '| Gap:', gap, '| Total:', total);
  
  // === PRIORITY 1: Strong Dominant Trait (Gap >= 2) ===
  if (gap >= 2 && primaryScore >= 3) {
    switch (primary) {
      case 'leader':
        console.log('→ Si Serba Cepat (strong leader)');
        return personalityTypes[2];
      case 'logical':
        console.log('→ Si Paling Beres (strong logical)');
        return personalityTypes[1];
      case 'creative':
        console.log('→ Si Paling Eksis (strong creative)');
        return personalityTypes[3];
      case 'adventurer':
        console.log('→ Si Spontan (strong adventurer)');
        return personalityTypes[0];
      case 'empathetic':
        console.log('→ Si Santai Tapi Ngeh (strong empathetic)');
        return personalityTypes[4];
    }
  }
  
  // === PRIORITY 2: Low Total (Santai personality) ===
  if (total <= 3) {
    console.log('→ Si Santai Tapi Ngeh (low total)');
    return personalityTypes[4];
  }
  
  // === PRIORITY 3: Specific Dual Combinations ===
  
  // Si Spontan: Creative + Adventurer
  if ((primary === 'creative' && secondary === 'adventurer') ||
      (primary === 'adventurer' && secondary === 'creative')) {
    if (gap <= 1 || (scores.creative >= 2 && scores.adventurer >= 2)) {
      console.log('→ Si Spontan (creative + adventurer combo)');
      return personalityTypes[0];
    }
  }
  
  // === PRIORITY 4: Single Strong Trait ===
  if (primaryScore >= 3) {
    switch (primary) {
      case 'leader':
        console.log('→ Si Serba Cepat (primary leader)');
        return personalityTypes[2];
      case 'logical':
        console.log('→ Si Paling Beres (primary logical)');
        return personalityTypes[1];
      case 'creative':
        console.log('→ Si Paling Eksis (primary creative)');
        return personalityTypes[3];
      case 'adventurer':
        console.log('→ Si Spontan (primary adventurer)');
        return personalityTypes[0];
      case 'empathetic':
        // Empathetic alone → Santai
        console.log('→ Si Santai Tapi Ngeh (primary empathetic)');
        return personalityTypes[4];
    }
  }
  
  // === PRIORITY 5: Moderate Scores ===
  if (primaryScore >= 2) {
    switch (primary) {
      case 'leader':
        console.log('→ Si Serba Cepat (moderate leader)');
        return personalityTypes[2];
      case 'logical':
        console.log('→ Si Paling Beres (moderate logical)');
        return personalityTypes[1];
      case 'creative':
        // Creative + any adventurer → Spontan, else → Eksis
        if (scores.adventurer >= 1) {
          console.log('→ Si Spontan (creative + some adventurer)');
          return personalityTypes[0];
        }
        console.log('→ Si Paling Eksis (moderate creative)');
        return personalityTypes[3];
      case 'adventurer':
        console.log('→ Si Spontan (moderate adventurer)');
        return personalityTypes[0];
      case 'empathetic':
        console.log('→ Si Santai Tapi Ngeh (moderate empathetic)');
        return personalityTypes[4];
    }
  }
  
  // === PRIORITY 6: Balanced (Small Gap) ===
  if (gap <= 1) {
    // Very balanced → default to Santai
    console.log('→ Si Santai Tapi Ngeh (balanced, small gap)');
    return personalityTypes[4];
  }
  
  // === FALLBACK: Use Primary Trait ===
  console.log('→ Fallback to primary trait:', primary);
  switch (primary) {
    case 'leader':
      return personalityTypes[2];
    case 'logical':
      return personalityTypes[1];
    case 'creative':
      return personalityTypes[3];
    case 'adventurer':
      return personalityTypes[0];
    case 'empathetic':
    default:
      return personalityTypes[4];
  }
}
