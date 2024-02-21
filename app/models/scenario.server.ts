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

export async function getScenarioById(scenario_id){
  return await prisma.snopScenario.findUnique({
    where: {
      scenario_id: scenario_id, // Assuming scenario_id is the unique identifier or primary key
    }
  })
}

