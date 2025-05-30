function calculateEstimate() {
  let bathroomTotal = 0;
  let kitchenTotal = 0;
  let floorTotal = 0;

  // Bathroom
  const bathroomTile = parseFloat(document.getElementById("bathroomTile").value);
  const bathroomTileQty = parseFloat(document.getElementById("bathroomTileQty").value) || 0;
  const bathroomVanity = parseFloat(document.getElementById("bathroomVanity").value);
  const heatedFloor = parseFloat(document.getElementById("heatedFloor").value) || 0;
  const gfcis = parseFloat(document.getElementById("gfcis").value) || 0;

  bathroomTotal += bathroomTile * bathroomTileQty;
  bathroomTotal += bathroomVanity;
  bathroomTotal += heatedFloor * 9.5;
  bathroomTotal += gfcis * 75;

  // Kitchen
  const kitchenCountertop = parseFloat(document.getElementById("kitchenCountertop").value);
  const kitchenCountertopQty = parseFloat(document.getElementById("kitchenCountertopQty").value) || 0;
  const kitchenCabinets = parseFloat(document.getElementById("kitchenCabinets").value);
  const kitchenCabinetsQty = parseFloat(document.getElementById("kitchenCabinetsQty").value) || 0;

  kitchenTotal += kitchenCountertop * kitchenCountertopQty;
  kitchenTotal += kitchenCabinets * kitchenCabinetsQty;

  // Flooring
  const floorType = parseFloat(document.getElementById("floorType").value);
  const floorQty = parseFloat(document.getElementById("floorQty").value) || 0;
  floorTotal += floorType * floorQty;

  // Display subtotals
  document.getElementById("bathroomTotal").textContent = bathroomTotal.toFixed(2);
  document.getElementById("kitchenTotal").textContent = kitchenTotal.toFixed(2);
  document.getElementById("floorTotal").textContent = floorTotal.toFixed(2);

  
  // Decking
  const deckMaterial = parseFloat(document.getElementById("deckMaterial").value);
  const deckArea = parseFloat(document.getElementById("deckArea").value) || 0;
  const deckingTotal = deckMaterial * deckArea;
  document.getElementById("deckingTotal").textContent = deckingTotal.toFixed(2);

  // Garage
  const epoxyFloor = parseFloat(document.getElementById("epoxyFloor").value) || 0;
  const garageTotal = epoxyFloor * 6;
  document.getElementById("garageTotal").textContent = garageTotal.toFixed(2);

  // Basement
  const basementFinish = parseFloat(document.getElementById("basementFinish").value) || 0;
  const basementTotal = basementFinish * 28;
  document.getElementById("basementTotal").textContent = basementTotal.toFixed(2);

  // Glass
  const windowsQty = parseFloat(document.getElementById("windowsQty").value) || 0;
  const showerGlassQty = parseFloat(document.getElementById("showerGlassQty").value) || 0;
  const glassTotal = (windowsQty * 500) + (showerGlassQty * 1200);
  document.getElementById("glassTotal").textContent = glassTotal.toFixed(2);

  // Miscellaneous
  const drywallPatchQty = parseFloat(document.getElementById("drywallPatchQty").value) || 0;
  const miscTotal = drywallPatchQty * 300;
  document.getElementById("miscTotal").textContent = miscTotal.toFixed(2);

  // Display grand total
  const grandTotal = bathroomTotal + kitchenTotal + floorTotal + deckingTotal + garageTotal + basementTotal + glassTotal + miscTotal;

  const grandTotal = bathroomTotal + kitchenTotal + floorTotal;
  document.getElementById("grandTotal").textContent = grandTotal.toFixed(2);
}
