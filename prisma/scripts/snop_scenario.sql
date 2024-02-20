CREATE TABLE SNOP_SCENARIO (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    scenario_id TEXT,
    description TEXT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    module TEXT DEFAULT 'Sales & Operations Planning',
    Status TEXT,
    customer TEXT NOT NULL,
    site TEXT NOT NULL,
    sku TEXT NOT NULL,
    Jan INTEGER,
    Feb INTEGER,
    Mar INTEGER,
    Apr INTEGER,
    May INTEGER,
    Jun INTEGER,
    Jul INTEGER,
    Aug INTEGER,
    Sep INTEGER,
    Oct INTEGER,
    Nov INTEGER,
    Dec INTEGER,
    material_cost_pu INTEGER,
    inv_hold_cost_pupm INTEGER,
    stockout_cost_pupm INTEGER,
    hiring_cost_pw INTEGER,
    firing_cost_pw INTEGER,
    labor_hrs_pu INTEGER,
    worker_cost_pm INTEGER,
    overtime_cost_phr INTEGER,
    outsourcing_cost_pu INTEGER,
    max_work_hrs_pwpm INTEGER,
    max_overtime_hrs_pwpm INTEGER,
    inventory_start INTEGER,
    inventory_end INTEGER,
    backlog_start INTEGER,
    backlog_end INTEGER,
    num_workers_start INTEGER,
    min_end_workers INTEGER,
    max_end_workers INTEGER
);
-- Trigger to automatically update the UpdatedAt timestamp upon row update
CREATE TRIGGER UpdateSNOP_SCENARIO_UpdatedAt
AFTER UPDATE ON SNOP_SCENARIO
FOR EACH ROW
BEGIN
    UPDATE SNOP_SCENARIO SET UpdatedAt = CURRENT_TIMESTAMP WHERE id = old.id;
END;

[1:35 PM] Shrikanth Iyangar
CREATE TABLE SNOP_SCENARIO (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    scenario_id TEXT,
    description TEXT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    module TEXT DEFAULT 'Sales & Operations Planning',
    Status TEXT,
    customer TEXT NOT NULL,
    site TEXT NOT NULL,
    sku TEXT NOT NULL,
    Jan INTEGER,
    Feb INTEGER,
    Mar INTEGER,
    Apr INTEGER,
    May INTEGER,
    Jun INTEGER,
    Jul INTEGER,
    Aug INTEGER,
    Sep INTEGER,
    Oct INTEGER,
    Nov INTEGER,
    Dec INTEGER,
    material_cost_pu INTEGER,
    inv_hold_cost_pupm INTEGER,
    stockout_cost_pupm INTEGER,
    hiring_cost_pw INTEGER,
    firing_cost_pw INTEGER,
    labor_hrs_pu INTEGER,
    worker_cost_pm INTEGER,
    overtime_cost_phr INTEGER,
    outsourcing_cost_pu INTEGER,
    max_work_hrs_pwpm INTEGER,
    max_overtime_hrs_pwpm INTEGER,
    inventory_start INTEGER,
    inventory_end INTEGER,
    backlog_start INTEGER,
    backlog_end INTEGER,
    num_workers_start INTEGER,
    min_end_workers INTEGER,
    max_end_workers INTEGER
);
 
-- Trigger to automatically update the UpdatedAt timestamp upon row update
CREATE TRIGGER UpdateSNOP_SCENARIO_UpdatedAt
AFTER UPDATE ON SNOP_SCENARIO
FOR EACH ROW
BEGIN
    UPDATE SNOP_SCENARIO SET UpdatedAt = CURRENT_TIMESTAMP WHERE id = old.id;
END;
 
-- Trigger to format scenario_id as 'SCEN-' || NEW.id upon insertion
CREATE TRIGGER FormatSNOP_SCENARIO_scenario_id
AFTER INSERT ON SNOP_SCENARIO
FOR EACH ROW
BEGIN
    UPDATE SNOP_SCENARIO SET scenario_id = 'SCEN-' || NEW.id WHERE id = NEW.id;
END;

COMMIT


INSERT INTO SNOP_SCENARIO (
    description,
    -- Assuming these are the column names from PLAN_INPUT that also exist in SNOP_SCENARIO
    customer, site, sku, Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec,
    material_cost_pu, inv_hold_cost_pupm, stockout_cost_pupm, hiring_cost_pw, firing_cost_pw,
    labor_hrs_pu, worker_cost_pm, overtime_cost_phr, outsourcing_cost_pu,
    max_work_hrs_pwpm, max_overtime_hrs_pwpm, inventory_start, inventory_end,
    backlog_start, backlog_end, num_workers_start, min_end_workers, max_end_workers,
    Status
)
SELECT
    'Test scenario', -- Description
    -- Selecting respective columns from PLAN_INPUT
    customer, site, sku, Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec,
    material_cost_pu, inv_hold_cost_pupm, stockout_cost_pupm, hiring_cost_pw, firing_cost_pw,
    labor_hrs_pu, worker_cost_pm, overtime_cost_phr, outsourcing_cost_pu,
    max_work_hrs_pwpm, max_overtime_hrs_pwpm, inventory_start, inventory_end,
    backlog_start, backlog_end, num_workers_start, min_end_workers, max_end_workers,
    'Open' -- Assuming you want to set an initial status for the scenario
FROM PLAN_INPUT

SELECT * FROM SNOP_SCENARIO