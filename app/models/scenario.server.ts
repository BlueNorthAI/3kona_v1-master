import type { SnopScenario } from "@prisma/client";

import { prisma } from "~/db.server";

export function getScenarioItems() {
  return prisma.snopScenario.findMany({
    select: {
      scenario_id: true,
      description: true,
      CreatedAt: true,
      UpdatedAt: true,
      module: true,
      Status: true,
    },
  });
}

export function createScenario(inputData) {
  return prisma.snopScenario.create({
    data: inputData,
  });
}

export async function updateScenario(scenario_id, status) {
  return await prisma.snopScenario.update({
    where: {
      scenario_id: scenario_id, // Assuming scenario_id is the unique identifier or primary key
    },
    data: {
      Status: status, // Set the status to the value passed to the function
    },
  });
}

export async function getScenarioById(scenario_id) {
  return await prisma.snopScenario.findUnique({
    where: {
      scenario_id: scenario_id, // Assuming scenario_id is the unique identifier or primary key
    },
  });
}

export async function deleteScenarioById(scenario_id) {
  return await prisma.snopScenario.delete({
    where: {
      scenario_id: scenario_id, // Assuming scenario_id is the unique identifier or primary key
    },
  });
}

export async function duplicateScenario(scenarioId) {
  // Step 1: Fetch the existing scenario data
  const existingScenario = await prisma.snopScenario.findUnique({
    where: {
      scenario_id: scenarioId, // Assuming `scenario_id` is the unique identifier
    },
  });

  if (!existingScenario) {
    throw new Error("Scenario not found");
  }

  // Step 2: Modify the data for the new scenario
  // Remove or modify properties that must be unique for the new row
  const { id, scenario_id, CreatedAt, UpdatedAt, Status, ...restOfData } =
    existingScenario;

  // Step 3: Insert the new scenario as a new row
  const newScenario = await prisma.snopScenario.create({
    data: {
      ...restOfData,
      Status: "Open",
    },
  });

  return newScenario;
}
