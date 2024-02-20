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
