(() => {
  // js/catalogue.js
  var CATALOGUE = { "areas": ["System", "Finance", "Sales", "CRM & Marketing", "Retail & E-commerce", "Procurement", "Inventory & Warehouse", "Manufacturing & Quality", "Projects & Time", "Service & Assets", "HR & Payroll", "Support & Documents"], "modules": [{ "area": "System", "code": "M01", "name": "Multi-company", "description": "Legal entities, group structure and per-company settings.", "screenCount": 2, "columnCount": 31, "typicalUsers": "System administrator, Finance manager" }, { "area": "System", "code": "M02", "name": "Users & security", "description": "Users, roles, permissions and company access.", "screenCount": 4, "columnCount": 36, "typicalUsers": "System administrator" }, { "area": "System", "code": "M03", "name": "Number sequences", "description": "Automatic document numbering.", "screenCount": 1, "columnCount": 14, "typicalUsers": "System administrator" }, { "area": "System", "code": "M04", "name": "Multi-currency", "description": "Currencies and exchange rates. ZAR is the example base currency.", "screenCount": 2, "columnCount": 17, "typicalUsers": "Finance manager, System administrator, Finance, Treasury" }, { "area": "System", "code": "M05", "name": "Tax", "description": "Tax codes used on sales, purchases and journals. VAT 15% is the example standard rate.", "screenCount": 1, "columnCount": 13, "typicalUsers": "Finance manager" }, { "area": "System", "code": "M06", "name": "Fiscal calendar", "description": "Accounting years and periods, including close and lock.", "screenCount": 1, "columnCount": 9, "typicalUsers": "Finance manager" }, { "area": "System", "code": "M07", "name": "Notifications", "description": "In-app, email and SMS notifications.", "screenCount": 1, "columnCount": 10, "typicalUsers": "All users" }, { "area": "System", "code": "M08", "name": "Approvals & workflows", "description": "Reusable workflows and the live approval queue.", "screenCount": 3, "columnCount": 34, "typicalUsers": "System administrator, Process owner, Approvers, Requesters" }, { "area": "System", "code": "M09", "name": "Document management", "description": "Central document library and version history.", "screenCount": 2, "columnCount": 20, "typicalUsers": "All users" }, { "area": "System", "code": "M10", "name": "Integrations", "description": "External system connections and API logs.", "screenCount": 2, "columnCount": 27, "typicalUsers": "System administrator, Integration owner, Support" }, { "area": "System", "code": "M11", "name": "Audit & parameters", "description": "Audit trail and global system parameters.", "screenCount": 2, "columnCount": 21, "typicalUsers": "System administrator, Compliance" }, { "area": "Finance", "code": "M12", "name": "Financials", "description": "General ledger, journals and financial statements.", "screenCount": 6, "columnCount": 77, "typicalUsers": "Accountant, Finance manager, Management" }, { "area": "Finance", "code": "M13", "name": "Cost centres", "description": "Cost and profit centres for departmental analysis.", "screenCount": 1, "columnCount": 12, "typicalUsers": "Finance manager" }, { "area": "Finance", "code": "M14", "name": "Budgeting", "description": "Budget versions, lines and budget-versus-actual.", "screenCount": 3, "columnCount": 32, "typicalUsers": "Finance manager, Cost centre manager" }, { "area": "Finance", "code": "M15", "name": "Cash book & banking", "description": "Bank accounts, statements and reconciliations.", "screenCount": 3, "columnCount": 37, "typicalUsers": "Finance, Treasury, Accountant" }, { "area": "Finance", "code": "M16", "name": "Cash flow", "description": "Actual and forecast cash movement.", "screenCount": 1, "columnCount": 9, "typicalUsers": "Finance manager, Treasury" }, { "area": "Finance", "code": "M17", "name": "Accounts receivable", "description": "Customer receipts, allocations and aging.", "screenCount": 3, "columnCount": 39, "typicalUsers": "AR clerk, Accountant, Credit controller, Finance manager" }, { "area": "Finance", "code": "M18", "name": "Accounts payable", "description": "Supplier payments, allocations and aging.", "screenCount": 3, "columnCount": 32, "typicalUsers": "AP clerk, Accountant, Finance manager" }, { "area": "Finance", "code": "M19", "name": "Tax returns", "description": "Tax return boxes. A VAT 201-style layout is used as a South African example.", "screenCount": 1, "columnCount": 10, "typicalUsers": "Finance manager, Accountant" }, { "area": "Finance", "code": "M20", "name": "Fixed assets", "description": "Fixed asset register, depreciation and disposals.", "screenCount": 4, "columnCount": 52, "typicalUsers": "Asset accountant, Finance" }, { "area": "Finance", "code": "M21", "name": "Petty cash", "description": "Petty cash vouchers.", "screenCount": 1, "columnCount": 16, "typicalUsers": "AP clerk, Accountant" }, { "area": "Sales", "code": "M22", "name": "Sales", "description": "Customers, pricing, quotes, orders, deliveries, invoicing, returns and commissions.", "screenCount": 15, "columnCount": 225, "typicalUsers": "Sales admin, Credit controller, AR clerk, Salesperson, Sales manager, Pricing, Warehouse, Quality, Payroll, Finance" }, { "area": "CRM & Marketing", "code": "M23", "name": "CRM", "description": "Leads, opportunities and sales activities.", "screenCount": 3, "columnCount": 50, "typicalUsers": "Salesperson, Marketing, Sales manager, Customer service" }, { "area": "CRM & Marketing", "code": "M24", "name": "Marketing", "description": "Campaigns, members and marketing lists.", "screenCount": 3, "columnCount": 32, "typicalUsers": "Marketing, Sales manager" }, { "area": "Retail & E-commerce", "code": "M25", "name": "POS / Retail", "description": "Stores, tills, POS receipts, promotions and loyalty.", "screenCount": 8, "columnCount": 87, "typicalUsers": "Retail manager, System administrator, Store manager, Cashier, Finance, Marketing" }, { "area": "Retail & E-commerce", "code": "M26", "name": "E-commerce", "description": "Web and marketplace channels, catalogues, carts and orders.", "screenCount": 6, "columnCount": 67, "typicalUsers": "E-commerce manager, System administrator, Merchandising, Sales admin, Marketing" }, { "area": "Procurement", "code": "M27", "name": "Procurement", "description": "Suppliers, requisitions, RFQs, purchase orders, goods receipts and supplier invoices.", "screenCount": 12, "columnCount": 175, "typicalUsers": "Buyer, AP clerk, Requester, Approver, Warehouse, Quality" }, { "area": "Procurement", "code": "M28", "name": "Contracts", "description": "Supplier blanket and term contracts.", "screenCount": 2, "columnCount": 25, "typicalUsers": "Buyer, Legal, Finance" }, { "area": "Inventory & Warehouse", "code": "M29", "name": "Inventory", "description": "Items, warehouses, stock on hand, movements, lots/serials and stock takes.", "screenCount": 13, "columnCount": 162, "typicalUsers": "Inventory controller, Buyer, Sales admin, Production, Warehouse manager, Warehouse, Planning, Finance, Quality" }, { "area": "Inventory & Warehouse", "code": "M30", "name": "Warehouse management", "description": "Bins, putaway, picking, packing and shipping.", "screenCount": 7, "columnCount": 76, "typicalUsers": "Warehouse manager, Warehouse, Receiver, Dispatcher, Picker, Packer, Sales admin" }, { "area": "Manufacturing & Quality", "code": "M31", "name": "Manufacturing", "description": "BOMs, routings, work centres, MRP, work orders and production output.", "screenCount": 14, "columnCount": 169, "typicalUsers": "Production planner, Engineer, Production manager, Sales planner, Buyer, Supervisor, Shop floor, Storeman, Inventory" }, { "area": "Manufacturing & Quality", "code": "M32", "name": "Quality", "description": "Inspection plans, inspections, non-conformance, CAPA and certificates.", "screenCount": 7, "columnCount": 82, "typicalUsers": "Quality engineer, Quality inspector, Warehouse, Quality, Production, Buyer, Process owner, Sales admin" }, { "area": "Projects & Time", "code": "M33", "name": "Project management", "description": "Projects, tasks, resources, costs and billing milestones.", "screenCount": 5, "columnCount": 62, "typicalUsers": "Project manager, Finance, Management, Team member, AR clerk" }, { "area": "Projects & Time", "code": "M34", "name": "Timesheets", "description": "Employee timesheets and time entry against projects or jobs.", "screenCount": 2, "columnCount": 27, "typicalUsers": "Employee, Supervisor, Payroll, Project manager" }, { "area": "Service & Assets", "code": "M35", "name": "Field service", "description": "Service contracts, field jobs, visits and parts used.", "screenCount": 4, "columnCount": 55, "typicalUsers": "Service manager, Sales admin, Service coordinator, Technician, Inventory" }, { "area": "Service & Assets", "code": "M36", "name": "Maintenance", "description": "Maintainable assets, schedules, requests and maintenance work orders.", "screenCount": 5, "columnCount": 51, "typicalUsers": "Maintenance planner, Asset accountant, Any user, Technician, Finance, Storeman" }, { "area": "Service & Assets", "code": "M37", "name": "Fleet", "description": "Vehicles, trip logbook, fuel and vehicle services.", "screenCount": 4, "columnCount": 56, "typicalUsers": "Fleet manager, Finance, HR, Driver, Maintenance" }, { "area": "HR & Payroll", "code": "M38", "name": "Human resources", "description": "Employees, leave, attendance, recruitment, training and performance.", "screenCount": 12, "columnCount": 128, "typicalUsers": "HR, Payroll, Managers, Management, Employee, Manager, Supervisors, Recruiter, Hiring manager, Interviewers, Training coordinator, Employees" }, { "area": "HR & Payroll", "code": "M39", "name": "Payroll", "description": "Payroll runs, payslips and pay-component transactions.", "screenCount": 3, "columnCount": 37, "typicalUsers": "Payroll, Finance, HR, Employee" }, { "area": "Support & Documents", "code": "M40", "name": "Helpdesk", "description": "Support tickets, activities, knowledge base and SLA policies.", "screenCount": 4, "columnCount": 46, "typicalUsers": "Support agent, Requester, Service manager, Knowledge author, Support manager" }, { "area": "Support & Documents", "code": "M41", "name": "Contracts", "description": "Commercial contracts register and obligations.", "screenCount": 2, "columnCount": 25, "typicalUsers": "Legal, Finance, Contract owner" }], "screens": [{ "area": "System", "moduleCode": "M01", "module": "Multi-company", "name": "Companies", "type": "Setup grid", "purpose": "Register each legal entity in the group, with statutory and default settings.", "primaryRecord": "Company", "typicalUsers": "System administrator, Finance manager", "columnCount": 22 }, { "area": "System", "moduleCode": "M01", "module": "Multi-company", "name": "Company parameters", "type": "Setup grid", "purpose": "Per-company configuration values such as default warehouse, tax code and posting rules.", "primaryRecord": "Company parameter", "typicalUsers": "System administrator", "columnCount": 9 }, { "area": "System", "moduleCode": "M02", "module": "Users & security", "name": "Users", "type": "Setup grid", "purpose": "Application users, their roles and company access.", "primaryRecord": "User", "typicalUsers": "System administrator", "columnCount": 15 }, { "area": "System", "moduleCode": "M02", "module": "Users & security", "name": "Roles", "type": "Setup grid", "purpose": "Named security roles that can be assigned to users.", "primaryRecord": "Role", "typicalUsers": "System administrator", "columnCount": 8 }, { "area": "System", "moduleCode": "M02", "module": "Users & security", "name": "Role permissions", "type": "Setup grid", "purpose": "Module and screen permissions granted to each role.", "primaryRecord": "Role permission", "typicalUsers": "System administrator", "columnCount": 9 }, { "area": "System", "moduleCode": "M02", "module": "Users & security", "name": "User company access", "type": "Setup grid", "purpose": "Which companies a user may open and post in.", "primaryRecord": "User company access", "typicalUsers": "System administrator", "columnCount": 4 }, { "area": "System", "moduleCode": "M03", "module": "Number sequences", "name": "Number sequences", "type": "Setup grid", "purpose": "Automatic document numbering per company and module.", "primaryRecord": "Number sequence", "typicalUsers": "System administrator", "columnCount": 14 }, { "area": "System", "moduleCode": "M04", "module": "Multi-currency", "name": "Currencies", "type": "Setup grid", "purpose": "Currencies that may be used on transactions and bank accounts.", "primaryRecord": "Currency", "typicalUsers": "Finance manager, System administrator", "columnCount": 6 }, { "area": "System", "moduleCode": "M04", "module": "Multi-currency", "name": "Exchange rates", "type": "Setup grid", "purpose": "Currency conversion rates against the base currency.", "primaryRecord": "Exchange rate", "typicalUsers": "Finance, Treasury", "columnCount": 11 }, { "area": "System", "moduleCode": "M05", "module": "Tax", "name": "Tax codes", "type": "Setup grid", "purpose": "Tax codes used on sales, purchases and journals, including the standard VAT example.", "primaryRecord": "Tax code", "typicalUsers": "Finance manager", "columnCount": 13 }, { "area": "System", "moduleCode": "M06", "module": "Fiscal calendar", "name": "Fiscal periods", "type": "Setup grid", "purpose": "Accounting periods per company, used to open, close and lock the books.", "primaryRecord": "Fiscal period", "typicalUsers": "Finance manager", "columnCount": 9 }, { "area": "System", "moduleCode": "M07", "module": "Notifications", "name": "Notifications", "type": "List grid", "purpose": "In-app, email and SMS notifications generated by the system or workflows.", "primaryRecord": "Notification", "typicalUsers": "All users", "columnCount": 10 }, { "area": "System", "moduleCode": "M08", "module": "Approvals & workflows", "name": "Workflows", "type": "Setup grid", "purpose": "Reusable approval and notification workflows attached to documents.", "primaryRecord": "Workflow", "typicalUsers": "System administrator, Process owner", "columnCount": 11 }, { "area": "System", "moduleCode": "M08", "module": "Approvals & workflows", "name": "Workflow steps", "type": "Setup grid", "purpose": "Ordered steps inside a workflow, including approver role and SLA.", "primaryRecord": "Workflow step", "typicalUsers": "System administrator, Process owner", "columnCount": 8 }, { "area": "System", "moduleCode": "M08", "module": "Approvals & workflows", "name": "Approval requests", "type": "List grid", "purpose": "Live approval queue for documents waiting on a decision.", "primaryRecord": "Approval request", "typicalUsers": "Approvers, Requesters", "columnCount": 15 }, { "area": "System", "moduleCode": "M09", "module": "Document management", "name": "Documents", "type": "List grid", "purpose": "Central document library with links to ERP records.", "primaryRecord": "Document", "typicalUsers": "All users", "columnCount": 14 }, { "area": "System", "moduleCode": "M09", "module": "Document management", "name": "Document versions", "type": "List grid", "purpose": "Version history for a stored document.", "primaryRecord": "Document version", "typicalUsers": "All users", "columnCount": 6 }, { "area": "System", "moduleCode": "M10", "module": "Integrations", "name": "Integration endpoints", "type": "Setup grid", "purpose": "Configured external systems and API connections.", "primaryRecord": "Integration endpoint", "typicalUsers": "System administrator, Integration owner", "columnCount": 14 }, { "area": "System", "moduleCode": "M10", "module": "Integrations", "name": "API logs", "type": "List grid", "purpose": "Request and response log for inbound and outbound API calls.", "primaryRecord": "API log", "typicalUsers": "System administrator, Support", "columnCount": 13 }, { "area": "System", "moduleCode": "M11", "module": "Audit & parameters", "name": "Audit log", "type": "List grid", "purpose": "Field-level audit trail of creates, changes, deletes and logins.", "primaryRecord": "Audit entry", "typicalUsers": "System administrator, Compliance", "columnCount": 12 }, { "area": "System", "moduleCode": "M11", "module": "Audit & parameters", "name": "System parameters", "type": "Setup grid", "purpose": "Global system settings that are not company-specific.", "primaryRecord": "System parameter", "typicalUsers": "System administrator", "columnCount": 9 }, { "area": "Finance", "moduleCode": "M12", "module": "Financials", "name": "Chart of accounts", "type": "Setup grid", "purpose": "General ledger account master used for posting and reporting.", "primaryRecord": "GL account", "typicalUsers": "Accountant, Finance manager", "columnCount": 16 }, { "area": "Finance", "moduleCode": "M12", "module": "Financials", "name": "GL journals", "type": "Document header", "purpose": "Header of manual and system-generated general ledger journals.", "primaryRecord": "GL journal", "typicalUsers": "Accountant", "columnCount": 19 }, { "area": "Finance", "moduleCode": "M12", "module": "Financials", "name": "GL journal lines", "type": "Document lines", "purpose": "Posting lines of a general ledger journal, including cost centre and tax.", "primaryRecord": "GL journal line", "typicalUsers": "Accountant", "columnCount": 13 }, { "area": "Finance", "moduleCode": "M12", "module": "Financials", "name": "Trial balance", "type": "Report grid", "purpose": "Period trial balance by account, with optional cost centre split.", "primaryRecord": "Trial balance row", "typicalUsers": "Accountant, Finance manager", "columnCount": 11 }, { "area": "Finance", "moduleCode": "M12", "module": "Financials", "name": "Profit and loss", "type": "Report grid", "purpose": "Income and expense statement for a period or year to date.", "primaryRecord": "P&L line", "typicalUsers": "Finance manager, Management", "columnCount": 10 }, { "area": "Finance", "moduleCode": "M12", "module": "Financials", "name": "Balance sheet", "type": "Report grid", "purpose": "Assets, liabilities and equity at a period end.", "primaryRecord": "Balance sheet line", "typicalUsers": "Finance manager, Management", "columnCount": 8 }, { "area": "Finance", "moduleCode": "M13", "module": "Cost centres", "name": "Cost centres", "type": "Setup grid", "purpose": "Cost and profit centres used for departmental analysis.", "primaryRecord": "Cost centre", "typicalUsers": "Finance manager", "columnCount": 12 }, { "area": "Finance", "moduleCode": "M14", "module": "Budgeting", "name": "Budgets", "type": "Document header", "purpose": "Budget versions by company and year.", "primaryRecord": "Budget", "typicalUsers": "Finance manager, Cost centre manager", "columnCount": 14 }, { "area": "Finance", "moduleCode": "M14", "module": "Budgeting", "name": "Budget lines", "type": "Document lines", "purpose": "Budget amounts by period, account, cost centre and project.", "primaryRecord": "Budget line", "typicalUsers": "Finance manager, Cost centre manager", "columnCount": 8 }, { "area": "Finance", "moduleCode": "M14", "module": "Budgeting", "name": "Budget vs actual", "type": "Report grid", "purpose": "Comparison of budget, actual and variance by account and cost centre.", "primaryRecord": "Budget vs actual row", "typicalUsers": "Finance manager, Cost centre manager", "columnCount": 10 }, { "area": "Finance", "moduleCode": "M15", "module": "Cash book & banking", "name": "Bank accounts", "type": "Setup grid", "purpose": "Company bank accounts used for receipts, payments and reconciliation.", "primaryRecord": "Bank account", "typicalUsers": "Finance, Treasury", "columnCount": 14 }, { "area": "Finance", "moduleCode": "M15", "module": "Cash book & banking", "name": "Bank statement lines", "type": "List grid", "purpose": "Imported or captured bank statement lines awaiting reconciliation.", "primaryRecord": "Bank statement line", "typicalUsers": "Accountant, Treasury", "columnCount": 11 }, { "area": "Finance", "moduleCode": "M15", "module": "Cash book & banking", "name": "Bank reconciliations", "type": "Document header", "purpose": "Reconciliation of book balance to statement balance for a bank account.", "primaryRecord": "Bank reconciliation", "typicalUsers": "Accountant, Treasury", "columnCount": 12 }, { "area": "Finance", "moduleCode": "M16", "module": "Cash flow", "name": "Cash flow forecast", "type": "Report grid", "purpose": "Actual and forecast cash movements by period and category.", "primaryRecord": "Cash flow line", "typicalUsers": "Finance manager, Treasury", "columnCount": 9 }, { "area": "Finance", "moduleCode": "M17", "module": "Accounts receivable", "name": "Customer receipts", "type": "Document header", "purpose": "Money received from customers and allocated to invoices.", "primaryRecord": "Customer receipt", "typicalUsers": "AR clerk, Accountant", "columnCount": 18 }, { "area": "Finance", "moduleCode": "M17", "module": "Accounts receivable", "name": "Receipt allocations", "type": "Document lines", "purpose": "Allocation of a customer receipt against invoices or credit notes.", "primaryRecord": "Receipt allocation", "typicalUsers": "AR clerk", "columnCount": 6 }, { "area": "Finance", "moduleCode": "M17", "module": "Accounts receivable", "name": "AR aging", "type": "Report grid", "purpose": "Outstanding customer balances aged by due date.", "primaryRecord": "AR aging row", "typicalUsers": "AR clerk, Credit controller, Finance manager", "columnCount": 15 }, { "area": "Finance", "moduleCode": "M18", "module": "Accounts payable", "name": "Supplier payments", "type": "Document header", "purpose": "Payments made to suppliers and allocated to their invoices.", "primaryRecord": "Supplier payment", "typicalUsers": "AP clerk, Accountant", "columnCount": 16 }, { "area": "Finance", "moduleCode": "M18", "module": "Accounts payable", "name": "Payment allocations", "type": "Document lines", "purpose": "Allocation of a supplier payment against invoices or credit notes.", "primaryRecord": "Payment allocation", "typicalUsers": "AP clerk", "columnCount": 5 }, { "area": "Finance", "moduleCode": "M18", "module": "Accounts payable", "name": "AP aging", "type": "Report grid", "purpose": "Outstanding supplier balances aged by due date.", "primaryRecord": "AP aging row", "typicalUsers": "AP clerk, Finance manager", "columnCount": 11 }, { "area": "Finance", "moduleCode": "M19", "module": "Tax returns", "name": "VAT return", "type": "Report grid", "purpose": "VAT return boxes for a tax period. Box labels follow a typical South African VAT 201 layout as an example only.", "primaryRecord": "VAT return box", "typicalUsers": "Finance manager, Accountant", "columnCount": 10 }, { "area": "Finance", "moduleCode": "M20", "module": "Fixed assets", "name": "Fixed asset register", "type": "List grid", "purpose": "Register of depreciable and non-depreciable fixed assets.", "primaryRecord": "Fixed asset", "typicalUsers": "Asset accountant, Finance", "columnCount": 24 }, { "area": "Finance", "moduleCode": "M20", "module": "Fixed assets", "name": "Depreciation run", "type": "Document header", "purpose": "Period depreciation calculation and posting run.", "primaryRecord": "Depreciation run", "typicalUsers": "Asset accountant", "columnCount": 10 }, { "area": "Finance", "moduleCode": "M20", "module": "Fixed assets", "name": "Depreciation lines", "type": "Document lines", "purpose": "Per-asset depreciation charge produced by a run.", "primaryRecord": "Depreciation line", "typicalUsers": "Asset accountant", "columnCount": 8 }, { "area": "Finance", "moduleCode": "M20", "module": "Fixed assets", "name": "Asset transactions", "type": "List grid", "purpose": "Transfers, revaluations and disposals of fixed assets.", "primaryRecord": "Asset transaction", "typicalUsers": "Asset accountant", "columnCount": 10 }, { "area": "Finance", "moduleCode": "M21", "module": "Petty cash", "name": "Petty cash vouchers", "type": "List grid", "purpose": "Small cash expenses claimed against a petty cash float.", "primaryRecord": "Petty cash voucher", "typicalUsers": "AP clerk, Accountant", "columnCount": 16 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Customers", "type": "Setup grid", "purpose": "Customer master used by sales, AR, CRM and service.", "primaryRecord": "Customer", "typicalUsers": "Sales admin, Credit controller, AR clerk", "columnCount": 24 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Customer contacts", "type": "List grid", "purpose": "People at a customer who can be billed, called or delivered to.", "primaryRecord": "Customer contact", "typicalUsers": "Sales admin, Salesperson", "columnCount": 10 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Price lists", "type": "Setup grid", "purpose": "Item prices by price list, currency, unit and minimum quantity.", "primaryRecord": "Price list item", "typicalUsers": "Sales manager, Pricing", "columnCount": 14 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Sales quotations", "type": "Document header", "purpose": "Quotes issued to customers before an order is placed.", "primaryRecord": "Sales quotation", "typicalUsers": "Salesperson, Sales admin", "columnCount": 20 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Quotation lines", "type": "Document lines", "purpose": "Line items on a sales quotation.", "primaryRecord": "Quotation line", "typicalUsers": "Salesperson, Sales admin", "columnCount": 13 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Sales orders", "type": "Document header", "purpose": "Customer sales orders, including those converted from quotes or web orders.", "primaryRecord": "Sales order", "typicalUsers": "Sales admin, Salesperson, Warehouse", "columnCount": 22 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Sales order lines", "type": "Document lines", "purpose": "Line items on a sales order, with reserved, delivered and invoiced quantities.", "primaryRecord": "Sales order line", "typicalUsers": "Sales admin, Warehouse", "columnCount": 17 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Deliveries", "type": "Document header", "purpose": "Goods delivery / dispatch notes against sales orders.", "primaryRecord": "Delivery", "typicalUsers": "Warehouse, Sales admin", "columnCount": 16 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Delivery lines", "type": "Document lines", "purpose": "Items and quantities on a delivery note, including lot or serial if used.", "primaryRecord": "Delivery line", "typicalUsers": "Warehouse", "columnCount": 9 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Sales invoices", "type": "Document header", "purpose": "Customer invoices raised from deliveries or orders, and posted to AR.", "primaryRecord": "Sales invoice", "typicalUsers": "AR clerk, Sales admin", "columnCount": 20 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Sales invoice lines", "type": "Document lines", "purpose": "Line items on a customer invoice, with tax and posting accounts.", "primaryRecord": "Sales invoice line", "typicalUsers": "AR clerk, Sales admin", "columnCount": 13 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Credit notes", "type": "Document header", "purpose": "Credit notes issued to customers, often from returns.", "primaryRecord": "Credit note", "typicalUsers": "AR clerk, Sales admin", "columnCount": 16 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Sales returns", "type": "Document header", "purpose": "Return merchandise authorisations (RMA) for customer returns.", "primaryRecord": "Sales return", "typicalUsers": "Sales admin, Warehouse, Quality", "columnCount": 13 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Sales return lines", "type": "Document lines", "purpose": "Items on a customer return, with disposition of the goods.", "primaryRecord": "Sales return line", "typicalUsers": "Warehouse, Quality, Sales admin", "columnCount": 8 }, { "area": "Sales", "moduleCode": "M22", "module": "Sales", "name": "Sales commissions", "type": "Report grid", "purpose": "Commission calculated for salespeople from invoiced sales.", "primaryRecord": "Commission line", "typicalUsers": "Sales manager, Payroll, Finance", "columnCount": 10 }, { "area": "CRM & Marketing", "moduleCode": "M23", "module": "CRM", "name": "Leads", "type": "List grid", "purpose": "Inbound and outbound sales leads before they become customers.", "primaryRecord": "Lead", "typicalUsers": "Salesperson, Marketing, Sales manager", "columnCount": 21 }, { "area": "CRM & Marketing", "moduleCode": "M23", "module": "CRM", "name": "Opportunities", "type": "List grid", "purpose": "Pipeline opportunities with stage, value and expected close date.", "primaryRecord": "Opportunity", "typicalUsers": "Salesperson, Sales manager", "columnCount": 18 }, { "area": "CRM & Marketing", "moduleCode": "M23", "module": "CRM", "name": "Activities", "type": "List grid", "purpose": "Calls, emails, meetings and tasks linked to leads, customers or opportunities.", "primaryRecord": "Activity", "typicalUsers": "Salesperson, Customer service", "columnCount": 11 }, { "area": "CRM & Marketing", "moduleCode": "M24", "module": "Marketing", "name": "Campaigns", "type": "List grid", "purpose": "Marketing campaigns with budget, dates and objectives.", "primaryRecord": "Campaign", "typicalUsers": "Marketing, Sales manager", "columnCount": 16 }, { "area": "CRM & Marketing", "moduleCode": "M24", "module": "Marketing", "name": "Campaign members", "type": "List grid", "purpose": "People or accounts in a campaign, with send and response status.", "primaryRecord": "Campaign member", "typicalUsers": "Marketing", "columnCount": 6 }, { "area": "CRM & Marketing", "moduleCode": "M24", "module": "Marketing", "name": "Marketing lists", "type": "Setup grid", "purpose": "Static or rule-based lists used as campaign targets.", "primaryRecord": "Marketing list", "typicalUsers": "Marketing", "columnCount": 10 }, { "area": "Retail & E-commerce", "moduleCode": "M25", "module": "POS / Retail", "name": "Stores", "type": "Setup grid", "purpose": "Retail stores or branches, each typically linked to a warehouse.", "primaryRecord": "Store", "typicalUsers": "Retail manager, System administrator", "columnCount": 14 }, { "area": "Retail & E-commerce", "moduleCode": "M25", "module": "POS / Retail", "name": "Tills", "type": "Setup grid", "purpose": "Point-of-sale terminals in a store.", "primaryRecord": "Till", "typicalUsers": "Retail manager, Store manager", "columnCount": 7 }, { "area": "Retail & E-commerce", "moduleCode": "M25", "module": "POS / Retail", "name": "Till sessions", "type": "List grid", "purpose": "Open and close (cash-up) sessions for a till.", "primaryRecord": "Till session", "typicalUsers": "Cashier, Store manager", "columnCount": 16 }, { "area": "Retail & E-commerce", "moduleCode": "M25", "module": "POS / Retail", "name": "POS transactions", "type": "List grid", "purpose": "Completed, voided or returned point-of-sale receipts.", "primaryRecord": "POS transaction", "typicalUsers": "Cashier, Store manager, Finance", "columnCount": 15 }, { "area": "Retail & E-commerce", "moduleCode": "M25", "module": "POS / Retail", "name": "POS lines", "type": "Document lines", "purpose": "Line items on a POS receipt, including promotions.", "primaryRecord": "POS line", "typicalUsers": "Cashier, Store manager", "columnCount": 11 }, { "area": "Retail & E-commerce", "moduleCode": "M25", "module": "POS / Retail", "name": "Promotions", "type": "Setup grid", "purpose": "Retail promotions and discounts by store, channel, item or category.", "primaryRecord": "Promotion", "typicalUsers": "Retail manager, Marketing", "columnCount": 10 }, { "area": "Retail & E-commerce", "moduleCode": "M25", "module": "POS / Retail", "name": "Loyalty accounts", "type": "List grid", "purpose": "Customer loyalty accounts and point balances.", "primaryRecord": "Loyalty account", "typicalUsers": "Retail manager, Cashier", "columnCount": 7 }, { "area": "Retail & E-commerce", "moduleCode": "M25", "module": "POS / Retail", "name": "Loyalty transactions", "type": "List grid", "purpose": "Points earned, redeemed or adjusted on a loyalty account.", "primaryRecord": "Loyalty transaction", "typicalUsers": "Retail manager, Finance", "columnCount": 7 }, { "area": "Retail & E-commerce", "moduleCode": "M26", "module": "E-commerce", "name": "Sales channels", "type": "Setup grid", "purpose": "Web shops and marketplaces that sync items, stock and orders.", "primaryRecord": "Sales channel", "typicalUsers": "E-commerce manager, System administrator", "columnCount": 14 }, { "area": "Retail & E-commerce", "moduleCode": "M26", "module": "E-commerce", "name": "Web products", "type": "List grid", "purpose": "Channel-specific product catalogue, prices and publish status.", "primaryRecord": "Web product", "typicalUsers": "E-commerce manager, Merchandising", "columnCount": 11 }, { "area": "Retail & E-commerce", "moduleCode": "M26", "module": "E-commerce", "name": "Web orders", "type": "List grid", "purpose": "Orders captured from web shops or marketplaces before or after transfer to sales orders.", "primaryRecord": "Web order", "typicalUsers": "E-commerce manager, Sales admin", "columnCount": 15 }, { "area": "Retail & E-commerce", "moduleCode": "M26", "module": "E-commerce", "name": "Web order lines", "type": "Document lines", "purpose": "Line items on a web or marketplace order.", "primaryRecord": "Web order line", "typicalUsers": "E-commerce manager, Sales admin", "columnCount": 8 }, { "area": "Retail & E-commerce", "moduleCode": "M26", "module": "E-commerce", "name": "Shopping carts", "type": "List grid", "purpose": "Active, abandoned and converted online carts.", "primaryRecord": "Shopping cart", "typicalUsers": "E-commerce manager, Marketing", "columnCount": 10 }, { "area": "Retail & E-commerce", "moduleCode": "M26", "module": "E-commerce", "name": "Marketplace listings", "type": "List grid", "purpose": "Marketplace listing status, price and quantity.", "primaryRecord": "Marketplace listing", "typicalUsers": "E-commerce manager", "columnCount": 9 }, { "area": "Procurement", "moduleCode": "M27", "module": "Procurement", "name": "Suppliers", "type": "Setup grid", "purpose": "Supplier master used by purchasing, AP, quality and maintenance.", "primaryRecord": "Supplier", "typicalUsers": "Buyer, AP clerk", "columnCount": 24 }, { "area": "Procurement", "moduleCode": "M27", "module": "Procurement", "name": "Purchase requisitions", "type": "Document header", "purpose": "Internal requests to buy items or services, before a PO is raised.", "primaryRecord": "Purchase requisition", "typicalUsers": "Requester, Buyer, Approver", "columnCount": 16 }, { "area": "Procurement", "moduleCode": "M27", "module": "Procurement", "name": "Requisition lines", "type": "Document lines", "purpose": "Items requested on a purchase requisition.", "primaryRecord": "Requisition line", "typicalUsers": "Requester, Buyer", "columnCount": 11 }, { "area": "Procurement", "moduleCode": "M27", "module": "Procurement", "name": "RFQs", "type": "Document header", "purpose": "Requests for quotation sent to one or more suppliers.", "primaryRecord": "RFQ", "typicalUsers": "Buyer", "columnCount": 13 }, { "area": "Procurement", "moduleCode": "M27", "module": "Procurement", "name": "RFQ lines", "type": "Document lines", "purpose": "Items requested on an RFQ.", "primaryRecord": "RFQ line", "typicalUsers": "Buyer", "columnCount": 8 }, { "area": "Procurement", "moduleCode": "M27", "module": "Procurement", "name": "Supplier quotes", "type": "List grid", "purpose": "Supplier responses to RFQ lines, used to compare and award.", "primaryRecord": "Supplier quote", "typicalUsers": "Buyer", "columnCount": 11 }, { "area": "Procurement", "moduleCode": "M27", "module": "Procurement", "name": "Purchase orders", "type": "Document header", "purpose": "Purchase orders issued to suppliers.", "primaryRecord": "Purchase order", "typicalUsers": "Buyer, AP clerk, Warehouse", "columnCount": 20 }, { "area": "Procurement", "moduleCode": "M27", "module": "Procurement", "name": "Purchase order lines", "type": "Document lines", "purpose": "Items on a purchase order, with received and invoiced quantities.", "primaryRecord": "Purchase order line", "typicalUsers": "Buyer, Warehouse, AP clerk", "columnCount": 16 }, { "area": "Procurement", "moduleCode": "M27", "module": "Procurement", "name": "Goods receipts", "type": "Document header", "purpose": "Goods received notes (GRN) against purchase orders.", "primaryRecord": "Goods receipt", "typicalUsers": "Warehouse, Buyer, Quality", "columnCount": 14 }, { "area": "Procurement", "moduleCode": "M27", "module": "Procurement", "name": "Goods receipt lines", "type": "Document lines", "purpose": "Items received on a GRN, with lot/serial, bin and QC status.", "primaryRecord": "Goods receipt line", "typicalUsers": "Warehouse, Quality", "columnCount": 9 }, { "area": "Procurement", "moduleCode": "M27", "module": "Procurement", "name": "Supplier invoices", "type": "Document header", "purpose": "Supplier (purchase) invoices, matched to POs and GRNs.", "primaryRecord": "Supplier invoice", "typicalUsers": "AP clerk, Buyer", "columnCount": 20 }, { "area": "Procurement", "moduleCode": "M27", "module": "Procurement", "name": "Supplier invoice lines", "type": "Document lines", "purpose": "Lines on a supplier invoice, with tax, account and PO reference.", "primaryRecord": "Supplier invoice line", "typicalUsers": "AP clerk", "columnCount": 13 }, { "area": "Procurement", "moduleCode": "M28", "module": "Contracts", "name": "Procurement contracts", "type": "List grid", "purpose": "Blanket or term contracts with suppliers, used to release purchase orders.", "primaryRecord": "Procurement contract", "typicalUsers": "Buyer, Legal, Finance", "columnCount": 16 }, { "area": "Procurement", "moduleCode": "M28", "module": "Contracts", "name": "Procurement contract lines", "type": "Document lines", "purpose": "Items or services covered by a supplier contract, with agreed prices.", "primaryRecord": "Procurement contract line", "typicalUsers": "Buyer", "columnCount": 9 }, { "area": "Inventory & Warehouse", "moduleCode": "M29", "module": "Inventory", "name": "Item master", "type": "Setup grid", "purpose": "Item (product) master for stock, non-stock, service and kit items.", "primaryRecord": "Item", "typicalUsers": "Inventory controller, Buyer, Sales admin, Production", "columnCount": 32 }, { "area": "Inventory & Warehouse", "moduleCode": "M29", "module": "Inventory", "name": "Item categories", "type": "Setup grid", "purpose": "Hierarchical item categories with default tax and posting.", "primaryRecord": "Item category", "typicalUsers": "Inventory controller", "columnCount": 6 }, { "area": "Inventory & Warehouse", "moduleCode": "M29", "module": "Inventory", "name": "Units of measure", "type": "Setup grid", "purpose": "Units of measure and conversion factors.", "primaryRecord": "Unit of measure", "typicalUsers": "Inventory controller", "columnCount": 5 }, { "area": "Inventory & Warehouse", "moduleCode": "M29", "module": "Inventory", "name": "Warehouses", "type": "Setup grid", "purpose": "Warehouses, stores and logical stock locations.", "primaryRecord": "Warehouse", "typicalUsers": "Inventory controller, Warehouse manager", "columnCount": 12 }, { "area": "Inventory & Warehouse", "moduleCode": "M29", "module": "Inventory", "name": "Stock on hand", "type": "List grid", "purpose": "Current stock balances by warehouse, bin, item and lot/serial.", "primaryRecord": "Stock balance", "typicalUsers": "Inventory controller, Warehouse, Planning", "columnCount": 14 }, { "area": "Inventory & Warehouse", "moduleCode": "M29", "module": "Inventory", "name": "Stock movements", "type": "List grid", "purpose": "Historical stock movements (receipts, issues, transfers, adjustments, counts).", "primaryRecord": "Stock movement", "typicalUsers": "Inventory controller, Warehouse, Finance", "columnCount": 15 }, { "area": "Inventory & Warehouse", "moduleCode": "M29", "module": "Inventory", "name": "Transfers", "type": "Document header", "purpose": "Stock transfers between warehouses.", "primaryRecord": "Transfer", "typicalUsers": "Inventory controller, Warehouse", "columnCount": 14 }, { "area": "Inventory & Warehouse", "moduleCode": "M29", "module": "Inventory", "name": "Transfer lines", "type": "Document lines", "purpose": "Items on a warehouse transfer.", "primaryRecord": "Transfer line", "typicalUsers": "Warehouse", "columnCount": 9 }, { "area": "Inventory & Warehouse", "moduleCode": "M29", "module": "Inventory", "name": "Stock adjustments", "type": "Document header", "purpose": "Approved quantity or value adjustments to stock.", "primaryRecord": "Stock adjustment", "typicalUsers": "Inventory controller, Finance", "columnCount": 13 }, { "area": "Inventory & Warehouse", "moduleCode": "M29", "module": "Inventory", "name": "Adjustment lines", "type": "Document lines", "purpose": "Item lines on a stock adjustment.", "primaryRecord": "Adjustment line", "typicalUsers": "Inventory controller", "columnCount": 9 }, { "area": "Inventory & Warehouse", "moduleCode": "M29", "module": "Inventory", "name": "Lots and serials", "type": "List grid", "purpose": "Lot (batch) and serial number records, with expiry and remaining quantity.", "primaryRecord": "Lot / serial", "typicalUsers": "Inventory controller, Quality, Warehouse", "columnCount": 9 }, { "area": "Inventory & Warehouse", "moduleCode": "M29", "module": "Inventory", "name": "Stock takes", "type": "Document header", "purpose": "Physical inventory or cycle-count sessions.", "primaryRecord": "Stock take", "typicalUsers": "Inventory controller, Warehouse", "columnCount": 13 }, { "area": "Inventory & Warehouse", "moduleCode": "M29", "module": "Inventory", "name": "Stock take lines", "type": "Document lines", "purpose": "Counted versus system quantities on a stock take.", "primaryRecord": "Stock take line", "typicalUsers": "Inventory controller, Warehouse", "columnCount": 11 }, { "area": "Inventory & Warehouse", "moduleCode": "M30", "module": "Warehouse management", "name": "Bins", "type": "Setup grid", "purpose": "Bin and location master for a warehouse (aisle, rack, level, position).", "primaryRecord": "Bin", "typicalUsers": "Warehouse manager", "columnCount": 11 }, { "area": "Inventory & Warehouse", "moduleCode": "M30", "module": "Warehouse management", "name": "Putaway tasks", "type": "List grid", "purpose": "Warehouse tasks that move received goods into storage bins.", "primaryRecord": "Putaway task", "typicalUsers": "Warehouse, Receiver", "columnCount": 12 }, { "area": "Inventory & Warehouse", "moduleCode": "M30", "module": "Warehouse management", "name": "Picking waves", "type": "List grid", "purpose": "Waves or batches that group outbound picks.", "primaryRecord": "Picking wave", "typicalUsers": "Warehouse manager, Dispatcher", "columnCount": 9 }, { "area": "Inventory & Warehouse", "moduleCode": "M30", "module": "Warehouse management", "name": "Picking tasks", "type": "List grid", "purpose": "Individual pick tasks for sales, transfer or production orders.", "primaryRecord": "Picking task", "typicalUsers": "Picker, Warehouse", "columnCount": 12 }, { "area": "Inventory & Warehouse", "moduleCode": "M30", "module": "Warehouse management", "name": "Packing", "type": "Document header", "purpose": "Packs or cartons prepared for shipment.", "primaryRecord": "Pack", "typicalUsers": "Packer, Warehouse", "columnCount": 11 }, { "area": "Inventory & Warehouse", "moduleCode": "M30", "module": "Warehouse management", "name": "Pack lines", "type": "Document lines", "purpose": "Items packed into a carton or pallet.", "primaryRecord": "Pack line", "typicalUsers": "Packer, Warehouse", "columnCount": 6 }, { "area": "Inventory & Warehouse", "moduleCode": "M30", "module": "Warehouse management", "name": "Shipping", "type": "List grid", "purpose": "Outbound shipments to carriers, with tracking and freight cost.", "primaryRecord": "Shipment", "typicalUsers": "Dispatcher, Warehouse, Sales admin", "columnCount": 15 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "Bills of materials", "type": "Document header", "purpose": "Bill of materials headers for manufactured or assembled items.", "primaryRecord": "BOM", "typicalUsers": "Production planner, Engineer", "columnCount": 16 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "BOM lines", "type": "Document lines", "purpose": "Component items on a bill of materials.", "primaryRecord": "BOM line", "typicalUsers": "Production planner, Engineer", "columnCount": 11 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "Routings", "type": "Document header", "purpose": "Routing headers that describe how an item is made.", "primaryRecord": "Routing", "typicalUsers": "Production planner, Engineer", "columnCount": 11 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "Routing operations", "type": "Document lines", "purpose": "Operations on a routing, with work centre and standard times.", "primaryRecord": "Routing operation", "typicalUsers": "Production planner, Engineer", "columnCount": 11 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "Work centres", "type": "Setup grid", "purpose": "Machines, labour pools or subcontract work centres used on routings.", "primaryRecord": "Work centre", "typicalUsers": "Production planner, Production manager", "columnCount": 16 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "Work centre calendar", "type": "Setup grid", "purpose": "Working hours and exceptions for a work centre.", "primaryRecord": "Work centre calendar day", "typicalUsers": "Production planner", "columnCount": 7 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "Forecasts", "type": "List grid", "purpose": "Independent demand forecasts used by MRP.", "primaryRecord": "Forecast", "typicalUsers": "Production planner, Sales planner", "columnCount": 9 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "MRP planned orders", "type": "List grid", "purpose": "Planned make or buy orders generated by MRP.", "primaryRecord": "MRP planned order", "typicalUsers": "Production planner, Buyer", "columnCount": 13 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "MRP demand and supply", "type": "Report grid", "purpose": "Time-phased demand, supply and projected availability for an item.", "primaryRecord": "MRP pegging row", "typicalUsers": "Production planner, Buyer", "columnCount": 7 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "Work orders", "type": "Document header", "purpose": "Production work orders (shop orders) to manufacture an item.", "primaryRecord": "Work order", "typicalUsers": "Production planner, Supervisor, Shop floor", "columnCount": 23 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "Work order components", "type": "Document lines", "purpose": "Material requirements and issues against a work order.", "primaryRecord": "Work order component", "typicalUsers": "Production planner, Storeman, Shop floor", "columnCount": 11 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "Work order operations", "type": "Document lines", "purpose": "Routing operations copied onto a work order, with actual times and quantities.", "primaryRecord": "Work order operation", "typicalUsers": "Supervisor, Shop floor, Production planner", "columnCount": 13 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "Production output", "type": "List grid", "purpose": "Completed production reported from a work order into stock.", "primaryRecord": "Production output", "typicalUsers": "Shop floor, Inventory, Production planner", "columnCount": 11 }, { "area": "Manufacturing & Quality", "moduleCode": "M31", "module": "Manufacturing", "name": "Subcontracting", "type": "List grid", "purpose": "Operations sent to a subcontractor, usually linked to a purchase order.", "primaryRecord": "Subcontract job", "typicalUsers": "Production planner, Buyer", "columnCount": 10 }, { "area": "Manufacturing & Quality", "moduleCode": "M32", "module": "Quality", "name": "Inspection plans", "type": "Setup grid", "purpose": "Quality inspection plans for incoming, in-process or final inspection.", "primaryRecord": "Inspection plan", "typicalUsers": "Quality engineer", "columnCount": 12 }, { "area": "Manufacturing & Quality", "moduleCode": "M32", "module": "Quality", "name": "Plan characteristics", "type": "Setup grid", "purpose": "Measurements or checks defined on an inspection plan.", "primaryRecord": "Plan characteristic", "typicalUsers": "Quality engineer", "columnCount": 9 }, { "area": "Manufacturing & Quality", "moduleCode": "M32", "module": "Quality", "name": "Inspections", "type": "Document header", "purpose": "Inspection lots or records against receipts, work orders or finished goods.", "primaryRecord": "Inspection", "typicalUsers": "Quality inspector, Warehouse", "columnCount": 17 }, { "area": "Manufacturing & Quality", "moduleCode": "M32", "module": "Quality", "name": "Inspection results", "type": "Document lines", "purpose": "Measured values for each characteristic on an inspection.", "primaryRecord": "Inspection result", "typicalUsers": "Quality inspector", "columnCount": 6 }, { "area": "Manufacturing & Quality", "moduleCode": "M32", "module": "Quality", "name": "Non-conformances", "type": "List grid", "purpose": "Non-conformance reports (NCR) for rejected material or process failures.", "primaryRecord": "Non-conformance", "typicalUsers": "Quality, Production, Warehouse, Buyer", "columnCount": 17 }, { "area": "Manufacturing & Quality", "moduleCode": "M32", "module": "Quality", "name": "CAPA", "type": "List grid", "purpose": "Corrective and preventive actions, often raised from an NCR.", "primaryRecord": "CAPA", "typicalUsers": "Quality, Process owner", "columnCount": 13 }, { "area": "Manufacturing & Quality", "moduleCode": "M32", "module": "Quality", "name": "Certificates", "type": "List grid", "purpose": "Certificates of analysis or conformity issued or received.", "primaryRecord": "Certificate", "typicalUsers": "Quality, Sales admin, Warehouse", "columnCount": 8 }, { "area": "Projects & Time", "moduleCode": "M33", "module": "Project management", "name": "Projects", "type": "List grid", "purpose": "Projects for delivery, internal work or customer billing.", "primaryRecord": "Project", "typicalUsers": "Project manager, Finance, Management", "columnCount": 20 }, { "area": "Projects & Time", "moduleCode": "M33", "module": "Project management", "name": "Project tasks", "type": "List grid", "purpose": "Work breakdown structure (WBS) tasks on a project.", "primaryRecord": "Project task", "typicalUsers": "Project manager, Team member", "columnCount": 15 }, { "area": "Projects & Time", "moduleCode": "M33", "module": "Project management", "name": "Project resources", "type": "List grid", "purpose": "People or resources assigned to a project, with allocation and rate.", "primaryRecord": "Project resource", "typicalUsers": "Project manager", "columnCount": 8 }, { "area": "Projects & Time", "moduleCode": "M33", "module": "Project management", "name": "Project costs", "type": "List grid", "purpose": "Cost transactions posted to a project from timesheets, purchases, stock or expenses.", "primaryRecord": "Project cost", "typicalUsers": "Project manager, Finance", "columnCount": 11 }, { "area": "Projects & Time", "moduleCode": "M33", "module": "Project management", "name": "Billing milestones", "type": "List grid", "purpose": "Contract milestones used to invoice a project.", "primaryRecord": "Billing milestone", "typicalUsers": "Project manager, AR clerk", "columnCount": 8 }, { "area": "Projects & Time", "moduleCode": "M34", "module": "Timesheets", "name": "Timesheets", "type": "Document header", "purpose": "Weekly or period timesheets submitted by employees.", "primaryRecord": "Timesheet", "typicalUsers": "Employee, Supervisor, Payroll, Project manager", "columnCount": 14 }, { "area": "Projects & Time", "moduleCode": "M34", "module": "Timesheets", "name": "Timesheet lines", "type": "Document lines", "purpose": "Daily time entries against project, work order, customer or activity.", "primaryRecord": "Timesheet line", "typicalUsers": "Employee, Supervisor, Payroll, Project manager", "columnCount": 13 }, { "area": "Service & Assets", "moduleCode": "M35", "module": "Field service", "name": "Service contracts", "type": "List grid", "purpose": "Customer service or maintenance contracts, including SLA cover.", "primaryRecord": "Service contract", "typicalUsers": "Service manager, Sales admin", "columnCount": 16 }, { "area": "Service & Assets", "moduleCode": "M35", "module": "Field service", "name": "Service orders", "type": "Document header", "purpose": "Field service jobs or call-outs for a customer asset or item.", "primaryRecord": "Service order", "typicalUsers": "Service coordinator, Technician, Sales admin", "columnCount": 20 }, { "area": "Service & Assets", "moduleCode": "M35", "module": "Field service", "name": "Field visits", "type": "List grid", "purpose": "On-site visits made against a service order.", "primaryRecord": "Field visit", "typicalUsers": "Technician, Service coordinator", "columnCount": 10 }, { "area": "Service & Assets", "moduleCode": "M35", "module": "Field service", "name": "Service parts used", "type": "Document lines", "purpose": "Spare parts used on a service job, optionally billable.", "primaryRecord": "Service part", "typicalUsers": "Technician, Inventory, Sales admin", "columnCount": 9 }, { "area": "Service & Assets", "moduleCode": "M36", "module": "Maintenance", "name": "Maintenance assets", "type": "List grid", "purpose": "Maintainable assets (often the same records as the fixed asset register, with maintenance fields).", "primaryRecord": "Maintenance asset", "typicalUsers": "Maintenance planner, Asset accountant", "columnCount": 11 }, { "area": "Service & Assets", "moduleCode": "M36", "module": "Maintenance", "name": "Maintenance schedules", "type": "Setup grid", "purpose": "Preventive, predictive or statutory maintenance schedules for an asset.", "primaryRecord": "Maintenance schedule", "typicalUsers": "Maintenance planner", "columnCount": 9 }, { "area": "Service & Assets", "moduleCode": "M36", "module": "Maintenance", "name": "Work requests", "type": "List grid", "purpose": "Reported maintenance requests before they become work orders.", "primaryRecord": "Work request", "typicalUsers": "Any user, Maintenance planner", "columnCount": 8 }, { "area": "Service & Assets", "moduleCode": "M36", "module": "Maintenance", "name": "Maintenance work orders", "type": "Document header", "purpose": "Maintenance work orders for repair or scheduled service of an asset.", "primaryRecord": "Maintenance work order", "typicalUsers": "Maintenance planner, Technician, Finance", "columnCount": 17 }, { "area": "Service & Assets", "moduleCode": "M36", "module": "Maintenance", "name": "Maintenance parts", "type": "Document lines", "purpose": "Spare parts issued to a maintenance work order.", "primaryRecord": "Maintenance part", "typicalUsers": "Technician, Storeman", "columnCount": 6 }, { "area": "Service & Assets", "moduleCode": "M37", "module": "Fleet", "name": "Vehicles", "type": "List grid", "purpose": "Fleet register of vehicles and trailers.", "primaryRecord": "Vehicle", "typicalUsers": "Fleet manager, Finance, HR", "columnCount": 22 }, { "area": "Service & Assets", "moduleCode": "M37", "module": "Fleet", "name": "Trips / logbook", "type": "List grid", "purpose": "Trip or logbook entries for a vehicle.", "primaryRecord": "Trip", "typicalUsers": "Driver, Fleet manager", "columnCount": 13 }, { "area": "Service & Assets", "moduleCode": "M37", "module": "Fleet", "name": "Fuel transactions", "type": "List grid", "purpose": "Fuel purchases or issues against a vehicle.", "primaryRecord": "Fuel transaction", "typicalUsers": "Fleet manager, Finance", "columnCount": 11 }, { "area": "Service & Assets", "moduleCode": "M37", "module": "Fleet", "name": "Vehicle services", "type": "List grid", "purpose": "Service and repair history for a vehicle.", "primaryRecord": "Vehicle service", "typicalUsers": "Fleet manager, Maintenance", "columnCount": 10 }, { "area": "HR & Payroll", "moduleCode": "M38", "module": "Human resources", "name": "Employees", "type": "Setup grid", "purpose": "Employee master used by HR, payroll, projects, service and security.", "primaryRecord": "Employee", "typicalUsers": "HR, Payroll, Managers", "columnCount": 25 }, { "area": "HR & Payroll", "moduleCode": "M38", "module": "Human resources", "name": "Departments and positions", "type": "Setup grid", "purpose": "Organisational departments and job positions, with planned headcount.", "primaryRecord": "Position", "typicalUsers": "HR, Management", "columnCount": 9 }, { "area": "HR & Payroll", "moduleCode": "M38", "module": "Human resources", "name": "Leave balances", "type": "List grid", "purpose": "Leave entitlements and balances by employee, type and year.", "primaryRecord": "Leave balance", "typicalUsers": "HR, Employee, Managers", "columnCount": 8 }, { "area": "HR & Payroll", "moduleCode": "M38", "module": "Human resources", "name": "Leave requests", "type": "List grid", "purpose": "Employee leave requests and approvals.", "primaryRecord": "Leave request", "typicalUsers": "Employee, Manager, HR, Payroll", "columnCount": 10 }, { "area": "HR & Payroll", "moduleCode": "M38", "module": "Human resources", "name": "Attendance", "type": "List grid", "purpose": "Daily attendance or clockings, including exceptions.", "primaryRecord": "Attendance record", "typicalUsers": "HR, Supervisors, Payroll", "columnCount": 8 }, { "area": "HR & Payroll", "moduleCode": "M38", "module": "Human resources", "name": "Vacancies", "type": "List grid", "purpose": "Open positions being recruited.", "primaryRecord": "Vacancy", "typicalUsers": "Recruiter, HR, Hiring manager", "columnCount": 13 }, { "area": "HR & Payroll", "moduleCode": "M38", "module": "Human resources", "name": "Applicants", "type": "List grid", "purpose": "Candidates who have applied for a vacancy.", "primaryRecord": "Applicant", "typicalUsers": "Recruiter, Hiring manager, HR", "columnCount": 12 }, { "area": "HR & Payroll", "moduleCode": "M38", "module": "Human resources", "name": "Interviews", "type": "List grid", "purpose": "Interview slots and outcomes for an applicant.", "primaryRecord": "Interview", "typicalUsers": "Recruiter, Interviewers", "columnCount": 9 }, { "area": "HR & Payroll", "moduleCode": "M38", "module": "Human resources", "name": "Training courses", "type": "Setup grid", "purpose": "Catalogue of training courses that employees can attend.", "primaryRecord": "Training course", "typicalUsers": "HR, Training coordinator", "columnCount": 8 }, { "area": "HR & Payroll", "moduleCode": "M38", "module": "Human resources", "name": "Training records", "type": "List grid", "purpose": "Employee bookings and completions against training courses.", "primaryRecord": "Training record", "typicalUsers": "HR, Training coordinator, Managers", "columnCount": 9 }, { "area": "HR & Payroll", "moduleCode": "M38", "module": "Human resources", "name": "Performance reviews", "type": "List grid", "purpose": "Scheduled or completed performance reviews.", "primaryRecord": "Performance review", "typicalUsers": "HR, Managers, Employees", "columnCount": 10 }, { "area": "HR & Payroll", "moduleCode": "M38", "module": "Human resources", "name": "Goals", "type": "List grid", "purpose": "Goals or KPIs attached to an employee or performance review.", "primaryRecord": "Goal", "typicalUsers": "Managers, Employees, HR", "columnCount": 7 }, { "area": "HR & Payroll", "moduleCode": "M39", "module": "Payroll", "name": "Payroll runs", "type": "Document header", "purpose": "Payroll calculation and payment runs for a period. Statutory columns in this catalogue use South African examples (PAYE, UIF, SDL).", "primaryRecord": "Payroll run", "typicalUsers": "Payroll, Finance, HR", "columnCount": 18 }, { "area": "HR & Payroll", "moduleCode": "M39", "module": "Payroll", "name": "Payslips", "type": "List grid", "purpose": "Per-employee payslip summary for a payroll run. Tax and statutory columns are South African examples.", "primaryRecord": "Payslip", "typicalUsers": "Payroll, Employee, Finance", "columnCount": 13 }, { "area": "HR & Payroll", "moduleCode": "M39", "module": "Payroll", "name": "Payroll transactions", "type": "Document lines", "purpose": "Detailed earning, deduction and employer contribution lines that make up a payslip.", "primaryRecord": "Payroll transaction", "typicalUsers": "Payroll, Finance", "columnCount": 6 }, { "area": "Support & Documents", "moduleCode": "M40", "module": "Helpdesk", "name": "Tickets", "type": "List grid", "purpose": "Support or internal helpdesk tickets.", "primaryRecord": "Ticket", "typicalUsers": "Support agent, Requester, Service manager", "columnCount": 20 }, { "area": "Support & Documents", "moduleCode": "M40", "module": "Helpdesk", "name": "Ticket activities", "type": "List grid", "purpose": "Notes, emails and status changes on a ticket, including time spent.", "primaryRecord": "Ticket activity", "typicalUsers": "Support agent", "columnCount": 7 }, { "area": "Support & Documents", "moduleCode": "M40", "module": "Helpdesk", "name": "Knowledge base", "type": "List grid", "purpose": "Published help articles used by agents and, optionally, customers.", "primaryRecord": "Knowledge article", "typicalUsers": "Support agent, Knowledge author", "columnCount": 12 }, { "area": "Support & Documents", "moduleCode": "M40", "module": "Helpdesk", "name": "SLA policies", "type": "Setup grid", "purpose": "Service level policies for tickets or field service.", "primaryRecord": "SLA policy", "typicalUsers": "Service manager, Support manager", "columnCount": 7 }, { "area": "Support & Documents", "moduleCode": "M41", "module": "Contracts", "name": "Contracts register", "type": "List grid", "purpose": "Commercial and legal contracts with customers, suppliers, lessors, employees and others.", "primaryRecord": "Contract", "typicalUsers": "Legal, Finance, Contract owner", "columnCount": 18 }, { "area": "Support & Documents", "moduleCode": "M41", "module": "Contracts", "name": "Contract obligations", "type": "List grid", "purpose": "Milestones, deliverables or obligations on a contract.", "primaryRecord": "Contract obligation", "typicalUsers": "Contract owner, Legal, Finance", "columnCount": 7 }], "columnsByScreen": { "M01::Companies": [{ "id": "M01::Companies::1", "col": 1, "name": "Company code", "dataType": "Text", "format": "10", "required": true, "role": "PK", "example": "DEMO" }, { "id": "M01::Companies::2", "col": 2, "name": "Company name", "dataType": "Text", "format": "100", "required": true, "role": "Name", "example": "Demo Trading (Pty) Ltd" }, { "id": "M01::Companies::3", "col": 3, "name": "Trading name", "dataType": "Text", "format": "100", "required": false, "role": "Name", "example": "Demo Trading" }, { "id": "M01::Companies::4", "col": 4, "name": "Registration no.", "dataType": "Text", "format": "20", "required": false, "role": "Reference", "example": "2020/123456/07" }, { "id": "M01::Companies::5", "col": 5, "name": "VAT number", "dataType": "Text", "format": "15", "required": false, "role": "Reference", "example": "4123456789" }, { "id": "M01::Companies::6", "col": 6, "name": "Income tax no.", "dataType": "Text", "format": "20", "required": false, "role": "Reference", "example": "9123456789" }, { "id": "M01::Companies::7", "col": 7, "name": "Country", "dataType": "Text", "format": "2", "required": true, "role": "FK", "example": "ZA" }, { "id": "M01::Companies::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M01::Companies::9", "col": 9, "name": "Address line 1", "dataType": "Text", "format": "100", "required": false, "role": "Description", "example": "12 Industrial Road" }, { "id": "M01::Companies::10", "col": 10, "name": "City", "dataType": "Text", "format": "50", "required": false, "role": "Description", "example": "Johannesburg" }, { "id": "M01::Companies::11", "col": 11, "name": "Postal code", "dataType": "Text", "format": "10", "required": false, "role": "Description", "example": "2001" }, { "id": "M01::Companies::12", "col": 12, "name": "Phone", "dataType": "Phone", "format": "20", "required": false, "role": "Description", "example": "+27 11 555 0100" }, { "id": "M01::Companies::13", "col": 13, "name": "Email", "dataType": "Email", "format": "80", "required": false, "role": "Description", "example": "accounts@demo.example" }, { "id": "M01::Companies::14", "col": 14, "name": "Website", "dataType": "URL", "format": "100", "required": false, "role": "Description", "example": "https://www.demo.example" }, { "id": "M01::Companies::15", "col": 15, "name": "Fiscal year start", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-03-01" }, { "id": "M01::Companies::16", "col": 16, "name": "Parent company", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "HOLD" }, { "id": "M01::Companies::17", "col": 17, "name": "Consolidation", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M01::Companies::18", "col": 18, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M01::Companies::19", "col": 19, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M01::Companies::20", "col": 20, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M01::Companies::21", "col": 21, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M01::Companies::22", "col": 22, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M01::Company parameters": [{ "id": "M01::Company parameters::1", "col": 1, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M01::Company parameters::2", "col": 2, "name": "Parameter", "dataType": "Text", "format": "50", "required": true, "role": "PK", "example": "DEFAULT_TAX_CODE" }, { "id": "M01::Company parameters::3", "col": 3, "name": "Value", "dataType": "Text", "format": "100", "required": true, "role": "Description", "example": "VAT15" }, { "id": "M01::Company parameters::4", "col": 4, "name": "Description", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Default sales tax code" }, { "id": "M01::Company parameters::5", "col": 5, "name": "Editable", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M01::Company parameters::6", "col": 6, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M01::Company parameters::7", "col": 7, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M01::Company parameters::8", "col": 8, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M01::Company parameters::9", "col": 9, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M02::Users": [{ "id": "M02::Users::1", "col": 1, "name": "User ID", "dataType": "Text", "format": "30", "required": true, "role": "PK", "example": "a.nkosi" }, { "id": "M02::Users::2", "col": 2, "name": "Full name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Ayanda Nkosi" }, { "id": "M02::Users::3", "col": 3, "name": "Email", "dataType": "Email", "format": "80", "required": true, "role": "Description", "example": "ayanda.nkosi@demo.example" }, { "id": "M02::Users::4", "col": 4, "name": "Phone", "dataType": "Phone", "format": "20", "required": false, "role": "Description", "example": "+27 82 555 0142" }, { "id": "M02::Users::5", "col": 5, "name": "Employee", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "EMP-0142" }, { "id": "M02::Users::6", "col": 6, "name": "Default company", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M02::Users::7", "col": 7, "name": "Role", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Sales manager" }, { "id": "M02::Users::8", "col": 8, "name": "Department", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Sales" }, { "id": "M02::Users::9", "col": 9, "name": "MFA enabled", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M02::Users::10", "col": 10, "name": "Last login", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 17:05" }, { "id": "M02::Users::11", "col": 11, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M02::Users::12", "col": 12, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M02::Users::13", "col": 13, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M02::Users::14", "col": 14, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M02::Users::15", "col": 15, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M02::Roles": [{ "id": "M02::Roles::1", "col": 1, "name": "Role", "dataType": "Text", "format": "40", "required": true, "role": "PK", "example": "Accountant" }, { "id": "M02::Roles::2", "col": 2, "name": "Description", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Posts journals and manages AR/AP" }, { "id": "M02::Roles::3", "col": 3, "name": "System role", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "N" }, { "id": "M02::Roles::4", "col": 4, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M02::Roles::5", "col": 5, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M02::Roles::6", "col": 6, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M02::Roles::7", "col": 7, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M02::Roles::8", "col": 8, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M02::Role permissions": [{ "id": "M02::Role permissions::1", "col": 1, "name": "Role", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Accountant" }, { "id": "M02::Role permissions::2", "col": 2, "name": "Module", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "General ledger" }, { "id": "M02::Role permissions::3", "col": 3, "name": "Screen", "dataType": "Text", "format": "60", "required": true, "role": "FK", "example": "GL journals" }, { "id": "M02::Role permissions::4", "col": 4, "name": "Read", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M02::Role permissions::5", "col": 5, "name": "Create", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M02::Role permissions::6", "col": 6, "name": "Update", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M02::Role permissions::7", "col": 7, "name": "Delete", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "N" }, { "id": "M02::Role permissions::8", "col": 8, "name": "Approve", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M02::Role permissions::9", "col": 9, "name": "Export", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }], "M02::User company access": [{ "id": "M02::User company access::1", "col": 1, "name": "User ID", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "a.nkosi" }, { "id": "M02::User company access::2", "col": 2, "name": "Company", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M02::User company access::3", "col": 3, "name": "Default", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M02::User company access::4", "col": 4, "name": "Post allowed", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }], "M03::Number sequences": [{ "id": "M03::Number sequences::1", "col": 1, "name": "Sequence code", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "SO" }, { "id": "M03::Number sequences::2", "col": 2, "name": "Description", "dataType": "Text", "format": "80", "required": true, "role": "Description", "example": "Sales orders" }, { "id": "M03::Number sequences::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M03::Number sequences::4", "col": 4, "name": "Module", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Sales" }, { "id": "M03::Number sequences::5", "col": 5, "name": "Prefix", "dataType": "Text", "format": "10", "required": false, "role": "Description", "example": "SO" }, { "id": "M03::Number sequences::6", "col": 6, "name": "Next number", "dataType": "Integer", "format": "#,##0", "required": true, "role": "Qty", "example": "10458" }, { "id": "M03::Number sequences::7", "col": 7, "name": "Padding", "dataType": "Integer", "format": "0", "required": true, "role": "Qty", "example": "6" }, { "id": "M03::Number sequences::8", "col": 8, "name": "Suffix", "dataType": "Text", "format": "10", "required": false, "role": "Description", "example": "" }, { "id": "M03::Number sequences::9", "col": 9, "name": "Reset period", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Year" }, { "id": "M03::Number sequences::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M03::Number sequences::11", "col": 11, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M03::Number sequences::12", "col": 12, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M03::Number sequences::13", "col": 13, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M03::Number sequences::14", "col": 14, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M04::Currencies": [{ "id": "M04::Currencies::1", "col": 1, "name": "Currency code", "dataType": "Text", "format": "3", "required": true, "role": "PK", "example": "ZAR" }, { "id": "M04::Currencies::2", "col": 2, "name": "Name", "dataType": "Text", "format": "40", "required": true, "role": "Name", "example": "South African rand" }, { "id": "M04::Currencies::3", "col": 3, "name": "Symbol", "dataType": "Text", "format": "5", "required": false, "role": "Description", "example": "R" }, { "id": "M04::Currencies::4", "col": 4, "name": "Decimal places", "dataType": "Integer", "format": "0", "required": true, "role": "Qty", "example": "2" }, { "id": "M04::Currencies::5", "col": 5, "name": "Base currency", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M04::Currencies::6", "col": 6, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }], "M04::Exchange rates": [{ "id": "M04::Exchange rates::1", "col": 1, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "USD" }, { "id": "M04::Exchange rates::2", "col": 2, "name": "Rate date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-17" }, { "id": "M04::Exchange rates::3", "col": 3, "name": "Rate type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Spot" }, { "id": "M04::Exchange rates::4", "col": 4, "name": "Rate to ZAR", "dataType": "Decimal", "format": "0.000000", "required": true, "role": "Amount", "example": "18.250000" }, { "id": "M04::Exchange rates::5", "col": 5, "name": "Valid from", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-17" }, { "id": "M04::Exchange rates::6", "col": 6, "name": "Valid to", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "" }, { "id": "M04::Exchange rates::7", "col": 7, "name": "Source", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Treasury mid-rate" }, { "id": "M04::Exchange rates::8", "col": 8, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M04::Exchange rates::9", "col": 9, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M04::Exchange rates::10", "col": 10, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M04::Exchange rates::11", "col": 11, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M05::Tax codes": [{ "id": "M05::Tax codes::1", "col": 1, "name": "Tax code", "dataType": "Text", "format": "15", "required": true, "role": "PK", "example": "VAT15" }, { "id": "M05::Tax codes::2", "col": 2, "name": "Description", "dataType": "Text", "format": "80", "required": true, "role": "Description", "example": "Standard VAT 15%" }, { "id": "M05::Tax codes::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "30", "required": true, "role": "Enum", "example": "Output VAT" }, { "id": "M05::Tax codes::4", "col": 4, "name": "Rate %", "dataType": "Percent", "format": "0.00%", "required": true, "role": "Amount", "example": "15.00%" }, { "id": "M05::Tax codes::5", "col": 5, "name": "Recoverable", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "N" }, { "id": "M05::Tax codes::6", "col": 6, "name": "GL account", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "2100-VAT" }, { "id": "M05::Tax codes::7", "col": 7, "name": "Country", "dataType": "Text", "format": "2", "required": true, "role": "FK", "example": "ZA" }, { "id": "M05::Tax codes::8", "col": 8, "name": "Effective from", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-05-01" }, { "id": "M05::Tax codes::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M05::Tax codes::10", "col": 10, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M05::Tax codes::11", "col": 11, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M05::Tax codes::12", "col": 12, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M05::Tax codes::13", "col": 13, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M06::Fiscal periods": [{ "id": "M06::Fiscal periods::1", "col": 1, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M06::Fiscal periods::2", "col": 2, "name": "Year", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "2026" }, { "id": "M06::Fiscal periods::3", "col": 3, "name": "Period no.", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "8" }, { "id": "M06::Fiscal periods::4", "col": 4, "name": "Period name", "dataType": "Text", "format": "20", "required": true, "role": "Name", "example": "Oct 2026" }, { "id": "M06::Fiscal periods::5", "col": 5, "name": "Start date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-10-01" }, { "id": "M06::Fiscal periods::6", "col": 6, "name": "End date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-10-31" }, { "id": "M06::Fiscal periods::7", "col": 7, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }, { "id": "M06::Fiscal periods::8", "col": 8, "name": "Closed by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "" }, { "id": "M06::Fiscal periods::9", "col": 9, "name": "Closed on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "" }], "M07::Notifications": [{ "id": "M07::Notifications::1", "col": 1, "name": "Notification ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "NTF-88421" }, { "id": "M07::Notifications::2", "col": 2, "name": "Date/time", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-17 08:12" }, { "id": "M07::Notifications::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "30", "required": true, "role": "Enum", "example": "Approval" }, { "id": "M07::Notifications::4", "col": 4, "name": "Module", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Procurement" }, { "id": "M07::Notifications::5", "col": 5, "name": "Record", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "PO-10045" }, { "id": "M07::Notifications::6", "col": 6, "name": "Recipient", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "s.vanwyk" }, { "id": "M07::Notifications::7", "col": 7, "name": "Channel", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "In-app" }, { "id": "M07::Notifications::8", "col": 8, "name": "Subject", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "PO-10045 is waiting for your approval" }, { "id": "M07::Notifications::9", "col": 9, "name": "Priority", "dataType": "Enum", "format": "10", "required": true, "role": "Enum", "example": "High" }, { "id": "M07::Notifications::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Unread" }], "M08::Workflows": [{ "id": "M08::Workflows::1", "col": 1, "name": "Workflow ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "WF-PO-APPROVE" }, { "id": "M08::Workflows::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Purchase order approval" }, { "id": "M08::Workflows::3", "col": 3, "name": "Module", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Procurement" }, { "id": "M08::Workflows::4", "col": 4, "name": "Trigger event", "dataType": "Text", "format": "60", "required": true, "role": "Description", "example": "PO submitted" }, { "id": "M08::Workflows::5", "col": 5, "name": "Condition", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Total >= 10,000 ZAR" }, { "id": "M08::Workflows::6", "col": 6, "name": "Version", "dataType": "Integer", "format": "0", "required": true, "role": "Qty", "example": "3" }, { "id": "M08::Workflows::7", "col": 7, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M08::Workflows::8", "col": 8, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M08::Workflows::9", "col": 9, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M08::Workflows::10", "col": 10, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M08::Workflows::11", "col": 11, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M08::Workflow steps": [{ "id": "M08::Workflow steps::1", "col": 1, "name": "Workflow ID", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "WF-PO-APPROVE" }, { "id": "M08::Workflow steps::2", "col": 2, "name": "Step no.", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "2" }, { "id": "M08::Workflow steps::3", "col": 3, "name": "Step name", "dataType": "Text", "format": "60", "required": true, "role": "Name", "example": "Finance approval" }, { "id": "M08::Workflow steps::4", "col": 4, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Approve" }, { "id": "M08::Workflow steps::5", "col": 5, "name": "Role / user", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Finance manager" }, { "id": "M08::Workflow steps::6", "col": 6, "name": "SLA hours", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "24" }, { "id": "M08::Workflow steps::7", "col": 7, "name": "On approve", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "3" }, { "id": "M08::Workflow steps::8", "col": 8, "name": "On reject", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Return to requester" }], "M08::Approval requests": [{ "id": "M08::Approval requests::1", "col": 1, "name": "Request ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "APR-22901" }, { "id": "M08::Approval requests::2", "col": 2, "name": "Workflow", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "WF-PO-APPROVE" }, { "id": "M08::Approval requests::3", "col": 3, "name": "Module", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Procurement" }, { "id": "M08::Approval requests::4", "col": 4, "name": "Record", "dataType": "Text", "format": "40", "required": true, "role": "Reference", "example": "PO-10045" }, { "id": "M08::Approval requests::5", "col": 5, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M08::Approval requests::6", "col": 6, "name": "Requested by", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "l.dlamini" }, { "id": "M08::Approval requests::7", "col": 7, "name": "Requested on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-16 14:22" }, { "id": "M08::Approval requests::8", "col": 8, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 48,250.00" }, { "id": "M08::Approval requests::9", "col": 9, "name": "Currency", "dataType": "Text", "format": "3", "required": false, "role": "FK", "example": "ZAR" }, { "id": "M08::Approval requests::10", "col": 10, "name": "Current step", "dataType": "Text", "format": "60", "required": true, "role": "Description", "example": "Finance approval" }, { "id": "M08::Approval requests::11", "col": 11, "name": "Approver", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "s.vanwyk" }, { "id": "M08::Approval requests::12", "col": 12, "name": "Due by", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-17 14:22" }, { "id": "M08::Approval requests::13", "col": 13, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Pending" }, { "id": "M08::Approval requests::14", "col": 14, "name": "Decision on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "" }, { "id": "M08::Approval requests::15", "col": 15, "name": "Comments", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "" }], "M09::Documents": [{ "id": "M09::Documents::1", "col": 1, "name": "Document ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "DOC-55102" }, { "id": "M09::Documents::2", "col": 2, "name": "Title", "dataType": "Text", "format": "120", "required": true, "role": "Name", "example": "Supplier ISO certificate" }, { "id": "M09::Documents::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "30", "required": true, "role": "Enum", "example": "Certificate" }, { "id": "M09::Documents::4", "col": 4, "name": "Module", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Procurement" }, { "id": "M09::Documents::5", "col": 5, "name": "Linked record", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "SUP-014" }, { "id": "M09::Documents::6", "col": 6, "name": "Company", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "DEMO" }, { "id": "M09::Documents::7", "col": 7, "name": "File name", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "iso-9001-acme-2026.pdf" }, { "id": "M09::Documents::8", "col": 8, "name": "Version", "dataType": "Integer", "format": "0", "required": true, "role": "Qty", "example": "2" }, { "id": "M09::Documents::9", "col": 9, "name": "Size KB", "dataType": "Integer", "format": "#,##0", "required": false, "role": "Qty", "example": "428" }, { "id": "M09::Documents::10", "col": 10, "name": "Confidential", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "N" }, { "id": "M09::Documents::11", "col": 11, "name": "Expiry date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2027-06-30" }, { "id": "M09::Documents::12", "col": 12, "name": "Uploaded by", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "l.dlamini" }, { "id": "M09::Documents::13", "col": 13, "name": "Uploaded on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-08-12 11:04" }, { "id": "M09::Documents::14", "col": 14, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Current" }], "M09::Document versions": [{ "id": "M09::Document versions::1", "col": 1, "name": "Document ID", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DOC-55102" }, { "id": "M09::Document versions::2", "col": 2, "name": "Version", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "2" }, { "id": "M09::Document versions::3", "col": 3, "name": "File name", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "iso-9001-acme-2026-v2.pdf" }, { "id": "M09::Document versions::4", "col": 4, "name": "Changed by", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "l.dlamini" }, { "id": "M09::Document versions::5", "col": 5, "name": "Changed on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-08-12 11:04" }, { "id": "M09::Document versions::6", "col": 6, "name": "Change note", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Renewed certificate" }], "M10::Integration endpoints": [{ "id": "M10::Integration endpoints::1", "col": 1, "name": "Integration", "dataType": "Text", "format": "40", "required": true, "role": "PK", "example": "Payment gateway" }, { "id": "M10::Integration endpoints::2", "col": 2, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "REST" }, { "id": "M10::Integration endpoints::3", "col": 3, "name": "Direction", "dataType": "Enum", "format": "15", "required": true, "role": "Enum", "example": "Bidirectional" }, { "id": "M10::Integration endpoints::4", "col": 4, "name": "Base URL / path", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "https://api.payments.example/v1" }, { "id": "M10::Integration endpoints::5", "col": 5, "name": "Auth type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "OAuth2" }, { "id": "M10::Integration endpoints::6", "col": 6, "name": "Company", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "DEMO" }, { "id": "M10::Integration endpoints::7", "col": 7, "name": "Timeout seconds", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "30" }, { "id": "M10::Integration endpoints::8", "col": 8, "name": "Retry count", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "3" }, { "id": "M10::Integration endpoints::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M10::Integration endpoints::10", "col": 10, "name": "Last success", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-17 01:10" }, { "id": "M10::Integration endpoints::11", "col": 11, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M10::Integration endpoints::12", "col": 12, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M10::Integration endpoints::13", "col": 13, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M10::Integration endpoints::14", "col": 14, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M10::API logs": [{ "id": "M10::API logs::1", "col": 1, "name": "Log ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "API-100982" }, { "id": "M10::API logs::2", "col": 2, "name": "Timestamp", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM:SS", "required": true, "role": "Date", "example": "2026-11-17 01:10:22" }, { "id": "M10::API logs::3", "col": 3, "name": "Integration", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Payment gateway" }, { "id": "M10::API logs::4", "col": 4, "name": "Direction", "dataType": "Enum", "format": "15", "required": true, "role": "Enum", "example": "Inbound" }, { "id": "M10::API logs::5", "col": 5, "name": "Method", "dataType": "Text", "format": "10", "required": false, "role": "Description", "example": "POST" }, { "id": "M10::API logs::6", "col": 6, "name": "Endpoint", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "/v1/payments/notify" }, { "id": "M10::API logs::7", "col": 7, "name": "Status code", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "200" }, { "id": "M10::API logs::8", "col": 8, "name": "Duration ms", "dataType": "Integer", "format": "#,##0", "required": false, "role": "Qty", "example": "184" }, { "id": "M10::API logs::9", "col": 9, "name": "Company", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "DEMO" }, { "id": "M10::API logs::10", "col": 10, "name": "Record ref", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "WEB-33012" }, { "id": "M10::API logs::11", "col": 11, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Success" }, { "id": "M10::API logs::12", "col": 12, "name": "Error message", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "" }, { "id": "M10::API logs::13", "col": 13, "name": "Retry count", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "0" }], "M11::Audit log": [{ "id": "M11::Audit log::1", "col": 1, "name": "Audit ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "AUD-800441" }, { "id": "M11::Audit log::2", "col": 2, "name": "Timestamp", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM:SS", "required": true, "role": "Date", "example": "2026-11-16 16:42:11" }, { "id": "M11::Audit log::3", "col": 3, "name": "User", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "s.vanwyk" }, { "id": "M11::Audit log::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "DEMO" }, { "id": "M11::Audit log::5", "col": 5, "name": "Module", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Sales" }, { "id": "M11::Audit log::6", "col": 6, "name": "Screen", "dataType": "Text", "format": "60", "required": false, "role": "Description", "example": "Sales orders" }, { "id": "M11::Audit log::7", "col": 7, "name": "Record", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "SO-10458" }, { "id": "M11::Audit log::8", "col": 8, "name": "Action", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Update" }, { "id": "M11::Audit log::9", "col": 9, "name": "Field", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Status" }, { "id": "M11::Audit log::10", "col": 10, "name": "Old value", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Open" }, { "id": "M11::Audit log::11", "col": 11, "name": "New value", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Partial" }, { "id": "M11::Audit log::12", "col": 12, "name": "IP address", "dataType": "Text", "format": "45", "required": false, "role": "Description", "example": "102.132.10.14" }], "M11::System parameters": [{ "id": "M11::System parameters::1", "col": 1, "name": "Parameter", "dataType": "Text", "format": "50", "required": true, "role": "PK", "example": "BASE_CURRENCY" }, { "id": "M11::System parameters::2", "col": 2, "name": "Category", "dataType": "Text", "format": "30", "required": true, "role": "Enum", "example": "Finance" }, { "id": "M11::System parameters::3", "col": 3, "name": "Value", "dataType": "Text", "format": "100", "required": true, "role": "Description", "example": "ZAR" }, { "id": "M11::System parameters::4", "col": 4, "name": "Description", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Group reporting currency" }, { "id": "M11::System parameters::5", "col": 5, "name": "Editable", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "N" }, { "id": "M11::System parameters::6", "col": 6, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M11::System parameters::7", "col": 7, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M11::System parameters::8", "col": 8, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M11::System parameters::9", "col": 9, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M12::Chart of accounts": [{ "id": "M12::Chart of accounts::1", "col": 1, "name": "Account code", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "4000" }, { "id": "M12::Chart of accounts::2", "col": 2, "name": "Account name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Sales revenue" }, { "id": "M12::Chart of accounts::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Income" }, { "id": "M12::Chart of accounts::4", "col": 4, "name": "Subtype", "dataType": "Text", "format": "40", "required": false, "role": "Enum", "example": "Operating income" }, { "id": "M12::Chart of accounts::5", "col": 5, "name": "Parent account", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "3999" }, { "id": "M12::Chart of accounts::6", "col": 6, "name": "Company", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "DEMO" }, { "id": "M12::Chart of accounts::7", "col": 7, "name": "Postable", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M12::Chart of accounts::8", "col": 8, "name": "Cost centre required", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M12::Chart of accounts::9", "col": 9, "name": "Currency", "dataType": "Text", "format": "3", "required": false, "role": "FK", "example": "ZAR" }, { "id": "M12::Chart of accounts::10", "col": 10, "name": "Default tax code", "dataType": "Text", "format": "15", "required": false, "role": "FK", "example": "VAT15" }, { "id": "M12::Chart of accounts::11", "col": 11, "name": "Description", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Domestic product and service sales" }, { "id": "M12::Chart of accounts::12", "col": 12, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M12::Chart of accounts::13", "col": 13, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M12::Chart of accounts::14", "col": 14, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M12::Chart of accounts::15", "col": 15, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M12::Chart of accounts::16", "col": 16, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M12::GL journals": [{ "id": "M12::GL journals::1", "col": 1, "name": "Journal no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "JNL-2026-1188" }, { "id": "M12::GL journals::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-16" }, { "id": "M12::GL journals::3", "col": 3, "name": "Period", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "2026-08" }, { "id": "M12::GL journals::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M12::GL journals::5", "col": 5, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Manual" }, { "id": "M12::GL journals::6", "col": 6, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Month-end accrual for freight" }, { "id": "M12::GL journals::7", "col": 7, "name": "Source module", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Financials" }, { "id": "M12::GL journals::8", "col": 8, "name": "Reference", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "ACC-NOV" }, { "id": "M12::GL journals::9", "col": 9, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M12::GL journals::10", "col": 10, "name": "FX rate", "dataType": "Decimal", "format": "0.000000", "required": false, "role": "Amount", "example": "1.000000" }, { "id": "M12::GL journals::11", "col": 11, "name": "Debit total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 8,400.00" }, { "id": "M12::GL journals::12", "col": 12, "name": "Credit total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 8,400.00" }, { "id": "M12::GL journals::13", "col": 13, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Draft" }, { "id": "M12::GL journals::14", "col": 14, "name": "Posted by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "" }, { "id": "M12::GL journals::15", "col": 15, "name": "Posted on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "" }, { "id": "M12::GL journals::16", "col": 16, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M12::GL journals::17", "col": 17, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M12::GL journals::18", "col": 18, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M12::GL journals::19", "col": 19, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M12::GL journal lines": [{ "id": "M12::GL journal lines::1", "col": 1, "name": "Journal no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "JNL-2026-1188" }, { "id": "M12::GL journal lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M12::GL journal lines::3", "col": 3, "name": "Account", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "6100" }, { "id": "M12::GL journal lines::4", "col": 4, "name": "Account name", "dataType": "Text", "format": "80", "required": false, "role": "Name", "example": "Freight expense" }, { "id": "M12::GL journal lines::5", "col": 5, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }, { "id": "M12::GL journal lines::6", "col": 6, "name": "Project", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "PRJ-1042" }, { "id": "M12::GL journal lines::7", "col": 7, "name": "Tax code", "dataType": "Text", "format": "15", "required": false, "role": "FK", "example": "VAT15" }, { "id": "M12::GL journal lines::8", "col": 8, "name": "Description", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "Inbound freight accrual" }, { "id": "M12::GL journal lines::9", "col": 9, "name": "Debit", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 8,400.00" }, { "id": "M12::GL journal lines::10", "col": 10, "name": "Credit", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 0.00" }, { "id": "M12::GL journal lines::11", "col": 11, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M12::GL journal lines::12", "col": 12, "name": "Base debit", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 8,400.00" }, { "id": "M12::GL journal lines::13", "col": 13, "name": "Base credit", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 0.00" }], "M12::Trial balance": [{ "id": "M12::Trial balance::1", "col": 1, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M12::Trial balance::2", "col": 2, "name": "Period", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "2026-08" }, { "id": "M12::Trial balance::3", "col": 3, "name": "Account", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "4000" }, { "id": "M12::Trial balance::4", "col": 4, "name": "Account name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Sales revenue" }, { "id": "M12::Trial balance::5", "col": 5, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Income" }, { "id": "M12::Trial balance::6", "col": 6, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }, { "id": "M12::Trial balance::7", "col": 7, "name": "Opening", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": true, "role": "Amount", "example": "R 0.00" }, { "id": "M12::Trial balance::8", "col": 8, "name": "Debits", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 12,000.00" }, { "id": "M12::Trial balance::9", "col": 9, "name": "Credits", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 425,800.00" }, { "id": "M12::Trial balance::10", "col": 10, "name": "Closing", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": true, "role": "Amount", "example": "(R 413,800.00)" }, { "id": "M12::Trial balance::11", "col": 11, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }], "M12::Profit and loss": [{ "id": "M12::Profit and loss::1", "col": 1, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M12::Profit and loss::2", "col": 2, "name": "Period", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "2026 YTD" }, { "id": "M12::Profit and loss::3", "col": 3, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "10" }, { "id": "M12::Profit and loss::4", "col": 4, "name": "Section", "dataType": "Text", "format": "40", "required": true, "role": "Enum", "example": "Revenue" }, { "id": "M12::Profit and loss::5", "col": 5, "name": "Account / group", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Sales revenue" }, { "id": "M12::Profit and loss::6", "col": 6, "name": "Period amount", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": true, "role": "Amount", "example": "R 425,800.00" }, { "id": "M12::Profit and loss::7", "col": 7, "name": "YTD amount", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": true, "role": "Amount", "example": "R 3,102,450.00" }, { "id": "M12::Profit and loss::8", "col": 8, "name": "Budget", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": false, "role": "Amount", "example": "R 3,000,000.00" }, { "id": "M12::Profit and loss::9", "col": 9, "name": "Variance", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": false, "role": "Amount", "example": "R 102,450.00" }, { "id": "M12::Profit and loss::10", "col": 10, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }], "M12::Balance sheet": [{ "id": "M12::Balance sheet::1", "col": 1, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M12::Balance sheet::2", "col": 2, "name": "As at", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-10-31" }, { "id": "M12::Balance sheet::3", "col": 3, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "20" }, { "id": "M12::Balance sheet::4", "col": 4, "name": "Section", "dataType": "Text", "format": "40", "required": true, "role": "Enum", "example": "Current assets" }, { "id": "M12::Balance sheet::5", "col": 5, "name": "Account / group", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Trade receivables" }, { "id": "M12::Balance sheet::6", "col": 6, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": true, "role": "Amount", "example": "R 612,400.00" }, { "id": "M12::Balance sheet::7", "col": 7, "name": "Prior year", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": false, "role": "Amount", "example": "R 544,100.00" }, { "id": "M12::Balance sheet::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }], "M13::Cost centres": [{ "id": "M13::Cost centres::1", "col": 1, "name": "Cost centre", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "CC-SALES" }, { "id": "M13::Cost centres::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Sales and marketing" }, { "id": "M13::Cost centres::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Profit" }, { "id": "M13::Cost centres::4", "col": 4, "name": "Parent", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-COMM" }, { "id": "M13::Cost centres::5", "col": 5, "name": "Manager", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Ayanda Nkosi" }, { "id": "M13::Cost centres::6", "col": 6, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M13::Cost centres::7", "col": 7, "name": "Department", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Sales" }, { "id": "M13::Cost centres::8", "col": 8, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M13::Cost centres::9", "col": 9, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M13::Cost centres::10", "col": 10, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M13::Cost centres::11", "col": 11, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M13::Cost centres::12", "col": 12, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M14::Budgets": [{ "id": "M14::Budgets::1", "col": 1, "name": "Budget ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "BUD-2027-V1" }, { "id": "M14::Budgets::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "FY2027 original" }, { "id": "M14::Budgets::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M14::Budgets::4", "col": 4, "name": "Year", "dataType": "Integer", "format": "0", "required": true, "role": "Date", "example": "2027" }, { "id": "M14::Budgets::5", "col": 5, "name": "Version", "dataType": "Text", "format": "20", "required": true, "role": "Description", "example": "Original" }, { "id": "M14::Budgets::6", "col": 6, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Annual" }, { "id": "M14::Budgets::7", "col": 7, "name": "Owner", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "s.vanwyk" }, { "id": "M14::Budgets::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M14::Budgets::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Draft" }, { "id": "M14::Budgets::10", "col": 10, "name": "Approved on", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "" }, { "id": "M14::Budgets::11", "col": 11, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M14::Budgets::12", "col": 12, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M14::Budgets::13", "col": 13, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M14::Budgets::14", "col": 14, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M14::Budget lines": [{ "id": "M14::Budget lines::1", "col": 1, "name": "Budget ID", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "BUD-2027-V1" }, { "id": "M14::Budget lines::2", "col": 2, "name": "Period", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "2027-01" }, { "id": "M14::Budget lines::3", "col": 3, "name": "Account", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "6200" }, { "id": "M14::Budget lines::4", "col": 4, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }, { "id": "M14::Budget lines::5", "col": 5, "name": "Project", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "PRJ-1042" }, { "id": "M14::Budget lines::6", "col": 6, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 45,000.00" }, { "id": "M14::Budget lines::7", "col": 7, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M14::Budget lines::8", "col": 8, "name": "Comments", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "Q1 campaign" }], "M14::Budget vs actual": [{ "id": "M14::Budget vs actual::1", "col": 1, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M14::Budget vs actual::2", "col": 2, "name": "Period", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "2026-08" }, { "id": "M14::Budget vs actual::3", "col": 3, "name": "Account", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "6200" }, { "id": "M14::Budget vs actual::4", "col": 4, "name": "Account name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Marketing expense" }, { "id": "M14::Budget vs actual::5", "col": 5, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }, { "id": "M14::Budget vs actual::6", "col": 6, "name": "Budget", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 40,000.00" }, { "id": "M14::Budget vs actual::7", "col": 7, "name": "Actual", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 46,210.00" }, { "id": "M14::Budget vs actual::8", "col": 8, "name": "Variance", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": true, "role": "Amount", "example": "(R 6,210.00)" }, { "id": "M14::Budget vs actual::9", "col": 9, "name": "Variance %", "dataType": "Percent", "format": "0.0%", "required": true, "role": "Amount", "example": "-15.5%" }, { "id": "M14::Budget vs actual::10", "col": 10, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }], "M15::Bank accounts": [{ "id": "M15::Bank accounts::1", "col": 1, "name": "Bank account code", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "FNB-CURRENT" }, { "id": "M15::Bank accounts::2", "col": 2, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M15::Bank accounts::3", "col": 3, "name": "Bank name", "dataType": "Text", "format": "60", "required": true, "role": "Name", "example": "First National Bank" }, { "id": "M15::Bank accounts::4", "col": 4, "name": "Branch code", "dataType": "Text", "format": "10", "required": false, "role": "Reference", "example": "250655" }, { "id": "M15::Bank accounts::5", "col": 5, "name": "Account number", "dataType": "Text", "format": "20", "required": true, "role": "Reference", "example": "62789012345" }, { "id": "M15::Bank accounts::6", "col": 6, "name": "Account type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Current" }, { "id": "M15::Bank accounts::7", "col": 7, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M15::Bank accounts::8", "col": 8, "name": "GL account", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "1100" }, { "id": "M15::Bank accounts::9", "col": 9, "name": "SWIFT / BIC", "dataType": "Text", "format": "15", "required": false, "role": "Reference", "example": "FIRNZAJJ" }, { "id": "M15::Bank accounts::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M15::Bank accounts::11", "col": 11, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M15::Bank accounts::12", "col": 12, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M15::Bank accounts::13", "col": 13, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M15::Bank accounts::14", "col": 14, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M15::Bank statement lines": [{ "id": "M15::Bank statement lines::1", "col": 1, "name": "Statement ID", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "STMT-FNB-2026-10" }, { "id": "M15::Bank statement lines::2", "col": 2, "name": "Bank account", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "FNB-CURRENT" }, { "id": "M15::Bank statement lines::3", "col": 3, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "18" }, { "id": "M15::Bank statement lines::4", "col": 4, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-10-28" }, { "id": "M15::Bank statement lines::5", "col": 5, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "EFT incoming ACME (PTY) LTD" }, { "id": "M15::Bank statement lines::6", "col": 6, "name": "Reference", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "20261028ACME" }, { "id": "M15::Bank statement lines::7", "col": 7, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": true, "role": "Amount", "example": "R 27,600.00" }, { "id": "M15::Bank statement lines::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M15::Bank statement lines::9", "col": 9, "name": "Reconciled", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M15::Bank statement lines::10", "col": 10, "name": "Matched payment", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "REC-4412" }, { "id": "M15::Bank statement lines::11", "col": 11, "name": "Import source", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Bank CSV" }], "M15::Bank reconciliations": [{ "id": "M15::Bank reconciliations::1", "col": 1, "name": "Rec ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "BR-2026-10-FNB" }, { "id": "M15::Bank reconciliations::2", "col": 2, "name": "Bank account", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "FNB-CURRENT" }, { "id": "M15::Bank reconciliations::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M15::Bank reconciliations::4", "col": 4, "name": "Statement date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-10-31" }, { "id": "M15::Bank reconciliations::5", "col": 5, "name": "Statement balance", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": true, "role": "Amount", "example": "R 186,420.55" }, { "id": "M15::Bank reconciliations::6", "col": 6, "name": "Book balance", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": true, "role": "Amount", "example": "R 192,020.55" }, { "id": "M15::Bank reconciliations::7", "col": 7, "name": "Unreconciled items", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": true, "role": "Amount", "example": "(R 5,600.00)" }, { "id": "M15::Bank reconciliations::8", "col": 8, "name": "Difference", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": true, "role": "Amount", "example": "R 0.00" }, { "id": "M15::Bank reconciliations::9", "col": 9, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M15::Bank reconciliations::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "In progress" }, { "id": "M15::Bank reconciliations::11", "col": 11, "name": "Reconciled by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "" }, { "id": "M15::Bank reconciliations::12", "col": 12, "name": "Reconciled on", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "" }], "M16::Cash flow forecast": [{ "id": "M16::Cash flow forecast::1", "col": 1, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M16::Cash flow forecast::2", "col": 2, "name": "Period", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "2026-11" }, { "id": "M16::Cash flow forecast::3", "col": 3, "name": "Category", "dataType": "Enum", "format": "30", "required": true, "role": "Enum", "example": "Operating" }, { "id": "M16::Cash flow forecast::4", "col": 4, "name": "Description", "dataType": "Text", "format": "80", "required": true, "role": "Description", "example": "Customer receipts" }, { "id": "M16::Cash flow forecast::5", "col": 5, "name": "Inflow", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 520,000.00" }, { "id": "M16::Cash flow forecast::6", "col": 6, "name": "Outflow", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 0.00" }, { "id": "M16::Cash flow forecast::7", "col": 7, "name": "Net", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": true, "role": "Amount", "example": "R 520,000.00" }, { "id": "M16::Cash flow forecast::8", "col": 8, "name": "Source", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Open AR-AP" }, { "id": "M16::Cash flow forecast::9", "col": 9, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }], "M17::Customer receipts": [{ "id": "M17::Customer receipts::1", "col": 1, "name": "Receipt no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "REC-4412" }, { "id": "M17::Customer receipts::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-10-28" }, { "id": "M17::Customer receipts::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M17::Customer receipts::4", "col": 4, "name": "Customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0208" }, { "id": "M17::Customer receipts::5", "col": 5, "name": "Payment method", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "EFT" }, { "id": "M17::Customer receipts::6", "col": 6, "name": "Bank account", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "FNB-CURRENT" }, { "id": "M17::Customer receipts::7", "col": 7, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 27,600.00" }, { "id": "M17::Customer receipts::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M17::Customer receipts::9", "col": 9, "name": "FX rate", "dataType": "Decimal", "format": "0.000000", "required": false, "role": "Amount", "example": "1.000000" }, { "id": "M17::Customer receipts::10", "col": 10, "name": "Amount ZAR", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 27,600.00" }, { "id": "M17::Customer receipts::11", "col": 11, "name": "Allocated", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 27,600.00" }, { "id": "M17::Customer receipts::12", "col": 12, "name": "Unallocated", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 0.00" }, { "id": "M17::Customer receipts::13", "col": 13, "name": "Reference", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "20261028ACME" }, { "id": "M17::Customer receipts::14", "col": 14, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Allocated" }, { "id": "M17::Customer receipts::15", "col": 15, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M17::Customer receipts::16", "col": 16, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M17::Customer receipts::17", "col": 17, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M17::Customer receipts::18", "col": 18, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M17::Receipt allocations": [{ "id": "M17::Receipt allocations::1", "col": 1, "name": "Receipt no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "REC-4412" }, { "id": "M17::Receipt allocations::2", "col": 2, "name": "Invoice no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "INV-8891" }, { "id": "M17::Receipt allocations::3", "col": 3, "name": "Amount applied", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 27,600.00" }, { "id": "M17::Receipt allocations::4", "col": 4, "name": "Discount taken", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 0.00" }, { "id": "M17::Receipt allocations::5", "col": 5, "name": "Write-off", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 0.00" }, { "id": "M17::Receipt allocations::6", "col": 6, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-10-28" }], "M17::AR aging": [{ "id": "M17::AR aging::1", "col": 1, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M17::AR aging::2", "col": 2, "name": "Customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0208" }, { "id": "M17::AR aging::3", "col": 3, "name": "Customer name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Acme Industrial (Pty) Ltd" }, { "id": "M17::AR aging::4", "col": 4, "name": "Current", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 18,400.00" }, { "id": "M17::AR aging::5", "col": 5, "name": "1\u201330 days", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 9,200.00" }, { "id": "M17::AR aging::6", "col": 6, "name": "31\u201360 days", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 0.00" }, { "id": "M17::AR aging::7", "col": 7, "name": "61\u201390 days", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 0.00" }, { "id": "M17::AR aging::8", "col": 8, "name": "90+ days", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 0.00" }, { "id": "M17::AR aging::9", "col": 9, "name": "Total outstanding", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 27,600.00" }, { "id": "M17::AR aging::10", "col": 10, "name": "Credit limit", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 150,000.00" }, { "id": "M17::AR aging::11", "col": 11, "name": "Available", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": false, "role": "Amount", "example": "R 98,250.00" }, { "id": "M17::AR aging::12", "col": 12, "name": "Last payment date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-10-28" }, { "id": "M17::AR aging::13", "col": 13, "name": "Last payment amount", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 27,600.00" }, { "id": "M17::AR aging::14", "col": 14, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M17::AR aging::15", "col": 15, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "OK" }], "M18::Supplier payments": [{ "id": "M18::Supplier payments::1", "col": 1, "name": "Payment no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PAY-3310" }, { "id": "M18::Supplier payments::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-05" }, { "id": "M18::Supplier payments::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M18::Supplier payments::4", "col": 4, "name": "Supplier", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SUP-014" }, { "id": "M18::Supplier payments::5", "col": 5, "name": "Payment method", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "EFT" }, { "id": "M18::Supplier payments::6", "col": 6, "name": "Bank account", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "FNB-CURRENT" }, { "id": "M18::Supplier payments::7", "col": 7, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 64,170.00" }, { "id": "M18::Supplier payments::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M18::Supplier payments::9", "col": 9, "name": "Amount ZAR", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 64,170.00" }, { "id": "M18::Supplier payments::10", "col": 10, "name": "Reference", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "PAY-3310" }, { "id": "M18::Supplier payments::11", "col": 11, "name": "Approved by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "s.vanwyk" }, { "id": "M18::Supplier payments::12", "col": 12, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Posted" }, { "id": "M18::Supplier payments::13", "col": 13, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M18::Supplier payments::14", "col": 14, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M18::Supplier payments::15", "col": 15, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M18::Supplier payments::16", "col": 16, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M18::Payment allocations": [{ "id": "M18::Payment allocations::1", "col": 1, "name": "Payment no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PAY-3310" }, { "id": "M18::Payment allocations::2", "col": 2, "name": "Invoice no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PINV-776" }, { "id": "M18::Payment allocations::3", "col": 3, "name": "Amount applied", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 64,170.00" }, { "id": "M18::Payment allocations::4", "col": 4, "name": "Discount taken", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 0.00" }, { "id": "M18::Payment allocations::5", "col": 5, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-05" }], "M18::AP aging": [{ "id": "M18::AP aging::1", "col": 1, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M18::AP aging::2", "col": 2, "name": "Supplier", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SUP-014" }, { "id": "M18::AP aging::3", "col": 3, "name": "Supplier name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Acme Components (Pty) Ltd" }, { "id": "M18::AP aging::4", "col": 4, "name": "Current", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 64,170.00" }, { "id": "M18::AP aging::5", "col": 5, "name": "1\u201330 days", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 0.00" }, { "id": "M18::AP aging::6", "col": 6, "name": "31\u201360 days", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 0.00" }, { "id": "M18::AP aging::7", "col": 7, "name": "61\u201390 days", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 0.00" }, { "id": "M18::AP aging::8", "col": 8, "name": "90+ days", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 0.00" }, { "id": "M18::AP aging::9", "col": 9, "name": "Total outstanding", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 64,170.00" }, { "id": "M18::AP aging::10", "col": 10, "name": "Due next 7 days", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 64,170.00" }, { "id": "M18::AP aging::11", "col": 11, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }], "M19::VAT return": [{ "id": "M19::VAT return::1", "col": 1, "name": "Return ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "VAT-2026-10" }, { "id": "M19::VAT return::2", "col": 2, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M19::VAT return::3", "col": 3, "name": "Period", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "2026-10" }, { "id": "M19::VAT return::4", "col": 4, "name": "Box", "dataType": "Text", "format": "10", "required": true, "role": "PK", "example": "1" }, { "id": "M19::VAT return::5", "col": 5, "name": "Box description", "dataType": "Text", "format": "80", "required": true, "role": "Description", "example": "Standard-rated sales (15%)" }, { "id": "M19::VAT return::6", "col": 6, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": true, "role": "Amount", "example": "R 425,800.00" }, { "id": "M19::VAT return::7", "col": 7, "name": "VAT amount", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": false, "role": "Amount", "example": "R 63,870.00" }, { "id": "M19::VAT return::8", "col": 8, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Draft" }, { "id": "M19::VAT return::9", "col": 9, "name": "Submitted on", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "" }, { "id": "M19::VAT return::10", "col": 10, "name": "Reference", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "" }], "M20::Fixed asset register": [{ "id": "M20::Fixed asset register::1", "col": 1, "name": "Asset no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "FA-0148" }, { "id": "M20::Fixed asset register::2", "col": 2, "name": "Description", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "CNC milling machine" }, { "id": "M20::Fixed asset register::3", "col": 3, "name": "Category", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Plant and equipment" }, { "id": "M20::Fixed asset register::4", "col": 4, "name": "Class", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Machinery" }, { "id": "M20::Fixed asset register::5", "col": 5, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M20::Fixed asset register::6", "col": 6, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }, { "id": "M20::Fixed asset register::7", "col": 7, "name": "Location", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Factory A" }, { "id": "M20::Fixed asset register::8", "col": 8, "name": "Serial no.", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "CNC-8821-ZA" }, { "id": "M20::Fixed asset register::9", "col": 9, "name": "Acquisition date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2024-03-15" }, { "id": "M20::Fixed asset register::10", "col": 10, "name": "Supplier", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "SUP-088" }, { "id": "M20::Fixed asset register::11", "col": 11, "name": "Acquisition cost", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 485,000.00" }, { "id": "M20::Fixed asset register::12", "col": 12, "name": "Residual value", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 25,000.00" }, { "id": "M20::Fixed asset register::13", "col": 13, "name": "Depreciation method", "dataType": "Enum", "format": "30", "required": true, "role": "Enum", "example": "Straight line" }, { "id": "M20::Fixed asset register::14", "col": 14, "name": "Useful life months", "dataType": "Integer", "format": "0", "required": true, "role": "Qty", "example": "60" }, { "id": "M20::Fixed asset register::15", "col": 15, "name": "Depreciation start", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2024-04-01" }, { "id": "M20::Fixed asset register::16", "col": 16, "name": "Accum. depreciation", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 184,000.00" }, { "id": "M20::Fixed asset register::17", "col": 17, "name": "Book value", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 301,000.00" }, { "id": "M20::Fixed asset register::18", "col": 18, "name": "Custodian", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "EMP-0088" }, { "id": "M20::Fixed asset register::19", "col": 19, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M20::Fixed asset register::20", "col": 20, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M20::Fixed asset register::21", "col": 21, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M20::Fixed asset register::22", "col": 22, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M20::Fixed asset register::23", "col": 23, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M20::Fixed asset register::24", "col": 24, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M20::Depreciation run": [{ "id": "M20::Depreciation run::1", "col": 1, "name": "Run ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "DEP-2026-10" }, { "id": "M20::Depreciation run::2", "col": 2, "name": "Period", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "2026-10" }, { "id": "M20::Depreciation run::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M20::Depreciation run::4", "col": 4, "name": "Asset count", "dataType": "Integer", "format": "0", "required": true, "role": "Qty", "example": "86" }, { "id": "M20::Depreciation run::5", "col": 5, "name": "Total charge", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 42,118.00" }, { "id": "M20::Depreciation run::6", "col": 6, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M20::Depreciation run::7", "col": 7, "name": "Posted journal", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "JNL-2026-1204" }, { "id": "M20::Depreciation run::8", "col": 8, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Posted" }, { "id": "M20::Depreciation run::9", "col": 9, "name": "Posted by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "s.vanwyk" }, { "id": "M20::Depreciation run::10", "col": 10, "name": "Posted on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-02 09:18" }], "M20::Depreciation lines": [{ "id": "M20::Depreciation lines::1", "col": 1, "name": "Run ID", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEP-2026-10" }, { "id": "M20::Depreciation lines::2", "col": 2, "name": "Asset no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "FA-0148" }, { "id": "M20::Depreciation lines::3", "col": 3, "name": "Method", "dataType": "Text", "format": "30", "required": true, "role": "Description", "example": "Straight line" }, { "id": "M20::Depreciation lines::4", "col": 4, "name": "Cost", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 485,000.00" }, { "id": "M20::Depreciation lines::5", "col": 5, "name": "Opening accum.", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 176,333.00" }, { "id": "M20::Depreciation lines::6", "col": 6, "name": "Charge", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 7,667.00" }, { "id": "M20::Depreciation lines::7", "col": 7, "name": "Closing accum.", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 184,000.00" }, { "id": "M20::Depreciation lines::8", "col": 8, "name": "Book value", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 301,000.00" }], "M20::Asset transactions": [{ "id": "M20::Asset transactions::1", "col": 1, "name": "Transaction no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "FAT-0199" }, { "id": "M20::Asset transactions::2", "col": 2, "name": "Asset no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "FA-0091" }, { "id": "M20::Asset transactions::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Disposal" }, { "id": "M20::Asset transactions::4", "col": 4, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-09-30" }, { "id": "M20::Asset transactions::5", "col": 5, "name": "From / to", "dataType": "Text", "format": "60", "required": false, "role": "Description", "example": "Factory A \u2192 Sold" }, { "id": "M20::Asset transactions::6", "col": 6, "name": "Proceeds", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 15,000.00" }, { "id": "M20::Asset transactions::7", "col": 7, "name": "Book value", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 8,200.00" }, { "id": "M20::Asset transactions::8", "col": 8, "name": "Gain / loss", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": false, "role": "Amount", "example": "R 6,800.00" }, { "id": "M20::Asset transactions::9", "col": 9, "name": "Journal", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "JNL-2026-1011" }, { "id": "M20::Asset transactions::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Posted" }], "M21::Petty cash vouchers": [{ "id": "M21::Petty cash vouchers::1", "col": 1, "name": "Voucher no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PC-0771" }, { "id": "M21::Petty cash vouchers::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-12" }, { "id": "M21::Petty cash vouchers::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M21::Petty cash vouchers::4", "col": 4, "name": "Cash account", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PC-FRONT" }, { "id": "M21::Petty cash vouchers::5", "col": 5, "name": "Payee", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Office Depot" }, { "id": "M21::Petty cash vouchers::6", "col": 6, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Stationery" }, { "id": "M21::Petty cash vouchers::7", "col": 7, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 345.00" }, { "id": "M21::Petty cash vouchers::8", "col": 8, "name": "Tax code", "dataType": "Text", "format": "15", "required": false, "role": "FK", "example": "VAT15" }, { "id": "M21::Petty cash vouchers::9", "col": 9, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 45.00" }, { "id": "M21::Petty cash vouchers::10", "col": 10, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }, { "id": "M21::Petty cash vouchers::11", "col": 11, "name": "Receipt attached", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M21::Petty cash vouchers::12", "col": 12, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Approved" }, { "id": "M21::Petty cash vouchers::13", "col": 13, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M21::Petty cash vouchers::14", "col": 14, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M21::Petty cash vouchers::15", "col": 15, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M21::Petty cash vouchers::16", "col": 16, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M22::Customers": [{ "id": "M22::Customers::1", "col": 1, "name": "Customer code", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "CUS-0208" }, { "id": "M22::Customers::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Acme Industrial (Pty) Ltd" }, { "id": "M22::Customers::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Trade" }, { "id": "M22::Customers::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M22::Customers::5", "col": 5, "name": "VAT number", "dataType": "Text", "format": "15", "required": false, "role": "Reference", "example": "4098765432" }, { "id": "M22::Customers::6", "col": 6, "name": "Registration no.", "dataType": "Text", "format": "20", "required": false, "role": "Reference", "example": "2018/445566/07" }, { "id": "M22::Customers::7", "col": 7, "name": "Payment terms", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "30 days" }, { "id": "M22::Customers::8", "col": 8, "name": "Credit limit", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 150,000.00" }, { "id": "M22::Customers::9", "col": 9, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M22::Customers::10", "col": 10, "name": "Price list", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "TRADE" }, { "id": "M22::Customers::11", "col": 11, "name": "Salesperson", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Ayanda Nkosi" }, { "id": "M22::Customers::12", "col": 12, "name": "Tax code", "dataType": "Text", "format": "15", "required": true, "role": "FK", "example": "VAT15" }, { "id": "M22::Customers::13", "col": 13, "name": "Billing address", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "PO Box 100, Johannesburg" }, { "id": "M22::Customers::14", "col": 14, "name": "Shipping address", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "14 Foundry Street, Germiston" }, { "id": "M22::Customers::15", "col": 15, "name": "City", "dataType": "Text", "format": "50", "required": false, "role": "Description", "example": "Germiston" }, { "id": "M22::Customers::16", "col": 16, "name": "Postal code", "dataType": "Text", "format": "10", "required": false, "role": "Description", "example": "1401" }, { "id": "M22::Customers::17", "col": 17, "name": "Country", "dataType": "Text", "format": "2", "required": true, "role": "FK", "example": "ZA" }, { "id": "M22::Customers::18", "col": 18, "name": "Phone", "dataType": "Phone", "format": "20", "required": false, "role": "Description", "example": "+27 11 555 2080" }, { "id": "M22::Customers::19", "col": 19, "name": "Email", "dataType": "Email", "format": "80", "required": false, "role": "Description", "example": "accounts@acme.example" }, { "id": "M22::Customers::20", "col": 20, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M22::Customers::21", "col": 21, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M22::Customers::22", "col": 22, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M22::Customers::23", "col": 23, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M22::Customers::24", "col": 24, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M22::Customer contacts": [{ "id": "M22::Customer contacts::1", "col": 1, "name": "Contact ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "CON-1008" }, { "id": "M22::Customer contacts::2", "col": 2, "name": "Customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0208" }, { "id": "M22::Customer contacts::3", "col": 3, "name": "First name", "dataType": "Text", "format": "40", "required": true, "role": "Name", "example": "Priya" }, { "id": "M22::Customer contacts::4", "col": 4, "name": "Last name", "dataType": "Text", "format": "40", "required": true, "role": "Name", "example": "Naidoo" }, { "id": "M22::Customer contacts::5", "col": 5, "name": "Job title", "dataType": "Text", "format": "60", "required": false, "role": "Description", "example": "Buyer" }, { "id": "M22::Customer contacts::6", "col": 6, "name": "Email", "dataType": "Email", "format": "80", "required": false, "role": "Description", "example": "priya.naidoo@acme.example" }, { "id": "M22::Customer contacts::7", "col": 7, "name": "Phone", "dataType": "Phone", "format": "20", "required": false, "role": "Description", "example": "+27 11 555 2081" }, { "id": "M22::Customer contacts::8", "col": 8, "name": "Mobile", "dataType": "Phone", "format": "20", "required": false, "role": "Description", "example": "+27 82 555 2081" }, { "id": "M22::Customer contacts::9", "col": 9, "name": "Primary", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M22::Customer contacts::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }], "M22::Price lists": [{ "id": "M22::Price lists::1", "col": 1, "name": "Price list", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "TRADE" }, { "id": "M22::Price lists::2", "col": 2, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M22::Price lists::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M22::Price lists::4", "col": 4, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M22::Price lists::5", "col": 5, "name": "Min qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "1.00" }, { "id": "M22::Price lists::6", "col": 6, "name": "Unit price", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 1,250.00" }, { "id": "M22::Price lists::7", "col": 7, "name": "Tax included", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "N" }, { "id": "M22::Price lists::8", "col": 8, "name": "Valid from", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-03-01" }, { "id": "M22::Price lists::9", "col": 9, "name": "Valid to", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2027-02-28" }, { "id": "M22::Price lists::10", "col": 10, "name": "Company", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "DEMO" }, { "id": "M22::Price lists::11", "col": 11, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M22::Price lists::12", "col": 12, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M22::Price lists::13", "col": 13, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M22::Price lists::14", "col": 14, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M22::Sales quotations": [{ "id": "M22::Sales quotations::1", "col": 1, "name": "Quote no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "QT-3314" }, { "id": "M22::Sales quotations::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-10" }, { "id": "M22::Sales quotations::3", "col": 3, "name": "Valid until", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-12-10" }, { "id": "M22::Sales quotations::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M22::Sales quotations::5", "col": 5, "name": "Customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0208" }, { "id": "M22::Sales quotations::6", "col": 6, "name": "Contact", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CON-1008" }, { "id": "M22::Sales quotations::7", "col": 7, "name": "Salesperson", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Ayanda Nkosi" }, { "id": "M22::Sales quotations::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M22::Sales quotations::9", "col": 9, "name": "FX rate", "dataType": "Decimal", "format": "0.000000", "required": false, "role": "Amount", "example": "1.000000" }, { "id": "M22::Sales quotations::10", "col": 10, "name": "Opportunity", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "OPP-0771" }, { "id": "M22::Sales quotations::11", "col": 11, "name": "Probability %", "dataType": "Percent", "format": "0%", "required": false, "role": "Amount", "example": "60%" }, { "id": "M22::Sales quotations::12", "col": 12, "name": "Subtotal", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 25,000.00" }, { "id": "M22::Sales quotations::13", "col": 13, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 3,750.00" }, { "id": "M22::Sales quotations::14", "col": 14, "name": "Total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 28,750.00" }, { "id": "M22::Sales quotations::15", "col": 15, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Sent" }, { "id": "M22::Sales quotations::16", "col": 16, "name": "Notes", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Prices valid for 30 days" }, { "id": "M22::Sales quotations::17", "col": 17, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M22::Sales quotations::18", "col": 18, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M22::Sales quotations::19", "col": 19, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M22::Sales quotations::20", "col": 20, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M22::Quotation lines": [{ "id": "M22::Quotation lines::1", "col": 1, "name": "Quote no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "QT-3314" }, { "id": "M22::Quotation lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M22::Quotation lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M22::Quotation lines::4", "col": 4, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Standard finished good FG-100" }, { "id": "M22::Quotation lines::5", "col": 5, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "20.00" }, { "id": "M22::Quotation lines::6", "col": 6, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M22::Quotation lines::7", "col": 7, "name": "Unit price", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 1,250.00" }, { "id": "M22::Quotation lines::8", "col": 8, "name": "Discount %", "dataType": "Percent", "format": "0.00%", "required": false, "role": "Amount", "example": "0.00%" }, { "id": "M22::Quotation lines::9", "col": 9, "name": "Tax code", "dataType": "Text", "format": "15", "required": true, "role": "FK", "example": "VAT15" }, { "id": "M22::Quotation lines::10", "col": 10, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 3,750.00" }, { "id": "M22::Quotation lines::11", "col": 11, "name": "Line total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 25,000.00" }, { "id": "M22::Quotation lines::12", "col": 12, "name": "Delivery date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-24" }, { "id": "M22::Quotation lines::13", "col": 13, "name": "Warehouse", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "WH-MAIN" }], "M22::Sales orders": [{ "id": "M22::Sales orders::1", "col": 1, "name": "Order no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "SO-10458" }, { "id": "M22::Sales orders::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-12" }, { "id": "M22::Sales orders::3", "col": 3, "name": "Requested date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-24" }, { "id": "M22::Sales orders::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M22::Sales orders::5", "col": 5, "name": "Customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0208" }, { "id": "M22::Sales orders::6", "col": 6, "name": "Contact", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CON-1008" }, { "id": "M22::Sales orders::7", "col": 7, "name": "Salesperson", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Ayanda Nkosi" }, { "id": "M22::Sales orders::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M22::Sales orders::9", "col": 9, "name": "Price list", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "TRADE" }, { "id": "M22::Sales orders::10", "col": 10, "name": "Payment terms", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "30 days" }, { "id": "M22::Sales orders::11", "col": 11, "name": "Quote ref", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "QT-3314" }, { "id": "M22::Sales orders::12", "col": 12, "name": "Warehouse", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "WH-MAIN" }, { "id": "M22::Sales orders::13", "col": 13, "name": "Delivery address", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "14 Foundry Street, Germiston" }, { "id": "M22::Sales orders::14", "col": 14, "name": "Subtotal", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 25,000.00" }, { "id": "M22::Sales orders::15", "col": 15, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 3,750.00" }, { "id": "M22::Sales orders::16", "col": 16, "name": "Total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 28,750.00" }, { "id": "M22::Sales orders::17", "col": 17, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }, { "id": "M22::Sales orders::18", "col": 18, "name": "Notes", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Deliver to goods-in" }, { "id": "M22::Sales orders::19", "col": 19, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M22::Sales orders::20", "col": 20, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M22::Sales orders::21", "col": 21, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M22::Sales orders::22", "col": 22, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M22::Sales order lines": [{ "id": "M22::Sales order lines::1", "col": 1, "name": "Order no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SO-10458" }, { "id": "M22::Sales order lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M22::Sales order lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M22::Sales order lines::4", "col": 4, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Standard finished good FG-100" }, { "id": "M22::Sales order lines::5", "col": 5, "name": "Qty ordered", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "20.00" }, { "id": "M22::Sales order lines::6", "col": 6, "name": "Qty reserved", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "20.00" }, { "id": "M22::Sales order lines::7", "col": 7, "name": "Qty delivered", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "0.00" }, { "id": "M22::Sales order lines::8", "col": 8, "name": "Qty invoiced", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "0.00" }, { "id": "M22::Sales order lines::9", "col": 9, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M22::Sales order lines::10", "col": 10, "name": "Unit price", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 1,250.00" }, { "id": "M22::Sales order lines::11", "col": 11, "name": "Discount %", "dataType": "Percent", "format": "0.00%", "required": false, "role": "Amount", "example": "0.00%" }, { "id": "M22::Sales order lines::12", "col": 12, "name": "Tax code", "dataType": "Text", "format": "15", "required": true, "role": "FK", "example": "VAT15" }, { "id": "M22::Sales order lines::13", "col": 13, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 3,750.00" }, { "id": "M22::Sales order lines::14", "col": 14, "name": "Line total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 25,000.00" }, { "id": "M22::Sales order lines::15", "col": 15, "name": "Warehouse", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "WH-MAIN" }, { "id": "M22::Sales order lines::16", "col": 16, "name": "Delivery date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-24" }, { "id": "M22::Sales order lines::17", "col": 17, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }], "M22::Deliveries": [{ "id": "M22::Deliveries::1", "col": 1, "name": "Delivery no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "DN-5560" }, { "id": "M22::Deliveries::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-24" }, { "id": "M22::Deliveries::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M22::Deliveries::4", "col": 4, "name": "Customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0208" }, { "id": "M22::Deliveries::5", "col": 5, "name": "Sales order", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SO-10458" }, { "id": "M22::Deliveries::6", "col": 6, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M22::Deliveries::7", "col": 7, "name": "Carrier", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Overnight Logistics" }, { "id": "M22::Deliveries::8", "col": 8, "name": "Tracking no.", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "ONL-998210" }, { "id": "M22::Deliveries::9", "col": 9, "name": "Ship-to", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "14 Foundry Street, Germiston" }, { "id": "M22::Deliveries::10", "col": 10, "name": "Packed by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "j.botha" }, { "id": "M22::Deliveries::11", "col": 11, "name": "Dispatched by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "j.botha" }, { "id": "M22::Deliveries::12", "col": 12, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Dispatched" }, { "id": "M22::Deliveries::13", "col": 13, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M22::Deliveries::14", "col": 14, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M22::Deliveries::15", "col": 15, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M22::Deliveries::16", "col": 16, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M22::Delivery lines": [{ "id": "M22::Delivery lines::1", "col": 1, "name": "Delivery no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DN-5560" }, { "id": "M22::Delivery lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M22::Delivery lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M22::Delivery lines::4", "col": 4, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "20.00" }, { "id": "M22::Delivery lines::5", "col": 5, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M22::Delivery lines::6", "col": 6, "name": "Order no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SO-10458" }, { "id": "M22::Delivery lines::7", "col": 7, "name": "Order line", "dataType": "Integer", "format": "0", "required": true, "role": "FK", "example": "1" }, { "id": "M22::Delivery lines::8", "col": 8, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "LOT-2026-110" }, { "id": "M22::Delivery lines::9", "col": 9, "name": "Bin", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "A-01-02" }], "M22::Sales invoices": [{ "id": "M22::Sales invoices::1", "col": 1, "name": "Invoice no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "INV-8891" }, { "id": "M22::Sales invoices::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-24" }, { "id": "M22::Sales invoices::3", "col": 3, "name": "Due date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-12-24" }, { "id": "M22::Sales invoices::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M22::Sales invoices::5", "col": 5, "name": "Customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0208" }, { "id": "M22::Sales invoices::6", "col": 6, "name": "Order no.", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "SO-10458" }, { "id": "M22::Sales invoices::7", "col": 7, "name": "Delivery no.", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "DN-5560" }, { "id": "M22::Sales invoices::8", "col": 8, "name": "Payment terms", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "30 days" }, { "id": "M22::Sales invoices::9", "col": 9, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M22::Sales invoices::10", "col": 10, "name": "FX rate", "dataType": "Decimal", "format": "0.000000", "required": false, "role": "Amount", "example": "1.000000" }, { "id": "M22::Sales invoices::11", "col": 11, "name": "Salesperson", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Ayanda Nkosi" }, { "id": "M22::Sales invoices::12", "col": 12, "name": "Subtotal", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 25,000.00" }, { "id": "M22::Sales invoices::13", "col": 13, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 3,750.00" }, { "id": "M22::Sales invoices::14", "col": 14, "name": "Total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 28,750.00" }, { "id": "M22::Sales invoices::15", "col": 15, "name": "Amount due", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 28,750.00" }, { "id": "M22::Sales invoices::16", "col": 16, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }, { "id": "M22::Sales invoices::17", "col": 17, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M22::Sales invoices::18", "col": 18, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M22::Sales invoices::19", "col": 19, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M22::Sales invoices::20", "col": 20, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M22::Sales invoice lines": [{ "id": "M22::Sales invoice lines::1", "col": 1, "name": "Invoice no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "INV-8891" }, { "id": "M22::Sales invoice lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M22::Sales invoice lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M22::Sales invoice lines::4", "col": 4, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Standard finished good FG-100" }, { "id": "M22::Sales invoice lines::5", "col": 5, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "20.00" }, { "id": "M22::Sales invoice lines::6", "col": 6, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M22::Sales invoice lines::7", "col": 7, "name": "Unit price", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 1,250.00" }, { "id": "M22::Sales invoice lines::8", "col": 8, "name": "Discount %", "dataType": "Percent", "format": "0.00%", "required": false, "role": "Amount", "example": "0.00%" }, { "id": "M22::Sales invoice lines::9", "col": 9, "name": "Tax code", "dataType": "Text", "format": "15", "required": true, "role": "FK", "example": "VAT15" }, { "id": "M22::Sales invoice lines::10", "col": 10, "name": "VAT amount", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 3,750.00" }, { "id": "M22::Sales invoice lines::11", "col": 11, "name": "Line total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 25,000.00" }, { "id": "M22::Sales invoice lines::12", "col": 12, "name": "Account", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "4000" }, { "id": "M22::Sales invoice lines::13", "col": 13, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }], "M22::Credit notes": [{ "id": "M22::Credit notes::1", "col": 1, "name": "Credit note no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "CN-0440" }, { "id": "M22::Credit notes::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-28" }, { "id": "M22::Credit notes::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M22::Credit notes::4", "col": 4, "name": "Customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0208" }, { "id": "M22::Credit notes::5", "col": 5, "name": "Invoice no.", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "INV-8891" }, { "id": "M22::Credit notes::6", "col": 6, "name": "RMA no.", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "RMA-118" }, { "id": "M22::Credit notes::7", "col": 7, "name": "Reason", "dataType": "Text", "format": "80", "required": true, "role": "Description", "example": "Returned damaged goods" }, { "id": "M22::Credit notes::8", "col": 8, "name": "Subtotal", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 1,250.00" }, { "id": "M22::Credit notes::9", "col": 9, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 187.50" }, { "id": "M22::Credit notes::10", "col": 10, "name": "Total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 1,437.50" }, { "id": "M22::Credit notes::11", "col": 11, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M22::Credit notes::12", "col": 12, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Posted" }, { "id": "M22::Credit notes::13", "col": 13, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M22::Credit notes::14", "col": 14, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M22::Credit notes::15", "col": 15, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M22::Credit notes::16", "col": 16, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M22::Sales returns": [{ "id": "M22::Sales returns::1", "col": 1, "name": "RMA no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "RMA-118" }, { "id": "M22::Sales returns::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-26" }, { "id": "M22::Sales returns::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M22::Sales returns::4", "col": 4, "name": "Customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0208" }, { "id": "M22::Sales returns::5", "col": 5, "name": "Invoice / order", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "INV-8891" }, { "id": "M22::Sales returns::6", "col": 6, "name": "Reason", "dataType": "Text", "format": "80", "required": true, "role": "Description", "example": "Damaged in transit" }, { "id": "M22::Sales returns::7", "col": 7, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-RET" }, { "id": "M22::Sales returns::8", "col": 8, "name": "Refund method", "dataType": "Enum", "format": "20", "required": false, "role": "Enum", "example": "Credit note" }, { "id": "M22::Sales returns::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Authorised" }, { "id": "M22::Sales returns::10", "col": 10, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M22::Sales returns::11", "col": 11, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M22::Sales returns::12", "col": 12, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M22::Sales returns::13", "col": 13, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M22::Sales return lines": [{ "id": "M22::Sales return lines::1", "col": 1, "name": "RMA no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "RMA-118" }, { "id": "M22::Sales return lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M22::Sales return lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M22::Sales return lines::4", "col": 4, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "1.00" }, { "id": "M22::Sales return lines::5", "col": 5, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M22::Sales return lines::6", "col": 6, "name": "Condition", "dataType": "Enum", "format": "20", "required": false, "role": "Enum", "example": "Damaged" }, { "id": "M22::Sales return lines::7", "col": 7, "name": "Action", "dataType": "Enum", "format": "20", "required": false, "role": "Enum", "example": "Scrap" }, { "id": "M22::Sales return lines::8", "col": 8, "name": "Credit amount", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 1,250.00" }], "M22::Sales commissions": [{ "id": "M22::Sales commissions::1", "col": 1, "name": "Period", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "2026-10" }, { "id": "M22::Sales commissions::2", "col": 2, "name": "Salesperson", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Ayanda Nkosi" }, { "id": "M22::Sales commissions::3", "col": 3, "name": "Invoice no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "INV-8891" }, { "id": "M22::Sales commissions::4", "col": 4, "name": "Customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0208" }, { "id": "M22::Sales commissions::5", "col": 5, "name": "Invoice amount", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 25,000.00" }, { "id": "M22::Sales commissions::6", "col": 6, "name": "Commission %", "dataType": "Percent", "format": "0.00%", "required": true, "role": "Amount", "example": "3.00%" }, { "id": "M22::Sales commissions::7", "col": 7, "name": "Commission amount", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 750.00" }, { "id": "M22::Sales commissions::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M22::Sales commissions::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Calculated" }, { "id": "M22::Sales commissions::10", "col": 10, "name": "Paid on", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "" }], "M23::Leads": [{ "id": "M23::Leads::1", "col": 1, "name": "Lead no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "LD-2099" }, { "id": "M23::Leads::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-08" }, { "id": "M23::Leads::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M23::Leads::4", "col": 4, "name": "Source", "dataType": "Text", "format": "40", "required": false, "role": "Enum", "example": "Campaign" }, { "id": "M23::Leads::5", "col": 5, "name": "Campaign", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CMP-Q4-EMAIL" }, { "id": "M23::Leads::6", "col": 6, "name": "First name", "dataType": "Text", "format": "40", "required": false, "role": "Name", "example": "Thabo" }, { "id": "M23::Leads::7", "col": 7, "name": "Last name", "dataType": "Text", "format": "40", "required": false, "role": "Name", "example": "Mokoena" }, { "id": "M23::Leads::8", "col": 8, "name": "Organisation", "dataType": "Text", "format": "80", "required": false, "role": "Name", "example": "Mokoena Engineering" }, { "id": "M23::Leads::9", "col": 9, "name": "Email", "dataType": "Email", "format": "80", "required": false, "role": "Description", "example": "thabo@mokoena.example" }, { "id": "M23::Leads::10", "col": 10, "name": "Phone", "dataType": "Phone", "format": "20", "required": false, "role": "Description", "example": "+27 83 555 0190" }, { "id": "M23::Leads::11", "col": 11, "name": "City", "dataType": "Text", "format": "50", "required": false, "role": "Description", "example": "Pretoria" }, { "id": "M23::Leads::12", "col": 12, "name": "Rating", "dataType": "Enum", "format": "10", "required": false, "role": "Enum", "example": "Warm" }, { "id": "M23::Leads::13", "col": 13, "name": "Owner", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Ayanda Nkosi" }, { "id": "M23::Leads::14", "col": 14, "name": "Next action", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "Demo call 18 Nov" }, { "id": "M23::Leads::15", "col": 15, "name": "Converted customer", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "" }, { "id": "M23::Leads::16", "col": 16, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Qualified" }, { "id": "M23::Leads::17", "col": 17, "name": "Notes", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Asked for a product brochure" }, { "id": "M23::Leads::18", "col": 18, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M23::Leads::19", "col": 19, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M23::Leads::20", "col": 20, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M23::Leads::21", "col": 21, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M23::Opportunities": [{ "id": "M23::Opportunities::1", "col": 1, "name": "Opportunity no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "OPP-0771" }, { "id": "M23::Opportunities::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Acme plant upgrade" }, { "id": "M23::Opportunities::3", "col": 3, "name": "Customer / lead", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0208" }, { "id": "M23::Opportunities::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M23::Opportunities::5", "col": 5, "name": "Stage", "dataType": "Enum", "format": "30", "required": true, "role": "Enum", "example": "Propose" }, { "id": "M23::Opportunities::6", "col": 6, "name": "Probability %", "dataType": "Percent", "format": "0%", "required": true, "role": "Amount", "example": "60%" }, { "id": "M23::Opportunities::7", "col": 7, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 180,000.00" }, { "id": "M23::Opportunities::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M23::Opportunities::9", "col": 9, "name": "Expected close", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-12-15" }, { "id": "M23::Opportunities::10", "col": 10, "name": "Owner", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Ayanda Nkosi" }, { "id": "M23::Opportunities::11", "col": 11, "name": "Campaign", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CMP-Q4-EMAIL" }, { "id": "M23::Opportunities::12", "col": 12, "name": "Source", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Campaign" }, { "id": "M23::Opportunities::13", "col": 13, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }, { "id": "M23::Opportunities::14", "col": 14, "name": "Lost reason", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "" }, { "id": "M23::Opportunities::15", "col": 15, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M23::Opportunities::16", "col": 16, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M23::Opportunities::17", "col": 17, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M23::Opportunities::18", "col": 18, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M23::Activities": [{ "id": "M23::Activities::1", "col": 1, "name": "Activity ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "ACT-6612" }, { "id": "M23::Activities::2", "col": 2, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Call" }, { "id": "M23::Activities::3", "col": 3, "name": "Related to", "dataType": "Text", "format": "40", "required": true, "role": "Reference", "example": "OPP-0771" }, { "id": "M23::Activities::4", "col": 4, "name": "Subject", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Follow-up on proposal" }, { "id": "M23::Activities::5", "col": 5, "name": "Date", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-14 10:00" }, { "id": "M23::Activities::6", "col": 6, "name": "Due", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-14 16:00" }, { "id": "M23::Activities::7", "col": 7, "name": "Owner", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Ayanda Nkosi" }, { "id": "M23::Activities::8", "col": 8, "name": "Priority", "dataType": "Enum", "format": "10", "required": true, "role": "Enum", "example": "Normal" }, { "id": "M23::Activities::9", "col": 9, "name": "Duration mins", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "25" }, { "id": "M23::Activities::10", "col": 10, "name": "Outcome", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "Will review quote internally" }, { "id": "M23::Activities::11", "col": 11, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Done" }], "M24::Campaigns": [{ "id": "M24::Campaigns::1", "col": 1, "name": "Campaign code", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "CMP-Q4-EMAIL" }, { "id": "M24::Campaigns::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Q4 product email series" }, { "id": "M24::Campaigns::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Email" }, { "id": "M24::Campaigns::4", "col": 4, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M24::Campaigns::5", "col": 5, "name": "Start date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-10-01" }, { "id": "M24::Campaigns::6", "col": 6, "name": "End date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-12-15" }, { "id": "M24::Campaigns::7", "col": 7, "name": "Owner", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "l.pieterse" }, { "id": "M24::Campaigns::8", "col": 8, "name": "Budget", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 25,000.00" }, { "id": "M24::Campaigns::9", "col": 9, "name": "Actual cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 12,480.00" }, { "id": "M24::Campaigns::10", "col": 10, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M24::Campaigns::11", "col": 11, "name": "Target list", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "ML-TRADE-GAU" }, { "id": "M24::Campaigns::12", "col": 12, "name": "Objective", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "200 qualified leads" }, { "id": "M24::Campaigns::13", "col": 13, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M24::Campaigns::14", "col": 14, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M24::Campaigns::15", "col": 15, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M24::Campaigns::16", "col": 16, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M24::Campaign members": [{ "id": "M24::Campaign members::1", "col": 1, "name": "Campaign", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CMP-Q4-EMAIL" }, { "id": "M24::Campaign members::2", "col": 2, "name": "Lead / customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "LD-2099" }, { "id": "M24::Campaign members::3", "col": 3, "name": "Email", "dataType": "Email", "format": "80", "required": false, "role": "Description", "example": "thabo@mokoena.example" }, { "id": "M24::Campaign members::4", "col": 4, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Opened" }, { "id": "M24::Campaign members::5", "col": 5, "name": "Sent on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-03 08:05" }, { "id": "M24::Campaign members::6", "col": 6, "name": "Responded on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "" }], "M24::Marketing lists": [{ "id": "M24::Marketing lists::1", "col": 1, "name": "List ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "ML-TRADE-GAU" }, { "id": "M24::Marketing lists::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Gauteng trade contacts" }, { "id": "M24::Marketing lists::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Static" }, { "id": "M24::Marketing lists::4", "col": 4, "name": "Member count", "dataType": "Integer", "format": "#,##0", "required": false, "role": "Qty", "example": "186" }, { "id": "M24::Marketing lists::5", "col": 5, "name": "Owner", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "l.pieterse" }, { "id": "M24::Marketing lists::6", "col": 6, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M24::Marketing lists::7", "col": 7, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M24::Marketing lists::8", "col": 8, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M24::Marketing lists::9", "col": 9, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M24::Marketing lists::10", "col": 10, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M25::Stores": [{ "id": "M25::Stores::1", "col": 1, "name": "Store code", "dataType": "Text", "format": "10", "required": true, "role": "PK", "example": "ST-JHB01" }, { "id": "M25::Stores::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Johannesburg flagship" }, { "id": "M25::Stores::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M25::Stores::4", "col": 4, "name": "Address", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "100 Market Street" }, { "id": "M25::Stores::5", "col": 5, "name": "City", "dataType": "Text", "format": "50", "required": false, "role": "Description", "example": "Johannesburg" }, { "id": "M25::Stores::6", "col": 6, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-JHB" }, { "id": "M25::Stores::7", "col": 7, "name": "Manager", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "EMP-0220" }, { "id": "M25::Stores::8", "col": 8, "name": "Till count", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "4" }, { "id": "M25::Stores::9", "col": 9, "name": "Opening hours", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "Mon\u2013Sat 08:00\u201317:30" }, { "id": "M25::Stores::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M25::Stores::11", "col": 11, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M25::Stores::12", "col": 12, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M25::Stores::13", "col": 13, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M25::Stores::14", "col": 14, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M25::Tills": [{ "id": "M25::Tills::1", "col": 1, "name": "Till ID", "dataType": "Text", "format": "10", "required": true, "role": "PK", "example": "TILL-03" }, { "id": "M25::Tills::2", "col": 2, "name": "Store", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "ST-JHB01" }, { "id": "M25::Tills::3", "col": 3, "name": "Description", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "Front desk 3" }, { "id": "M25::Tills::4", "col": 4, "name": "Device", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "POS-JHB-03" }, { "id": "M25::Tills::5", "col": 5, "name": "Opening float", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 2,000.00" }, { "id": "M25::Tills::6", "col": 6, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M25::Tills::7", "col": 7, "name": "Last session", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "SES-8841" }], "M25::Till sessions": [{ "id": "M25::Till sessions::1", "col": 1, "name": "Session ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "SES-8841" }, { "id": "M25::Till sessions::2", "col": 2, "name": "Till", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "TILL-03" }, { "id": "M25::Till sessions::3", "col": 3, "name": "Store", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "ST-JHB01" }, { "id": "M25::Till sessions::4", "col": 4, "name": "Opened by", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "m.khumalo" }, { "id": "M25::Till sessions::5", "col": 5, "name": "Opened at", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-16 07:55" }, { "id": "M25::Till sessions::6", "col": 6, "name": "Closed by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "m.khumalo" }, { "id": "M25::Till sessions::7", "col": 7, "name": "Closed at", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-16 17:40" }, { "id": "M25::Till sessions::8", "col": 8, "name": "Opening float", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 2,000.00" }, { "id": "M25::Till sessions::9", "col": 9, "name": "Cash sales", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 8,740.00" }, { "id": "M25::Till sessions::10", "col": 10, "name": "Card sales", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 21,150.00" }, { "id": "M25::Till sessions::11", "col": 11, "name": "Other", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 500.00" }, { "id": "M25::Till sessions::12", "col": 12, "name": "Expected cash", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 10,740.00" }, { "id": "M25::Till sessions::13", "col": 13, "name": "Counted cash", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 10,720.00" }, { "id": "M25::Till sessions::14", "col": 14, "name": "Variance", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": false, "role": "Amount", "example": "(R 20.00)" }, { "id": "M25::Till sessions::15", "col": 15, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M25::Till sessions::16", "col": 16, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Closed" }], "M25::POS transactions": [{ "id": "M25::POS transactions::1", "col": 1, "name": "Receipt no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "POS-100882" }, { "id": "M25::POS transactions::2", "col": 2, "name": "Date/time", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-16 14:22" }, { "id": "M25::POS transactions::3", "col": 3, "name": "Store", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "ST-JHB01" }, { "id": "M25::POS transactions::4", "col": 4, "name": "Till", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "TILL-03" }, { "id": "M25::POS transactions::5", "col": 5, "name": "Session", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SES-8841" }, { "id": "M25::POS transactions::6", "col": 6, "name": "Cashier", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "m.khumalo" }, { "id": "M25::POS transactions::7", "col": 7, "name": "Customer", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CUS-0881" }, { "id": "M25::POS transactions::8", "col": 8, "name": "Payment method", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Card" }, { "id": "M25::POS transactions::9", "col": 9, "name": "Subtotal", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 1,000.00" }, { "id": "M25::POS transactions::10", "col": 10, "name": "Discount", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 0.00" }, { "id": "M25::POS transactions::11", "col": 11, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 150.00" }, { "id": "M25::POS transactions::12", "col": 12, "name": "Total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 1,150.00" }, { "id": "M25::POS transactions::13", "col": 13, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M25::POS transactions::14", "col": 14, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Completed" }, { "id": "M25::POS transactions::15", "col": 15, "name": "Order ref", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "SO-10510" }], "M25::POS lines": [{ "id": "M25::POS lines::1", "col": 1, "name": "Receipt no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "POS-100882" }, { "id": "M25::POS lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M25::POS lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-220" }, { "id": "M25::POS lines::4", "col": 4, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Retail pack FG-220" }, { "id": "M25::POS lines::5", "col": 5, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "2.00" }, { "id": "M25::POS lines::6", "col": 6, "name": "Unit price", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 500.00" }, { "id": "M25::POS lines::7", "col": 7, "name": "Discount", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 0.00" }, { "id": "M25::POS lines::8", "col": 8, "name": "Tax code", "dataType": "Text", "format": "15", "required": true, "role": "FK", "example": "VAT15" }, { "id": "M25::POS lines::9", "col": 9, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 150.00" }, { "id": "M25::POS lines::10", "col": 10, "name": "Line total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 1,000.00" }, { "id": "M25::POS lines::11", "col": 11, "name": "Promo code", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "" }], "M25::Promotions": [{ "id": "M25::Promotions::1", "col": 1, "name": "Promo code", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PROMO-WKND" }, { "id": "M25::Promotions::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Weekend 10% off" }, { "id": "M25::Promotions::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "% off" }, { "id": "M25::Promotions::4", "col": 4, "name": "Store / channel", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "ST-JHB01" }, { "id": "M25::Promotions::5", "col": 5, "name": "Start", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-14 00:00" }, { "id": "M25::Promotions::6", "col": 6, "name": "End", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-16 23:59" }, { "id": "M25::Promotions::7", "col": 7, "name": "Item / category", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "CAT-RETAIL" }, { "id": "M25::Promotions::8", "col": 8, "name": "Value", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Amount", "example": "10.00" }, { "id": "M25::Promotions::9", "col": 9, "name": "Min qty", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "1.00" }, { "id": "M25::Promotions::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Expired" }], "M25::Loyalty accounts": [{ "id": "M25::Loyalty accounts::1", "col": 1, "name": "Account no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "LYL-44190" }, { "id": "M25::Loyalty accounts::2", "col": 2, "name": "Customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0881" }, { "id": "M25::Loyalty accounts::3", "col": 3, "name": "Store", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "ST-JHB01" }, { "id": "M25::Loyalty accounts::4", "col": 4, "name": "Points balance", "dataType": "Integer", "format": "#,##0", "required": true, "role": "Qty", "example": "1240" }, { "id": "M25::Loyalty accounts::5", "col": 5, "name": "Tier", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Silver" }, { "id": "M25::Loyalty accounts::6", "col": 6, "name": "Enrolled on", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2025-06-02" }, { "id": "M25::Loyalty accounts::7", "col": 7, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }], "M25::Loyalty transactions": [{ "id": "M25::Loyalty transactions::1", "col": 1, "name": "Account no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "LYL-44190" }, { "id": "M25::Loyalty transactions::2", "col": 2, "name": "Date", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-16 14:22" }, { "id": "M25::Loyalty transactions::3", "col": 3, "name": "Store", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "ST-JHB01" }, { "id": "M25::Loyalty transactions::4", "col": 4, "name": "Receipt", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "POS-100882" }, { "id": "M25::Loyalty transactions::5", "col": 5, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Earn" }, { "id": "M25::Loyalty transactions::6", "col": 6, "name": "Points", "dataType": "Integer", "format": "#,##0;(#)", "required": true, "role": "Qty", "example": "115" }, { "id": "M25::Loyalty transactions::7", "col": 7, "name": "Balance after", "dataType": "Integer", "format": "#,##0", "required": true, "role": "Qty", "example": "1240" }], "M26::Sales channels": [{ "id": "M26::Sales channels::1", "col": 1, "name": "Channel ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "WEB-ZA" }, { "id": "M26::Sales channels::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Demo web shop" }, { "id": "M26::Sales channels::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Webshop" }, { "id": "M26::Sales channels::4", "col": 4, "name": "Platform", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Custom storefront" }, { "id": "M26::Sales channels::5", "col": 5, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M26::Sales channels::6", "col": 6, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M26::Sales channels::7", "col": 7, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M26::Sales channels::8", "col": 8, "name": "URL", "dataType": "URL", "format": "120", "required": false, "role": "Description", "example": "https://shop.demo.example" }, { "id": "M26::Sales channels::9", "col": 9, "name": "Last sync", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-17 01:05" }, { "id": "M26::Sales channels::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M26::Sales channels::11", "col": 11, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M26::Sales channels::12", "col": 12, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M26::Sales channels::13", "col": 13, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M26::Sales channels::14", "col": 14, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M26::Web products": [{ "id": "M26::Web products::1", "col": 1, "name": "Channel", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "WEB-ZA" }, { "id": "M26::Web products::2", "col": 2, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-220" }, { "id": "M26::Web products::3", "col": 3, "name": "Web title", "dataType": "Text", "format": "120", "required": true, "role": "Name", "example": "Retail pack FG-220" }, { "id": "M26::Web products::4", "col": 4, "name": "Slug", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "retail-pack-fg-220" }, { "id": "M26::Web products::5", "col": 5, "name": "Published", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M26::Web products::6", "col": 6, "name": "List price", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 575.00" }, { "id": "M26::Web products::7", "col": 7, "name": "Promo price", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "" }, { "id": "M26::Web products::8", "col": 8, "name": "Tax code", "dataType": "Text", "format": "15", "required": true, "role": "FK", "example": "VAT15" }, { "id": "M26::Web products::9", "col": 9, "name": "Stock published", "dataType": "Decimal", "format": "0", "required": false, "role": "Qty", "example": "84" }, { "id": "M26::Web products::10", "col": 10, "name": "SEO title", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "Retail pack FG-220 | Demo" }, { "id": "M26::Web products::11", "col": 11, "name": "Updated", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-15 13:40" }], "M26::Web orders": [{ "id": "M26::Web orders::1", "col": 1, "name": "Web order no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "WEB-33012" }, { "id": "M26::Web orders::2", "col": 2, "name": "Channel", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "WEB-ZA" }, { "id": "M26::Web orders::3", "col": 3, "name": "Date", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-16 21:18" }, { "id": "M26::Web orders::4", "col": 4, "name": "Customer", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CUS-0881" }, { "id": "M26::Web orders::5", "col": 5, "name": "Email", "dataType": "Email", "format": "80", "required": true, "role": "Description", "example": "lee@customer.example" }, { "id": "M26::Web orders::6", "col": 6, "name": "Payment gateway", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Payment gateway" }, { "id": "M26::Web orders::7", "col": 7, "name": "Payment ref", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "pay_9f3a22" }, { "id": "M26::Web orders::8", "col": 8, "name": "Subtotal", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 575.00" }, { "id": "M26::Web orders::9", "col": 9, "name": "Shipping", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 95.00" }, { "id": "M26::Web orders::10", "col": 10, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 100.50" }, { "id": "M26::Web orders::11", "col": 11, "name": "Total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 770.50" }, { "id": "M26::Web orders::12", "col": 12, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M26::Web orders::13", "col": 13, "name": "Sales order no.", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "SO-10522" }, { "id": "M26::Web orders::14", "col": 14, "name": "Ship-to", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "7 Oak Avenue, Randburg" }, { "id": "M26::Web orders::15", "col": 15, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Paid" }], "M26::Web order lines": [{ "id": "M26::Web order lines::1", "col": 1, "name": "Web order no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "WEB-33012" }, { "id": "M26::Web order lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M26::Web order lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-220" }, { "id": "M26::Web order lines::4", "col": 4, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Retail pack FG-220" }, { "id": "M26::Web order lines::5", "col": 5, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "1.00" }, { "id": "M26::Web order lines::6", "col": 6, "name": "Unit price", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 575.00" }, { "id": "M26::Web order lines::7", "col": 7, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 86.25" }, { "id": "M26::Web order lines::8", "col": 8, "name": "Line total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 575.00" }], "M26::Shopping carts": [{ "id": "M26::Shopping carts::1", "col": 1, "name": "Cart ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "CART-99012" }, { "id": "M26::Shopping carts::2", "col": 2, "name": "Channel", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "WEB-ZA" }, { "id": "M26::Shopping carts::3", "col": 3, "name": "Customer / session", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "CUS-0881" }, { "id": "M26::Shopping carts::4", "col": 4, "name": "Created", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-16 20:01" }, { "id": "M26::Shopping carts::5", "col": 5, "name": "Updated", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-16 20:44" }, { "id": "M26::Shopping carts::6", "col": 6, "name": "Item count", "dataType": "Integer", "format": "0", "required": true, "role": "Qty", "example": "2" }, { "id": "M26::Shopping carts::7", "col": 7, "name": "Value", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 1,150.00" }, { "id": "M26::Shopping carts::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M26::Shopping carts::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Abandoned" }, { "id": "M26::Shopping carts::10", "col": 10, "name": "Converted order", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "" }], "M26::Marketplace listings": [{ "id": "M26::Marketplace listings::1", "col": 1, "name": "Channel", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "MKT-ZA" }, { "id": "M26::Marketplace listings::2", "col": 2, "name": "Listing ID", "dataType": "Text", "format": "40", "required": true, "role": "PK", "example": "LST-448201" }, { "id": "M26::Marketplace listings::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-220" }, { "id": "M26::Marketplace listings::4", "col": 4, "name": "Title", "dataType": "Text", "format": "120", "required": true, "role": "Name", "example": "Retail pack FG-220" }, { "id": "M26::Marketplace listings::5", "col": 5, "name": "Price", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 599.00" }, { "id": "M26::Marketplace listings::6", "col": 6, "name": "Quantity", "dataType": "Integer", "format": "0", "required": true, "role": "Qty", "example": "40" }, { "id": "M26::Marketplace listings::7", "col": 7, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M26::Marketplace listings::8", "col": 8, "name": "Last sync", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-17 01:05" }, { "id": "M26::Marketplace listings::9", "col": 9, "name": "URL", "dataType": "URL", "format": "200", "required": false, "role": "Description", "example": "https://market.example/lst-448201" }], "M27::Suppliers": [{ "id": "M27::Suppliers::1", "col": 1, "name": "Supplier code", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "SUP-014" }, { "id": "M27::Suppliers::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Acme Components (Pty) Ltd" }, { "id": "M27::Suppliers::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M27::Suppliers::4", "col": 4, "name": "VAT number", "dataType": "Text", "format": "15", "required": false, "role": "Reference", "example": "4011223344" }, { "id": "M27::Suppliers::5", "col": 5, "name": "Registration no.", "dataType": "Text", "format": "20", "required": false, "role": "Reference", "example": "2015/667788/07" }, { "id": "M27::Suppliers::6", "col": 6, "name": "Payment terms", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "30 days" }, { "id": "M27::Suppliers::7", "col": 7, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M27::Suppliers::8", "col": 8, "name": "Tax code", "dataType": "Text", "format": "15", "required": true, "role": "FK", "example": "VAT15" }, { "id": "M27::Suppliers::9", "col": 9, "name": "Buyer", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "l.dlamini" }, { "id": "M27::Suppliers::10", "col": 10, "name": "Bank", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Standard Bank" }, { "id": "M27::Suppliers::11", "col": 11, "name": "Account no.", "dataType": "Text", "format": "20", "required": false, "role": "Reference", "example": "0213344556" }, { "id": "M27::Suppliers::12", "col": 12, "name": "Branch code", "dataType": "Text", "format": "10", "required": false, "role": "Reference", "example": "051001" }, { "id": "M27::Suppliers::13", "col": 13, "name": "Address", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "8 Supplier Park, Midrand" }, { "id": "M27::Suppliers::14", "col": 14, "name": "City", "dataType": "Text", "format": "50", "required": false, "role": "Description", "example": "Midrand" }, { "id": "M27::Suppliers::15", "col": 15, "name": "Country", "dataType": "Text", "format": "2", "required": true, "role": "FK", "example": "ZA" }, { "id": "M27::Suppliers::16", "col": 16, "name": "Phone", "dataType": "Phone", "format": "20", "required": false, "role": "Description", "example": "+27 11 555 0140" }, { "id": "M27::Suppliers::17", "col": 17, "name": "Email", "dataType": "Email", "format": "80", "required": false, "role": "Description", "example": "sales@acmecomp.example" }, { "id": "M27::Suppliers::18", "col": 18, "name": "Lead time days", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "14" }, { "id": "M27::Suppliers::19", "col": 19, "name": "Rating", "dataType": "Enum", "format": "10", "required": false, "role": "Enum", "example": "A" }, { "id": "M27::Suppliers::20", "col": 20, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M27::Suppliers::21", "col": 21, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M27::Suppliers::22", "col": 22, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M27::Suppliers::23", "col": 23, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M27::Suppliers::24", "col": 24, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M27::Purchase requisitions": [{ "id": "M27::Purchase requisitions::1", "col": 1, "name": "PR no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PR-2088" }, { "id": "M27::Purchase requisitions::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-08" }, { "id": "M27::Purchase requisitions::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M27::Purchase requisitions::4", "col": 4, "name": "Requested by", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "j.botha" }, { "id": "M27::Purchase requisitions::5", "col": 5, "name": "Department", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Production" }, { "id": "M27::Purchase requisitions::6", "col": 6, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }, { "id": "M27::Purchase requisitions::7", "col": 7, "name": "Needed by", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-22" }, { "id": "M27::Purchase requisitions::8", "col": 8, "name": "Buyer", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "l.dlamini" }, { "id": "M27::Purchase requisitions::9", "col": 9, "name": "Total est.", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 18,400.00" }, { "id": "M27::Purchase requisitions::10", "col": 10, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M27::Purchase requisitions::11", "col": 11, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Approved" }, { "id": "M27::Purchase requisitions::12", "col": 12, "name": "Notes", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "For WO-441 replenishment" }, { "id": "M27::Purchase requisitions::13", "col": 13, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M27::Purchase requisitions::14", "col": 14, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M27::Purchase requisitions::15", "col": 15, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M27::Purchase requisitions::16", "col": 16, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M27::Requisition lines": [{ "id": "M27::Requisition lines::1", "col": 1, "name": "PR no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PR-2088" }, { "id": "M27::Requisition lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M27::Requisition lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "RM-044" }, { "id": "M27::Requisition lines::4", "col": 4, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Raw material RM-044" }, { "id": "M27::Requisition lines::5", "col": 5, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "200.00" }, { "id": "M27::Requisition lines::6", "col": 6, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "KG" }, { "id": "M27::Requisition lines::7", "col": 7, "name": "Est. price", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 92.00" }, { "id": "M27::Requisition lines::8", "col": 8, "name": "Tax code", "dataType": "Text", "format": "15", "required": false, "role": "FK", "example": "VAT15" }, { "id": "M27::Requisition lines::9", "col": 9, "name": "Line total", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 18,400.00" }, { "id": "M27::Requisition lines::10", "col": 10, "name": "Suggested supplier", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "SUP-014" }, { "id": "M27::Requisition lines::11", "col": 11, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }], "M27::RFQs": [{ "id": "M27::RFQs::1", "col": 1, "name": "RFQ no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "RFQ-077" }, { "id": "M27::RFQs::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-09" }, { "id": "M27::RFQs::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M27::RFQs::4", "col": 4, "name": "Buyer", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "l.dlamini" }, { "id": "M27::RFQs::5", "col": 5, "name": "Close date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-16" }, { "id": "M27::RFQs::6", "col": 6, "name": "PR ref", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "PR-2088" }, { "id": "M27::RFQs::7", "col": 7, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M27::RFQs::8", "col": 8, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Issued" }, { "id": "M27::RFQs::9", "col": 9, "name": "Notes", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Please quote delivered Midrand" }, { "id": "M27::RFQs::10", "col": 10, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M27::RFQs::11", "col": 11, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M27::RFQs::12", "col": 12, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M27::RFQs::13", "col": 13, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M27::RFQ lines": [{ "id": "M27::RFQ lines::1", "col": 1, "name": "RFQ no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "RFQ-077" }, { "id": "M27::RFQ lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M27::RFQ lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "RM-044" }, { "id": "M27::RFQ lines::4", "col": 4, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Raw material RM-044, grade A" }, { "id": "M27::RFQ lines::5", "col": 5, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "200.00" }, { "id": "M27::RFQ lines::6", "col": 6, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "KG" }, { "id": "M27::RFQ lines::7", "col": 7, "name": "Required date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-22" }, { "id": "M27::RFQ lines::8", "col": 8, "name": "Target price", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 90.00" }], "M27::Supplier quotes": [{ "id": "M27::Supplier quotes::1", "col": 1, "name": "RFQ no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "RFQ-077" }, { "id": "M27::Supplier quotes::2", "col": 2, "name": "Supplier", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SUP-014" }, { "id": "M27::Supplier quotes::3", "col": 3, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "FK", "example": "1" }, { "id": "M27::Supplier quotes::4", "col": 4, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "RM-044" }, { "id": "M27::Supplier quotes::5", "col": 5, "name": "Quoted price", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 89.50" }, { "id": "M27::Supplier quotes::6", "col": 6, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M27::Supplier quotes::7", "col": 7, "name": "Lead time days", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "10" }, { "id": "M27::Supplier quotes::8", "col": 8, "name": "Valid until", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-12-09" }, { "id": "M27::Supplier quotes::9", "col": 9, "name": "Alternate item", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "" }, { "id": "M27::Supplier quotes::10", "col": 10, "name": "Comments", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "Includes delivery" }, { "id": "M27::Supplier quotes::11", "col": 11, "name": "Selected", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }], "M27::Purchase orders": [{ "id": "M27::Purchase orders::1", "col": 1, "name": "PO no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PO-10045" }, { "id": "M27::Purchase orders::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-16" }, { "id": "M27::Purchase orders::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M27::Purchase orders::4", "col": 4, "name": "Supplier", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SUP-014" }, { "id": "M27::Purchase orders::5", "col": 5, "name": "Buyer", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "l.dlamini" }, { "id": "M27::Purchase orders::6", "col": 6, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M27::Purchase orders::7", "col": 7, "name": "FX rate", "dataType": "Decimal", "format": "0.000000", "required": false, "role": "Amount", "example": "1.000000" }, { "id": "M27::Purchase orders::8", "col": 8, "name": "Payment terms", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "30 days" }, { "id": "M27::Purchase orders::9", "col": 9, "name": "Expected date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-26" }, { "id": "M27::Purchase orders::10", "col": 10, "name": "Warehouse", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "WH-MAIN" }, { "id": "M27::Purchase orders::11", "col": 11, "name": "Incoterms", "dataType": "Text", "format": "10", "required": false, "role": "Enum", "example": "DAP" }, { "id": "M27::Purchase orders::12", "col": 12, "name": "RFQ / contract ref", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "RFQ-077" }, { "id": "M27::Purchase orders::13", "col": 13, "name": "Subtotal", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 17,900.00" }, { "id": "M27::Purchase orders::14", "col": 14, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 2,685.00" }, { "id": "M27::Purchase orders::15", "col": 15, "name": "Total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 20,585.00" }, { "id": "M27::Purchase orders::16", "col": 16, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Issued" }, { "id": "M27::Purchase orders::17", "col": 17, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M27::Purchase orders::18", "col": 18, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M27::Purchase orders::19", "col": 19, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M27::Purchase orders::20", "col": 20, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M27::Purchase order lines": [{ "id": "M27::Purchase order lines::1", "col": 1, "name": "PO no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PO-10045" }, { "id": "M27::Purchase order lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M27::Purchase order lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "RM-044" }, { "id": "M27::Purchase order lines::4", "col": 4, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Raw material RM-044, grade A" }, { "id": "M27::Purchase order lines::5", "col": 5, "name": "Qty ordered", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "200.00" }, { "id": "M27::Purchase order lines::6", "col": 6, "name": "Qty received", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "0.00" }, { "id": "M27::Purchase order lines::7", "col": 7, "name": "Qty invoiced", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "0.00" }, { "id": "M27::Purchase order lines::8", "col": 8, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "KG" }, { "id": "M27::Purchase order lines::9", "col": 9, "name": "Unit price", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 89.50" }, { "id": "M27::Purchase order lines::10", "col": 10, "name": "Discount %", "dataType": "Percent", "format": "0.00%", "required": false, "role": "Amount", "example": "0.00%" }, { "id": "M27::Purchase order lines::11", "col": 11, "name": "Tax code", "dataType": "Text", "format": "15", "required": true, "role": "FK", "example": "VAT15" }, { "id": "M27::Purchase order lines::12", "col": 12, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 2,685.00" }, { "id": "M27::Purchase order lines::13", "col": 13, "name": "Line total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 17,900.00" }, { "id": "M27::Purchase order lines::14", "col": 14, "name": "Warehouse", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "WH-MAIN" }, { "id": "M27::Purchase order lines::15", "col": 15, "name": "Due date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-26" }, { "id": "M27::Purchase order lines::16", "col": 16, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }], "M27::Goods receipts": [{ "id": "M27::Goods receipts::1", "col": 1, "name": "GRN no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "GRN-6621" }, { "id": "M27::Goods receipts::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-25" }, { "id": "M27::Goods receipts::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M27::Goods receipts::4", "col": 4, "name": "Supplier", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SUP-014" }, { "id": "M27::Goods receipts::5", "col": 5, "name": "PO no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PO-10045" }, { "id": "M27::Goods receipts::6", "col": 6, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M27::Goods receipts::7", "col": 7, "name": "Received by", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "j.botha" }, { "id": "M27::Goods receipts::8", "col": 8, "name": "Packing slip", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "DN-ACME-904" }, { "id": "M27::Goods receipts::9", "col": 9, "name": "Notes", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "" }, { "id": "M27::Goods receipts::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Received" }, { "id": "M27::Goods receipts::11", "col": 11, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M27::Goods receipts::12", "col": 12, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M27::Goods receipts::13", "col": 13, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M27::Goods receipts::14", "col": 14, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M27::Goods receipt lines": [{ "id": "M27::Goods receipt lines::1", "col": 1, "name": "GRN no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "GRN-6621" }, { "id": "M27::Goods receipt lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M27::Goods receipt lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "RM-044" }, { "id": "M27::Goods receipt lines::4", "col": 4, "name": "Qty received", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "200.00" }, { "id": "M27::Goods receipt lines::5", "col": 5, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "KG" }, { "id": "M27::Goods receipt lines::6", "col": 6, "name": "PO line", "dataType": "Integer", "format": "0", "required": true, "role": "FK", "example": "1" }, { "id": "M27::Goods receipt lines::7", "col": 7, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "LOT-RM044-2611" }, { "id": "M27::Goods receipt lines::8", "col": 8, "name": "Bin", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "R-02-01" }, { "id": "M27::Goods receipt lines::9", "col": 9, "name": "QC status", "dataType": "Enum", "format": "20", "required": false, "role": "Enum", "example": "Pending" }], "M27::Supplier invoices": [{ "id": "M27::Supplier invoices::1", "col": 1, "name": "Invoice no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PINV-776" }, { "id": "M27::Supplier invoices::2", "col": 2, "name": "Supplier invoice no.", "dataType": "Text", "format": "40", "required": true, "role": "Reference", "example": "ACME-INV-10982" }, { "id": "M27::Supplier invoices::3", "col": 3, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-26" }, { "id": "M27::Supplier invoices::4", "col": 4, "name": "Due date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-12-26" }, { "id": "M27::Supplier invoices::5", "col": 5, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M27::Supplier invoices::6", "col": 6, "name": "Supplier", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SUP-014" }, { "id": "M27::Supplier invoices::7", "col": 7, "name": "PO no.", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "PO-10045" }, { "id": "M27::Supplier invoices::8", "col": 8, "name": "GRN no.", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "GRN-6621" }, { "id": "M27::Supplier invoices::9", "col": 9, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M27::Supplier invoices::10", "col": 10, "name": "FX rate", "dataType": "Decimal", "format": "0.000000", "required": false, "role": "Amount", "example": "1.000000" }, { "id": "M27::Supplier invoices::11", "col": 11, "name": "Subtotal", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 17,900.00" }, { "id": "M27::Supplier invoices::12", "col": 12, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 2,685.00" }, { "id": "M27::Supplier invoices::13", "col": 13, "name": "Total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 20,585.00" }, { "id": "M27::Supplier invoices::14", "col": 14, "name": "Amount due", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 20,585.00" }, { "id": "M27::Supplier invoices::15", "col": 15, "name": "3-way match", "dataType": "Enum", "format": "20", "required": false, "role": "Status", "example": "Matched" }, { "id": "M27::Supplier invoices::16", "col": 16, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Posted" }, { "id": "M27::Supplier invoices::17", "col": 17, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M27::Supplier invoices::18", "col": 18, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M27::Supplier invoices::19", "col": 19, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M27::Supplier invoices::20", "col": 20, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M27::Supplier invoice lines": [{ "id": "M27::Supplier invoice lines::1", "col": 1, "name": "Invoice no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PINV-776" }, { "id": "M27::Supplier invoice lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M27::Supplier invoice lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "RM-044" }, { "id": "M27::Supplier invoice lines::4", "col": 4, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Raw material RM-044, grade A" }, { "id": "M27::Supplier invoice lines::5", "col": 5, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "200.00" }, { "id": "M27::Supplier invoice lines::6", "col": 6, "name": "UOM", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "KG" }, { "id": "M27::Supplier invoice lines::7", "col": 7, "name": "Unit price", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 89.50" }, { "id": "M27::Supplier invoice lines::8", "col": 8, "name": "Tax code", "dataType": "Text", "format": "15", "required": true, "role": "FK", "example": "VAT15" }, { "id": "M27::Supplier invoice lines::9", "col": 9, "name": "VAT", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 2,685.00" }, { "id": "M27::Supplier invoice lines::10", "col": 10, "name": "Line total", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 17,900.00" }, { "id": "M27::Supplier invoice lines::11", "col": 11, "name": "Account", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "1400" }, { "id": "M27::Supplier invoice lines::12", "col": 12, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }, { "id": "M27::Supplier invoice lines::13", "col": 13, "name": "PO line", "dataType": "Integer", "format": "0", "required": false, "role": "FK", "example": "1" }], "M28::Procurement contracts": [{ "id": "M28::Procurement contracts::1", "col": 1, "name": "Contract no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PCT-012" }, { "id": "M28::Procurement contracts::2", "col": 2, "name": "Supplier", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SUP-014" }, { "id": "M28::Procurement contracts::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M28::Procurement contracts::4", "col": 4, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Blanket" }, { "id": "M28::Procurement contracts::5", "col": 5, "name": "Start", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-03-01" }, { "id": "M28::Procurement contracts::6", "col": 6, "name": "End", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2027-02-28" }, { "id": "M28::Procurement contracts::7", "col": 7, "name": "Value", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 750,000.00" }, { "id": "M28::Procurement contracts::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M28::Procurement contracts::9", "col": 9, "name": "Payment terms", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "30 days" }, { "id": "M28::Procurement contracts::10", "col": 10, "name": "Owner", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "l.dlamini" }, { "id": "M28::Procurement contracts::11", "col": 11, "name": "Renewal date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2027-01-15" }, { "id": "M28::Procurement contracts::12", "col": 12, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M28::Procurement contracts::13", "col": 13, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M28::Procurement contracts::14", "col": 14, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M28::Procurement contracts::15", "col": 15, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M28::Procurement contracts::16", "col": 16, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M28::Procurement contract lines": [{ "id": "M28::Procurement contract lines::1", "col": 1, "name": "Contract no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PCT-012" }, { "id": "M28::Procurement contract lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M28::Procurement contract lines::3", "col": 3, "name": "Item / service", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "RM-044" }, { "id": "M28::Procurement contract lines::4", "col": 4, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Raw material RM-044, grade A" }, { "id": "M28::Procurement contract lines::5", "col": 5, "name": "Qty committed", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "8000.00" }, { "id": "M28::Procurement contract lines::6", "col": 6, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "KG" }, { "id": "M28::Procurement contract lines::7", "col": 7, "name": "Price", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 89.50" }, { "id": "M28::Procurement contract lines::8", "col": 8, "name": "Valid from", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-03-01" }, { "id": "M28::Procurement contract lines::9", "col": 9, "name": "Valid to", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2027-02-28" }], "M29::Item master": [{ "id": "M29::Item master::1", "col": 1, "name": "Item code", "dataType": "Text", "format": "30", "required": true, "role": "PK", "example": "FG-100" }, { "id": "M29::Item master::2", "col": 2, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Name", "example": "Standard finished good FG-100" }, { "id": "M29::Item master::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Stock" }, { "id": "M29::Item master::4", "col": 4, "name": "Category", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Finished goods" }, { "id": "M29::Item master::5", "col": 5, "name": "UOM stock", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M29::Item master::6", "col": 6, "name": "UOM purchase", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M29::Item master::7", "col": 7, "name": "UOM sales", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M29::Item master::8", "col": 8, "name": "Barcode", "dataType": "Text", "format": "30", "required": false, "role": "Reference", "example": "6001234567890" }, { "id": "M29::Item master::9", "col": 9, "name": "Brand", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Demo" }, { "id": "M29::Item master::10", "col": 10, "name": "Tax code", "dataType": "Text", "format": "15", "required": true, "role": "FK", "example": "VAT15" }, { "id": "M29::Item master::11", "col": 11, "name": "Standard cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 620.00" }, { "id": "M29::Item master::12", "col": 12, "name": "Last cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 615.40" }, { "id": "M29::Item master::13", "col": 13, "name": "Average cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 618.22" }, { "id": "M29::Item master::14", "col": 14, "name": "Selling price", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 1,250.00" }, { "id": "M29::Item master::15", "col": 15, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M29::Item master::16", "col": 16, "name": "Valuation method", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Average" }, { "id": "M29::Item master::17", "col": 17, "name": "Reorder point", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "40.00" }, { "id": "M29::Item master::18", "col": 18, "name": "Reorder qty", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "100.00" }, { "id": "M29::Item master::19", "col": 19, "name": "Safety stock", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "20.00" }, { "id": "M29::Item master::20", "col": 20, "name": "Lead time days", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "14" }, { "id": "M29::Item master::21", "col": 21, "name": "Default warehouse", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "WH-MAIN" }, { "id": "M29::Item master::22", "col": 22, "name": "Serial controlled", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "N" }, { "id": "M29::Item master::23", "col": 23, "name": "Lot controlled", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M29::Item master::24", "col": 24, "name": "Shelf life days", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "" }, { "id": "M29::Item master::25", "col": 25, "name": "Weight", "dataType": "Decimal", "format": "0.000", "required": false, "role": "Qty", "example": "2.500" }, { "id": "M29::Item master::26", "col": 26, "name": "Volume", "dataType": "Decimal", "format": "0.000", "required": false, "role": "Qty", "example": "0.012" }, { "id": "M29::Item master::27", "col": 27, "name": "Company", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "DEMO" }, { "id": "M29::Item master::28", "col": 28, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M29::Item master::29", "col": 29, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M29::Item master::30", "col": 30, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M29::Item master::31", "col": 31, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M29::Item master::32", "col": 32, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M29::Item categories": [{ "id": "M29::Item categories::1", "col": 1, "name": "Category", "dataType": "Text", "format": "40", "required": true, "role": "PK", "example": "Finished goods" }, { "id": "M29::Item categories::2", "col": 2, "name": "Parent", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Products" }, { "id": "M29::Item categories::3", "col": 3, "name": "Description", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "Manufactured finished goods" }, { "id": "M29::Item categories::4", "col": 4, "name": "Default tax", "dataType": "Text", "format": "15", "required": false, "role": "FK", "example": "VAT15" }, { "id": "M29::Item categories::5", "col": 5, "name": "Default GL", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "1400" }, { "id": "M29::Item categories::6", "col": 6, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }], "M29::Units of measure": [{ "id": "M29::Units of measure::1", "col": 1, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "PK", "example": "KG" }, { "id": "M29::Units of measure::2", "col": 2, "name": "Description", "dataType": "Text", "format": "40", "required": true, "role": "Description", "example": "Kilogram" }, { "id": "M29::Units of measure::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Weight" }, { "id": "M29::Units of measure::4", "col": 4, "name": "Related UOM", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "G" }, { "id": "M29::Units of measure::5", "col": 5, "name": "Conversion factor", "dataType": "Decimal", "format": "0.000000", "required": false, "role": "Qty", "example": "1000.000000" }], "M29::Warehouses": [{ "id": "M29::Warehouses::1", "col": 1, "name": "Warehouse code", "dataType": "Text", "format": "10", "required": true, "role": "PK", "example": "WH-MAIN" }, { "id": "M29::Warehouses::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Main distribution warehouse" }, { "id": "M29::Warehouses::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M29::Warehouses::4", "col": 4, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Main" }, { "id": "M29::Warehouses::5", "col": 5, "name": "Address", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "12 Industrial Road, Johannesburg" }, { "id": "M29::Warehouses::6", "col": 6, "name": "City", "dataType": "Text", "format": "50", "required": false, "role": "Description", "example": "Johannesburg" }, { "id": "M29::Warehouses::7", "col": 7, "name": "Manager", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "EMP-0088" }, { "id": "M29::Warehouses::8", "col": 8, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M29::Warehouses::9", "col": 9, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M29::Warehouses::10", "col": 10, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M29::Warehouses::11", "col": 11, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M29::Warehouses::12", "col": 12, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M29::Stock on hand": [{ "id": "M29::Stock on hand::1", "col": 1, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M29::Stock on hand::2", "col": 2, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M29::Stock on hand::3", "col": 3, "name": "Bin", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "A-01-02" }, { "id": "M29::Stock on hand::4", "col": 4, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M29::Stock on hand::5", "col": 5, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "LOT-2026-110" }, { "id": "M29::Stock on hand::6", "col": 6, "name": "Qty on hand", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "86.00" }, { "id": "M29::Stock on hand::7", "col": 7, "name": "Qty reserved", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "20.00" }, { "id": "M29::Stock on hand::8", "col": 8, "name": "Qty available", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "66.00" }, { "id": "M29::Stock on hand::9", "col": 9, "name": "Qty on order", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "100.00" }, { "id": "M29::Stock on hand::10", "col": 10, "name": "Qty in transit", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "0.00" }, { "id": "M29::Stock on hand::11", "col": 11, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M29::Stock on hand::12", "col": 12, "name": "Unit cost", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 618.22" }, { "id": "M29::Stock on hand::13", "col": 13, "name": "Value", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 53,166.92" }, { "id": "M29::Stock on hand::14", "col": 14, "name": "Last movement", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-16" }], "M29::Stock movements": [{ "id": "M29::Stock movements::1", "col": 1, "name": "Movement no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "MOV-190221" }, { "id": "M29::Stock movements::2", "col": 2, "name": "Date", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-16 15:10" }, { "id": "M29::Stock movements::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Issue" }, { "id": "M29::Stock movements::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M29::Stock movements::5", "col": 5, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M29::Stock movements::6", "col": 6, "name": "Bin", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "A-01-02" }, { "id": "M29::Stock movements::7", "col": 7, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M29::Stock movements::8", "col": 8, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "LOT-2026-110" }, { "id": "M29::Stock movements::9", "col": 9, "name": "Qty in", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "0.00" }, { "id": "M29::Stock movements::10", "col": 10, "name": "Qty out", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "20.00" }, { "id": "M29::Stock movements::11", "col": 11, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M29::Stock movements::12", "col": 12, "name": "Unit cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 618.22" }, { "id": "M29::Stock movements::13", "col": 13, "name": "Value", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 12,364.40" }, { "id": "M29::Stock movements::14", "col": 14, "name": "Reference", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "DN-5560" }, { "id": "M29::Stock movements::15", "col": 15, "name": "User", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "j.botha" }], "M29::Transfers": [{ "id": "M29::Transfers::1", "col": 1, "name": "Transfer no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "TRF-0441" }, { "id": "M29::Transfers::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-15" }, { "id": "M29::Transfers::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M29::Transfers::4", "col": 4, "name": "From warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M29::Transfers::5", "col": 5, "name": "To warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-JHB" }, { "id": "M29::Transfers::6", "col": 6, "name": "Requested by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "m.khumalo" }, { "id": "M29::Transfers::7", "col": 7, "name": "Shipped", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-15 09:40" }, { "id": "M29::Transfers::8", "col": 8, "name": "Received", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-15 14:05" }, { "id": "M29::Transfers::9", "col": 9, "name": "Notes", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Store replenishment" }, { "id": "M29::Transfers::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Received" }, { "id": "M29::Transfers::11", "col": 11, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M29::Transfers::12", "col": 12, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M29::Transfers::13", "col": 13, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M29::Transfers::14", "col": 14, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M29::Transfer lines": [{ "id": "M29::Transfer lines::1", "col": 1, "name": "Transfer no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "TRF-0441" }, { "id": "M29::Transfer lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M29::Transfer lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-220" }, { "id": "M29::Transfer lines::4", "col": 4, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "24.00" }, { "id": "M29::Transfer lines::5", "col": 5, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M29::Transfer lines::6", "col": 6, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "LOT-FG220-45" }, { "id": "M29::Transfer lines::7", "col": 7, "name": "From bin", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "B-03-01" }, { "id": "M29::Transfer lines::8", "col": 8, "name": "To bin", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "S-01-04" }, { "id": "M29::Transfer lines::9", "col": 9, "name": "Qty received", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "24.00" }], "M29::Stock adjustments": [{ "id": "M29::Stock adjustments::1", "col": 1, "name": "Adjustment no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "ADJ-0194" }, { "id": "M29::Stock adjustments::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-14" }, { "id": "M29::Stock adjustments::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M29::Stock adjustments::4", "col": 4, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M29::Stock adjustments::5", "col": 5, "name": "Reason", "dataType": "Text", "format": "80", "required": true, "role": "Enum", "example": "Damage" }, { "id": "M29::Stock adjustments::6", "col": 6, "name": "Approved by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "s.vanwyk" }, { "id": "M29::Stock adjustments::7", "col": 7, "name": "Posted journal", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "JNL-2026-1190" }, { "id": "M29::Stock adjustments::8", "col": 8, "name": "Value", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": false, "role": "Amount", "example": "(R 1,236.44)" }, { "id": "M29::Stock adjustments::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Posted" }, { "id": "M29::Stock adjustments::10", "col": 10, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M29::Stock adjustments::11", "col": 11, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M29::Stock adjustments::12", "col": 12, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M29::Stock adjustments::13", "col": 13, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M29::Adjustment lines": [{ "id": "M29::Adjustment lines::1", "col": 1, "name": "Adjustment no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "ADJ-0194" }, { "id": "M29::Adjustment lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M29::Adjustment lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M29::Adjustment lines::4", "col": 4, "name": "Qty", "dataType": "Decimal", "format": "0.00;(0.00)", "required": true, "role": "Qty", "example": "-2.00" }, { "id": "M29::Adjustment lines::5", "col": 5, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M29::Adjustment lines::6", "col": 6, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "LOT-2026-110" }, { "id": "M29::Adjustment lines::7", "col": 7, "name": "Bin", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "A-01-02" }, { "id": "M29::Adjustment lines::8", "col": 8, "name": "Unit cost", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 618.22" }, { "id": "M29::Adjustment lines::9", "col": 9, "name": "Reason", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "Damaged in handling" }], "M29::Lots and serials": [{ "id": "M29::Lots and serials::1", "col": 1, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "RM-044" }, { "id": "M29::Lots and serials::2", "col": 2, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": true, "role": "PK", "example": "LOT-RM044-2611" }, { "id": "M29::Lots and serials::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "10", "required": true, "role": "Enum", "example": "Lot" }, { "id": "M29::Lots and serials::4", "col": 4, "name": "Expiry date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2027-11-25" }, { "id": "M29::Lots and serials::5", "col": 5, "name": "Supplier", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "SUP-014" }, { "id": "M29::Lots and serials::6", "col": 6, "name": "GRN", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "GRN-6621" }, { "id": "M29::Lots and serials::7", "col": 7, "name": "Qty remaining", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "200.00" }, { "id": "M29::Lots and serials::8", "col": 8, "name": "Warehouse", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "WH-MAIN" }, { "id": "M29::Lots and serials::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Available" }], "M29::Stock takes": [{ "id": "M29::Stock takes::1", "col": 1, "name": "Count no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "STK-2026-11" }, { "id": "M29::Stock takes::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-30" }, { "id": "M29::Stock takes::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M29::Stock takes::4", "col": 4, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M29::Stock takes::5", "col": 5, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Cycle" }, { "id": "M29::Stock takes::6", "col": 6, "name": "Counted by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "j.botha" }, { "id": "M29::Stock takes::7", "col": 7, "name": "Approved by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "" }, { "id": "M29::Stock takes::8", "col": 8, "name": "Variance value", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": false, "role": "Amount", "example": "" }, { "id": "M29::Stock takes::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Draft" }, { "id": "M29::Stock takes::10", "col": 10, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M29::Stock takes::11", "col": 11, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M29::Stock takes::12", "col": 12, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M29::Stock takes::13", "col": 13, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M29::Stock take lines": [{ "id": "M29::Stock take lines::1", "col": 1, "name": "Count no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "STK-2026-11" }, { "id": "M29::Stock take lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "12" }, { "id": "M29::Stock take lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M29::Stock take lines::4", "col": 4, "name": "Bin", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "A-01-02" }, { "id": "M29::Stock take lines::5", "col": 5, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "LOT-2026-110" }, { "id": "M29::Stock take lines::6", "col": 6, "name": "System qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "86.00" }, { "id": "M29::Stock take lines::7", "col": 7, "name": "Counted qty", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "" }, { "id": "M29::Stock take lines::8", "col": 8, "name": "Variance", "dataType": "Decimal", "format": "0.00;(0.00)", "required": false, "role": "Qty", "example": "" }, { "id": "M29::Stock take lines::9", "col": 9, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M29::Stock take lines::10", "col": 10, "name": "Unit cost", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 618.22" }, { "id": "M29::Stock take lines::11", "col": 11, "name": "Variance value", "dataType": "Currency", "format": "R #,##0.00;(R #,##0.00)", "required": false, "role": "Amount", "example": "" }], "M30::Bins": [{ "id": "M30::Bins::1", "col": 1, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M30::Bins::2", "col": 2, "name": "Bin", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "A-01-02" }, { "id": "M30::Bins::3", "col": 3, "name": "Aisle", "dataType": "Text", "format": "10", "required": false, "role": "Description", "example": "A" }, { "id": "M30::Bins::4", "col": 4, "name": "Rack", "dataType": "Text", "format": "10", "required": false, "role": "Description", "example": "01" }, { "id": "M30::Bins::5", "col": 5, "name": "Level", "dataType": "Text", "format": "10", "required": false, "role": "Description", "example": "02" }, { "id": "M30::Bins::6", "col": 6, "name": "Position", "dataType": "Text", "format": "10", "required": false, "role": "Description", "example": "01" }, { "id": "M30::Bins::7", "col": 7, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Pick" }, { "id": "M30::Bins::8", "col": 8, "name": "Item restriction", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "" }, { "id": "M30::Bins::9", "col": 9, "name": "Max weight", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "500.00" }, { "id": "M30::Bins::10", "col": 10, "name": "Max volume", "dataType": "Decimal", "format": "0.000", "required": false, "role": "Qty", "example": "1.200" }, { "id": "M30::Bins::11", "col": 11, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }], "M30::Putaway tasks": [{ "id": "M30::Putaway tasks::1", "col": 1, "name": "Task no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PUT-3310" }, { "id": "M30::Putaway tasks::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-25" }, { "id": "M30::Putaway tasks::3", "col": 3, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M30::Putaway tasks::4", "col": 4, "name": "GRN / receipt", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "GRN-6621" }, { "id": "M30::Putaway tasks::5", "col": 5, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "RM-044" }, { "id": "M30::Putaway tasks::6", "col": 6, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "LOT-RM044-2611" }, { "id": "M30::Putaway tasks::7", "col": 7, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "200.00" }, { "id": "M30::Putaway tasks::8", "col": 8, "name": "From bin", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DOCK-01" }, { "id": "M30::Putaway tasks::9", "col": 9, "name": "To bin", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "R-02-01" }, { "id": "M30::Putaway tasks::10", "col": 10, "name": "Assigned to", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "j.botha" }, { "id": "M30::Putaway tasks::11", "col": 11, "name": "Completed at", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "" }, { "id": "M30::Putaway tasks::12", "col": 12, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }], "M30::Picking waves": [{ "id": "M30::Picking waves::1", "col": 1, "name": "Wave no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "WAVE-118" }, { "id": "M30::Picking waves::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-24" }, { "id": "M30::Picking waves::3", "col": 3, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M30::Picking waves::4", "col": 4, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Batch" }, { "id": "M30::Picking waves::5", "col": 5, "name": "Orders count", "dataType": "Integer", "format": "0", "required": true, "role": "Qty", "example": "12" }, { "id": "M30::Picking waves::6", "col": 6, "name": "Assigned to", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "j.botha" }, { "id": "M30::Picking waves::7", "col": 7, "name": "Started", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-24 08:15" }, { "id": "M30::Picking waves::8", "col": 8, "name": "Completed", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "" }, { "id": "M30::Picking waves::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "In progress" }], "M30::Picking tasks": [{ "id": "M30::Picking tasks::1", "col": 1, "name": "Task no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PICK-90412" }, { "id": "M30::Picking tasks::2", "col": 2, "name": "Wave", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "WAVE-118" }, { "id": "M30::Picking tasks::3", "col": 3, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M30::Picking tasks::4", "col": 4, "name": "Order", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SO-10458" }, { "id": "M30::Picking tasks::5", "col": 5, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M30::Picking tasks::6", "col": 6, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "LOT-2026-110" }, { "id": "M30::Picking tasks::7", "col": 7, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "20.00" }, { "id": "M30::Picking tasks::8", "col": 8, "name": "From bin", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "A-01-02" }, { "id": "M30::Picking tasks::9", "col": 9, "name": "To bin", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "STAGE-OUT" }, { "id": "M30::Picking tasks::10", "col": 10, "name": "Picker", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "j.botha" }, { "id": "M30::Picking tasks::11", "col": 11, "name": "Picked at", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "" }, { "id": "M30::Picking tasks::12", "col": 12, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }], "M30::Packing": [{ "id": "M30::Packing::1", "col": 1, "name": "Pack ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PACK-2210" }, { "id": "M30::Packing::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-24" }, { "id": "M30::Packing::3", "col": 3, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M30::Packing::4", "col": 4, "name": "Delivery / order", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DN-5560" }, { "id": "M30::Packing::5", "col": 5, "name": "Carton type", "dataType": "Text", "format": "20", "required": false, "role": "Description", "example": "Medium carton" }, { "id": "M30::Packing::6", "col": 6, "name": "Weight", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "52.00" }, { "id": "M30::Packing::7", "col": 7, "name": "Dimensions", "dataType": "Text", "format": "30", "required": false, "role": "Description", "example": "60\xD740\xD740" }, { "id": "M30::Packing::8", "col": 8, "name": "Packed by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "j.botha" }, { "id": "M30::Packing::9", "col": 9, "name": "Packed at", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-24 11:05" }, { "id": "M30::Packing::10", "col": 10, "name": "Shipping label", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "ONL-998210-1" }, { "id": "M30::Packing::11", "col": 11, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Packed" }], "M30::Pack lines": [{ "id": "M30::Pack lines::1", "col": 1, "name": "Pack ID", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PACK-2210" }, { "id": "M30::Pack lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M30::Pack lines::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M30::Pack lines::4", "col": 4, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "20.00" }, { "id": "M30::Pack lines::5", "col": 5, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "LOT-2026-110" }, { "id": "M30::Pack lines::6", "col": 6, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }], "M30::Shipping": [{ "id": "M30::Shipping::1", "col": 1, "name": "Shipment no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "SHP-4401" }, { "id": "M30::Shipping::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-24" }, { "id": "M30::Shipping::3", "col": 3, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M30::Shipping::4", "col": 4, "name": "Carrier", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Overnight Logistics" }, { "id": "M30::Shipping::5", "col": 5, "name": "Service", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Overnight" }, { "id": "M30::Shipping::6", "col": 6, "name": "Tracking no.", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "ONL-998210" }, { "id": "M30::Shipping::7", "col": 7, "name": "Packs", "dataType": "Integer", "format": "0", "required": true, "role": "Qty", "example": "1" }, { "id": "M30::Shipping::8", "col": 8, "name": "Weight", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "52.00" }, { "id": "M30::Shipping::9", "col": 9, "name": "Freight cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 285.00" }, { "id": "M30::Shipping::10", "col": 10, "name": "Deliveries", "dataType": "Text", "format": "80", "required": false, "role": "FK", "example": "DN-5560" }, { "id": "M30::Shipping::11", "col": 11, "name": "Dispatched by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "j.botha" }, { "id": "M30::Shipping::12", "col": 12, "name": "Dispatched at", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-24 15:20" }, { "id": "M30::Shipping::13", "col": 13, "name": "POD date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "" }, { "id": "M30::Shipping::14", "col": 14, "name": "Currency", "dataType": "Text", "format": "3", "required": false, "role": "FK", "example": "ZAR" }, { "id": "M30::Shipping::15", "col": 15, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Dispatched" }], "M31::Bills of materials": [{ "id": "M31::Bills of materials::1", "col": 1, "name": "BOM no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "BOM-FG100-03" }, { "id": "M31::Bills of materials::2", "col": 2, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M31::Bills of materials::3", "col": 3, "name": "Version", "dataType": "Text", "format": "10", "required": true, "role": "Description", "example": "03" }, { "id": "M31::Bills of materials::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M31::Bills of materials::5", "col": 5, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Production" }, { "id": "M31::Bills of materials::6", "col": 6, "name": "Quantity", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "1.00" }, { "id": "M31::Bills of materials::7", "col": 7, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M31::Bills of materials::8", "col": 8, "name": "Valid from", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-03-01" }, { "id": "M31::Bills of materials::9", "col": 9, "name": "Valid to", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "" }, { "id": "M31::Bills of materials::10", "col": 10, "name": "Scrap %", "dataType": "Percent", "format": "0.00%", "required": false, "role": "Amount", "example": "1.50%" }, { "id": "M31::Bills of materials::11", "col": 11, "name": "Approved by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "r.adebayo" }, { "id": "M31::Bills of materials::12", "col": 12, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Approved" }, { "id": "M31::Bills of materials::13", "col": 13, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M31::Bills of materials::14", "col": 14, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M31::Bills of materials::15", "col": 15, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M31::Bills of materials::16", "col": 16, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M31::BOM lines": [{ "id": "M31::BOM lines::1", "col": 1, "name": "BOM no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "BOM-FG100-03" }, { "id": "M31::BOM lines::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M31::BOM lines::3", "col": 3, "name": "Component item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "RM-044" }, { "id": "M31::BOM lines::4", "col": 4, "name": "Description", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "Raw material RM-044" }, { "id": "M31::BOM lines::5", "col": 5, "name": "Qty", "dataType": "Decimal", "format": "0.000", "required": true, "role": "Qty", "example": "1.250" }, { "id": "M31::BOM lines::6", "col": 6, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "KG" }, { "id": "M31::BOM lines::7", "col": 7, "name": "Scrap %", "dataType": "Percent", "format": "0.00%", "required": false, "role": "Amount", "example": "2.00%" }, { "id": "M31::BOM lines::8", "col": 8, "name": "Position", "dataType": "Text", "format": "20", "required": false, "role": "Description", "example": "P-04" }, { "id": "M31::BOM lines::9", "col": 9, "name": "Supply type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Stock" }, { "id": "M31::BOM lines::10", "col": 10, "name": "Warehouse", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "WH-MAIN" }, { "id": "M31::BOM lines::11", "col": 11, "name": "Notes", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "" }], "M31::Routings": [{ "id": "M31::Routings::1", "col": 1, "name": "Routing no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "RTG-FG100-03" }, { "id": "M31::Routings::2", "col": 2, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M31::Routings::3", "col": 3, "name": "Version", "dataType": "Text", "format": "10", "required": true, "role": "Description", "example": "03" }, { "id": "M31::Routings::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M31::Routings::5", "col": 5, "name": "Description", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "Standard FG-100 routing" }, { "id": "M31::Routings::6", "col": 6, "name": "Approved by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "r.adebayo" }, { "id": "M31::Routings::7", "col": 7, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Approved" }, { "id": "M31::Routings::8", "col": 8, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M31::Routings::9", "col": 9, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M31::Routings::10", "col": 10, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M31::Routings::11", "col": 11, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M31::Routing operations": [{ "id": "M31::Routing operations::1", "col": 1, "name": "Routing no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "RTG-FG100-03" }, { "id": "M31::Routing operations::2", "col": 2, "name": "Op no.", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "10" }, { "id": "M31::Routing operations::3", "col": 3, "name": "Operation name", "dataType": "Text", "format": "60", "required": true, "role": "Name", "example": "Cut and prep" }, { "id": "M31::Routing operations::4", "col": 4, "name": "Work centre", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "WC-CUT" }, { "id": "M31::Routing operations::5", "col": 5, "name": "Setup mins", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "20.00" }, { "id": "M31::Routing operations::6", "col": 6, "name": "Run mins per unit", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "6.50" }, { "id": "M31::Routing operations::7", "col": 7, "name": "Queue mins", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "15.00" }, { "id": "M31::Routing operations::8", "col": 8, "name": "Move mins", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "10.00" }, { "id": "M31::Routing operations::9", "col": 9, "name": "Overlap", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "N" }, { "id": "M31::Routing operations::10", "col": 10, "name": "Instructions", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "Check first-off sample" }, { "id": "M31::Routing operations::11", "col": 11, "name": "Tools", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "Fixture F-12" }], "M31::Work centres": [{ "id": "M31::Work centres::1", "col": 1, "name": "Work centre", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "WC-CUT" }, { "id": "M31::Work centres::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Cutting cell" }, { "id": "M31::Work centres::3", "col": 3, "name": "Department", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "Production" }, { "id": "M31::Work centres::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M31::Work centres::5", "col": 5, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Machine" }, { "id": "M31::Work centres::6", "col": 6, "name": "Capacity per day", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "16.00" }, { "id": "M31::Work centres::7", "col": 7, "name": "Efficiency %", "dataType": "Percent", "format": "0%", "required": true, "role": "Amount", "example": "85%" }, { "id": "M31::Work centres::8", "col": 8, "name": "Calendar", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CAL-FACTORY" }, { "id": "M31::Work centres::9", "col": 9, "name": "Cost rate", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 420.00" }, { "id": "M31::Work centres::10", "col": 10, "name": "Currency", "dataType": "Text", "format": "3", "required": false, "role": "FK", "example": "ZAR" }, { "id": "M31::Work centres::11", "col": 11, "name": "Supervisor", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "EMP-0088" }, { "id": "M31::Work centres::12", "col": 12, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M31::Work centres::13", "col": 13, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M31::Work centres::14", "col": 14, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M31::Work centres::15", "col": 15, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M31::Work centres::16", "col": 16, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M31::Work centre calendar": [{ "id": "M31::Work centre calendar::1", "col": 1, "name": "Work centre", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "WC-CUT" }, { "id": "M31::Work centre calendar::2", "col": 2, "name": "Day", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "PK", "example": "2026-11-17" }, { "id": "M31::Work centre calendar::3", "col": 3, "name": "Start", "dataType": "Text", "format": "HH:MM", "required": false, "role": "Date", "example": "06:00" }, { "id": "M31::Work centre calendar::4", "col": 4, "name": "End", "dataType": "Text", "format": "HH:MM", "required": false, "role": "Date", "example": "14:00" }, { "id": "M31::Work centre calendar::5", "col": 5, "name": "Capacity hours", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "8.00" }, { "id": "M31::Work centre calendar::6", "col": 6, "name": "Exception", "dataType": "Enum", "format": "20", "required": false, "role": "Enum", "example": "Normal" }, { "id": "M31::Work centre calendar::7", "col": 7, "name": "Notes", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "" }], "M31::Forecasts": [{ "id": "M31::Forecasts::1", "col": 1, "name": "Forecast", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "FC-2027-01-FG100" }, { "id": "M31::Forecasts::2", "col": 2, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M31::Forecasts::3", "col": 3, "name": "Period", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "2027-01" }, { "id": "M31::Forecasts::4", "col": 4, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "500.00" }, { "id": "M31::Forecasts::5", "col": 5, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M31::Forecasts::6", "col": 6, "name": "Version", "dataType": "Text", "format": "20", "required": true, "role": "Description", "example": "2027-Q1-A" }, { "id": "M31::Forecasts::7", "col": 7, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M31::Forecasts::8", "col": 8, "name": "Warehouse", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "WH-MAIN" }, { "id": "M31::Forecasts::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }], "M31::MRP planned orders": [{ "id": "M31::MRP planned orders::1", "col": 1, "name": "Planned order", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PLN-8821" }, { "id": "M31::MRP planned orders::2", "col": 2, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M31::MRP planned orders::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "10", "required": true, "role": "Enum", "example": "Make" }, { "id": "M31::MRP planned orders::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M31::MRP planned orders::5", "col": 5, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M31::MRP planned orders::6", "col": 6, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "120.00" }, { "id": "M31::MRP planned orders::7", "col": 7, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M31::MRP planned orders::8", "col": 8, "name": "Need date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-12-08" }, { "id": "M31::MRP planned orders::9", "col": 9, "name": "Start date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-28" }, { "id": "M31::MRP planned orders::10", "col": 10, "name": "Source", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Dependent" }, { "id": "M31::MRP planned orders::11", "col": 11, "name": "Firm", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "N" }, { "id": "M31::MRP planned orders::12", "col": 12, "name": "Converted to", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "" }, { "id": "M31::MRP planned orders::13", "col": 13, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Planned" }], "M31::MRP demand and supply": [{ "id": "M31::MRP demand and supply::1", "col": 1, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M31::MRP demand and supply::2", "col": 2, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M31::MRP demand and supply::3", "col": 3, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-24" }, { "id": "M31::MRP demand and supply::4", "col": 4, "name": "Type", "dataType": "Enum", "format": "30", "required": true, "role": "Enum", "example": "SO" }, { "id": "M31::MRP demand and supply::5", "col": 5, "name": "Reference", "dataType": "Text", "format": "20", "required": false, "role": "Reference", "example": "SO-10458" }, { "id": "M31::MRP demand and supply::6", "col": 6, "name": "Qty", "dataType": "Decimal", "format": "0.00;(0.00)", "required": true, "role": "Qty", "example": "-20.00" }, { "id": "M31::MRP demand and supply::7", "col": 7, "name": "Running available", "dataType": "Decimal", "format": "0.00;(0.00)", "required": true, "role": "Qty", "example": "66.00" }], "M31::Work orders": [{ "id": "M31::Work orders::1", "col": 1, "name": "WO no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "WO-441" }, { "id": "M31::Work orders::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-18" }, { "id": "M31::Work orders::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M31::Work orders::4", "col": 4, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M31::Work orders::5", "col": 5, "name": "BOM version", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "BOM-FG100-03" }, { "id": "M31::Work orders::6", "col": 6, "name": "Routing version", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "RTG-FG100-03" }, { "id": "M31::Work orders::7", "col": 7, "name": "Qty planned", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "120.00" }, { "id": "M31::Work orders::8", "col": 8, "name": "Qty completed", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "0.00" }, { "id": "M31::Work orders::9", "col": 9, "name": "Qty scrapped", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "0.00" }, { "id": "M31::Work orders::10", "col": 10, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M31::Work orders::11", "col": 11, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M31::Work orders::12", "col": 12, "name": "Scheduled start", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-28 06:00" }, { "id": "M31::Work orders::13", "col": 13, "name": "Scheduled end", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-12-06 14:00" }, { "id": "M31::Work orders::14", "col": 14, "name": "Actual start", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "" }, { "id": "M31::Work orders::15", "col": 15, "name": "Actual end", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "" }, { "id": "M31::Work orders::16", "col": 16, "name": "Priority", "dataType": "Enum", "format": "10", "required": true, "role": "Enum", "example": "Normal" }, { "id": "M31::Work orders::17", "col": 17, "name": "Project", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "PRJ-1042" }, { "id": "M31::Work orders::18", "col": 18, "name": "Customer order", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "" }, { "id": "M31::Work orders::19", "col": 19, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Planned" }, { "id": "M31::Work orders::20", "col": 20, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M31::Work orders::21", "col": 21, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M31::Work orders::22", "col": 22, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M31::Work orders::23", "col": 23, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M31::Work order components": [{ "id": "M31::Work order components::1", "col": 1, "name": "WO no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "WO-441" }, { "id": "M31::Work order components::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M31::Work order components::3", "col": 3, "name": "Component", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "RM-044" }, { "id": "M31::Work order components::4", "col": 4, "name": "Qty required", "dataType": "Decimal", "format": "0.000", "required": true, "role": "Qty", "example": "153.000" }, { "id": "M31::Work order components::5", "col": 5, "name": "Qty issued", "dataType": "Decimal", "format": "0.000", "required": false, "role": "Qty", "example": "0.000" }, { "id": "M31::Work order components::6", "col": 6, "name": "Qty scrapped", "dataType": "Decimal", "format": "0.000", "required": false, "role": "Qty", "example": "0.000" }, { "id": "M31::Work order components::7", "col": 7, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "KG" }, { "id": "M31::Work order components::8", "col": 8, "name": "Warehouse", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "WH-MAIN" }, { "id": "M31::Work order components::9", "col": 9, "name": "Bin", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "R-02-01" }, { "id": "M31::Work order components::10", "col": 10, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "" }, { "id": "M31::Work order components::11", "col": 11, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }], "M31::Work order operations": [{ "id": "M31::Work order operations::1", "col": 1, "name": "WO no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "WO-441" }, { "id": "M31::Work order operations::2", "col": 2, "name": "Op no.", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "10" }, { "id": "M31::Work order operations::3", "col": 3, "name": "Work centre", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "WC-CUT" }, { "id": "M31::Work order operations::4", "col": 4, "name": "Planned setup", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "20.00" }, { "id": "M31::Work order operations::5", "col": 5, "name": "Planned run", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "780.00" }, { "id": "M31::Work order operations::6", "col": 6, "name": "Actual setup", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "" }, { "id": "M31::Work order operations::7", "col": 7, "name": "Actual run", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "" }, { "id": "M31::Work order operations::8", "col": 8, "name": "Qty completed", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "0.00" }, { "id": "M31::Work order operations::9", "col": 9, "name": "Qty scrapped", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "0.00" }, { "id": "M31::Work order operations::10", "col": 10, "name": "Operator", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "" }, { "id": "M31::Work order operations::11", "col": 11, "name": "Started", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "" }, { "id": "M31::Work order operations::12", "col": 12, "name": "Finished", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "" }, { "id": "M31::Work order operations::13", "col": 13, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Pending" }], "M31::Production output": [{ "id": "M31::Production output::1", "col": 1, "name": "Output no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "OUT-1188" }, { "id": "M31::Production output::2", "col": 2, "name": "Date", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-12-06 13:40" }, { "id": "M31::Production output::3", "col": 3, "name": "WO no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "WO-441" }, { "id": "M31::Production output::4", "col": 4, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "FG-100" }, { "id": "M31::Production output::5", "col": 5, "name": "Qty good", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "118.00" }, { "id": "M31::Production output::6", "col": 6, "name": "Qty scrap", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "2.00" }, { "id": "M31::Production output::7", "col": 7, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M31::Production output::8", "col": 8, "name": "Warehouse", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "WH-MAIN" }, { "id": "M31::Production output::9", "col": 9, "name": "Bin", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "A-01-02" }, { "id": "M31::Production output::10", "col": 10, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "LOT-2026-120" }, { "id": "M31::Production output::11", "col": 11, "name": "Posted by", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "r.adebayo" }], "M31::Subcontracting": [{ "id": "M31::Subcontracting::1", "col": 1, "name": "Subcontract no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "SUB-019" }, { "id": "M31::Subcontracting::2", "col": 2, "name": "WO no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "WO-441" }, { "id": "M31::Subcontracting::3", "col": 3, "name": "Operation", "dataType": "Integer", "format": "0", "required": true, "role": "FK", "example": "40" }, { "id": "M31::Subcontracting::4", "col": 4, "name": "Supplier", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SUP-055" }, { "id": "M31::Subcontracting::5", "col": 5, "name": "PO no.", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "PO-10088" }, { "id": "M31::Subcontracting::6", "col": 6, "name": "Qty sent", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "120.00" }, { "id": "M31::Subcontracting::7", "col": 7, "name": "Qty returned", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "0.00" }, { "id": "M31::Subcontracting::8", "col": 8, "name": "Due date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-12-04" }, { "id": "M31::Subcontracting::9", "col": 9, "name": "Cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 8,400.00" }, { "id": "M31::Subcontracting::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Sent" }], "M32::Inspection plans": [{ "id": "M32::Inspection plans::1", "col": 1, "name": "Plan ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "QPL-RM044" }, { "id": "M32::Inspection plans::2", "col": 2, "name": "Item / process", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "RM-044" }, { "id": "M32::Inspection plans::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Incoming" }, { "id": "M32::Inspection plans::4", "col": 4, "name": "Version", "dataType": "Text", "format": "10", "required": true, "role": "Description", "example": "02" }, { "id": "M32::Inspection plans::5", "col": 5, "name": "Sample size", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "5" }, { "id": "M32::Inspection plans::6", "col": 6, "name": "AQL", "dataType": "Text", "format": "20", "required": false, "role": "Description", "example": "1.0" }, { "id": "M32::Inspection plans::7", "col": 7, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M32::Inspection plans::8", "col": 8, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M32::Inspection plans::9", "col": 9, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M32::Inspection plans::10", "col": 10, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M32::Inspection plans::11", "col": 11, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M32::Inspection plans::12", "col": 12, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M32::Plan characteristics": [{ "id": "M32::Plan characteristics::1", "col": 1, "name": "Plan ID", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "QPL-RM044" }, { "id": "M32::Plan characteristics::2", "col": 2, "name": "Char no.", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M32::Plan characteristics::3", "col": 3, "name": "Characteristic", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Thickness" }, { "id": "M32::Plan characteristics::4", "col": 4, "name": "Method", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Micrometer" }, { "id": "M32::Plan characteristics::5", "col": 5, "name": "Spec min", "dataType": "Decimal", "format": "0.000", "required": false, "role": "Qty", "example": "11.800" }, { "id": "M32::Plan characteristics::6", "col": 6, "name": "Spec max", "dataType": "Decimal", "format": "0.000", "required": false, "role": "Qty", "example": "12.200" }, { "id": "M32::Plan characteristics::7", "col": 7, "name": "UOM", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "MM" }, { "id": "M32::Plan characteristics::8", "col": 8, "name": "Target", "dataType": "Decimal", "format": "0.000", "required": false, "role": "Qty", "example": "12.000" }, { "id": "M32::Plan characteristics::9", "col": 9, "name": "Required", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }], "M32::Inspections": [{ "id": "M32::Inspections::1", "col": 1, "name": "Inspection no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "INS-551" }, { "id": "M32::Inspections::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-25" }, { "id": "M32::Inspections::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Incoming" }, { "id": "M32::Inspections::4", "col": 4, "name": "Plan", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "QPL-RM044" }, { "id": "M32::Inspections::5", "col": 5, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "RM-044" }, { "id": "M32::Inspections::6", "col": 6, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "LOT-RM044-2611" }, { "id": "M32::Inspections::7", "col": 7, "name": "Reference", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "GRN-6621" }, { "id": "M32::Inspections::8", "col": 8, "name": "Qty inspected", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "5.00" }, { "id": "M32::Inspections::9", "col": 9, "name": "Qty accepted", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "5.00" }, { "id": "M32::Inspections::10", "col": 10, "name": "Qty rejected", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "0.00" }, { "id": "M32::Inspections::11", "col": 11, "name": "Result", "dataType": "Enum", "format": "20", "required": false, "role": "Status", "example": "Pass" }, { "id": "M32::Inspections::12", "col": 12, "name": "Inspector", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "q.september" }, { "id": "M32::Inspections::13", "col": 13, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Completed" }, { "id": "M32::Inspections::14", "col": 14, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M32::Inspections::15", "col": 15, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M32::Inspections::16", "col": 16, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M32::Inspections::17", "col": 17, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M32::Inspection results": [{ "id": "M32::Inspection results::1", "col": 1, "name": "Inspection no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "INS-551" }, { "id": "M32::Inspection results::2", "col": 2, "name": "Characteristic", "dataType": "Text", "format": "80", "required": true, "role": "FK", "example": "Thickness" }, { "id": "M32::Inspection results::3", "col": 3, "name": "Measured value", "dataType": "Decimal", "format": "0.000", "required": false, "role": "Qty", "example": "12.040" }, { "id": "M32::Inspection results::4", "col": 4, "name": "UOM", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "MM" }, { "id": "M32::Inspection results::5", "col": 5, "name": "Result", "dataType": "Enum", "format": "10", "required": true, "role": "Status", "example": "Pass" }, { "id": "M32::Inspection results::6", "col": 6, "name": "Notes", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "" }], "M32::Non-conformances": [{ "id": "M32::Non-conformances::1", "col": 1, "name": "NCR no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "NCR-088" }, { "id": "M32::Non-conformances::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-20" }, { "id": "M32::Non-conformances::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M32::Non-conformances::4", "col": 4, "name": "Source", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "In-process" }, { "id": "M32::Non-conformances::5", "col": 5, "name": "Item", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "FG-100" }, { "id": "M32::Non-conformances::6", "col": 6, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "LOT-2026-110" }, { "id": "M32::Non-conformances::7", "col": 7, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "3.00" }, { "id": "M32::Non-conformances::8", "col": 8, "name": "Severity", "dataType": "Enum", "format": "10", "required": true, "role": "Enum", "example": "Major" }, { "id": "M32::Non-conformances::9", "col": 9, "name": "Description", "dataType": "Text", "format": "200", "required": true, "role": "Description", "example": "Surface defect after operation 20" }, { "id": "M32::Non-conformances::10", "col": 10, "name": "Owner", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "q.september" }, { "id": "M32::Non-conformances::11", "col": 11, "name": "Due date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-25" }, { "id": "M32::Non-conformances::12", "col": 12, "name": "Disposition", "dataType": "Enum", "format": "20", "required": false, "role": "Enum", "example": "Rework" }, { "id": "M32::Non-conformances::13", "col": 13, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "In review" }, { "id": "M32::Non-conformances::14", "col": 14, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M32::Non-conformances::15", "col": 15, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M32::Non-conformances::16", "col": 16, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M32::Non-conformances::17", "col": 17, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M32::CAPA": [{ "id": "M32::CAPA::1", "col": 1, "name": "CAPA no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "CAPA-041" }, { "id": "M32::CAPA::2", "col": 2, "name": "NCR", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "NCR-088" }, { "id": "M32::CAPA::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Corrective" }, { "id": "M32::CAPA::4", "col": 4, "name": "Description", "dataType": "Text", "format": "200", "required": true, "role": "Description", "example": "Adjust fixture F-12 and retrain operators" }, { "id": "M32::CAPA::5", "col": 5, "name": "Owner", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "r.adebayo" }, { "id": "M32::CAPA::6", "col": 6, "name": "Due", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-12-04" }, { "id": "M32::CAPA::7", "col": 7, "name": "Effectiveness check", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-12-18" }, { "id": "M32::CAPA::8", "col": 8, "name": "Closed on", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "" }, { "id": "M32::CAPA::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }, { "id": "M32::CAPA::10", "col": 10, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M32::CAPA::11", "col": 11, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M32::CAPA::12", "col": 12, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M32::CAPA::13", "col": 13, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M32::Certificates": [{ "id": "M32::Certificates::1", "col": 1, "name": "CoA no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "COA-2291" }, { "id": "M32::Certificates::2", "col": 2, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "RM-044" }, { "id": "M32::Certificates::3", "col": 3, "name": "Lot", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "LOT-RM044-2611" }, { "id": "M32::Certificates::4", "col": 4, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-24" }, { "id": "M32::Certificates::5", "col": 5, "name": "Customer / supplier", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "SUP-014" }, { "id": "M32::Certificates::6", "col": 6, "name": "Inspection", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "INS-551" }, { "id": "M32::Certificates::7", "col": 7, "name": "File", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "DOC-66012" }, { "id": "M32::Certificates::8", "col": 8, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Received" }], "M33::Projects": [{ "id": "M33::Projects::1", "col": 1, "name": "Project no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PRJ-1042" }, { "id": "M33::Projects::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Acme plant upgrade" }, { "id": "M33::Projects::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M33::Projects::4", "col": 4, "name": "Customer", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CUS-0208" }, { "id": "M33::Projects::5", "col": 5, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Customer" }, { "id": "M33::Projects::6", "col": 6, "name": "Manager", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "n.gobeni" }, { "id": "M33::Projects::7", "col": 7, "name": "Start", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-02" }, { "id": "M33::Projects::8", "col": 8, "name": "End", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2027-02-28" }, { "id": "M33::Projects::9", "col": 9, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M33::Projects::10", "col": 10, "name": "Contract value", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 180,000.00" }, { "id": "M33::Projects::11", "col": 11, "name": "Cost budget", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 125,000.00" }, { "id": "M33::Projects::12", "col": 12, "name": "Revenue recognised", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 0.00" }, { "id": "M33::Projects::13", "col": 13, "name": "Cost to date", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 12,400.00" }, { "id": "M33::Projects::14", "col": 14, "name": "% complete", "dataType": "Percent", "format": "0%", "required": false, "role": "Amount", "example": "8%" }, { "id": "M33::Projects::15", "col": 15, "name": "Billing type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Milestone" }, { "id": "M33::Projects::16", "col": 16, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M33::Projects::17", "col": 17, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M33::Projects::18", "col": 18, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M33::Projects::19", "col": 19, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M33::Projects::20", "col": 20, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M33::Project tasks": [{ "id": "M33::Project tasks::1", "col": 1, "name": "Project", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PRJ-1042" }, { "id": "M33::Project tasks::2", "col": 2, "name": "Task no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "T-110" }, { "id": "M33::Project tasks::3", "col": 3, "name": "Task name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Site survey" }, { "id": "M33::Project tasks::4", "col": 4, "name": "Parent", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "T-100" }, { "id": "M33::Project tasks::5", "col": 5, "name": "Owner", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "n.gobeni" }, { "id": "M33::Project tasks::6", "col": 6, "name": "Start", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-02" }, { "id": "M33::Project tasks::7", "col": 7, "name": "End", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-08" }, { "id": "M33::Project tasks::8", "col": 8, "name": "Duration days", "dataType": "Decimal", "format": "0.0", "required": false, "role": "Qty", "example": "5.0" }, { "id": "M33::Project tasks::9", "col": 9, "name": "% complete", "dataType": "Percent", "format": "0%", "required": false, "role": "Amount", "example": "100%" }, { "id": "M33::Project tasks::10", "col": 10, "name": "Budget hours", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "40.00" }, { "id": "M33::Project tasks::11", "col": 11, "name": "Actual hours", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "36.50" }, { "id": "M33::Project tasks::12", "col": 12, "name": "Budget cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 18,000.00" }, { "id": "M33::Project tasks::13", "col": 13, "name": "Actual cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 16,425.00" }, { "id": "M33::Project tasks::14", "col": 14, "name": "Predecessor", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "" }, { "id": "M33::Project tasks::15", "col": 15, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Completed" }], "M33::Project resources": [{ "id": "M33::Project resources::1", "col": 1, "name": "Project", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PRJ-1042" }, { "id": "M33::Project resources::2", "col": 2, "name": "Resource", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "EMP-0310" }, { "id": "M33::Project resources::3", "col": 3, "name": "Role", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Technician" }, { "id": "M33::Project resources::4", "col": 4, "name": "Start", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-02" }, { "id": "M33::Project resources::5", "col": 5, "name": "End", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2027-02-28" }, { "id": "M33::Project resources::6", "col": 6, "name": "Allocation %", "dataType": "Percent", "format": "0%", "required": false, "role": "Amount", "example": "50%" }, { "id": "M33::Project resources::7", "col": 7, "name": "Rate", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 450.00" }, { "id": "M33::Project resources::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": false, "role": "FK", "example": "ZAR" }], "M33::Project costs": [{ "id": "M33::Project costs::1", "col": 1, "name": "Cost ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PC-77102" }, { "id": "M33::Project costs::2", "col": 2, "name": "Project", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PRJ-1042" }, { "id": "M33::Project costs::3", "col": 3, "name": "Task", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "T-110" }, { "id": "M33::Project costs::4", "col": 4, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-06" }, { "id": "M33::Project costs::5", "col": 5, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Labour" }, { "id": "M33::Project costs::6", "col": 6, "name": "Source", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "TS-2218" }, { "id": "M33::Project costs::7", "col": 7, "name": "Description", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Site survey hours" }, { "id": "M33::Project costs::8", "col": 8, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 2,250.00" }, { "id": "M33::Project costs::9", "col": 9, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M33::Project costs::10", "col": 10, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }, { "id": "M33::Project costs::11", "col": 11, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Posted" }], "M33::Billing milestones": [{ "id": "M33::Billing milestones::1", "col": 1, "name": "Project", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PRJ-1042" }, { "id": "M33::Billing milestones::2", "col": 2, "name": "Milestone", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "MS-01" }, { "id": "M33::Billing milestones::3", "col": 3, "name": "Description", "dataType": "Text", "format": "80", "required": true, "role": "Description", "example": "Design approval" }, { "id": "M33::Billing milestones::4", "col": 4, "name": "Due date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-12-15" }, { "id": "M33::Billing milestones::5", "col": 5, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 45,000.00" }, { "id": "M33::Billing milestones::6", "col": 6, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M33::Billing milestones::7", "col": 7, "name": "Invoice no.", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "" }, { "id": "M33::Billing milestones::8", "col": 8, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Planned" }], "M34::Timesheets": [{ "id": "M34::Timesheets::1", "col": 1, "name": "Timesheet no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "TS-2218" }, { "id": "M34::Timesheets::2", "col": 2, "name": "Employee", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "EMP-0310" }, { "id": "M34::Timesheets::3", "col": 3, "name": "Period start", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-02" }, { "id": "M34::Timesheets::4", "col": 4, "name": "Period end", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-08" }, { "id": "M34::Timesheets::5", "col": 5, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M34::Timesheets::6", "col": 6, "name": "Total hours", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "42.50" }, { "id": "M34::Timesheets::7", "col": 7, "name": "Approver", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "n.gobeni" }, { "id": "M34::Timesheets::8", "col": 8, "name": "Submitted on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-08 16:40" }, { "id": "M34::Timesheets::9", "col": 9, "name": "Approved on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-09 09:12" }, { "id": "M34::Timesheets::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Approved" }, { "id": "M34::Timesheets::11", "col": 11, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M34::Timesheets::12", "col": 12, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M34::Timesheets::13", "col": 13, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M34::Timesheets::14", "col": 14, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M34::Timesheet lines": [{ "id": "M34::Timesheet lines::1", "col": 1, "name": "Timesheet no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "TS-2218" }, { "id": "M34::Timesheet lines::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-06" }, { "id": "M34::Timesheet lines::3", "col": 3, "name": "Project", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "PRJ-1042" }, { "id": "M34::Timesheet lines::4", "col": 4, "name": "Task", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "T-110" }, { "id": "M34::Timesheet lines::5", "col": 5, "name": "Work order", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "" }, { "id": "M34::Timesheet lines::6", "col": 6, "name": "Customer", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "" }, { "id": "M34::Timesheet lines::7", "col": 7, "name": "Activity", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Normal" }, { "id": "M34::Timesheet lines::8", "col": 8, "name": "Hours", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "8.00" }, { "id": "M34::Timesheet lines::9", "col": 9, "name": "Billable", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M34::Timesheet lines::10", "col": 10, "name": "Rate", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 450.00" }, { "id": "M34::Timesheet lines::11", "col": 11, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 3,600.00" }, { "id": "M34::Timesheet lines::12", "col": 12, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }, { "id": "M34::Timesheet lines::13", "col": 13, "name": "Notes", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "On-site survey" }], "M35::Service contracts": [{ "id": "M35::Service contracts::1", "col": 1, "name": "Contract no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "SVC-330" }, { "id": "M35::Service contracts::2", "col": 2, "name": "Customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0208" }, { "id": "M35::Service contracts::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M35::Service contracts::4", "col": 4, "name": "Start", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-03-01" }, { "id": "M35::Service contracts::5", "col": 5, "name": "End", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2027-02-28" }, { "id": "M35::Service contracts::6", "col": 6, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "SLA only" }, { "id": "M35::Service contracts::7", "col": 7, "name": "SLA", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "SLA-4HR" }, { "id": "M35::Service contracts::8", "col": 8, "name": "Value", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 36,000.00" }, { "id": "M35::Service contracts::9", "col": 9, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M35::Service contracts::10", "col": 10, "name": "Entitlements", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "Labour in hours, parts extra" }, { "id": "M35::Service contracts::11", "col": 11, "name": "Renewal", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2027-01-15" }, { "id": "M35::Service contracts::12", "col": 12, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M35::Service contracts::13", "col": 13, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M35::Service contracts::14", "col": 14, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M35::Service contracts::15", "col": 15, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M35::Service contracts::16", "col": 16, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M35::Service orders": [{ "id": "M35::Service orders::1", "col": 1, "name": "Service job no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "SJO-1904" }, { "id": "M35::Service orders::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-16" }, { "id": "M35::Service orders::3", "col": 3, "name": "Customer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CUS-0208" }, { "id": "M35::Service orders::4", "col": 4, "name": "Contract", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "SVC-330" }, { "id": "M35::Service orders::5", "col": 5, "name": "Asset / item", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "FA-0148" }, { "id": "M35::Service orders::6", "col": 6, "name": "Priority", "dataType": "Enum", "format": "10", "required": true, "role": "Enum", "example": "High" }, { "id": "M35::Service orders::7", "col": 7, "name": "SLA due", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-16 16:00" }, { "id": "M35::Service orders::8", "col": 8, "name": "Assigned to", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "EMP-0310" }, { "id": "M35::Service orders::9", "col": 9, "name": "Scheduled start", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-16 13:00" }, { "id": "M35::Service orders::10", "col": 10, "name": "Scheduled end", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-16 15:00" }, { "id": "M35::Service orders::11", "col": 11, "name": "Address", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "14 Foundry Street, Germiston" }, { "id": "M35::Service orders::12", "col": 12, "name": "Problem", "dataType": "Text", "format": "200", "required": true, "role": "Description", "example": "Machine stops mid-cycle" }, { "id": "M35::Service orders::13", "col": 13, "name": "Resolution", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "" }, { "id": "M35::Service orders::14", "col": 14, "name": "Billable", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "N" }, { "id": "M35::Service orders::15", "col": 15, "name": "Invoice / SO", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "" }, { "id": "M35::Service orders::16", "col": 16, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Scheduled" }, { "id": "M35::Service orders::17", "col": 17, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M35::Service orders::18", "col": 18, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M35::Service orders::19", "col": 19, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M35::Service orders::20", "col": 20, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M35::Field visits": [{ "id": "M35::Field visits::1", "col": 1, "name": "Visit no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "VIS-440" }, { "id": "M35::Field visits::2", "col": 2, "name": "Service job no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SJO-1904" }, { "id": "M35::Field visits::3", "col": 3, "name": "Technician", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "EMP-0310" }, { "id": "M35::Field visits::4", "col": 4, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-16" }, { "id": "M35::Field visits::5", "col": 5, "name": "Travel start", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-16 12:20" }, { "id": "M35::Field visits::6", "col": 6, "name": "On site", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-16 13:05" }, { "id": "M35::Field visits::7", "col": 7, "name": "Completed", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-16 14:50" }, { "id": "M35::Field visits::8", "col": 8, "name": "Travel km", "dataType": "Decimal", "format": "0.0", "required": false, "role": "Qty", "example": "28.0" }, { "id": "M35::Field visits::9", "col": 9, "name": "Outcome", "dataType": "Enum", "format": "20", "required": false, "role": "Enum", "example": "" }, { "id": "M35::Field visits::10", "col": 10, "name": "Signature", "dataType": "Boolean", "format": "Y/N", "required": false, "role": "Flag", "example": "N" }], "M35::Service parts used": [{ "id": "M35::Service parts used::1", "col": 1, "name": "Service job no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "SJO-1904" }, { "id": "M35::Service parts used::2", "col": 2, "name": "Line", "dataType": "Integer", "format": "0", "required": true, "role": "PK", "example": "1" }, { "id": "M35::Service parts used::3", "col": 3, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "SP-118" }, { "id": "M35::Service parts used::4", "col": 4, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "1.00" }, { "id": "M35::Service parts used::5", "col": 5, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M35::Service parts used::6", "col": 6, "name": "Lot / serial", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "SN-SP118-0091" }, { "id": "M35::Service parts used::7", "col": 7, "name": "Warehouse", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "WH-VAN01" }, { "id": "M35::Service parts used::8", "col": 8, "name": "Billable", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "N" }, { "id": "M35::Service parts used::9", "col": 9, "name": "Unit price", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 850.00" }], "M36::Maintenance assets": [{ "id": "M36::Maintenance assets::1", "col": 1, "name": "Asset no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "FA-0148" }, { "id": "M36::Maintenance assets::2", "col": 2, "name": "Description", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "CNC milling machine" }, { "id": "M36::Maintenance assets::3", "col": 3, "name": "Category", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Plant and equipment" }, { "id": "M36::Maintenance assets::4", "col": 4, "name": "Location", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Factory A" }, { "id": "M36::Maintenance assets::5", "col": 5, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M36::Maintenance assets::6", "col": 6, "name": "Criticality", "dataType": "Enum", "format": "10", "required": true, "role": "Enum", "example": "High" }, { "id": "M36::Maintenance assets::7", "col": 7, "name": "Warranty end", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-03-15" }, { "id": "M36::Maintenance assets::8", "col": 8, "name": "Meter type", "dataType": "Text", "format": "20", "required": false, "role": "Enum", "example": "Hours" }, { "id": "M36::Maintenance assets::9", "col": 9, "name": "Current meter", "dataType": "Decimal", "format": "0.0", "required": false, "role": "Qty", "example": "4820.0" }, { "id": "M36::Maintenance assets::10", "col": 10, "name": "Parent asset", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "" }, { "id": "M36::Maintenance assets::11", "col": 11, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }], "M36::Maintenance schedules": [{ "id": "M36::Maintenance schedules::1", "col": 1, "name": "Schedule no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "MSCH-0148-Q" }, { "id": "M36::Maintenance schedules::2", "col": 2, "name": "Asset", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "FA-0148" }, { "id": "M36::Maintenance schedules::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Preventive" }, { "id": "M36::Maintenance schedules::4", "col": 4, "name": "Frequency", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Every 3 months" }, { "id": "M36::Maintenance schedules::5", "col": 5, "name": "Meter interval", "dataType": "Decimal", "format": "0", "required": false, "role": "Qty", "example": "500" }, { "id": "M36::Maintenance schedules::6", "col": 6, "name": "Last done", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-08-20" }, { "id": "M36::Maintenance schedules::7", "col": 7, "name": "Next due", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-20" }, { "id": "M36::Maintenance schedules::8", "col": 8, "name": "Checklist", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "DOC-4401" }, { "id": "M36::Maintenance schedules::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }], "M36::Work requests": [{ "id": "M36::Work requests::1", "col": 1, "name": "Request no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "MREQ-662" }, { "id": "M36::Work requests::2", "col": 2, "name": "Date", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-16 07:40" }, { "id": "M36::Work requests::3", "col": 3, "name": "Asset", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "FA-0148" }, { "id": "M36::Work requests::4", "col": 4, "name": "Requested by", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "r.adebayo" }, { "id": "M36::Work requests::5", "col": 5, "name": "Priority", "dataType": "Enum", "format": "10", "required": true, "role": "Enum", "example": "Urgent" }, { "id": "M36::Work requests::6", "col": 6, "name": "Description", "dataType": "Text", "format": "200", "required": true, "role": "Description", "example": "Unusual vibration on start-up" }, { "id": "M36::Work requests::7", "col": 7, "name": "Converted WO", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "MWO-1180" }, { "id": "M36::Work requests::8", "col": 8, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Converted" }], "M36::Maintenance work orders": [{ "id": "M36::Maintenance work orders::1", "col": 1, "name": "MWO no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "MWO-1180" }, { "id": "M36::Maintenance work orders::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-16" }, { "id": "M36::Maintenance work orders::3", "col": 3, "name": "Asset", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "FA-0148" }, { "id": "M36::Maintenance work orders::4", "col": 4, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Corrective" }, { "id": "M36::Maintenance work orders::5", "col": 5, "name": "Priority", "dataType": "Enum", "format": "10", "required": true, "role": "Enum", "example": "Urgent" }, { "id": "M36::Maintenance work orders::6", "col": 6, "name": "Assigned to", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "EMP-0088" }, { "id": "M36::Maintenance work orders::7", "col": 7, "name": "Scheduled", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-16 08:30" }, { "id": "M36::Maintenance work orders::8", "col": 8, "name": "Completed", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "" }, { "id": "M36::Maintenance work orders::9", "col": 9, "name": "Downtime hours", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "" }, { "id": "M36::Maintenance work orders::10", "col": 10, "name": "Cost labour", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "" }, { "id": "M36::Maintenance work orders::11", "col": 11, "name": "Cost parts", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "" }, { "id": "M36::Maintenance work orders::12", "col": 12, "name": "Total cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "" }, { "id": "M36::Maintenance work orders::13", "col": 13, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Released" }, { "id": "M36::Maintenance work orders::14", "col": 14, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M36::Maintenance work orders::15", "col": 15, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M36::Maintenance work orders::16", "col": 16, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M36::Maintenance work orders::17", "col": 17, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M36::Maintenance parts": [{ "id": "M36::Maintenance parts::1", "col": 1, "name": "MWO no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "MWO-1180" }, { "id": "M36::Maintenance parts::2", "col": 2, "name": "Item", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "SP-204" }, { "id": "M36::Maintenance parts::3", "col": 3, "name": "Qty", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "2.00" }, { "id": "M36::Maintenance parts::4", "col": 4, "name": "UOM", "dataType": "Text", "format": "10", "required": true, "role": "FK", "example": "EA" }, { "id": "M36::Maintenance parts::5", "col": 5, "name": "Warehouse", "dataType": "Text", "format": "10", "required": false, "role": "FK", "example": "WH-MAIN" }, { "id": "M36::Maintenance parts::6", "col": 6, "name": "Cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 640.00" }], "M37::Vehicles": [{ "id": "M37::Vehicles::1", "col": 1, "name": "Vehicle no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "VH-012" }, { "id": "M37::Vehicles::2", "col": 2, "name": "Registration", "dataType": "Text", "format": "15", "required": true, "role": "Reference", "example": "HJ 12 GP" }, { "id": "M37::Vehicles::3", "col": 3, "name": "Make", "dataType": "Text", "format": "30", "required": true, "role": "Name", "example": "Isuzu" }, { "id": "M37::Vehicles::4", "col": 4, "name": "Model", "dataType": "Text", "format": "30", "required": true, "role": "Name", "example": "NPR 400" }, { "id": "M37::Vehicles::5", "col": 5, "name": "Year", "dataType": "Integer", "format": "0", "required": false, "role": "Date", "example": "2022" }, { "id": "M37::Vehicles::6", "col": 6, "name": "VIN", "dataType": "Text", "format": "20", "required": false, "role": "Reference", "example": "ACMEVIN0000123456" }, { "id": "M37::Vehicles::7", "col": 7, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M37::Vehicles::8", "col": 8, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Truck" }, { "id": "M37::Vehicles::9", "col": 9, "name": "Odometer", "dataType": "Integer", "format": "#,##0", "required": false, "role": "Qty", "example": "86420" }, { "id": "M37::Vehicles::10", "col": 10, "name": "Fuel type", "dataType": "Enum", "format": "15", "required": false, "role": "Enum", "example": "Diesel" }, { "id": "M37::Vehicles::11", "col": 11, "name": "Assigned driver", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "EMP-0402" }, { "id": "M37::Vehicles::12", "col": 12, "name": "Licence expiry", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2027-04-30" }, { "id": "M37::Vehicles::13", "col": 13, "name": "COF expiry", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2027-02-15" }, { "id": "M37::Vehicles::14", "col": 14, "name": "Insurance expiry", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2027-03-01" }, { "id": "M37::Vehicles::15", "col": 15, "name": "Acquisition cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 620,000.00" }, { "id": "M37::Vehicles::16", "col": 16, "name": "Book value", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 390,000.00" }, { "id": "M37::Vehicles::17", "col": 17, "name": "Fixed asset no.", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "FA-0202" }, { "id": "M37::Vehicles::18", "col": 18, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M37::Vehicles::19", "col": 19, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M37::Vehicles::20", "col": 20, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M37::Vehicles::21", "col": 21, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M37::Vehicles::22", "col": 22, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M37::Trips / logbook": [{ "id": "M37::Trips / logbook::1", "col": 1, "name": "Trip no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "TRP-8801" }, { "id": "M37::Trips / logbook::2", "col": 2, "name": "Vehicle", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "VH-012" }, { "id": "M37::Trips / logbook::3", "col": 3, "name": "Driver", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "EMP-0402" }, { "id": "M37::Trips / logbook::4", "col": 4, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-16" }, { "id": "M37::Trips / logbook::5", "col": 5, "name": "Start odometer", "dataType": "Integer", "format": "#,##0", "required": true, "role": "Qty", "example": "86340" }, { "id": "M37::Trips / logbook::6", "col": 6, "name": "End odometer", "dataType": "Integer", "format": "#,##0", "required": true, "role": "Qty", "example": "86420" }, { "id": "M37::Trips / logbook::7", "col": 7, "name": "Distance km", "dataType": "Integer", "format": "#,##0", "required": true, "role": "Qty", "example": "80" }, { "id": "M37::Trips / logbook::8", "col": 8, "name": "Purpose", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "Customer delivery" }, { "id": "M37::Trips / logbook::9", "col": 9, "name": "From", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Johannesburg" }, { "id": "M37::Trips / logbook::10", "col": 10, "name": "To", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Germiston" }, { "id": "M37::Trips / logbook::11", "col": 11, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }, { "id": "M37::Trips / logbook::12", "col": 12, "name": "Project", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "PRJ-1042" }, { "id": "M37::Trips / logbook::13", "col": 13, "name": "Fuel used", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "9.80" }], "M37::Fuel transactions": [{ "id": "M37::Fuel transactions::1", "col": 1, "name": "Fuel no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "FUL-3310" }, { "id": "M37::Fuel transactions::2", "col": 2, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-16" }, { "id": "M37::Fuel transactions::3", "col": 3, "name": "Vehicle", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "VH-012" }, { "id": "M37::Fuel transactions::4", "col": 4, "name": "Driver", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "EMP-0402" }, { "id": "M37::Fuel transactions::5", "col": 5, "name": "Litres", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "80.00" }, { "id": "M37::Fuel transactions::6", "col": 6, "name": "Price per litre", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 23.40" }, { "id": "M37::Fuel transactions::7", "col": 7, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 1,872.00" }, { "id": "M37::Fuel transactions::8", "col": 8, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M37::Fuel transactions::9", "col": 9, "name": "Station", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Demo Fuels Germiston" }, { "id": "M37::Fuel transactions::10", "col": 10, "name": "Odometer", "dataType": "Integer", "format": "#,##0", "required": false, "role": "Qty", "example": "86420" }, { "id": "M37::Fuel transactions::11", "col": 11, "name": "Payment method", "dataType": "Enum", "format": "20", "required": false, "role": "Enum", "example": "Fleet card" }], "M37::Vehicle services": [{ "id": "M37::Vehicle services::1", "col": 1, "name": "Service no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "VHS-118" }, { "id": "M37::Vehicle services::2", "col": 2, "name": "Vehicle", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "VH-012" }, { "id": "M37::Vehicle services::3", "col": 3, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-09-12" }, { "id": "M37::Vehicle services::4", "col": 4, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Service" }, { "id": "M37::Vehicle services::5", "col": 5, "name": "Odometer", "dataType": "Integer", "format": "#,##0", "required": false, "role": "Qty", "example": "80010" }, { "id": "M37::Vehicle services::6", "col": 6, "name": "Supplier", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "SUP-201" }, { "id": "M37::Vehicle services::7", "col": 7, "name": "Cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 6,840.00" }, { "id": "M37::Vehicle services::8", "col": 8, "name": "Next service due", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2027-03-12" }, { "id": "M37::Vehicle services::9", "col": 9, "name": "Notes", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "15,000 km service" }, { "id": "M37::Vehicle services::10", "col": 10, "name": "MWO no.", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "" }], "M38::Employees": [{ "id": "M38::Employees::1", "col": 1, "name": "Employee no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "EMP-0142" }, { "id": "M38::Employees::2", "col": 2, "name": "First name", "dataType": "Text", "format": "40", "required": true, "role": "Name", "example": "Ayanda" }, { "id": "M38::Employees::3", "col": 3, "name": "Last name", "dataType": "Text", "format": "40", "required": true, "role": "Name", "example": "Nkosi" }, { "id": "M38::Employees::4", "col": 4, "name": "ID / passport", "dataType": "Text", "format": "20", "required": false, "role": "Reference", "example": "800101 5000 087" }, { "id": "M38::Employees::5", "col": 5, "name": "Tax number", "dataType": "Text", "format": "20", "required": false, "role": "Reference", "example": "1234567890" }, { "id": "M38::Employees::6", "col": 6, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M38::Employees::7", "col": 7, "name": "Department", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Sales" }, { "id": "M38::Employees::8", "col": 8, "name": "Position", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Sales manager" }, { "id": "M38::Employees::9", "col": 9, "name": "Manager", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "EMP-0001" }, { "id": "M38::Employees::10", "col": 10, "name": "Employment type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Permanent" }, { "id": "M38::Employees::11", "col": 11, "name": "Start date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2021-04-01" }, { "id": "M38::Employees::12", "col": 12, "name": "End date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "" }, { "id": "M38::Employees::13", "col": 13, "name": "Email", "dataType": "Email", "format": "80", "required": false, "role": "Description", "example": "ayanda.nkosi@demo.example" }, { "id": "M38::Employees::14", "col": 14, "name": "Phone", "dataType": "Phone", "format": "20", "required": false, "role": "Description", "example": "+27 82 555 0142" }, { "id": "M38::Employees::15", "col": 15, "name": "Work location", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Johannesburg" }, { "id": "M38::Employees::16", "col": 16, "name": "Pay frequency", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Monthly" }, { "id": "M38::Employees::17", "col": 17, "name": "Bank", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Nedbank" }, { "id": "M38::Employees::18", "col": 18, "name": "Account no.", "dataType": "Text", "format": "20", "required": false, "role": "Reference", "example": "1234567890" }, { "id": "M38::Employees::19", "col": 19, "name": "Branch code", "dataType": "Text", "format": "10", "required": false, "role": "Reference", "example": "198765" }, { "id": "M38::Employees::20", "col": 20, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }, { "id": "M38::Employees::21", "col": 21, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M38::Employees::22", "col": 22, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M38::Employees::23", "col": 23, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M38::Employees::24", "col": 24, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M38::Employees::25", "col": 25, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M38::Departments and positions": [{ "id": "M38::Departments and positions::1", "col": 1, "name": "Position code", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "POS-SALES-MGR" }, { "id": "M38::Departments and positions::2", "col": 2, "name": "Title", "dataType": "Text", "format": "60", "required": true, "role": "Name", "example": "Sales manager" }, { "id": "M38::Departments and positions::3", "col": 3, "name": "Department", "dataType": "Text", "format": "40", "required": true, "role": "Name", "example": "Sales" }, { "id": "M38::Departments and positions::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M38::Departments and positions::5", "col": 5, "name": "Grade", "dataType": "Text", "format": "20", "required": false, "role": "Description", "example": "D4" }, { "id": "M38::Departments and positions::6", "col": 6, "name": "Reports to", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "POS-COMM-DIR" }, { "id": "M38::Departments and positions::7", "col": 7, "name": "Headcount planned", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "1" }, { "id": "M38::Departments and positions::8", "col": 8, "name": "Headcount actual", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "1" }, { "id": "M38::Departments and positions::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }], "M38::Leave balances": [{ "id": "M38::Leave balances::1", "col": 1, "name": "Employee", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "EMP-0142" }, { "id": "M38::Leave balances::2", "col": 2, "name": "Leave type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Annual" }, { "id": "M38::Leave balances::3", "col": 3, "name": "Year", "dataType": "Integer", "format": "0", "required": true, "role": "Date", "example": "2026" }, { "id": "M38::Leave balances::4", "col": 4, "name": "Entitlement", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "21.00" }, { "id": "M38::Leave balances::5", "col": 5, "name": "Accrued", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "17.50" }, { "id": "M38::Leave balances::6", "col": 6, "name": "Taken", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "8.00" }, { "id": "M38::Leave balances::7", "col": 7, "name": "Pending", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "2.00" }, { "id": "M38::Leave balances::8", "col": 8, "name": "Balance", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "7.50" }], "M38::Leave requests": [{ "id": "M38::Leave requests::1", "col": 1, "name": "Request no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "LV-4412" }, { "id": "M38::Leave requests::2", "col": 2, "name": "Employee", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "EMP-0142" }, { "id": "M38::Leave requests::3", "col": 3, "name": "Leave type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Annual" }, { "id": "M38::Leave requests::4", "col": 4, "name": "Start", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-12-14" }, { "id": "M38::Leave requests::5", "col": 5, "name": "End", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-12-15" }, { "id": "M38::Leave requests::6", "col": 6, "name": "Days", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "2.00" }, { "id": "M38::Leave requests::7", "col": 7, "name": "Approver", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "EMP-0001" }, { "id": "M38::Leave requests::8", "col": 8, "name": "Requested on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-10 09:22" }, { "id": "M38::Leave requests::9", "col": 9, "name": "Comments", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "Year-end break" }, { "id": "M38::Leave requests::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Approved" }], "M38::Attendance": [{ "id": "M38::Attendance::1", "col": 1, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "PK", "example": "2026-11-16" }, { "id": "M38::Attendance::2", "col": 2, "name": "Employee", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "EMP-0310" }, { "id": "M38::Attendance::3", "col": 3, "name": "Clock in", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-16 07:52" }, { "id": "M38::Attendance::4", "col": 4, "name": "Clock out", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-16 17:08" }, { "id": "M38::Attendance::5", "col": 5, "name": "Hours", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "8.50" }, { "id": "M38::Attendance::6", "col": 6, "name": "Source", "dataType": "Enum", "format": "20", "required": false, "role": "Enum", "example": "Clock" }, { "id": "M38::Attendance::7", "col": 7, "name": "Exception", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "" }, { "id": "M38::Attendance::8", "col": 8, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Present" }], "M38::Vacancies": [{ "id": "M38::Vacancies::1", "col": 1, "name": "Vacancy no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "VAC-088" }, { "id": "M38::Vacancies::2", "col": 2, "name": "Position", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "POS-TECH-01" }, { "id": "M38::Vacancies::3", "col": 3, "name": "Department", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Production" }, { "id": "M38::Vacancies::4", "col": 4, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M38::Vacancies::5", "col": 5, "name": "Opened", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-10-20" }, { "id": "M38::Vacancies::6", "col": 6, "name": "Closing date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2026-11-20" }, { "id": "M38::Vacancies::7", "col": 7, "name": "Headcount", "dataType": "Integer", "format": "0", "required": true, "role": "Qty", "example": "1" }, { "id": "M38::Vacancies::8", "col": 8, "name": "Recruiter", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "h.mahlangu" }, { "id": "M38::Vacancies::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }, { "id": "M38::Vacancies::10", "col": 10, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M38::Vacancies::11", "col": 11, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M38::Vacancies::12", "col": 12, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M38::Vacancies::13", "col": 13, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M38::Applicants": [{ "id": "M38::Applicants::1", "col": 1, "name": "Applicant no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "APP-3009" }, { "id": "M38::Applicants::2", "col": 2, "name": "Vacancy", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "VAC-088" }, { "id": "M38::Applicants::3", "col": 3, "name": "First name", "dataType": "Text", "format": "40", "required": true, "role": "Name", "example": "Lerato" }, { "id": "M38::Applicants::4", "col": 4, "name": "Last name", "dataType": "Text", "format": "40", "required": true, "role": "Name", "example": "Molefe" }, { "id": "M38::Applicants::5", "col": 5, "name": "Email", "dataType": "Email", "format": "80", "required": true, "role": "Description", "example": "lerato.molefe@example.com" }, { "id": "M38::Applicants::6", "col": 6, "name": "Phone", "dataType": "Phone", "format": "20", "required": false, "role": "Description", "example": "+27 72 555 0330" }, { "id": "M38::Applicants::7", "col": 7, "name": "Source", "dataType": "Text", "format": "40", "required": false, "role": "Enum", "example": "Website" }, { "id": "M38::Applicants::8", "col": 8, "name": "Stage", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Interview" }, { "id": "M38::Applicants::9", "col": 9, "name": "Rating", "dataType": "Enum", "format": "10", "required": false, "role": "Enum", "example": "A" }, { "id": "M38::Applicants::10", "col": 10, "name": "Interview date", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-18 10:00" }, { "id": "M38::Applicants::11", "col": 11, "name": "Offer date", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "" }, { "id": "M38::Applicants::12", "col": 12, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }], "M38::Interviews": [{ "id": "M38::Interviews::1", "col": 1, "name": "Interview no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "INT-441" }, { "id": "M38::Interviews::2", "col": 2, "name": "Applicant", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "APP-3009" }, { "id": "M38::Interviews::3", "col": 3, "name": "Vacancy", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "VAC-088" }, { "id": "M38::Interviews::4", "col": 4, "name": "Date", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-18 10:00" }, { "id": "M38::Interviews::5", "col": 5, "name": "Interviewers", "dataType": "Text", "format": "80", "required": true, "role": "FK", "example": "EMP-0088, EMP-0001" }, { "id": "M38::Interviews::6", "col": 6, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Technical" }, { "id": "M38::Interviews::7", "col": 7, "name": "Score", "dataType": "Decimal", "format": "0.0", "required": false, "role": "Qty", "example": "8.0" }, { "id": "M38::Interviews::8", "col": 8, "name": "Outcome", "dataType": "Enum", "format": "20", "required": false, "role": "Enum", "example": "" }, { "id": "M38::Interviews::9", "col": 9, "name": "Notes", "dataType": "Text", "format": "200", "required": false, "role": "Description", "example": "" }], "M38::Training courses": [{ "id": "M38::Training courses::1", "col": 1, "name": "Course code", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "TRN-H&S-01" }, { "id": "M38::Training courses::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Health and safety induction" }, { "id": "M38::Training courses::3", "col": 3, "name": "Provider", "dataType": "Text", "format": "60", "required": false, "role": "Description", "example": "Internal" }, { "id": "M38::Training courses::4", "col": 4, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Compliance" }, { "id": "M38::Training courses::5", "col": 5, "name": "Duration hours", "dataType": "Decimal", "format": "0.0", "required": false, "role": "Qty", "example": "4.0" }, { "id": "M38::Training courses::6", "col": 6, "name": "Cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 0.00" }, { "id": "M38::Training courses::7", "col": 7, "name": "Currency", "dataType": "Text", "format": "3", "required": false, "role": "FK", "example": "ZAR" }, { "id": "M38::Training courses::8", "col": 8, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }], "M38::Training records": [{ "id": "M38::Training records::1", "col": 1, "name": "Record no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "TR-2201" }, { "id": "M38::Training records::2", "col": 2, "name": "Employee", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "EMP-0310" }, { "id": "M38::Training records::3", "col": 3, "name": "Course", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "TRN-H&S-01" }, { "id": "M38::Training records::4", "col": 4, "name": "Date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-10-08" }, { "id": "M38::Training records::5", "col": 5, "name": "Result", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Pass" }, { "id": "M38::Training records::6", "col": 6, "name": "Expiry", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2028-10-08" }, { "id": "M38::Training records::7", "col": 7, "name": "Cost", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 0.00" }, { "id": "M38::Training records::8", "col": 8, "name": "Certificate", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "DOC-77120" }, { "id": "M38::Training records::9", "col": 9, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Completed" }], "M38::Performance reviews": [{ "id": "M38::Performance reviews::1", "col": 1, "name": "Review no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "REV-2026-0142" }, { "id": "M38::Performance reviews::2", "col": 2, "name": "Employee", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "EMP-0142" }, { "id": "M38::Performance reviews::3", "col": 3, "name": "Period", "dataType": "Text", "format": "20", "required": true, "role": "Description", "example": "FY2026" }, { "id": "M38::Performance reviews::4", "col": 4, "name": "Reviewer", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "EMP-0001" }, { "id": "M38::Performance reviews::5", "col": 5, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Annual" }, { "id": "M38::Performance reviews::6", "col": 6, "name": "Overall rating", "dataType": "Text", "format": "20", "required": false, "role": "Enum", "example": "" }, { "id": "M38::Performance reviews::7", "col": 7, "name": "Goals met", "dataType": "Percent", "format": "0%", "required": false, "role": "Amount", "example": "" }, { "id": "M38::Performance reviews::8", "col": 8, "name": "Due date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2027-03-31" }, { "id": "M38::Performance reviews::9", "col": 9, "name": "Completed on", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "" }, { "id": "M38::Performance reviews::10", "col": 10, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Not started" }], "M38::Goals": [{ "id": "M38::Goals::1", "col": 1, "name": "Review / employee", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "REV-2026-0142" }, { "id": "M38::Goals::2", "col": 2, "name": "Goal", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Grow trade sales by 12%" }, { "id": "M38::Goals::3", "col": 3, "name": "Measure", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "Invoiced exclusive sales vs prior year" }, { "id": "M38::Goals::4", "col": 4, "name": "Target", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "12%" }, { "id": "M38::Goals::5", "col": 5, "name": "Actual", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "" }, { "id": "M38::Goals::6", "col": 6, "name": "Weight %", "dataType": "Percent", "format": "0%", "required": false, "role": "Amount", "example": "30%" }, { "id": "M38::Goals::7", "col": 7, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }], "M39::Payroll runs": [{ "id": "M39::Payroll runs::1", "col": 1, "name": "Run ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "PAY-2026-11" }, { "id": "M39::Payroll runs::2", "col": 2, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M39::Payroll runs::3", "col": 3, "name": "Period", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "2026-11" }, { "id": "M39::Payroll runs::4", "col": 4, "name": "Pay date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-11-25" }, { "id": "M39::Payroll runs::5", "col": 5, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Normal" }, { "id": "M39::Payroll runs::6", "col": 6, "name": "Employee count", "dataType": "Integer", "format": "0", "required": true, "role": "Qty", "example": "48" }, { "id": "M39::Payroll runs::7", "col": 7, "name": "Gross", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 1,245,800.00" }, { "id": "M39::Payroll runs::8", "col": 8, "name": "Deductions", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 312,450.00" }, { "id": "M39::Payroll runs::9", "col": 9, "name": "Employer contrib.", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 24,916.00" }, { "id": "M39::Payroll runs::10", "col": 10, "name": "Net", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 933,350.00" }, { "id": "M39::Payroll runs::11", "col": 11, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M39::Payroll runs::12", "col": 12, "name": "Approved by", "dataType": "Text", "format": "30", "required": false, "role": "FK", "example": "s.vanwyk" }, { "id": "M39::Payroll runs::13", "col": 13, "name": "Posted journal", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "" }, { "id": "M39::Payroll runs::14", "col": 14, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Calculated" }, { "id": "M39::Payroll runs::15", "col": 15, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M39::Payroll runs::16", "col": 16, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M39::Payroll runs::17", "col": 17, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M39::Payroll runs::18", "col": 18, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M39::Payslips": [{ "id": "M39::Payslips::1", "col": 1, "name": "Run ID", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PAY-2026-11" }, { "id": "M39::Payslips::2", "col": 2, "name": "Employee", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "EMP-0142" }, { "id": "M39::Payslips::3", "col": 3, "name": "Gross", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 42,000.00" }, { "id": "M39::Payslips::4", "col": 4, "name": "PAYE", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 7,840.00" }, { "id": "M39::Payslips::5", "col": 5, "name": "UIF", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 177.12" }, { "id": "M39::Payslips::6", "col": 6, "name": "SDL", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "" }, { "id": "M39::Payslips::7", "col": 7, "name": "Other deductions", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 3,200.00" }, { "id": "M39::Payslips::8", "col": 8, "name": "Benefits", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 0.00" }, { "id": "M39::Payslips::9", "col": 9, "name": "Net pay", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 30,782.88" }, { "id": "M39::Payslips::10", "col": 10, "name": "Cost centre", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CC-SALES" }, { "id": "M39::Payslips::11", "col": 11, "name": "Payment method", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "EFT" }, { "id": "M39::Payslips::12", "col": 12, "name": "Currency", "dataType": "Text", "format": "3", "required": true, "role": "FK", "example": "ZAR" }, { "id": "M39::Payslips::13", "col": 13, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Calculated" }], "M39::Payroll transactions": [{ "id": "M39::Payroll transactions::1", "col": 1, "name": "Run ID", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "PAY-2026-11" }, { "id": "M39::Payroll transactions::2", "col": 2, "name": "Employee", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "EMP-0142" }, { "id": "M39::Payroll transactions::3", "col": 3, "name": "Component", "dataType": "Text", "format": "40", "required": true, "role": "Enum", "example": "Basic" }, { "id": "M39::Payroll transactions::4", "col": 4, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Earning" }, { "id": "M39::Payroll transactions::5", "col": 5, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00", "required": true, "role": "Amount", "example": "R 38,000.00" }, { "id": "M39::Payroll transactions::6", "col": 6, "name": "Hours / units", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "173.33" }], "M40::Tickets": [{ "id": "M40::Tickets::1", "col": 1, "name": "Ticket no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "TCK-44190" }, { "id": "M40::Tickets::2", "col": 2, "name": "Date", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-16 09:18" }, { "id": "M40::Tickets::3", "col": 3, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M40::Tickets::4", "col": 4, "name": "Requester", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "priya.naidoo@acme.example" }, { "id": "M40::Tickets::5", "col": 5, "name": "Customer / employee", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "CUS-0208" }, { "id": "M40::Tickets::6", "col": 6, "name": "Channel", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Email" }, { "id": "M40::Tickets::7", "col": 7, "name": "Category", "dataType": "Text", "format": "40", "required": false, "role": "Enum", "example": "Incident" }, { "id": "M40::Tickets::8", "col": 8, "name": "Priority", "dataType": "Enum", "format": "10", "required": true, "role": "Enum", "example": "High" }, { "id": "M40::Tickets::9", "col": 9, "name": "Assigned to", "dataType": "Text", "format": "40", "required": false, "role": "FK", "example": "c.adams" }, { "id": "M40::Tickets::10", "col": 10, "name": "SLA due", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-16 13:18" }, { "id": "M40::Tickets::11", "col": 11, "name": "First response", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "2026-11-16 09:41" }, { "id": "M40::Tickets::12", "col": 12, "name": "Resolved on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Date", "example": "" }, { "id": "M40::Tickets::13", "col": 13, "name": "Satisfaction", "dataType": "Enum", "format": "10", "required": false, "role": "Enum", "example": "" }, { "id": "M40::Tickets::14", "col": 14, "name": "Related record", "dataType": "Text", "format": "40", "required": false, "role": "Reference", "example": "SO-10458" }, { "id": "M40::Tickets::15", "col": 15, "name": "Subject", "dataType": "Text", "format": "120", "required": true, "role": "Description", "example": "Delivery not arrived" }, { "id": "M40::Tickets::16", "col": 16, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }, { "id": "M40::Tickets::17", "col": 17, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M40::Tickets::18", "col": 18, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M40::Tickets::19", "col": 19, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M40::Tickets::20", "col": 20, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M40::Ticket activities": [{ "id": "M40::Ticket activities::1", "col": 1, "name": "Ticket no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "TCK-44190" }, { "id": "M40::Ticket activities::2", "col": 2, "name": "Date", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": true, "role": "Date", "example": "2026-11-16 09:41" }, { "id": "M40::Ticket activities::3", "col": 3, "name": "User", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "c.adams" }, { "id": "M40::Ticket activities::4", "col": 4, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Email" }, { "id": "M40::Ticket activities::5", "col": 5, "name": "Time spent", "dataType": "Decimal", "format": "0.00", "required": false, "role": "Qty", "example": "0.25" }, { "id": "M40::Ticket activities::6", "col": 6, "name": "Public", "dataType": "Boolean", "format": "Y/N", "required": true, "role": "Flag", "example": "Y" }, { "id": "M40::Ticket activities::7", "col": 7, "name": "Description", "dataType": "Text", "format": "200", "required": true, "role": "Description", "example": "Asked logistics for the tracking update" }], "M40::Knowledge base": [{ "id": "M40::Knowledge base::1", "col": 1, "name": "Article ID", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "KB-0188" }, { "id": "M40::Knowledge base::2", "col": 2, "name": "Title", "dataType": "Text", "format": "120", "required": true, "role": "Name", "example": "How to track an outbound shipment" }, { "id": "M40::Knowledge base::3", "col": 3, "name": "Category", "dataType": "Text", "format": "40", "required": true, "role": "Enum", "example": "How-to" }, { "id": "M40::Knowledge base::4", "col": 4, "name": "Author", "dataType": "Text", "format": "30", "required": true, "role": "FK", "example": "c.adams" }, { "id": "M40::Knowledge base::5", "col": 5, "name": "Updated", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-10-04" }, { "id": "M40::Knowledge base::6", "col": 6, "name": "Views", "dataType": "Integer", "format": "#,##0", "required": false, "role": "Qty", "example": "226" }, { "id": "M40::Knowledge base::7", "col": 7, "name": "Helpful votes", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "41" }, { "id": "M40::Knowledge base::8", "col": 8, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Published" }, { "id": "M40::Knowledge base::9", "col": 9, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M40::Knowledge base::10", "col": 10, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M40::Knowledge base::11", "col": 11, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M40::Knowledge base::12", "col": 12, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M40::SLA policies": [{ "id": "M40::SLA policies::1", "col": 1, "name": "SLA", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "SLA-4HR" }, { "id": "M40::SLA policies::2", "col": 2, "name": "Applies to", "dataType": "Text", "format": "40", "required": true, "role": "Enum", "example": "Both" }, { "id": "M40::SLA policies::3", "col": 3, "name": "Priority", "dataType": "Enum", "format": "10", "required": true, "role": "Enum", "example": "High" }, { "id": "M40::SLA policies::4", "col": 4, "name": "First response hours", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "1.00" }, { "id": "M40::SLA policies::5", "col": 5, "name": "Resolution hours", "dataType": "Decimal", "format": "0.00", "required": true, "role": "Qty", "example": "4.00" }, { "id": "M40::SLA policies::6", "col": 6, "name": "Business hours", "dataType": "Text", "format": "40", "required": false, "role": "Description", "example": "Mon\u2013Fri 08:00\u201317:00" }, { "id": "M40::SLA policies::7", "col": 7, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }], "M41::Contracts register": [{ "id": "M41::Contracts register::1", "col": 1, "name": "Contract no.", "dataType": "Text", "format": "20", "required": true, "role": "PK", "example": "CTR-190" }, { "id": "M41::Contracts register::2", "col": 2, "name": "Name", "dataType": "Text", "format": "80", "required": true, "role": "Name", "example": "Acme master supply agreement" }, { "id": "M41::Contracts register::3", "col": 3, "name": "Type", "dataType": "Enum", "format": "20", "required": true, "role": "Enum", "example": "Customer" }, { "id": "M41::Contracts register::4", "col": 4, "name": "Party", "dataType": "Text", "format": "80", "required": true, "role": "FK", "example": "Acme Industrial (Pty) Ltd" }, { "id": "M41::Contracts register::5", "col": 5, "name": "Company", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "DEMO" }, { "id": "M41::Contracts register::6", "col": 6, "name": "Owner", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Ayanda Nkosi" }, { "id": "M41::Contracts register::7", "col": 7, "name": "Start", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2026-03-01" }, { "id": "M41::Contracts register::8", "col": 8, "name": "End", "dataType": "Date", "format": "YYYY-MM-DD", "required": false, "role": "Date", "example": "2028-02-29" }, { "id": "M41::Contracts register::9", "col": 9, "name": "Value", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "R 1,200,000.00" }, { "id": "M41::Contracts register::10", "col": 10, "name": "Currency", "dataType": "Text", "format": "3", "required": false, "role": "FK", "example": "ZAR" }, { "id": "M41::Contracts register::11", "col": 11, "name": "Renewal terms", "dataType": "Text", "format": "80", "required": false, "role": "Description", "example": "Auto-renew 12 months unless 90 days' notice" }, { "id": "M41::Contracts register::12", "col": 12, "name": "Notice period days", "dataType": "Integer", "format": "0", "required": false, "role": "Qty", "example": "90" }, { "id": "M41::Contracts register::13", "col": 13, "name": "File", "dataType": "Text", "format": "20", "required": false, "role": "FK", "example": "DOC-88100" }, { "id": "M41::Contracts register::14", "col": 14, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Active" }, { "id": "M41::Contracts register::15", "col": 15, "name": "Created by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "a.nkosi" }, { "id": "M41::Contracts register::16", "col": 16, "name": "Created on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-10 09:14" }, { "id": "M41::Contracts register::17", "col": 17, "name": "Updated by", "dataType": "Text", "format": "50", "required": false, "role": "Audit", "example": "s.vanwyk" }, { "id": "M41::Contracts register::18", "col": 18, "name": "Updated on", "dataType": "Datetime", "format": "YYYY-MM-DD HH:MM", "required": false, "role": "Audit", "example": "2026-11-16 16:42" }], "M41::Contract obligations": [{ "id": "M41::Contract obligations::1", "col": 1, "name": "Contract no.", "dataType": "Text", "format": "20", "required": true, "role": "FK", "example": "CTR-190" }, { "id": "M41::Contract obligations::2", "col": 2, "name": "Milestone", "dataType": "Text", "format": "40", "required": true, "role": "PK", "example": "Annual price review" }, { "id": "M41::Contract obligations::3", "col": 3, "name": "Due date", "dataType": "Date", "format": "YYYY-MM-DD", "required": true, "role": "Date", "example": "2027-02-01" }, { "id": "M41::Contract obligations::4", "col": 4, "name": "Owner", "dataType": "Text", "format": "40", "required": true, "role": "FK", "example": "Ayanda Nkosi" }, { "id": "M41::Contract obligations::5", "col": 5, "name": "Amount", "dataType": "Currency", "format": "R #,##0.00", "required": false, "role": "Amount", "example": "" }, { "id": "M41::Contract obligations::6", "col": 6, "name": "Notes", "dataType": "Text", "format": "120", "required": false, "role": "Description", "example": "Review trade price list" }, { "id": "M41::Contract obligations::7", "col": 7, "name": "Status", "dataType": "Enum", "format": "30", "required": true, "role": "Status", "example": "Open" }] } };
  var AREAS = CATALOGUE.areas;
  var MODULES = CATALOGUE.modules;
  var SCREENS = CATALOGUE.screens;
  var moduleByCode = Object.fromEntries(MODULES.map((m) => [m.code, m]));
  function getModule(code) {
    return moduleByCode[code];
  }
  function screensFor(moduleCode) {
    return SCREENS.filter((s) => s.moduleCode === moduleCode);
  }
  var SLAB_ORDER_COLS = [
    { id: "M22::Slab orders::date", name: "Date", dataType: "Date", example: "2026-11-12" },
    { id: "M22::Slab orders::customer", name: "Customer", dataType: "Text", example: "Sample: Kempton Fabricators" },
    { id: "M22::Slab orders::order", name: "Order no.", dataType: "Text", example: "SO4716" },
    { id: "M22::Slab orders::type", name: "Stock type", dataType: "Enum", example: "SLABS" },
    { id: "M22::Slab orders::L", name: "L cm", dataType: "Decimal", example: "280" },
    { id: "M22::Slab orders::W", name: "W cm", dataType: "Decimal", example: "160" },
    { id: "M22::Slab orders::T", name: "T cm", dataType: "Decimal", example: "3" },
    { id: "M22::Slab orders::qty", name: "Qty", dataType: "Decimal", example: "1" },
    { id: "M22::Slab orders::slab", name: "Slab #", dataType: "Text", example: "S-1044" },
    { id: "M22::Slab orders::grade", name: "Grade", dataType: "Enum", example: "CL" },
    { id: "M22::Slab orders::m2", name: "m²", dataType: "Decimal", example: "4.48" },
    { id: "M22::Slab orders::m3", name: "m³", dataType: "Decimal", example: "0.134" },
    { id: "M22::Slab orders::kg", name: "kg", dataType: "Decimal", example: "403" },
    { id: "M22::Slab orders::colour", name: "Colour code", dataType: "Text", example: "RTB Rustenburg Black" },
    { id: "M22::Slab orders::finish", name: "Finish", dataType: "Enum", example: "T/P" },
    { id: "M22::Slab orders::disc", name: "Discount %", dataType: "Percent", example: "5" },
    { id: "M22::Slab orders::price", name: "Price", dataType: "Currency", example: "2450" },
    { id: "M22::Slab orders::unit", name: "Price unit", dataType: "Enum", example: "per m²" },
    { id: "M22::Slab orders::total", name: "Line total", dataType: "Currency", example: "10427" },
    { id: "M22::Slab orders::transport", name: "Transport", dataType: "Currency", example: "850" },
    { id: "M22::Slab orders::sage", name: "Sage invoice", dataType: "Text", example: "SI88421" },
    { id: "M22::Slab orders::prod", name: "Production", dataType: "Boolean", example: "Yes" },
    { id: "M22::Slab orders::done", name: "Complete", dataType: "Boolean", example: "No" }
  ];
  function columnsFor(moduleCode, screenName) {
    if (screenName === "Slab orders") return SLAB_ORDER_COLS.map((c) => Object.assign({}, c));
    return CATALOGUE.columnsByScreen[moduleCode + "::" + screenName] || [];
  }
  function sectionForColumn(col) {
    const n = (col.name || "").toLowerCase();
    const t = (col.dataType || "").toLowerCase();
    const r = (col.role || "").toLowerCase();
    if (r in { pk: 1, name: 1, code: 1 } || /^(code|name|description|title|reference|id)\b/.test(n) || n.endsWith(" code") || n.endsWith(" name") || n.includes(" number") && !n.includes("phone") && !n.includes("account")) {
      if (/date|period|year|month|time|due|posted/.test(n) && t.includes("date")) return "Dates & periods";
      return "Identity";
    }
    if (t.includes("date") || t.includes("time") || /\b(date|period|year|month|due|posted|start|end|expiry)\b/.test(n)) return "Dates & periods";
    if (t.includes("money") || t.includes("decimal") || t.includes("amount") || /\b(amount|price|total|vat|tax|balance|cost|qty|quantity|rate|percent)\b/.test(n)) return "Amounts & quantities";
    if (t.includes("bool") || r === "status" || /\b(status|active|flag|posted|approved|cancelled|void)\b/.test(n)) return "Status & flags";
    if (/created|modified|updated|posted by|user id|audit|hash/.test(n)) return "Audit";
    return "Details";
  }
  var SECTION_ORDER = ["Identity", "Dates & periods", "Amounts & quantities", "Status & flags", "Details", "Audit"];

  // js/app.js
  var STORE_KEY = "omnivate.control.v1";
  var SESSION_KEY = "omnivate.session.v1";
  var esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  function zar(n) {
    const v = Math.round(Number(n) || 0);
    return "R\xA0" + v.toLocaleString("en-ZA");
  }
  function fmtDate(iso, withTime = true) {
    if (!iso) return "\u2014";
    const opts = { timeZone: "Africa/Johannesburg", day: "numeric", month: "short", year: "numeric" };
    if (withTime) {
      opts.hour = "2-digit";
      opts.minute = "2-digit";
    }
    return new Date(iso).toLocaleString("en-GB", opts) + (withTime ? " SAST" : "");
  }
  function fmtShort(iso) {
    if (!iso) return "\u2014";
    const opts = { timeZone: "Africa/Johannesburg", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" };
    return new Date(iso).toLocaleString("en-GB", opts);
  }
  function initials(name) {
    return String(name || "?").split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join("");
  }
  function uid(prefix = "id") {
    return prefix + "-" + Math.random().toString(36).slice(2, 9);
  }
  var ICONS = {
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    plus: '<path d="M5 12h14M12 5v14"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    edit: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
    trash: '<path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    external: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    grip: '<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>',
    arrowUp: '<path d="M12 19V5M5 12l7-7 7 7"/>',
    arrowDown: '<path d="M12 5v14M19 12l-7 7-7-7"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    rollback: '<path d="M9 14 4 9l5-5M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',
    server: '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
    credit: '<rect width="22" height="16" x="1" y="4" rx="2"/><line x1="1" x2="23" y1="10" y2="10"/>',
    clipboard: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.34 1.54.57 2.35.7A2 2 0 0 1 22 16.92z"/>',
    map: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
    settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    sliders: '<line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.57-8.58 3.91a2 2 0 0 1-1.66 0L3.2 12.57"/><path d="m22 17.57-8.58 3.91a2 2 0 0 1-1.66 0L3.2 17.57"/>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
    package: '<path d="m7.5 4.27 9 5.15M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    factory: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>',
    briefcase: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    headset: '<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/>',
    wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>'
  };
  function icon(name, size = 18) {
    const p = ICONS[name] || ICONS.info;
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  }
  var AREA_ICON = {
    "System": "settings",
    "Finance": "wallet",
    "Sales": "cart",
    "CRM & Marketing": "send",
    "Retail & E-commerce": "package",
    "Procurement": "briefcase",
    "Inventory & Warehouse": "layers",
    "Manufacturing & Quality": "factory",
    "Projects & Time": "clock",
    "Service & Assets": "wrench" in ICONS ? "wrench" : "settings",
    "HR & Payroll": "users",
    "Support & Documents": "headset"
  };
  var CORE_MODULES = ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M11", "M12"];
  function moduleMap(enabledCodes) {
    const set = new Set(enabledCodes);
    const out = {};
    for (const m of MODULES) out[m.code] = set.has(m.code);
    return out;
  }
  function enabledModules(tenant) {
    return MODULES.filter((m) => tenant.modules[m.code]);
  }
  function countEnabled(tenant) {
    return MODULES.reduce((n, m) => n + (tenant.modules[m.code] ? 1 : 0), 0);
  }
  var PLANS = {
    starter: { id: "starter", name: "Starter", price: 2490, users: 5, hosting: "Shared", sla: "Business hours", modules: "Core + 8" },
    growth: { id: "growth", name: "Growth", price: 6900, users: 15, hosting: "Shared", sla: "8\xD75", modules: "Most modules" },
    professional: { id: "professional", name: "Professional", price: 14500, users: 30, hosting: "Shared or dedicated", sla: "8\xD75, 4h response", modules: "All 41 modules" },
    enterprise: { id: "enterprise", name: "Enterprise", price: 24900, users: 999, hosting: "Dedicated", sla: "24\xD77, 1h response", modules: "All modules + custom" }
  };
  var DEFAULT_ROLES = [
    { id: "administrator", name: "Administrator", description: "Full access across every enabled module." },
    { id: "finance-manager", name: "Finance manager", description: "Finance, tax, banking, AR/AP and approvals." },
    { id: "sales-manager", name: "Sales manager", description: "Customers, orders, pricing, CRM." },
    { id: "warehouse-manager", name: "Warehouse manager", description: "Inventory, warehouse tasks, goods receipts." },
    { id: "hr-manager", name: "HR manager", description: "Employees, leave, payroll (if enabled)." },
    { id: "standard", name: "Standard user", description: "Read/create on assigned modules only." }
  ];
  function defaultPermissions() {
    const perms = {};
    for (const role of DEFAULT_ROLES) {
      perms[role.id] = {};
      for (const m of MODULES) {
        if (role.id === "administrator") {
          perms[role.id][m.code] = { C: true, R: true, U: true, D: true, A: true };
        } else if (role.id === "finance-manager") {
          const fin = m.area === "Finance" || m.area === "System";
          perms[role.id][m.code] = { C: fin, R: true, U: fin, D: false, A: fin };
        } else if (role.id === "sales-manager") {
          const ok = ["Sales", "CRM & Marketing", "Retail & E-commerce"].includes(m.area);
          perms[role.id][m.code] = { C: ok, R: true, U: ok, D: false, A: ok };
        } else if (role.id === "warehouse-manager") {
          const ok = ["Inventory & Warehouse", "Procurement", "Manufacturing & Quality"].includes(m.area);
          perms[role.id][m.code] = { C: ok, R: true, U: ok, D: false, A: false };
        } else if (role.id === "hr-manager") {
          const ok = m.area === "HR & Payroll";
          perms[role.id][m.code] = { C: ok, R: ok || m.code === "M02", U: ok, D: false, A: ok };
        } else {
          perms[role.id][m.code] = { C: false, R: true, U: false, D: false, A: false };
        }
      }
    }
    return perms;
  }
  function defaultCompliance(officer) {
    return {
      informationOfficer: officer,
      officerRegistered: true,
      paiaManualPublished: true,
      purposesDocumented: true,
      lawfulBasisRecorded: true,
      consentCaptured: true,
      dsarProcess: true,
      retentionSchedule: true,
      operatorAgreements: true,
      securitySafeguards: true,
      breachProcedure: true,
      crossBorderAssessment: true,
      specialPiControls: true,
      employeeNotice: true,
      directMarketingOptIn: true,
      residency: "South Africa",
      retentionYears: 5,
      consentDirectMarketing: true,
      consentCookies: true,
      dsar: [
        { id: "ds-1", type: "Access", subject: "Former employee", status: "Closed", received: "2026-10-02T09:10:00+02:00", due: "2026-10-23" }
      ]
    };
  }
  var POPIA_ITEMS = [
    { key: "officerRegistered", title: "Information Officer registered with the Information Regulator", hint: "Section 55 \u2014 registration and duties of the Information Officer." },
    { key: "paiaManualPublished", title: "PAIA / POPIA manual published", hint: "A public manual describing records and how to request them." },
    { key: "purposesDocumented", title: "Processing purposes documented", hint: "Each processing activity has a recorded purpose and category of data." },
    { key: "lawfulBasisRecorded", title: "Lawful basis recorded per activity", hint: "Consent, contract, legal obligation, legitimate interest, or other POPIA ground." },
    { key: "consentCaptured", title: "Consent captured where required", hint: "Consent is voluntary, specific and informed, and can be withdrawn." },
    { key: "dsarProcess", title: "Data subject request process", hint: "Access, correction, deletion and objection handled within reasonable time." },
    { key: "retentionSchedule", title: "Retention and deletion schedule", hint: "Records are kept only as long as needed, then securely deleted or anonymised." },
    { key: "operatorAgreements", title: "Operator agreements in place (s.21)", hint: "Processors are bound in writing to security and purpose limitation." },
    { key: "securitySafeguards", title: "Security safeguards (s.19)", hint: "Appropriate technical and organisational measures to protect personal information." },
    { key: "breachProcedure", title: "Security compromise notification procedure", hint: "Notify the Regulator and affected data subjects as soon as reasonably possible." },
    { key: "crossBorderAssessment", title: "Cross-border transfer assessment (s.72)", hint: "Transfers outside the Republic only under an adequate protection condition." },
    { key: "specialPiControls", title: "Special personal information controls (s.26\u201333)", hint: "Health, biometric, religious or child data is handled only where permitted." },
    { key: "employeeNotice", title: "Employee privacy notice issued", hint: "Staff are informed how their information is processed." },
    { key: "directMarketingOptIn", title: "Direct marketing opt-in (s.69)", hint: "Electronic marketing to non-customers requires prior consent." }
  ];
  function T(partial) {
    return partial;
  }
  function stoneTenants() {
    const shell = (partial) => Object.assign({
      hosting: "Shared",
      cluster: "jhb-shared-02",
      status: "healthy",
      version: "2.4.1",
      channel: "stable",
      plan: "growth",
      mrr: 6900,
      usersCount: 3,
      lastBackup: "2026-11-16T21:40:00+02:00",
      alerts: [],
      logoData: null,
      offlineReady: true,
      permissions: defaultPermissions(),
      columnOverrides: {},
      sectionOverrides: {},
      features: { cameraScan: false, handheldScan: true },
      modules: moduleMap([...CORE_MODULES, "M09", "M15", "M17", "M18", "M22", "M23", "M27", "M29", "M30"])
    }, partial);
    return [
      shell({
        id: "top-quartz",
        name: "Top Quartz",
        tradingAs: "Top Quartz",
        industry: "Granite, engineered stone and porcelain slabs",
        region: "Johannesburg",
        color: "#9A3412",
        whatsapp: { invoices: true, payments: true, approvals: false, backups: false, marketing: false, number: "" },
        profile: {
          legalName: "Top Quartz",
          tradingAs: "Top Quartz",
          registrationNumber: "",
          vatNumber: "",
          bbbee: "",
          email: "",
          phone: "",
          website: "",
          address1: "3 Copper Road",
          address2: "Spartan",
          city: "Kempton Park",
          postal: "1619",
          province: "Gauteng",
          country: "South Africa",
          currency: "ZAR",
          fiscalYearStart: "01 March",
          terminology: { Customer: "Customer", Supplier: "Supplier", Item: "Product", Employee: "Employee" },
          sequences: [
            { doc: "Sales quotation", prefix: "TQ-QT-", pad: 4, next: 1047 },
            { doc: "Sales invoice", prefix: "TQ-INV-", pad: 4, next: 2206 }
          ],
          templates: { invoice: "Top Quartz tax invoice", quote: "Top Quartz quotation", statement: "Standard statement", payslip: "Standard payslip" }
        },
        users: [
          { id: "tq-admin", name: "Top Quartz admin", email: "admin@topquartz.demo", role: "administrator", status: "Active", lastLogin: "2026-11-17T07:40:00+02:00", mfa: true, password: "Demo@123" }
        ],
        compliance: defaultCompliance({ name: "", email: "", phone: "", registered: false })
      }),
      shell({
        id: "granite-warehouse",
        name: "The Granite Warehouse",
        tradingAs: "The Granite Warehouse",
        industry: "Stone slab retail and supply",
        region: "Johannesburg",
        color: "#334155",
        whatsapp: { invoices: true, payments: true, approvals: false, backups: false, marketing: false, number: "" },
        profile: {
          legalName: "The Granite Warehouse",
          tradingAs: "The Granite Warehouse",
          registrationNumber: "",
          vatNumber: "",
          bbbee: "",
          email: "",
          phone: "",
          website: "",
          address1: "",
          address2: "",
          city: "",
          postal: "",
          province: "Gauteng",
          country: "South Africa",
          currency: "ZAR",
          fiscalYearStart: "01 March",
          terminology: { Customer: "Customer", Supplier: "Supplier", Item: "Slab", Employee: "Employee" },
          sequences: [
            { doc: "Sales quotation", prefix: "GW-QT-", pad: 4, next: 881 },
            { doc: "Sales invoice", prefix: "GW-INV-", pad: 4, next: 1544 }
          ],
          templates: { invoice: "Granite Warehouse tax invoice", quote: "Granite Warehouse quotation", statement: "Standard statement", payslip: "Standard payslip" }
        },
        users: [
          { id: "gw-admin", name: "Granite Warehouse admin", email: "admin@granitewarehouse.demo", role: "administrator", status: "Active", lastLogin: "2026-11-17T07:55:00+02:00", mfa: true, password: "Demo@123" }
        ],
        compliance: defaultCompliance({ name: "", email: "", phone: "", registered: false })
      })
    ];
  }
  function buildTenants() {
    const mkUsers = (rows) => rows.map((r, i) => ({
      id: r.id,
      name: r.name,
      email: r.email,
      role: r.role,
      status: r.status || "Active",
      lastLogin: r.lastLogin || null,
      mfa: r.mfa !== false
    }));
    const tenants = [
      ...stoneTenants(),
      T({
        id: "horizon",
        name: "Horizon Plastics (Pty) Ltd",
        tradingAs: "Horizon Plastics",
        industry: "Plastics manufacturing",
        region: "Johannesburg",
        hosting: "Dedicated",
        cluster: "jhb-ded-03",
        status: "healthy",
        version: "2.4.1",
        channel: "stable",
        usersCount: 24,
        mrr: 18500,
        plan: "professional",
        lastBackup: "2026-11-16T22:10:00+02:00",
        alerts: [],
        color: "#C2410C",
        logoData: null,
        profile: {
          legalName: "Horizon Plastics (Pty) Ltd",
          tradingAs: "Horizon Plastics",
          registrationNumber: "2016/184392/07",
          vatNumber: "4560123456",
          bbbee: "Level 4",
          email: "accounts@horizonplastics.co.za",
          phone: "011 794 2100",
          website: "https://www.horizonplastics.co.za",
          address1: "42 Elsecar Road, Kya Sands",
          address2: "Randburg",
          city: "Johannesburg",
          postal: "2163",
          province: "Gauteng",
          country: "South Africa",
          currency: "ZAR",
          fiscalYearStart: "01 March",
          terminology: { Customer: "Customer", Supplier: "Supplier", Item: "SKU", Employee: "Employee" },
          sequences: [
            { doc: "Sales invoice", prefix: "HP-INV-", pad: 6, next: 14822 },
            { doc: "Sales order", prefix: "HP-SO-", pad: 6, next: 9104 },
            { doc: "Purchase order", prefix: "HP-PO-", pad: 6, next: 5521 },
            { doc: "Credit note", prefix: "HP-CN-", pad: 6, next: 881 }
          ],
          templates: { invoice: "Horizon tax invoice v3", quote: "Horizon quotation v2", statement: "Standard statement", payslip: "Standard payslip" }
        },
        modules: moduleMap([...CORE_MODULES, "M09", "M10", "M13", "M14", "M15", "M16", "M17", "M18", "M19", "M20", "M22", "M23", "M27", "M28", "M29", "M30", "M31", "M32", "M36", "M40"]),
        users: mkUsers([
          { id: "hp-1", name: "Priya Naidoo", email: "priya.naidoo@horizonplastics.co.za", role: "administrator", lastLogin: "2026-11-16T16:42:00+02:00" },
          { id: "hp-2", name: "Andre Venter", email: "andre.venter@horizonplastics.co.za", role: "finance-manager", lastLogin: "2026-11-16T15:10:00+02:00" },
          { id: "hp-3", name: "Lerato Khumalo", email: "lerato.khumalo@horizonplastics.co.za", role: "sales-manager", lastLogin: "2026-11-16T17:05:00+02:00" },
          { id: "hp-4", name: "Johan Smit", email: "johan.smit@horizonplastics.co.za", role: "warehouse-manager", lastLogin: "2026-11-16T14:22:00+02:00" }
        ]),
        permissions: defaultPermissions(),
        compliance: defaultCompliance({ name: "Priya Naidoo", email: "priya.naidoo@horizonplastics.co.za", phone: "011 794 2100", registered: true }),
        columnOverrides: {
          "M22::Sales orders": { hidden: ["M22::Sales orders::15"], names: { "M22::Sales orders::2": "Account" }, order: null, hiddenSections: [] }
        },
        sectionOverrides: {}
      }),
      T({
        id: "cape-coast",
        name: "Cape Coast Logistics CC",
        tradingAs: "Cape Coast Logistics",
        industry: "Freight & logistics",
        region: "Cape Town",
        hosting: "Shared",
        cluster: "cpt-shared-01",
        status: "healthy",
        version: "2.4.1",
        channel: "stable",
        usersCount: 12,
        mrr: 8200,
        plan: "growth",
        lastBackup: "2026-11-16T23:40:00+02:00",
        alerts: [],
        color: "#0369A1",
        logoData: null,
        profile: {
          legalName: "Cape Coast Logistics CC",
          tradingAs: "Cape Coast Logistics",
          registrationNumber: "2009/123456/23",
          vatNumber: "4678901234",
          bbbee: "Level 2",
          email: "ops@capecoastlog.co.za",
          phone: "021 511 4080",
          website: "https://www.capecoastlog.co.za",
          address1: "14 Marine Drive, Paarden Eiland",
          address2: "",
          city: "Cape Town",
          postal: "7405",
          province: "Western Cape",
          country: "South Africa",
          currency: "ZAR",
          fiscalYearStart: "01 March",
          terminology: { Customer: "Account", Supplier: "Haulier", Item: "Item", Employee: "Driver / staff" },
          sequences: [
            { doc: "Sales invoice", prefix: "CCL-INV-", pad: 5, next: 3201 },
            { doc: "Job / trip", prefix: "CCL-TR-", pad: 5, next: 8840 }
          ],
          templates: { invoice: "CCL invoice", quote: "Rate confirmation", statement: "Standard statement", payslip: "Standard payslip" }
        },
        modules: moduleMap([...CORE_MODULES, "M09", "M15", "M17", "M18", "M20", "M22", "M27", "M29", "M33", "M34", "M35", "M36", "M37", "M40"]),
        users: mkUsers([
          { id: "cc-1", name: "Nolene Jacobs", email: "nolene@capecoastlog.co.za", role: "administrator", lastLogin: "2026-11-16T18:11:00+02:00" },
          { id: "cc-2", name: "Yusuf Abrahams", email: "yusuf@capecoastlog.co.za", role: "finance-manager", lastLogin: "2026-11-16T12:40:00+02:00" }
        ]),
        permissions: defaultPermissions(),
        compliance: defaultCompliance({ name: "Nolene Jacobs", email: "nolene@capecoastlog.co.za", phone: "021 511 4080", registered: true }),
        columnOverrides: {},
        sectionOverrides: {}
      }),
      T({
        id: "naledi",
        name: "Naledi Fresh Foods (Pty) Ltd",
        tradingAs: "Naledi Fresh",
        industry: "Food wholesale",
        region: "Johannesburg",
        hosting: "Shared",
        cluster: "jhb-shared-02",
        status: "healthy",
        version: "2.4.0",
        channel: "stable",
        usersCount: 18,
        mrr: 12400,
        plan: "growth",
        lastBackup: "2026-11-16T21:05:00+02:00",
        alerts: [{ level: "info", text: "One version behind current stable (2.4.1)." }],
        color: "#15803D",
        logoData: null,
        profile: {
          legalName: "Naledi Fresh Foods (Pty) Ltd",
          tradingAs: "Naledi Fresh",
          registrationNumber: "2018/077221/07",
          vatNumber: "4123456789",
          bbbee: "Level 1",
          email: "finance@naledifresh.co.za",
          phone: "011 613 8800",
          website: "https://www.naledifresh.co.za",
          address1: "8 Heidelberg Road, City Deep",
          address2: "",
          city: "Johannesburg",
          postal: "2049",
          province: "Gauteng",
          country: "South Africa",
          currency: "ZAR",
          fiscalYearStart: "01 March",
          terminology: { Customer: "Buyer", Supplier: "Grower / supplier", Item: "Product", Employee: "Employee" },
          sequences: [
            { doc: "Sales invoice", prefix: "NFF-", pad: 6, next: 22019 },
            { doc: "Purchase order", prefix: "NFF-PO-", pad: 5, next: 7741 }
          ],
          templates: { invoice: "Naledi tax invoice", quote: "Price list quote", statement: "Standard statement", payslip: "Standard payslip" }
        },
        modules: moduleMap([...CORE_MODULES, "M09", "M15", "M17", "M18", "M19", "M22", "M23", "M25", "M27", "M29", "M30", "M32", "M40"]),
        users: mkUsers([
          { id: "nf-1", name: "Thabo Molefe", email: "thabo.molefe@naledifresh.co.za", role: "administrator", lastLogin: "2026-11-16T11:20:00+02:00" },
          { id: "nf-2", name: "Carmen Botha", email: "carmen.botha@naledifresh.co.za", role: "sales-manager", lastLogin: "2026-11-16T16:01:00+02:00" }
        ]),
        permissions: defaultPermissions(),
        compliance: defaultCompliance({ name: "Thabo Molefe", email: "thabo.molefe@naledifresh.co.za", phone: "011 613 8800", registered: true }),
        columnOverrides: {},
        sectionOverrides: {}
      }),
      T({
        id: "umuzi",
        name: "Umuzi Electrical (Pty) Ltd",
        tradingAs: "Umuzi Electrical",
        industry: "Electrical wholesale",
        region: "Johannesburg",
        hosting: "Shared",
        cluster: "jhb-shared-02",
        status: "warning",
        version: "2.3.9",
        channel: "stable",
        usersCount: 8,
        mrr: 6900,
        plan: "growth",
        lastBackup: "2026-11-13T02:15:00+02:00",
        alerts: [
          { level: "warning", text: "Last backup is more than 72 hours old." },
          { level: "warning", text: "Instance is two versions behind (2.3.9)." }
        ],
        color: "#B45309",
        logoData: null,
        profile: {
          legalName: "Umuzi Electrical (Pty) Ltd",
          tradingAs: "Umuzi Electrical",
          registrationNumber: "2014/055890/07",
          vatNumber: "4789012345",
          bbbee: "Level 3",
          email: "admin@umuzielectrical.co.za",
          phone: "011 397 2210",
          website: "https://www.umuzielectrical.co.za",
          address1: "19 Pomona Road, Pomona",
          address2: "Kempton Park",
          city: "Johannesburg",
          postal: "1619",
          province: "Gauteng",
          country: "South Africa",
          currency: "ZAR",
          fiscalYearStart: "01 March",
          terminology: { Customer: "Trade account", Supplier: "Supplier", Item: "Catalogue item", Employee: "Employee" },
          sequences: [
            { doc: "Sales invoice", prefix: "UE-", pad: 6, next: 64102 },
            { doc: "POS receipt", prefix: "UE-POS-", pad: 6, next: 19044 }
          ],
          templates: { invoice: "Umuzi tax invoice", quote: "Umuzi quote", statement: "Standard statement", payslip: "Standard payslip" }
        },
        modules: moduleMap([...CORE_MODULES, "M15", "M17", "M18", "M22", "M23", "M25", "M27", "M29", "M40"]),
        users: mkUsers([
          { id: "ue-1", name: "Sipho Nkosi", email: "sipho@umuzielectrical.co.za", role: "administrator", lastLogin: "2026-11-15T09:40:00+02:00" },
          { id: "ue-2", name: "Megan van Wyk", email: "megan@umuzielectrical.co.za", role: "sales-manager", lastLogin: "2026-11-16T13:18:00+02:00" }
        ]),
        permissions: defaultPermissions(),
        compliance: Object.assign(defaultCompliance({ name: "Sipho Nkosi", email: "sipho@umuzielectrical.co.za", phone: "011 397 2210", registered: true }), { retentionSchedule: false, operatorAgreements: false }),
        columnOverrides: {},
        sectionOverrides: {}
      }),
      T({
        id: "table-bay",
        name: "Table Bay Marine Supplies (Pty) Ltd",
        tradingAs: "Table Bay Marine",
        industry: "Marine wholesale",
        region: "Cape Town",
        hosting: "Dedicated",
        cluster: "cpt-ded-01",
        status: "healthy",
        version: "2.4.1",
        channel: "stable",
        usersCount: 15,
        mrr: 14200,
        plan: "professional",
        lastBackup: "2026-11-16T23:05:00+02:00",
        alerts: [],
        color: "#0E7490",
        logoData: null,
        profile: {
          legalName: "Table Bay Marine Supplies (Pty) Ltd",
          tradingAs: "Table Bay Marine",
          registrationNumber: "2011/221098/07",
          vatNumber: "4234567890",
          bbbee: "Level 5",
          email: "accounts@tablebaymarine.co.za",
          phone: "021 510 3344",
          website: "https://www.tablebaymarine.co.za",
          address1: "7 Dock Road, V&A Waterfront",
          address2: "",
          city: "Cape Town",
          postal: "8001",
          province: "Western Cape",
          country: "South Africa",
          currency: "ZAR",
          fiscalYearStart: "01 January",
          terminology: { Customer: "Vessel / account", Supplier: "Supplier", Item: "Part", Employee: "Employee" },
          sequences: [
            { doc: "Sales invoice", prefix: "TBM-", pad: 6, next: 11028 },
            { doc: "Purchase order", prefix: "TBM-PO-", pad: 5, next: 4099 }
          ],
          templates: { invoice: "TBM invoice", quote: "TBM quotation", statement: "Standard statement", payslip: "Standard payslip" }
        },
        modules: moduleMap([...CORE_MODULES, "M09", "M10", "M15", "M17", "M18", "M20", "M22", "M23", "M27", "M28", "M29", "M30", "M41", "M40"]),
        users: mkUsers([
          { id: "tb-1", name: "Helena de Villiers", email: "helena@tablebaymarine.co.za", role: "administrator", lastLogin: "2026-11-16T15:48:00+02:00" }
        ]),
        permissions: defaultPermissions(),
        compliance: defaultCompliance({ name: "Helena de Villiers", email: "helena@tablebaymarine.co.za", phone: "021 510 3344", registered: true }),
        columnOverrides: {},
        sectionOverrides: {}
      }),
      T({
        id: "khaya",
        name: "Khaya Construction (Pty) Ltd",
        tradingAs: "Khaya Construction",
        industry: "Construction",
        region: "Johannesburg",
        hosting: "Shared",
        cluster: "jhb-shared-01",
        status: "healthy",
        version: "2.4.1",
        channel: "stable",
        usersCount: 31,
        mrr: 16800,
        plan: "professional",
        lastBackup: "2026-11-16T22:50:00+02:00",
        alerts: [],
        color: "#B91C1C",
        logoData: null,
        profile: {
          legalName: "Khaya Construction (Pty) Ltd",
          tradingAs: "Khaya Construction",
          registrationNumber: "2008/044112/07",
          vatNumber: "4345678901",
          bbbee: "Level 1",
          email: "finance@khayaconstruction.co.za",
          phone: "011 234 7800",
          website: "https://www.khayaconstruction.co.za",
          address1: "120 Corlett Drive, Melrose",
          address2: "",
          city: "Johannesburg",
          postal: "2196",
          province: "Gauteng",
          country: "South Africa",
          currency: "ZAR",
          fiscalYearStart: "01 March",
          terminology: { Customer: "Client", Supplier: "Subcontractor / supplier", Item: "Material", Employee: "Staff" },
          sequences: [
            { doc: "Sales invoice", prefix: "KC-INV-", pad: 6, next: 5088 },
            { doc: "Project", prefix: "KC-PRJ-", pad: 4, next: 312 },
            { doc: "Purchase order", prefix: "KC-PO-", pad: 6, next: 9901 }
          ],
          templates: { invoice: "Khaya progress invoice", quote: "Khaya tender quote", statement: "Standard statement", payslip: "Khaya payslip" }
        },
        modules: moduleMap([...CORE_MODULES, "M09", "M13", "M14", "M15", "M17", "M18", "M20", "M21", "M22", "M27", "M28", "M29", "M33", "M34", "M36", "M37", "M38", "M39", "M40", "M41"]),
        users: mkUsers([
          { id: "kc-1", name: "Ayanda Mthembu", email: "ayanda@khayaconstruction.co.za", role: "administrator", lastLogin: "2026-11-16T17:30:00+02:00" },
          { id: "kc-2", name: "Pieter Coetzee", email: "pieter@khayaconstruction.co.za", role: "finance-manager", lastLogin: "2026-11-16T16:12:00+02:00" },
          { id: "kc-3", name: "Zanele Dube", email: "zanele@khayaconstruction.co.za", role: "hr-manager", lastLogin: "2026-11-16T10:05:00+02:00" }
        ]),
        permissions: defaultPermissions(),
        compliance: defaultCompliance({ name: "Ayanda Mthembu", email: "ayanda@khayaconstruction.co.za", phone: "011 234 7800", registered: true }),
        columnOverrides: {},
        sectionOverrides: {}
      }),
      T({
        id: "greenfield",
        name: "Greenfield Agri Supplies (Pty) Ltd",
        tradingAs: "Greenfield Agri",
        industry: "Agricultural wholesale",
        region: "Johannesburg",
        hosting: "Shared",
        cluster: "jhb-shared-01",
        status: "canary",
        version: "2.5.0-rc.1",
        channel: "canary",
        usersCount: 9,
        mrr: 7400,
        plan: "growth",
        lastBackup: "2026-11-16T23:55:00+02:00",
        alerts: [{ level: "info", text: "Running canary release 2.5.0-rc.1." }],
        color: "#4D7C0F",
        logoData: null,
        profile: {
          legalName: "Greenfield Agri Supplies (Pty) Ltd",
          tradingAs: "Greenfield Agri",
          registrationNumber: "2019/301442/07",
          vatNumber: "4456789012",
          bbbee: "Level 2",
          email: "hello@greenfieldagri.co.za",
          phone: "011 608 4410",
          website: "https://www.greenfieldagri.co.za",
          address1: "55 Main Road, Midrand",
          address2: "",
          city: "Johannesburg",
          postal: "1685",
          province: "Gauteng",
          country: "South Africa",
          currency: "ZAR",
          fiscalYearStart: "01 March",
          terminology: { Customer: "Farmer / dealer", Supplier: "Supplier", Item: "Product", Employee: "Employee" },
          sequences: [
            { doc: "Sales invoice", prefix: "GF-", pad: 6, next: 8120 }
          ],
          templates: { invoice: "Greenfield invoice", quote: "Seasonal quote", statement: "Standard statement", payslip: "Standard payslip" }
        },
        modules: moduleMap([...CORE_MODULES, "M15", "M17", "M18", "M22", "M27", "M29", "M30", "M37", "M40"]),
        users: mkUsers([
          { id: "gf-1", name: "Willem Steyn", email: "willem@greenfieldagri.co.za", role: "administrator", lastLogin: "2026-11-16T19:02:00+02:00" }
        ]),
        permissions: defaultPermissions(),
        compliance: defaultCompliance({ name: "Willem Steyn", email: "willem@greenfieldagri.co.za", phone: "011 608 4410", registered: true }),
        columnOverrides: {},
        sectionOverrides: {}
      }),
      T({
        id: "atlas",
        name: "Atlas Auto Parts (Pty) Ltd",
        tradingAs: "Atlas Auto Parts",
        industry: "Automotive retail & wholesale",
        region: "Johannesburg",
        hosting: "Dedicated",
        cluster: "jhb-ded-05",
        status: "degraded",
        version: "2.4.1",
        channel: "stable",
        usersCount: 22,
        mrr: 11100,
        plan: "professional",
        lastBackup: "2026-11-16T22:20:00+02:00",
        alerts: [
          { level: "danger", text: "Elevated API error rate on the e-commerce channel (2.1% last hour)." },
          { level: "warning", text: "Dedicated disk usage at 82%." }
        ],
        color: "#1E3A8A",
        logoData: null,
        profile: {
          legalName: "Atlas Auto Parts (Pty) Ltd",
          tradingAs: "Atlas Auto Parts",
          registrationNumber: "2005/018774/07",
          vatNumber: "4567890123",
          bbbee: "Level 6",
          email: "it@atlasautoparts.co.za",
          phone: "011 402 6600",
          website: "https://www.atlasautoparts.co.za",
          address1: "230 Main Reef Road, Selby",
          address2: "",
          city: "Johannesburg",
          postal: "2001",
          province: "Gauteng",
          country: "South Africa",
          currency: "ZAR",
          fiscalYearStart: "01 March",
          terminology: { Customer: "Customer", Supplier: "Supplier", Item: "Part number", Employee: "Employee" },
          sequences: [
            { doc: "Sales invoice", prefix: "AAP-", pad: 7, next: 330184 },
            { doc: "POS receipt", prefix: "AAP-POS-", pad: 7, next: 901122 },
            { doc: "Web order", prefix: "AAP-WEB-", pad: 6, next: 22890 }
          ],
          templates: { invoice: "Atlas tax invoice", quote: "Atlas quote", statement: "Standard statement", payslip: "Standard payslip" }
        },
        modules: moduleMap([...CORE_MODULES, "M09", "M10", "M15", "M17", "M18", "M22", "M23", "M24", "M25", "M26", "M27", "M29", "M30", "M40"]),
        users: mkUsers([
          { id: "aa-1", name: "Rashid Patel", email: "rashid@atlasautoparts.co.za", role: "administrator", lastLogin: "2026-11-17T00:15:00+02:00" },
          { id: "aa-2", name: "Lisa Meyer", email: "lisa@atlasautoparts.co.za", role: "sales-manager", lastLogin: "2026-11-16T18:44:00+02:00" }
        ]),
        permissions: defaultPermissions(),
        compliance: defaultCompliance({ name: "Rashid Patel", email: "rashid@atlasautoparts.co.za", phone: "011 402 6600", registered: true }),
        columnOverrides: {},
        sectionOverrides: {}
      })
    ];
    return tenants;
  }
  var STAFF_SEED = [
    { id: "u-liam", name: "Liam Viljoen", email: "liam@omnivate.co.za", role: "Owner", title: "Founder", access: "all", canImpersonate: true, status: "Active", mfa: true },
    { id: "u-thandi", name: "Thandi Mokoena", email: "thandi.mokoena@omnivate.co.za", role: "Customer success", title: "CS lead", access: "assigned", assigned: ["horizon", "naledi", "khaya", "umuzi"], canImpersonate: true, status: "Active", mfa: true },
    { id: "u-johan", name: "Johan Botha", email: "johan.botha@omnivate.co.za", role: "Support engineer", title: "Support", access: "all", canImpersonate: true, status: "Active", mfa: true },
    { id: "u-ayesha", name: "Ayesha Patel", email: "ayesha.patel@omnivate.co.za", role: "Onboarding specialist", title: "Onboarding", access: "assigned", assigned: ["greenfield", "cape-coast"], canImpersonate: false, status: "Active", mfa: true },
    { id: "u-sipho", name: "Sipho Dlamini", email: "sipho.dlamini@omnivate.co.za", role: "DevOps", title: "Platform", access: "all", canImpersonate: false, status: "Active", mfa: true }
  ];
  function seedAudit(tenants) {
    return [
      { id: "a1", at: "2026-11-16T18:41:00+02:00", actor: "Liam Viljoen", actorId: "u-liam", tenantId: "horizon", action: "Module enabled", target: "Manufacturing (M31)", before: "Off", after: "On", ip: "41.13.88.12" },
      { id: "a2", at: "2026-11-16T18:42:10+02:00", actor: "Liam Viljoen", actorId: "u-liam", tenantId: "horizon", action: "Column renamed", target: "Sales orders \u2192 Customer name", before: "Customer name", after: "Account", ip: "41.13.88.12" },
      { id: "a3", at: "2026-11-16T14:05:00+02:00", actor: "Johan Botha", actorId: "u-johan", tenantId: "atlas", action: "Impersonation started", target: "Rashid Patel", before: "\u2014", after: "Reason: Investigate e-commerce API errors", ip: "102.132.98.4" },
      { id: "a4", at: "2026-11-16T14:38:00+02:00", actor: "Johan Botha", actorId: "u-johan", tenantId: "atlas", action: "Impersonation ended", target: "Rashid Patel", before: "Active", after: "Ended after 33 min", ip: "102.132.98.4" },
      { id: "a5", at: "2026-11-15T09:12:00+02:00", actor: "Sipho Dlamini", actorId: "u-sipho", tenantId: "greenfield", action: "Canary rollout", target: "2.5.0-rc.1", before: "2.4.1", after: "2.5.0-rc.1", ip: "41.76.210.20" },
      { id: "a6", at: "2026-11-14T11:30:00+02:00", actor: "Thandi Mokoena", actorId: "u-thandi", tenantId: "umuzi", action: "User invited", target: "Megan van Wyk", before: "\u2014", after: "Role: Sales manager", ip: "105.184.22.9" },
      { id: "a7", at: "2026-11-13T16:20:00+02:00", actor: "Liam Viljoen", actorId: "u-liam", tenantId: "khaya", action: "Plan changed", target: "Subscription", before: "Growth (R 6,900)", after: "Professional (R 14,500)", ip: "41.13.88.12" },
      { id: "a8", at: "2026-11-12T10:04:00+02:00", actor: "Ayesha Patel", actorId: "u-ayesha", tenantId: "cape-coast", action: "Branding updated", target: "Primary colour", before: "#0F172A", after: "#0369A1", ip: "41.21.44.80" },
      { id: "a9", at: "2026-11-11T08:50:00+02:00", actor: "System", actorId: "system", tenantId: "naledi", action: "Nightly backup", target: "jhb-shared-02", before: "\u2014", after: "Completed (14.2 GB)", ip: "\u2014" },
      { id: "a10", at: "2026-11-10T15:16:00+02:00", actor: "Liam Viljoen", actorId: "u-liam", tenantId: "table-bay", action: "Module disabled", target: "E-commerce (M26)", before: "On", after: "Off", ip: "41.13.88.12" }
    ];
  }
  var RELEASES_SEED = [
    {
      id: "r250",
      version: "2.5.0-rc.1",
      channel: "canary",
      released: "2026-11-15T09:00:00+02:00",
      notes: "Draft inventory forecasts, faster VAT201 export, and a new helpdesk SLA calendar. Canary only.",
      targets: ["greenfield"]
    },
    {
      id: "r241",
      version: "2.4.1",
      channel: "stable",
      released: "2026-11-08T07:00:00+02:00",
      notes: "POPIA DSAR export, grid column persistence fix, and payroll PAYE updates for the 2026/27 year.",
      targets: ["horizon", "cape-coast", "table-bay", "khaya", "atlas"]
    },
    {
      id: "r240",
      version: "2.4.0",
      channel: "stable",
      released: "2026-10-20T07:00:00+02:00",
      notes: "Multi-warehouse transfers, B-BBEE fields on the company profile, and e-commerce channel stock sync.",
      targets: ["naledi"]
    },
    {
      id: "r239",
      version: "2.3.9",
      channel: "stable",
      released: "2026-09-29T07:00:00+02:00",
      notes: "Security patch for session fixation and a bank reconciliation rounding fix.",
      targets: ["umuzi"]
    }
  ];
  function seedState() {
    const tenants = buildTenants();
    return {
      version: 1,
      tenants,
      staff: STAFF_SEED,
      audit: seedAudit(tenants),
      releases: RELEASES_SEED
    };
  }
  var state = null;
  function persist() {
    const copy = { version: 1, tenants: state.tenants, staff: state.staff, audit: state.audit, releases: state.releases };
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(copy));
    } catch (e) {
      console.warn("localStorage full", e);
    }
  }
  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.version === 1 && Array.isArray(parsed.tenants) && parsed.tenants.length) {
          state = parsed;
          return state;
        }
      }
    } catch (e) {
      console.warn("Could not load state", e);
    }
    state = seedState();
    persist();
    return state;
  }
  function getState() {
    return state;
  }
  function getTenant(id) {
    return state.tenants.find((t) => t.id === id);
  }
  function patchTenant(id, mutator, auditEntry) {
    const t = getTenant(id);
    if (!t) return;
    mutator(t);
    if (auditEntry) pushAudit(auditEntry);
    persist();
  }
  function pushAudit(entry) {
    state.audit.unshift(Object.assign({
      id: uid("aud"),
      at: (/* @__PURE__ */ new Date()).toISOString(),
      actor: getSession() && getSession().name || "Liam Viljoen",
      actorId: getSession() && getSession().id || "u-liam",
      ip: "41.13.88.12",
      before: "\u2014",
      after: "\u2014"
    }, entry));
    persist();
  }
  function resetDemo() {
    localStorage.removeItem(STORE_KEY);
    state = seedState();
    persist();
  }
  function getSession() {
    try {
      return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
    } catch {
      return null;
    }
  }
  function setSession(s) {
    if (s) sessionStorage.setItem(SESSION_KEY, JSON.stringify(s));
    else sessionStorage.removeItem(SESSION_KEY);
  }
  function ensureDemoUsers() {
    const specs = {
      "top-quartz": { id: "tq-admin", name: "Top Quartz admin", email: "admin@topquartz.demo" },
      "granite-warehouse": { id: "gw-admin", name: "Granite Warehouse admin", email: "admin@granitewarehouse.demo" }
    };
    Object.keys(specs).forEach((id) => {
      const t = getTenant(id);
      if (!t) return;
      const spec = specs[id];
      t.users = t.users || [];
      let u = t.users.find((x) => String(x.email || "").toLowerCase() === spec.email);
      if (!u) {
        u = { id: spec.id, name: spec.name, email: spec.email, role: "administrator", status: "Active", lastLogin: null, mfa: true, password: "Demo@123" };
        t.users.unshift(u);
      }
      if (!u.password) u.password = "Demo@123";
      if (!u.role) u.role = "administrator";
    });
  }
  function ensureScanFeatures() {
    for (const t of state.tenants) {
      t.features = t.features || {};
      if (typeof t.features.cameraScan !== "boolean") t.features.cameraScan = false;
      t.features.handheldScan = true;
      if (typeof t.features.production !== "boolean") t.features.production = t.id === "granite-warehouse";
      if (typeof t.features.timesheets !== "boolean") t.features.timesheets = t.id === "top-quartz" || t.id === "granite-warehouse";
    }
  }
  function ensureStoneTenants() {
    const byId = Object.fromEntries(state.tenants.map((t) => [t.id, t]));
    const head = stoneTenants().map((t) => byId[t.id] || t);
    const rest = state.tenants.filter((t) => t.id !== "top-quartz" && t.id !== "granite-warehouse");
    state.tenants = head.concat(rest);
  }
  function reloadFromStorage() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed && parsed.version === 1 && Array.isArray(parsed.tenants) && parsed.tenants.length) {
        state = parsed;
        ensureStoneTenants();
        ensureDemoUsers();
        ensureScanFeatures();
        ensureExtraTenant();
        ensureInnovativeFlags();
      }
    } catch (e) {
      console.warn("Could not reload state", e);
    }
  }
  function ensureExtraTenant() {
    if (state.tenants.some((t2) => t2.id === "kasi")) return;
    const t = {
      id: "kasi",
      name: "Kasi Bakery (Pty) Ltd",
      tradingAs: "Kasi Bakery",
      industry: "Bakery & food retail",
      region: "Johannesburg",
      hosting: "Shared",
      cluster: "jhb-shared-02",
      status: "healthy",
      version: "2.4.1",
      channel: "stable",
      usersCount: 4,
      mrr: 2490,
      plan: "starter",
      lastBackup: "2026-11-16T21:40:00+02:00",
      alerts: [],
      color: "#9A3412",
      logoData: null,
      offlineReady: true,
      whatsapp: { invoices: true, payments: true, approvals: false, backups: false, marketing: false, number: "+27 82 441 2090" },
      profile: {
        legalName: "Kasi Bakery (Pty) Ltd",
        tradingAs: "Kasi Bakery",
        registrationNumber: "2021/667812/07",
        vatNumber: "4120987654",
        bbbee: "EME",
        email: "hello@kasibakery.co.za",
        phone: "011 938 2201",
        website: "https://www.kasibakery.co.za",
        address1: "14 Vilakazi Street, Orlando West",
        address2: "Soweto",
        city: "Johannesburg",
        postal: "1804",
        province: "Gauteng",
        country: "South Africa",
        currency: "ZAR",
        fiscalYearStart: "01 March",
        terminology: { Customer: "Customer", Supplier: "Supplier", Item: "Product", Employee: "Staff" },
        sequences: [
          { doc: "Sales invoice", prefix: "KB-INV-", pad: 5, next: 1044 },
          { doc: "POS receipt", prefix: "KB-POS-", pad: 6, next: 88021 }
        ],
        templates: { invoice: "Kasi tax invoice", quote: "Kasi quote", statement: "Standard statement", payslip: "Standard payslip" }
      },
      modules: moduleMap([...CORE_MODULES, "M15", "M17", "M18", "M22", "M25", "M27", "M29"]),
      users: [
        { id: "kb-1", name: "Nomsa Dlamini", email: "nomsa@kasibakery.co.za", role: "administrator", status: "Active", lastLogin: "2026-11-16T15:10:00+02:00", mfa: true }
      ],
      permissions: defaultPermissions(),
      compliance: defaultCompliance({ name: "Nomsa Dlamini", email: "nomsa@kasibakery.co.za", phone: "011 938 2201", registered: true }),
      columnOverrides: {},
      sectionOverrides: {}
    };
    state.tenants.push(t);
    persist();
  }
  function ensureInnovativeFlags() {
    for (const t of state.tenants) {
      if (t.whatsapp === void 0) {
        t.whatsapp = { invoices: true, payments: true, approvals: true, backups: false, marketing: false, number: "" };
      }
      if (t.offlineReady === void 0) {
        t.offlineReady = ["cape-coast", "khaya", "greenfield", "kasi", "horizon"].includes(t.id);
      }
    }
  }
  var INDUSTRY_TEMPLATES = [
    {
      id: "manufacturing",
      name: "Manufacturing",
      blurb: "BOMs, work orders, quality, inventory and finance.",
      color: "#C2410C",
      modules: [...CORE_MODULES, "M09", "M10", "M13", "M14", "M15", "M16", "M17", "M18", "M19", "M20", "M22", "M23", "M27", "M28", "M29", "M30", "M31", "M32", "M36", "M40"]
    },
    {
      id: "logistics",
      name: "Freight & logistics",
      blurb: "Fleet, trips, field service and project costing.",
      color: "#0369A1",
      modules: [...CORE_MODULES, "M09", "M15", "M17", "M18", "M20", "M22", "M27", "M29", "M33", "M34", "M35", "M36", "M37", "M40"]
    },
    {
      id: "wholesale",
      name: "Wholesale distribution",
      blurb: "Stock, warehouses, sales, AR/AP and quality.",
      color: "#15803D",
      modules: [...CORE_MODULES, "M09", "M15", "M17", "M18", "M19", "M22", "M23", "M27", "M29", "M30", "M32", "M40"]
    },
    {
      id: "retail",
      name: "Retail & e-commerce",
      blurb: "POS, loyalty, online channels and inventory.",
      color: "#1E3A8A",
      modules: [...CORE_MODULES, "M09", "M10", "M15", "M17", "M18", "M22", "M23", "M24", "M25", "M26", "M27", "M29", "M30", "M40"]
    },
    {
      id: "construction",
      name: "Construction",
      blurb: "Projects, timesheets, subcontractors, payroll and plant.",
      color: "#B91C1C",
      modules: [...CORE_MODULES, "M09", "M13", "M14", "M15", "M17", "M18", "M20", "M21", "M22", "M27", "M28", "M29", "M33", "M34", "M36", "M37", "M38", "M39", "M40", "M41"]
    },
    {
      id: "bakery",
      name: "Bakery & food retail",
      blurb: "POS, recipes-as-stock, suppliers and a light payroll.",
      color: "#9A3412",
      modules: [...CORE_MODULES, "M15", "M17", "M18", "M22", "M25", "M27", "M29", "M31", "M39"]
    },
    {
      id: "professional",
      name: "Professional services",
      blurb: "Projects, timesheets, CRM, invoicing and HR.",
      color: "#3B2F8F",
      modules: [...CORE_MODULES, "M09", "M15", "M17", "M18", "M22", "M23", "M33", "M34", "M38", "M39", "M40"]
    },
    {
      id: "agriculture",
      name: "Agriculture wholesale",
      blurb: "Inventory, fleet, sales and warehouse.",
      color: "#4D7C0F",
      modules: [...CORE_MODULES, "M15", "M17", "M18", "M22", "M27", "M29", "M30", "M37", "M40"]
    }
  ];
  function resolvedColumns(tenant, moduleCode, screenName) {
    const cols = columnsFor(moduleCode, screenName).map((c) => Object.assign({}, c));
    const key = moduleCode + "::" + screenName;
    const ov = (tenant.columnOverrides || {})[key] || {};
    const byId = Object.fromEntries(cols.map((c) => [c.id, c]));
    let order = ov.order && ov.order.length ? ov.order.filter((id) => byId[id]) : cols.map((c) => c.id);
    for (const c of cols) if (!order.includes(c.id)) order.push(c.id);
    const hidden = new Set(ov.hidden || []);
    const names = ov.names || {};
    return order.map((id, i) => {
      const c = byId[id];
      if (!c) return null;
      return Object.assign({}, c, { visible: !hidden.has(id), displayName: names[id] || c.name, order: i });
    }).filter(Boolean);
  }
  function applyTerm(tenant, label) {
    const map = tenant.profile && tenant.profile.terminology || {};
    let out = String(label || "");
    for (const [from, to] of Object.entries(map)) {
      if (from && to && from !== to) out = out.replace(new RegExp("\\b" + from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "g"), to);
    }
    return out;
  }
  function ensureOverride(tenant, key) {
    tenant.columnOverrides = tenant.columnOverrides || {};
    if (!tenant.columnOverrides[key]) tenant.columnOverrides[key] = { hidden: [], names: {}, order: null, hiddenSections: [] };
    return tenant.columnOverrides[key];
  }
  function varyExample(example, i) {
    const s = String(example ?? "");
    if (!s) return i === 0 ? "\u2014" : String(1e3 + i);
    if (/^\d+(\.\d+)?$/.test(s)) {
      if (!s.includes(".") && s.length >= 6) {
        const n2 = (BigInt(s) + BigInt(i * 17)).toString();
        return n2;
      }
      const n = Number(s);
      return String(Math.round((n + i * (n * 0.07 + 1)) * 100) / 100);
    }
    if (/\d{4}-\d{2}-\d{2}/.test(s)) {
      const d = new Date(s);
      d.setDate(d.getDate() + i);
      return d.toISOString().slice(0, 10);
    }
    if (/^\d{4}\//.test(s)) return s;
    const suffixes = ["", " \u2014 Midrand", " \u2014 Cape Town", " (hold)", " \u2014 rush", "", " \u2014 export", " (cash)"];
    if (i === 0) return s;
    return s + (suffixes[i % suffixes.length] || " #" + (i + 1));
  }
  var ui = {
    fleetQuery: "",
    fleetRegion: "all",
    fleetStatus: "all",
    fleetHosting: "all",
    colModule: {},
    colScreen: {},
    colSearch: {},
    colMode: {},
    // 'grid' | 'form'
    auditQ: "",
    auditTenant: "all",
    auditAction: "all",
    previewModule: {},
    previewScreen: {},
    notifOpen: false,
    sidebarOpen: false,
    pendingEmail: "liam@omnivate.co.za",
    askOpen: false,
    askMessages: [
      { role: "assistant", text: "Hi Liam \u2014 I'm Ask Omnivate. I can switch modules on or off, apply an industry template, or open a tenant. Try \u201Cturn on Payroll for Kasi Bakery\u201D or \u201Capply the retail template to Atlas Auto Parts\u201D." }
    ],
    askInput: "",
    impersonating: null
    // { tenantId, userName, reason }
  };
  var ext = { preview: null, act: null, submit: null, afterReset: null };
  function toast(msg, kind = "") {
    const root = document.getElementById("toast-root");
    if (!root) return;
    const el = document.createElement("div");
    el.className = "toast" + (kind ? " " + kind : "");
    el.innerHTML = icon(kind === "ok" ? "checkCircle" : kind === "warn" ? "alert" : kind === "err" ? "x" : "info", 16) + "<span>" + esc(msg) + "</span>";
    root.appendChild(el);
    setTimeout(() => {
      el.style.opacity = "0";
      el.style.transform = "translateY(6px)";
      el.style.transition = "0.3s";
    }, 2800);
    setTimeout(() => el.remove(), 3300);
  }
  function openModal(html) {
    const root = document.getElementById("modal-root");
    root.innerHTML = `<div class="modal-backdrop" data-act="close-modal"><div class="modal" onclick="event.stopPropagation()">${html}</div></div>`;
    const first = root.querySelector("input,select,textarea,button:not(.icon-btn)");
    if (first) setTimeout(() => first.focus(), 30);
  }
  function closeModal() {
    document.getElementById("modal-root").innerHTML = "";
  }
  function confirmModal({ title, body, confirm, danger, onConfirm }) {
    openModal(`
    <div class="modal-h"><h3>${esc(title)}</h3><button class="icon-btn light" data-act="close-modal">${icon("x", 16)}</button></div>
    <div class="modal-b"><p>${body}</p></div>
    <div class="modal-f">
      <button class="btn btn-secondary" data-act="close-modal">Cancel</button>
      <button class="btn ${danger ? "btn-danger" : "btn-primary"}" id="modal-confirm">${esc(confirm || "Confirm")}</button>
    </div>`);
    document.getElementById("modal-confirm").onclick = () => {
      closeModal();
      onConfirm();
    };
  }
  function parseHash() {
    const raw = (location.hash || "#/fleet").replace(/^#/, "") || "/fleet";
    const parts = raw.split("/").filter(Boolean);
    const view = parts[0] || "fleet";
    return { view, parts, raw };
  }
  function navigate(path) {
    const hash = path.startsWith("#") ? path : "#" + path;
    if (location.hash === hash) render();
    else location.hash = hash;
  }
  function statusBadge(status) {
    const map = {
      healthy: ["badge-success", "Healthy", false],
      warning: ["badge-warning", "Warning", true],
      degraded: ["badge-danger", "Degraded", true],
      canary: ["badge-teal", "Canary", false]
    };
    const [cls, label, pulse] = map[status] || ["badge-neutral", status, false];
    return `<span class="badge ${cls}">${pulse ? '<span class="pulse"></span>' : '<span class="pip"></span>'}${esc(label)}</span>`;
  }
  function hostBadge(h) {
    return `<span class="badge ${h === "Dedicated" ? "badge-indigo" : "badge-neutral"}">${esc(h)}</span>`;
  }
  function offlineBadge(t, small) {
    if (!t.offlineReady) return "";
    return `<span class="badge badge-teal" title="Works in the field with a local cache, then syncs when back online">${icon("zap", 11)} Offline-ready</span>`;
  }
  function renderLogin() {
    document.getElementById("app").innerHTML = `
    <div class="login-wrap">
      <form class="login-card" data-act="login-submit">
        <img class="login-logo" src="assets/logo.png" alt="Omnivate Solutions" />
        <div class="login-kicker">Owner control panel</div>
        <div class="login-title">Sign in</div>
        <div class="login-sub">Sign in with your company account. Omnivate staff open the Control Centre; a tenant user opens only that company.</div>
        <div class="field">
          <label for="login-email">Email</label>
          <input class="input" id="login-email" type="email" autocomplete="username" value="${esc(ui.pendingEmail)}" placeholder="you@omnivate.co.za" required />
        </div>
        <div class="field">
          <label for="login-pass">Password</label>
          <input class="input" id="login-pass" type="password" autocomplete="current-password" placeholder="Demo@123" required />
        </div>
        <button class="btn btn-primary btn-lg" type="submit">${icon("lock", 16)} Continue</button>
        <div class="login-hint">Password <strong>Demo@123</strong> · MFA <strong>123456</strong><br>liam@omnivate.co.za · admin@topquartz.demo · admin@granitewarehouse.demo</div>
      </form>
    </div>`;
  }
  function renderMfa() {
    document.getElementById("app").innerHTML = `
    <div class="login-wrap">
      <form class="login-card" data-act="mfa-submit">
        <img class="login-logo" src="assets/logo.png" alt="Omnivate Solutions" />
        <div class="login-kicker">Two-factor authentication</div>
        <div class="login-title">Enter your code</div>
        <div class="login-sub">We sent a 6-digit code to your authenticator app for <strong>${esc(ui.pendingEmail || "liam@omnivate.co.za")}</strong>.</div>
        <div class="otp-row" id="otp-row">
          ${[0, 1, 2, 3, 4, 5].map((i) => `<input inputmode="numeric" maxlength="1" pattern="[0-9]" data-otp="${i}" aria-label="Digit ${i + 1}" />`).join("")}
        </div>
        <button class="btn btn-primary btn-lg" type="submit">Verify and continue</button>
        <div class="login-hint">Demo code <strong>123456</strong></div>
      </form>
    </div>`;
    const inputs = [...document.querySelectorAll("#otp-row input")];
    inputs[0].focus();
    inputs.forEach((inp, i) => {
      inp.addEventListener("input", (e) => {
        inp.value = inp.value.replace(/\D/g, "").slice(-1);
        if (inp.value && inputs[i + 1]) inputs[i + 1].focus();
      });
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !inp.value && inputs[i - 1]) inputs[i - 1].focus();
      });
      inp.addEventListener("paste", (e) => {
        const text = (e.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, 6);
        if (!text) return;
        e.preventDefault();
        text.split("").forEach((ch, j) => {
          if (inputs[j]) inputs[j].value = ch;
        });
        inputs[Math.min(text.length, 5)].focus();
      });
    });
  }
  function matchAccount(email, password) {
    const em = String(email || "").trim().toLowerCase();
    if (!em) return { error: "Enter the email address" };
    for (const t of state.tenants) {
      const u = (t.users || []).find((x) => String(x.email || "").toLowerCase() === em);
      if (!u) continue;
      const pw = u.password || "Demo@123";
      if (password !== pw) return { error: "Incorrect password" };
      return { kind: "tenant", tenantId: t.id, id: u.id, name: u.name, email: u.email, role: u.role };
    }
    const staff = (state.staff || []).find((s) => String(s.email || "").toLowerCase() === em);
    const ownerish = !!staff || em === "liam@omnivate" || em.endsWith("@omnivate.co.za");
    if (ownerish) {
      if (!password) return { error: "Enter the password" };
      const person = staff || { id: "u-liam", name: "Liam Viljoen", email: "liam@omnivate.co.za", role: "Owner" };
      return { kind: "owner", id: person.id, name: person.name, email: person.email || em, role: person.role || "Owner" };
    }
    return { error: "Unknown account. Use one of the demo logins on this screen." };
  }
  function homeFor(session) {
    if (session && session.kind === "tenant" && session.tenantId) return "#/preview/" + session.tenantId + "/work/home";
    return "#/fleet";
  }
  function completeLogin() {
    const auth = ui.pendingAuth;
    if (!auth) {
      navigate("#/login");
      return;
    }
    setSession(auth);
    if (auth.kind === "tenant") {
      patchTenant(auth.tenantId, (x) => {
        const u = (x.users || []).find((uu) => uu.id === auth.id);
        if (u) u.lastLogin = (/* @__PURE__ */ new Date()).toISOString();
      });
      const t = getTenant(auth.tenantId);
      navigate("#/preview/" + auth.tenantId + "/work/home");
      toast("Signed in to " + ((t && (t.tradingAs || t.name)) || "workspace"), "ok");
      return;
    }
    navigate("#/fleet");
    toast("Welcome back, " + (auth.name || "Liam"), "ok");
  }
  function allAlerts() {
    const items = [];
    for (const t of state.tenants) {
      for (const a of t.alerts || []) items.push({ tenantId: t.id, tenant: t.name, level: a.level, text: a.text });
    }
    return items;
  }
  function renderShell(inner, crumbsHtml) {
    const session = getSession();
    const alerts = allAlerts();
    const danger = alerts.filter((a) => a.level === "danger" || a.level === "warning").length;
    const route = parseHash();
    const nav = [
      { href: "#/fleet", id: "fleet", label: "Fleet", ic: "building" },
      { href: "#/users", id: "users", label: "Global users", ic: "users" },
      { href: "#/releases", id: "releases", label: "Releases", ic: "rocket" }
    ];
    document.getElementById("app").innerHTML = `
    <div class="shell">
      <div class="sidebar-backdrop${ui.sidebarOpen ? " show" : ""}" data-act="close-sidebar"></div>
      <aside class="sidebar${ui.sidebarOpen ? " open" : ""}">
        <div class="sidebar-brand">
          <img class="icon" src="assets/icon.png" alt="" />
          <div class="word"><strong>OMNIVATE</strong><span>Solutions</span></div>
        </div>
        <nav class="nav">
          <div class="nav-label">Control panel</div>
          ${nav.map((n) => `
            <a class="nav-item ${route.view === n.id || n.id === "fleet" && route.view === "tenants" ? "active" : ""}" href="${n.href}">
              ${icon(n.ic)}${n.label}
              ${n.id === "fleet" && danger ? `<span class="badge-count">${danger}</span>` : ""}
            </a>`).join("")}
          <div class="nav-label">Shortcuts</div>
          <a class="nav-item" href="#/fleet" data-act="open-ask">${icon("zap")} Ask Omnivate</a>
          <a class="nav-item" href="#" data-act="open-migrate">${icon("upload")} Migrate data</a>
          <a class="nav-item" href="#" data-act="open-templates">${icon("layers")} Industry templates</a>
        </nav>
        <div class="sidebar-user">
          <div class="avatar">${esc(initials(session && session.name))}</div>
          <div class="meta"><strong>${esc(session && session.name)}</strong><span>${esc(session && session.role)} \xB7 Omnivate</span></div>
          <button class="icon-btn" title="Reset demo data" data-act="reset-demo">${icon("rollback", 16)}</button>
          <button class="icon-btn" title="Sign out" data-act="logout">${icon("logout", 16)}</button>
        </div>
      </aside>
      <div class="main">
        <header class="topbar">
          <button class="icon-btn light sidebar-toggle" data-act="toggle-sidebar" aria-label="Open menu">${icon("layers", 18)}</button>
          <div class="crumbs">${crumbsHtml}</div>
          <label class="search hide-sm">
            ${icon("search", 16)}
            <input id="global-search" placeholder="Search tenants\u2026" value="${esc(ui.fleetQuery)}" />
          </label>
          <div class="topbar-actions">
            <button class="icon-btn light bell" data-act="toggle-notifs" aria-label="Alerts">
              ${icon("bell", 18)}
              ${danger ? '<span class="dot"></span>' : ""}
            </button>
            <button class="btn btn-sm btn-teal" data-act="open-ask">${icon("zap", 14)} Ask Omnivate</button>
          </div>
        </header>
        ${ui.notifOpen ? renderNotifPanel(alerts) : ""}
        <div class="content">${inner}</div>
      </div>
    </div>
    ${ui.askOpen ? renderAskPanel() : `<button class="ask-fab" data-act="open-ask" title="Ask Omnivate">${icon("zap", 18)} <span>Ask Omnivate</span></button>`}
    <nav class="owner-tabs">
      <a class="${route.view === "fleet" || route.view === "tenants" ? "on" : ""}" href="#/fleet">Fleet</a>
      <a class="${route.view === "users" ? "on" : ""}" href="#/users">Users</a>
      <a class="${route.view === "releases" ? "on" : ""}" href="#/releases">Releases</a>
      <button type="button" data-act="toggle-sidebar">Menu</button>
    </nav>
  `;
    const gs = document.getElementById("global-search");
    if (gs) {
      gs.addEventListener("input", (e) => {
        ui.fleetQuery = e.target.value;
        if (parseHash().view === "fleet") navigate("#/fleet");
      });
      gs.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && ui.fleetQuery.trim()) navigate("#/fleet");
      });
    }
  }
  function renderNotifPanel(alerts) {
    return `
    <div class="notif-pop" id="notif-pop">
      <div class="card-h"><h2>Alerts</h2><button class="icon-btn light" data-act="toggle-notifs">${icon("x", 16)}</button></div>
      <div class="card-b" style="padding:0;max-height:360px;overflow:auto">
        ${alerts.length ? alerts.map((a) => `
          <a class="notif-item" href="#/tenants/${esc(a.tenantId)}/profile">
            <span class="badge ${a.level === "danger" ? "badge-danger" : a.level === "warning" ? "badge-warning" : "badge-info"}">${esc(a.level)}</span>
            <div><strong>${esc(a.tenant)}</strong><div class="tiny">${esc(a.text)}</div></div>
          </a>`).join("") : `<div class="empty">No open alerts.</div>`}
      </div>
    </div>`;
  }
  function renderFleet() {
    const q = ui.fleetQuery.trim().toLowerCase();
    let rows = state.tenants.slice();
    if (q) rows = rows.filter((t) => (t.name + t.industry + t.region + t.cluster).toLowerCase().includes(q));
    if (ui.fleetRegion !== "all") rows = rows.filter((t) => t.region === ui.fleetRegion);
    if (ui.fleetStatus !== "all") rows = rows.filter((t) => t.status === ui.fleetStatus);
    if (ui.fleetHosting !== "all") rows = rows.filter((t) => t.hosting === ui.fleetHosting);
    const mrr = state.tenants.reduce((s, t) => s + (t.mrr || 0), 0);
    const users = state.tenants.reduce((s, t) => s + (t.usersCount || (t.users || []).length), 0);
    const alerts = allAlerts().filter((a) => a.level === "danger" || a.level === "warning").length;
    const healthy = state.tenants.filter((t) => t.status === "healthy" || t.status === "canary").length;
    const inner = `
    <div class="page-head">
      <div>
        <h1>Fleet</h1>
        <p>Every ERP instance in one place \u2014 shared clusters and dedicated boxes, Johannesburg and Cape Town.</p>
      </div>
      <div class="actions">
        <button class="btn btn-secondary" data-act="reset-demo">${icon("rollback", 16)} Reset demo data</button>
        <button class="btn btn-secondary" data-act="open-migrate">${icon("upload", 16)} Migrate from Pastel / Sage / Xero</button>
        <button class="btn btn-primary" data-act="open-new-tenant">${icon("plus", 16)} New instance</button>
      </div>
    </div>
    <div class="kpi-grid">
      <div class="kpi"><div class="label">Monthly recurring revenue</div><div class="value">${zar(mrr)}</div><div class="sub"><span class="delta up">ZAR \xB7 ${state.tenants.length} subscriptions</span></div></div>
      <div class="kpi"><div class="label">Instances</div><div class="value">${state.tenants.length}</div><div class="sub">${healthy} healthy \xB7 ${state.tenants.filter((t) => t.hosting === "Dedicated").length} dedicated</div></div>
      <div class="kpi"><div class="label">End users</div><div class="value">${users}</div><div class="sub">Across all tenants</div></div>
      <div class="kpi"><div class="label">Open alerts</div><div class="value">${alerts}</div><div class="sub">${alerts ? "Action needed on backups, versions or health" : "All clear"}</div></div>
    </div>
    <div class="card">
      <div class="toolbar">
        <input class="input" style="max-width:220px;height:32px" placeholder="Filter tenants\u2026" value="${esc(ui.fleetQuery)}" data-act="fleet-q" />
        <select class="select" style="max-width:150px;height:32px" data-act="fleet-region">
          <option value="all">All regions</option>
          <option value="Johannesburg" ${ui.fleetRegion === "Johannesburg" ? "selected" : ""}>Johannesburg</option>
          <option value="Cape Town" ${ui.fleetRegion === "Cape Town" ? "selected" : ""}>Cape Town</option>
        </select>
        <select class="select" style="max-width:140px;height:32px" data-act="fleet-hosting">
          <option value="all">All hosting</option>
          <option value="Shared" ${ui.fleetHosting === "Shared" ? "selected" : ""}>Shared</option>
          <option value="Dedicated" ${ui.fleetHosting === "Dedicated" ? "selected" : ""}>Dedicated</option>
        </select>
        <select class="select" style="max-width:140px;height:32px" data-act="fleet-status">
          <option value="all">All statuses</option>
          <option value="healthy" ${ui.fleetStatus === "healthy" ? "selected" : ""}>Healthy</option>
          <option value="warning" ${ui.fleetStatus === "warning" ? "selected" : ""}>Warning</option>
          <option value="degraded" ${ui.fleetStatus === "degraded" ? "selected" : ""}>Degraded</option>
          <option value="canary" ${ui.fleetStatus === "canary" ? "selected" : ""}>Canary</option>
        </select>
        <div class="spacer"></div>
        <span class="tiny">${rows.length} shown</span>
      </div>
      <div class="table-wrap">
        <table class="data">
          <thead>
            <tr>
              <th>Tenant</th>
              <th>Region</th>
              <th>Hosting</th>
              <th>Status</th>
              <th>Version</th>
              <th>Users</th>
              <th>Modules</th>
              <th class="right">MRR</th>
              <th>Last backup</th>
              <th>Alerts</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${rows.map((t) => `
              <tr data-act="open-tenant" data-id="${t.id}">
                <td>
                  <div class="cell-name">
                    <div class="tile" style="background:${esc(t.color)}">${esc(initials(t.tradingAs || t.name))}</div>
                    <div class="stack">
                      <strong>${esc(t.name)}</strong>
                      <span>${esc(t.industry)}${t.offlineReady ? " \xB7 Offline-ready" : ""}</span>
                    </div>
                  </div>
                </td>
                <td class="nowrap">${esc(t.region)}</td>
                <td>${hostBadge(t.hosting)}<div class="tiny mono">${esc(t.cluster)}</div></td>
                <td>${statusBadge(t.status)}</td>
                <td class="mono">${esc(t.version)}${t.channel === "canary" ? ' <span class="badge badge-teal">canary</span>' : ""}</td>
                <td>${t.usersCount || (t.users || []).length}</td>
                <td>${countEnabled(t)} / 41</td>
                <td class="right nowrap">${zar(t.mrr)}</td>
                <td class="tiny nowrap">${fmtShort(t.lastBackup)}</td>
                <td>${(t.alerts || []).length ? `<span class="badge ${t.alerts.some((a) => a.level === "danger") ? "badge-danger" : t.alerts.some((a) => a.level === "warning") ? "badge-warning" : "badge-info"}">${t.alerts.length}</span>` : '<span class="muted">\u2014</span>'}</td>
                <td>
                  <div class="row-actions" onclick="event.stopPropagation()">
                    <button class="btn btn-sm btn-secondary" data-act="open-tenant" data-id="${t.id}">Open</button>
                    <button class="btn btn-sm btn-teal" title="Preview client app" data-act="preview-tenant" data-id="${t.id}">${icon("eye", 14)}</button>
                  </div>
                </td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>`;
    renderShell(inner, `<strong>Fleet</strong>`);
  }
  var TENANT_TABS = [
    { id: "profile", label: "Company & branding" },
    { id: "modules", label: "Modules" },
    { id: "columns", label: "Screens & columns" },
    { id: "users", label: "Users & roles" },
    { id: "billing", label: "Plan & billing" },
    { id: "audit", label: "Audit log" },
    { id: "compliance", label: "Compliance" }
  ];
  function renderTenant() {
    const { parts } = parseHash();
    const id = parts[1];
    const tab = parts[2] || "profile";
    const t = getTenant(id);
    if (!t) {
      renderShell(`<div class="empty"><h3>Tenant not found</h3><p><a href="#/fleet">Back to fleet</a></p></div>`, crumb("Fleet", "#/fleet", "Not found"));
      return;
    }
    const hero = `
    <div class="tenant-hero">
      <div class="tile" style="background:${esc(t.color)}">${t.logoData ? `<img src="${t.logoData}" alt="" style="width:100%;height:100%;object-fit:contain">` : esc(initials(t.tradingAs || t.name))}</div>
      <div>
        <h1>${esc(t.name)}</h1>
        <div class="meta-row">
          ${statusBadge(t.status)}
          ${hostBadge(t.hosting)}
          <span class="badge badge-neutral">${esc(t.region)} \xB7 ${esc(t.cluster)}</span>
          <span class="badge badge-indigo mono">${esc(t.version)}</span>
          ${offlineBadge(t)}
          <span class="tiny">${countEnabled(t)} modules \xB7 ${t.usersCount || (t.users || []).length} users \xB7 ${zar(t.mrr)}/mo</span>
        </div>
      </div>
      <div class="actions">
        <button class="btn btn-secondary" data-act="switch-tenant" data-id="${t.id}">${icon("external", 16)} Switch into tenant</button>
        <button class="btn btn-teal" data-act="preview-tenant" data-id="${t.id}">${icon("eye", 16)} Preview client app</button>
      </div>
    </div>
    ${(t.alerts || []).length ? `<div class="card" style="margin-bottom:16px"><div class="card-b">${t.alerts.map((a) => `
      <div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:6px">
        <span class="badge ${a.level === "danger" ? "badge-danger" : a.level === "warning" ? "badge-warning" : "badge-info"}">${esc(a.level)}</span>
        <span>${esc(a.text)}</span>
      </div>`).join("")}</div></div>` : ""}
    <div class="card">
      <div class="tabs">
        ${TENANT_TABS.map((tb) => `<a class="tab ${tab === tb.id ? "active" : ""}" href="#/tenants/${t.id}/${tb.id}">${esc(tb.label)}</a>`).join("")}
      </div>
      <div class="card-b">${renderTenantTab(t, tab)}</div>
    </div>`;
    renderShell(hero, crumb("Fleet", "#/fleet", t.tradingAs || t.name));
  }
  function crumb(a, ah, b) {
    return `<a href="${ah}">${esc(a)}</a> ${icon("chevronRight", 14)} <strong>${esc(b)}</strong>`;
  }
  function renderTenantTab(t, tab) {
    if (tab === "modules") return renderModulesTab(t);
    if (tab === "columns") return renderColumnsTab(t);
    if (tab === "users") return renderTenantUsersTab(t);
    if (tab === "billing") return renderBillingTab(t);
    if (tab === "audit") return renderAuditTab(t);
    if (tab === "compliance") return renderComplianceTab(t);
    return renderProfileTab(t);
  }
  function renderProfileTab(t) {
    const p = t.profile;
    const swatches = ["#3B2F8F", "#14B8A6", "#C2410C", "#0369A1", "#15803D", "#B45309", "#0E7490", "#B91C1C", "#4D7C0F", "#1E3A8A", "#9A3412", "#0F172A"];
    const wa = t.whatsapp || {};
    return `
    <form data-act="save-profile" data-id="${t.id}">
      <div class="two-col">
        <div>
          <h2 style="font-size:15px;margin-bottom:12px">Company profile</h2>
          <div class="form-grid">
            <div class="field"><label>Legal name</label><input class="input" name="legalName" value="${esc(p.legalName)}" /></div>
            <div class="field"><label>Trading as</label><input class="input" name="tradingAs" value="${esc(p.tradingAs)}" /></div>
            <div class="field"><label>Registration number</label><input class="input" name="registrationNumber" value="${esc(p.registrationNumber)}" /></div>
            <div class="field"><label>VAT number</label><input class="input" name="vatNumber" value="${esc(p.vatNumber)}" /></div>
            <div class="field"><label>B-BBEE level</label>
              <select class="select" name="bbbee">${["Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6", "Level 7", "Level 8", "EME", "QSE", "Non-compliant"].map((x) => `<option ${p.bbbee === x ? "selected" : ""}>${x}</option>`).join("")}</select>
            </div>
            <div class="field"><label>Currency</label><input class="input" name="currency" value="${esc(p.currency)}" /></div>
            <div class="field"><label>Fiscal year start</label>
              <select class="select" name="fiscalYearStart">${["01 March", "01 January", "01 July"].map((x) => `<option ${p.fiscalYearStart === x ? "selected" : ""}>${x}</option>`).join("")}</select>
            </div>
            <div class="field"><label>Industry</label><input class="input" name="industry" value="${esc(t.industry)}" /></div>
            <div class="field"><label>Email</label><input class="input" name="email" value="${esc(p.email)}" /></div>
            <div class="field"><label>Phone</label><input class="input" name="phone" value="${esc(p.phone)}" /></div>
            <div class="field span-2"><label>Website</label><input class="input" name="website" value="${esc(p.website)}" /></div>
            <div class="field span-2"><label>Street address</label><input class="input" name="address1" value="${esc(p.address1)}" /></div>
            <div class="field"><label>Suburb</label><input class="input" name="address2" value="${esc(p.address2)}" /></div>
            <div class="field"><label>City</label><input class="input" name="city" value="${esc(p.city)}" /></div>
            <div class="field"><label>Postal code</label><input class="input" name="postal" value="${esc(p.postal)}" /></div>
            <div class="field"><label>Province</label><input class="input" name="province" value="${esc(p.province)}" /></div>
          </div>
        </div>
        <div>
          <h2 style="font-size:15px;margin-bottom:12px">Branding</h2>
          <div class="field">
            <label>Logo</label>
            <div style="display:flex;gap:12px;align-items:center">
              <div class="logo-preview" id="logo-prev">${t.logoData ? `<img src="${t.logoData}" alt="Logo preview">` : "No logo<br>uploaded"}</div>
              <div>
                <input type="file" accept="image/*" id="logo-file" data-id="${t.id}" style="font-size:12px" />
                <div class="hint">PNG or JPG, previewed instantly in the client app.</div>
              </div>
            </div>
          </div>
          <div class="field">
            <label>Primary colour</label>
            <div class="swatches">
              ${swatches.map((c) => `<button type="button" class="swatch ${t.color === c ? "selected" : ""}" style="background:${c}" data-act="set-color" data-id="${t.id}" data-color="${c}" title="${c}"></button>`).join("")}
              <input type="color" value="${esc(t.color)}" data-act="set-color-input" data-id="${t.id}" style="width:36px;height:28px;border:0;background:none" />
            </div>
          </div>
          <div class="field">
            <label class="switch-label" style="display:flex;align-items:center;gap:10px">
              <label class="switch"><input type="checkbox" data-act="toggle-offline" data-id="${t.id}" ${t.offlineReady ? "checked" : ""} /><span></span></label>
              Offline-ready client
            </label>
            <div class="hint">Field staff can capture sales, stock and timesheets without signal; data syncs when they are back online. Residency stays in South Africa.</div>
          </div>
          <h2 style="font-size:15px;margin:18px 0 12px">WhatsApp notifications</h2>
          <div class="field"><label>Business number</label><input class="input" name="waNumber" value="${esc(wa.number || "")}" placeholder="+27 \u2026" /></div>
          ${[["invoices", "Invoice PDFs to customers"], ["payments", "Payment reminders"], ["approvals", "Approval requests to managers"], ["backups", "Backup / health alerts to you"], ["marketing", "Marketing (opt-in only, POPIA s.69)"]].map(([k, l]) => `
            <label class="field-row" style="border:0;padding:6px 0">
              <label class="switch sm"><input type="checkbox" name="wa_${k}" ${wa[k] ? "checked" : ""} /><span></span></label>
              <span>${l}</span>
            </label>`).join("")}
        </div>
      </div>
      <h2 style="font-size:15px;margin:18px 0 8px">Business details</h2>
      <p class="tiny" style="margin-bottom:12px">Printed on quotes, invoices, sales orders, goods received notes, delivery notes and job cards for this tenant. Logo, address and VAT number above are used as they stand. Bank details stay marked as an example until you untick that box.</p>
      <div class="form-grid">
        <div class="field"><label>Document colour</label><input class="input" name="brandColor" type="text" value="${esc((p.business || {}).brandColor || t.color || "")}" placeholder="#9B1B2E" /></div>
        <div class="field"><label>Bank (example until you change it)</label><input class="input" name="bankName" value="${esc((p.business || {}).bankName || "")}" /></div>
        <div class="field"><label>Account name</label><input class="input" name="accountName" value="${esc((p.business || {}).accountName || "")}" /></div>
        <div class="field"><label>Account number</label><input class="input" name="accountNumber" value="${esc((p.business || {}).accountNumber || "")}" /></div>
        <div class="field"><label>Branch code</label><input class="input" name="branchCode" value="${esc((p.business || {}).branchCode || "")}" /></div>
        <div class="field" style="justify-content:flex-end">
          <label class="switch-label" style="display:flex;align-items:center;gap:10px">
            <label class="switch"><input type="checkbox" name="bankIsExample" ${(p.business || {}).bankIsExample !== false ? "checked" : ""} /><span></span></label>
            Mark banking details as an example
          </label>
        </div>
        <div class="field span-2"><label>Document footer</label><textarea class="textarea" name="docFooter" rows="3">${esc((p.business || {}).footer || "")}</textarea></div>
      </div>
      <h2 style="font-size:15px;margin:8px 0 12px">Terminology overrides</h2>
      <div class="form-grid">
        ${["Customer", "Supplier", "Item", "Employee"].map((k) => `
          <div class="field"><label>${k} is called</label><input class="input" name="term_${k}" value="${esc((p.terminology || {})[k] || k)}" /></div>`).join("")}
      </div>
      <h2 style="font-size:15px;margin:8px 0 12px">Number sequences</h2>
      <div class="table-wrap">
        <table class="data">
          <thead><tr><th>Document</th><th>Prefix</th><th>Padding</th><th>Next number</th><th>Example</th></tr></thead>
          <tbody>
            ${(p.sequences || []).map((s, i) => `
              <tr>
                <td>${esc(s.doc)}</td>
                <td><input class="input" style="height:30px" name="seq_prefix_${i}" value="${esc(s.prefix)}" /></td>
                <td><input class="input" style="height:30px;width:80px" name="seq_pad_${i}" type="number" value="${s.pad}" /></td>
                <td><input class="input" style="height:30px;width:110px" name="seq_next_${i}" type="number" value="${s.next}" /></td>
                <td class="mono">${esc(s.prefix + String(s.next).padStart(s.pad, "0"))}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
      <h2 style="font-size:15px;margin:16px 0 12px">Document templates</h2>
      <div class="form-grid">
        ${Object.entries(p.templates || {}).map(([k, v]) => `
          <div class="field"><label>${esc(k.charAt(0).toUpperCase() + k.slice(1))}</label><input class="input" name="tpl_${k}" value="${esc(v)}" /></div>`).join("")}
      </div>
      <div style="display:flex;gap:8px;margin-top:8px">
        <button class="btn btn-primary" type="submit">${icon("check", 16)} Save company settings</button>
      </div>
    </form>`;
  }
  function renderModulesTab(t) {
    const enabled = countEnabled(t);
    return `
    <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px">
      <div><strong>${enabled} of 41 modules on</strong><div class="tiny">Changes apply to the client app immediately. Use Preview to see the menu update live.</div></div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-sm btn-secondary" data-act="open-templates" data-id="${t.id}">${icon("layers", 14)} Apply industry template</button>
        <button class="btn btn-sm btn-secondary" data-act="modules-core" data-id="${t.id}">Core only</button>
        <button class="btn btn-sm btn-secondary" data-act="modules-all" data-id="${t.id}">Enable all</button>
      </div>
    </div>
    <div class="card" style="margin-bottom:14px;box-shadow:none">
      <div class="card-b">
        <h2 style="font-size:15px;margin-bottom:8px">Shop-floor scanning</h2>
        <label class="field-row" style="border:0;padding:6px 0">
          <label class="switch"><input type="checkbox" data-act="toggle-camera-scan" data-id="${t.id}" ${t.features && t.features.cameraScan ? "checked" : ""} /><span></span></label>
          <span><strong>Scan by camera</strong><div class="tiny">Phone camera buttons in this company's workspace. Off hides them. Handheld USB and Bluetooth scanners are not affected.</div></span>
        </label>
        <div style="margin-top:6px"><span class="badge badge-teal">Handheld scanner on</span> <span class="tiny">Keyboard wedge — types the code and presses Enter. Always available on stock, quotes, invoices and sales orders.</span></div>
        <label class="field-row" style="border:0;padding:8px 0 0">
          <label class="switch"><input type="checkbox" data-act="toggle-feature" data-id="${t.id}" data-key="production" data-label="Production" ${t.features && t.features.production ? "checked" : ""} /><span></span></label>
          <span><strong>Production</strong><div class="tiny">Blocks from quarry to slab: receiving, cutting, polishing, job cards and recovery. On for The Granite Warehouse in the demo.</div></span>
        </label>
        <label class="field-row" style="border:0;padding:6px 0">
          <label class="switch"><input type="checkbox" data-act="toggle-feature" data-id="${t.id}" data-key="timesheets" data-label="Timesheets" ${t.features && t.features.timesheets ? "checked" : ""} /><span></span></label>
          <span><strong>Timesheets</strong><div class="tiny">Shifts, roster, clock in/out, BCEA overtime, night allowance and leave.</div></span>
        </label>
      </div>
    </div>
    ${AREAS.map((area) => {
      const mods = MODULES.filter((m) => m.area === area);
      const on = mods.filter((m) => t.modules[m.code]).length;
      return `<div class="area-block">
        <h3>${icon(AREA_ICON[area] || "settings", 14)} ${esc(area)} <span class="count">${on}/${mods.length} on</span></h3>
        <div class="mod-grid">
          ${mods.map((m) => `
            <div class="mod-card ${t.modules[m.code] ? "on" : "off"}">
              <div class="body">
                <div class="code">${esc(m.code)}</div>
                <h4>${esc(m.name)}</h4>
                <p>${esc(m.description)}</p>
                <div class="meta">${m.screenCount} screens \xB7 ${m.columnCount} columns</div>
              </div>
              <label class="switch"><input type="checkbox" data-act="toggle-module" data-id="${t.id}" data-code="${m.code}" ${t.modules[m.code] ? "checked" : ""} /><span></span></label>
            </div>`).join("")}
        </div>
      </div>`;
    }).join("")}`;
  }
  function renderColumnsTab(t) {
    const enabled = enabledModules(t);
    const mid = ui.colModule[t.id] || (t.id === "granite-warehouse" ? "M22" : enabled[0] && enabled[0].code) || "M22";
    let screens = screensFor(mid);
    if (t.id === "granite-warehouse" && mid === "M22" && !screens.some((s) => s.name === "Slab orders")) {
      screens = screens.concat([{ name: "Slab orders", type: "List grid", columnCount: SLAB_ORDER_COLS.length, purpose: "Wholesale slab and offcut orders. Hiding a column here removes it from the client grid." }]);
    }
    if (!ui.colScreen[t.id] && t.id === "granite-warehouse" && mid === "M22") ui.colScreen[t.id] = "Slab orders";
    const sid = ui.colScreen[t.id] || screens[0] && screens[0].name || "";
    const q = (ui.colSearch[t.id] || "").toLowerCase();
    const mode = ui.colMode[t.id] || "grid";
    const cols = sid ? resolvedColumns(t, mid, sid) : [];
    const shown = q ? cols.filter((c) => (c.displayName + c.name + c.dataType).toLowerCase().includes(q)) : cols;
    const visCount = cols.filter((c) => c.visible).length;
    return `
    <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:12px">
      <div class="tiny">Pick a module and screen, then show, hide, rename or reorder columns. The client preview uses this layout live.</div>
      <div style="display:flex;gap:6px">
        <button class="btn btn-sm ${mode === "grid" ? "btn-primary" : "btn-secondary"}" data-act="col-mode" data-id="${t.id}" data-mode="grid">Grid columns</button>
        <button class="btn btn-sm ${mode === "form" ? "btn-primary" : "btn-secondary"}" data-act="col-mode" data-id="${t.id}" data-mode="form">Form sections</button>
      </div>
    </div>
    <div class="editor">
      <div class="editor-col">
        <div class="col-h">Modules</div>
        <div class="editor-list">
          ${enabled.length ? enabled.map((m) => `
            <div class="editor-item ${m.code === mid ? "active" : ""}" data-act="col-mod" data-id="${t.id}" data-code="${m.code}">
              ${esc(m.name)}<span class="muted">${m.screenCount}</span>
            </div>`).join("") : `<div class="empty">Enable a module first.</div>`}
        </div>
      </div>
      <div class="editor-col">
        <div class="col-h">Screens</div>
        <div class="editor-list">
          ${screens.map((s) => `
            <div class="editor-item ${s.name === sid ? "active" : ""}" data-act="col-scr" data-id="${t.id}" data-name="${esc(s.name)}">
              <div>
                <div>${esc(s.name)}</div>
                <div class="tiny">${esc(s.type)}</div>
              </div>
              <span class="muted">${s.columnCount}</span>
            </div>`).join("")}
        </div>
      </div>
      <div class="editor-col">
        <div class="col-h">
          <span>${mode === "grid" ? `Columns \xB7 ${visCount}/${cols.length} visible` : "Form sections & fields"}</span>
        </div>
        ${mode === "grid" ? `
          <div style="padding:8px 10px;border-bottom:1px solid var(--border)">
            <input class="input" style="height:32px" placeholder="Search columns\u2026" value="${esc(ui.colSearch[t.id] || "")}" data-act="col-search" data-id="${t.id}" />
          </div>
          <div class="editor-list" id="col-list">
            ${shown.map((c, i) => `
              <div class="col-row" draggable="true" data-col-id="${esc(c.id)}" data-act-drag="${t.id}" data-screen="${esc(sid)}" data-module="${mid}">
                <span class="handle" title="Drag to reorder">${icon("grip", 14)}</span>
                <span class="idx">${c.order + 1}</span>
                <input class="rename" value="${esc(c.displayName)}" data-act="rename-col" data-id="${t.id}" data-key="${mid}::${esc(sid)}" data-col="${esc(c.id)}" title="${esc(c.name)}${c.displayName !== c.name ? " (was " + c.name + ")" : ""}" />
                <span class="dtype">${esc(c.dataType)}${c.required ? " \xB7 req" : ""}</span>
                <label class="switch sm"><input type="checkbox" data-act="toggle-col" data-id="${t.id}" data-key="${mid}::${esc(sid)}" data-col="${esc(c.id)}" ${c.visible ? "checked" : ""} /><span></span></label>
                <button class="icon-tiny" data-act="col-up" data-id="${t.id}" data-key="${mid}::${esc(sid)}" data-col="${esc(c.id)}" title="Move up">${icon("arrowUp", 14)}</button>
                <button class="icon-tiny" data-act="col-down" data-id="${t.id}" data-key="${mid}::${esc(sid)}" data-col="${esc(c.id)}" title="Move down">${icon("arrowDown", 14)}</button>
              </div>`).join("") || '<div class="empty">No columns.</div>'}
          </div>` : renderFormSections(t, mid, sid, cols)}
      </div>
    </div>
    ${sid ? `<p class="tiny" style="margin-top:10px">${esc((screens.find((s) => s.name === sid) || {}).purpose || "")}</p>` : ""}`;
  }
  function renderFormSections(t, mid, sid, cols) {
    const key = mid + "::" + sid;
    const hidden = new Set(((t.sectionOverrides || {})[key] || {}).hidden || []);
    const groups = {};
    for (const c of cols) {
      const s = sectionForColumn(c);
      (groups[s] || (groups[s] = [])).push(c);
    }
    const order = SECTION_ORDER.filter((s) => groups[s]);
    return `<div class="editor-list" style="padding:12px">
    ${order.map((name) => {
      const off = hidden.has(name);
      const fields = groups[name];
      return `<div class="section-block">
        <div class="section-h ${off ? "off" : ""}">
          <label class="switch sm"><input type="checkbox" data-act="toggle-section" data-id="${t.id}" data-key="${esc(key)}" data-section="${esc(name)}" ${off ? "" : "checked"} /><span></span></label>
          <span>${esc(name)}</span>
          <span class="tiny" style="margin-left:auto">${fields.filter((f) => f.visible).length}/${fields.length} fields</span>
        </div>
        ${off ? "" : fields.map((f) => `
          <div class="field-row ${f.visible ? "" : "off"}">
            <label class="switch sm"><input type="checkbox" data-act="toggle-col" data-id="${t.id}" data-key="${esc(key)}" data-col="${esc(f.id)}" ${f.visible ? "checked" : ""} /><span></span></label>
            <div style="flex:1">
              <input class="rename input" style="height:28px" value="${esc(f.displayName)}" data-act="rename-col" data-id="${t.id}" data-key="${esc(key)}" data-col="${esc(f.id)}" />
            </div>
            <span class="tiny">${esc(f.dataType)}${f.required ? " \xB7 required" : ""}</span>
          </div>`).join("")}
      </div>`;
    }).join("")}
  </div>`;
  }
  function renderTenantUsersTab(t) {
    const roles = DEFAULT_ROLES;
    const crud = ["C", "R", "U", "D", "A"];
    return `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
      <div><strong>${(t.users || []).length} users</strong><div class="tiny">These accounts sign in to this company only. New users start with password Demo@123.</div></div>
      <button class="btn btn-sm btn-primary" data-act="invite-user" data-id="${t.id}">${icon("userPlus", 14)} Invite user</button>
    </div>
    <div class="table-wrap" style="margin-bottom:22px">
      <table class="data">
        <thead><tr><th>User</th><th>Role</th><th>MFA</th><th>Status</th><th>Last login</th><th></th></tr></thead>
        <tbody>
          ${(t.users || []).map((u) => `
            <tr>
              <td>
                <div class="cell-name">
                  <div class="avatar" style="width:30px;height:30px;font-size:11px">${esc(initials(u.name))}</div>
                  <div class="stack"><strong>${esc(u.name)}</strong><span>${esc(u.email)}</span></div>
                </div>
              </td>
              <td>
                <select class="select" style="height:30px;width:auto" data-act="set-user-role" data-id="${t.id}" data-user="${u.id}">
                  ${roles.map((r) => `<option value="${r.id}" ${u.role === r.id ? "selected" : ""}>${esc(r.name)}</option>`).join("")}
                </select>
              </td>
              <td>${u.mfa ? '<span class="badge badge-success">On</span>' : '<span class="badge badge-warning">Off</span>'}</td>
              <td><span class="badge ${u.status === "Active" ? "badge-success" : "badge-neutral"}">${esc(u.status)}</span></td>
              <td class="tiny">${u.lastLogin ? fmtDate(u.lastLogin) : "\u2014"}</td>
              <td>
                <button class="btn btn-sm btn-secondary" data-act="impersonate" data-id="${t.id}" data-user="${u.id}">Impersonate</button>
                <button class="btn btn-sm btn-secondary" data-act="reset-user-password" data-id="${t.id}" data-user="${u.id}">Reset password</button>
              </td>
            </tr>`).join("")}
        </tbody>
      </table>
    </div>
    <h2 style="font-size:15px;margin-bottom:8px">Permission matrix</h2>
    <p class="tiny" style="margin-bottom:10px">Create, Read, Update, Delete, Approve \u2014 by module, for each role. Disabled modules are greyed out.</p>
    <div class="matrix-wrap">
      <table class="matrix">
        <thead>
          <tr>
            <th>Module</th>
            ${roles.map((r) => `<th colspan="5" style="border-left:1px solid var(--border)">${esc(r.name)}</th>`).join("")}
          </tr>
          <tr>
            <th></th>
            ${roles.map(() => crud.map((c) => `<th>${c}</th>`).join("")).join("")}
          </tr>
        </thead>
        <tbody>
          ${MODULES.map((m) => {
      const on = t.modules[m.code];
      return `<tr class="${on ? "" : "mod-off"}">
              <td>${esc(m.code)} ${esc(m.name)}${on ? "" : " \xB7 off"}</td>
              ${roles.map((r) => {
        const p = ((t.permissions || {})[r.id] || {})[m.code] || { C: false, R: false, U: false, D: false, A: false };
        return crud.map((c) => `<td>
                  <input type="checkbox" data-act="perm" data-id="${t.id}" data-role="${r.id}" data-code="${m.code}" data-flag="${c}" ${p[c] ? "checked" : ""} ${on ? "" : "disabled"} />
                </td>`).join("");
      }).join("")}
            </tr>`;
    }).join("")}
        </tbody>
      </table>
    </div>`;
  }
  function renderBillingTab(t) {
    const plan = PLANS[t.plan] || PLANS.growth;
    const invoices = [
      { no: "INV-2026-11", date: "2026-11-01", amount: t.mrr, status: "Paid" },
      { no: "INV-2026-10", date: "2026-10-01", amount: t.mrr, status: "Paid" },
      { no: "INV-2026-09", date: "2026-09-01", amount: t.mrr, status: "Paid" }
    ];
    return `
    <div class="two-col">
      <div>
        <h2 style="font-size:15px;margin-bottom:10px">Current plan</h2>
        <div class="card" style="box-shadow:none">
          <div class="card-b">
            <div style="display:flex;justify-content:space-between;align-items:flex-start">
              <div>
                <div class="badge badge-indigo">${esc(plan.name)}</div>
                <div style="font-size:28px;font-weight:700;margin-top:6px">${zar(plan.price)}<span class="tiny"> / month</span></div>
                <div class="tiny">Billed in ZAR \xB7 ${esc(t.hosting)} hosting</div>
              </div>
              <div class="tiny right">Cap ${plan.users === 999 ? "Unlimited" : plan.users} users<br>${t.usersCount || (t.users || []).length} used</div>
            </div>
            <div class="prog" style="margin:14px 0 6px"><span style="width:${Math.min(100, (t.usersCount || 1) / (plan.users || 1) * 100)}%"></span></div>
            <dl class="kvs" style="margin-top:14px">
              <dt>Modules</dt><dd>${esc(plan.modules)}</dd>
              <dt>SLA</dt><dd>${esc(plan.sla)}</dd>
              <dt>Hosting</dt><dd>${esc(plan.hosting)}</dd>
            </dl>
          </div>
        </div>
        <h2 style="font-size:15px;margin:18px 0 10px">Change plan</h2>
        <div class="three-col" style="grid-template-columns:1fr 1fr;gap:10px">
          ${Object.values(PLANS).map((pl) => `
            <button class="mod-card ${pl.id === t.plan ? "on" : ""}" data-act="change-plan" data-id="${t.id}" data-plan="${pl.id}" type="button" style="text-align:left">
              <div class="body">
                <h4>${esc(pl.name)}</h4>
                <p>${zar(pl.price)} / mo \xB7 ${pl.users === 999 ? "Unlimited" : pl.users} users</p>
                <div class="meta">${esc(pl.modules)}</div>
              </div>
            </button>`).join("")}
        </div>
      </div>
      <div>
        <h2 style="font-size:15px;margin-bottom:10px">Invoices</h2>
        <table class="data">
          <thead><tr><th>Number</th><th>Date</th><th class="right">Amount</th><th>Status</th></tr></thead>
          <tbody>
            ${invoices.map((i) => `<tr><td class="mono">${esc(i.no)}</td><td>${esc(i.date)}</td><td class="right">${zar(i.amount)}</td><td><span class="badge badge-success">${esc(i.status)}</span></td></tr>`).join("")}
          </tbody>
        </table>
        <p class="tiny" style="margin-top:12px">South African invoices include VAT at 15% when applicable. This is a prototype \u2014 no charges are made.</p>
      </div>
    </div>`;
  }
  function renderAuditTab(t) {
    const rows = (state.audit || []).filter((a) => a.tenantId === t.id).filter((a) => {
      const q = ui.auditQ.trim().toLowerCase();
      if (q && !(a.action + a.target + a.actor + a.before + a.after).toLowerCase().includes(q)) return false;
      return true;
    });
    return `
    <div class="filter-bar" style="padding:0 0 12px">
      <input class="input" style="max-width:260px;height:32px" placeholder="Filter audit entries\u2026" value="${esc(ui.auditQ)}" data-act="audit-q" />
      <span class="tiny">${rows.length} events \xB7 hash-chained, immutable (mock)</span>
    </div>
    <div class="table-wrap">
      <table class="data">
        <thead><tr><th>When</th><th>Actor</th><th>Action</th><th>Target</th><th>Before \u2192 after</th><th>IP</th></tr></thead>
        <tbody>
          ${rows.map((a) => `
            <tr>
              <td class="tiny nowrap">${fmtDate(a.at)}</td>
              <td>${esc(a.actor)}</td>
              <td>${esc(a.action)}</td>
              <td>${esc(a.target)}</td>
              <td class="diff"><span class="old">${esc(a.before)}</span><span class="new">${esc(a.after)}</span></td>
              <td class="mono tiny">${esc(a.ip)}</td>
            </tr>`).join("") || `<tr><td colspan="6"><div class="empty">No audit events yet for this tenant.</div></td></tr>`}
        </tbody>
      </table>
    </div>`;
  }
  function renderComplianceTab(t) {
    const c = t.compliance || defaultCompliance({ name: "", email: "", phone: "", registered: false });
    const items = POPIA_ITEMS;
    const done = items.filter((i) => c[i.key]).length;
    const pct = Math.round(done / items.length * 100);
    return `
    <div class="two-col">
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
          <h2 style="font-size:15px">POPIA checklist</h2>
          <span class="badge ${pct === 100 ? "badge-success" : pct >= 70 ? "badge-warning" : "badge-danger"}">${pct}% complete</span>
        </div>
        <div class="prog" style="margin-bottom:14px"><span style="width:${pct}%"></span></div>
        <div class="check-list">
          ${items.map((i) => `
            <div class="check-item">
              <label class="switch sm"><input type="checkbox" data-act="popia" data-id="${t.id}" data-key="${i.key}" ${c[i.key] ? "checked" : ""} /><span></span></label>
              <div><h4>${esc(i.title)}</h4><p>${esc(i.hint)}</p></div>
            </div>`).join("")}
        </div>
      </div>
      <div>
        <h2 style="font-size:15px;margin-bottom:10px">Information Officer</h2>
        <div class="field"><label>Name</label><input class="input" data-act="io-field" data-id="${t.id}" data-key="name" value="${esc(c.informationOfficer && c.informationOfficer.name || "")}" /></div>
        <div class="field"><label>Email</label><input class="input" data-act="io-field" data-id="${t.id}" data-key="email" value="${esc(c.informationOfficer && c.informationOfficer.email || "")}" /></div>
        <div class="field"><label>Phone</label><input class="input" data-act="io-field" data-id="${t.id}" data-key="phone" value="${esc(c.informationOfficer && c.informationOfficer.phone || "")}" /></div>
        <h2 style="font-size:15px;margin:16px 0 10px">Data residency & retention</h2>
        <dl class="kvs">
          <dt>Residency</dt><dd>${esc(c.residency || "South Africa")} \u2014 ${esc(t.region)} region</dd>
          <dt>Retention</dt><dd>
            <input class="input" style="height:30px;width:80px;display:inline-block" type="number" min="1" data-act="retention" data-id="${t.id}" value="${c.retentionYears || 5}" /> years (tax records typically 5)
          </dd>
        </dl>
        <p class="tiny" style="margin-top:8px">Personal information is hosted in the Republic of South Africa. Cross-border transfers require a section 72 assessment.</p>
        <h2 style="font-size:15px;margin:16px 0 10px">Data subject requests</h2>
        <button class="btn btn-sm btn-secondary" data-act="add-dsar" data-id="${t.id}" style="margin-bottom:8px">${icon("plus", 14)} Log a request</button>
        <table class="data">
          <thead><tr><th>Type</th><th>Subject</th><th>Status</th><th>Received</th></tr></thead>
          <tbody>
            ${(c.dsar || []).map((d) => `<tr>
              <td>${esc(d.type)}</td><td>${esc(d.subject)}</td>
              <td><span class="badge ${d.status === "Closed" ? "badge-success" : "badge-warning"}">${esc(d.status)}</span></td>
              <td class="tiny">${fmtDate(d.received, false)}</td>
            </tr>`).join("") || `<tr><td colspan="4" class="muted">No requests logged.</td></tr>`}
          </tbody>
        </table>
      </div>
    </div>`;
  }
  function renderUsers() {
    const inner = `
    <div class="page-head">
      <div>
        <h1>Global users & access</h1>
        <p>Omnivate staff who can sign into this control panel and, with a reason, impersonate a tenant user.</p>
      </div>
      <div class="actions">
        <button class="btn btn-primary" data-act="invite-staff">${icon("userPlus", 16)} Invite staff</button>
      </div>
    </div>
    <div class="card">
      <div class="table-wrap">
        <table class="data">
          <thead><tr><th>Person</th><th>Role</th><th>Access</th><th>Impersonate</th><th>MFA</th><th>Status</th><th></th></tr></thead>
          <tbody>
            ${state.staff.map((s) => `
              <tr>
                <td>
                  <div class="cell-name">
                    <div class="avatar">${esc(initials(s.name))}</div>
                    <div class="stack"><strong>${esc(s.name)}</strong><span>${esc(s.email)}</span></div>
                  </div>
                </td>
                <td>${esc(s.role)}<div class="tiny">${esc(s.title)}</div></td>
                <td>${s.access === "all" ? '<span class="badge badge-indigo">All instances</span>' : `<span class="badge badge-neutral">${(s.assigned || []).length} assigned</span><div class="tiny">${(s.assigned || []).map((id) => {
      const t = getTenant(id);
      return t ? t.tradingAs : id;
    }).join(", ")}</div>`}</td>
                <td>${s.canImpersonate ? '<span class="badge badge-teal">Allowed</span>' : '<span class="badge badge-neutral">No</span>'}</td>
                <td>${s.mfa ? '<span class="badge badge-success">On</span>' : '<span class="badge badge-warning">Off</span>'}</td>
                <td><span class="badge badge-success">${esc(s.status)}</span></td>
                <td>
                  ${s.canImpersonate ? `<button class="btn btn-sm btn-secondary" data-act="impersonate-staff" data-staff="${s.id}">Impersonate a user\u2026</button>` : ""}
                </td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
    <div class="card" style="margin-top:16px">
      <div class="card-h"><h2>Recent impersonation & access events</h2></div>
      <div class="table-wrap">
        <table class="data">
          <thead><tr><th>When</th><th>Actor</th><th>Tenant</th><th>Action</th><th>Before \u2192 after</th></tr></thead>
          <tbody>
            ${state.audit.filter((a) => /impersonat|invited|access/i.test(a.action)).slice(0, 12).map((a) => `
              <tr>
                <td class="tiny nowrap">${fmtDate(a.at)}</td>
                <td>${esc(a.actor)}</td>
                <td>${esc((getTenant(a.tenantId) || {}).tradingAs || a.tenantId)}</td>
                <td>${esc(a.action)}</td>
                <td class="diff"><span class="old">${esc(a.before)}</span><span class="new">${esc(a.after)}</span></td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>`;
    renderShell(inner, `<strong>Global users</strong>`);
  }
  function renderReleases() {
    const inner = `
    <div class="page-head">
      <div>
        <h1>Releases</h1>
        <p>Roll out versions across the fleet, start a canary, or roll back a single instance.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-b">
        <div class="timeline">
          ${state.releases.map((r) => {
      const targets = r.targets.map((id) => getTenant(id)).filter(Boolean);
      return `<div class="release">
              <div>
                <div class="ver">${esc(r.version)}</div>
                <div style="margin-top:6px">${r.channel === "canary" ? '<span class="badge badge-teal">Canary</span>' : '<span class="badge badge-indigo">Stable</span>'}</div>
                <div class="tiny" style="margin-top:6px">${fmtDate(r.released, false)}</div>
              </div>
              <div>
                <p>${esc(r.notes)}</p>
                <div class="chip-row">${targets.map((t) => `<span class="chip">${esc(t.tradingAs || t.name)} \xB7 ${esc(t.version)}</span>`).join("") || '<span class="tiny">No instances on this build</span>'}</div>
              </div>
              <div style="display:flex;flex-direction:column;gap:6px">
                ${r.channel === "canary" ? `
                  <button class="btn btn-sm btn-primary" data-act="rollout-canary" data-rel="${r.id}">Roll out further\u2026</button>
                  <button class="btn btn-sm btn-danger" data-act="rollback-canary" data-rel="${r.id}">${icon("rollback", 14)} Rollback canary</button>` : `
                  <button class="btn btn-sm btn-secondary" data-act="rollout-stable" data-rel="${r.id}">Roll out to older instances</button>`}
              </div>
            </div>`;
    }).join("")}
        </div>
      </div>
    </div>`;
    renderShell(inner, `<strong>Releases</strong>`);
  }
  function renderPreview() {
    const { parts } = parseHash();
    const id = parts[1];
    const t = getTenant(id);
    if (!t) {
      navigate("#/fleet");
      return;
    }
    const enabled = enabledModules(t);
    let modCode = parts[2] || ui.previewModule[id] || enabled[0] && enabled[0].code;
    if (modCode && !t.modules[modCode]) modCode = enabled[0] && enabled[0].code;
    ui.previewModule[id] = modCode;
    const screens = modCode ? screensFor(modCode) : [];
    let scr = decodeURIComponent(parts[3] || ui.previewScreen[id] || screens[0] && screens[0].name || "");
    if (scr && !screens.some((s) => s.name === scr)) scr = screens[0] && screens[0].name;
    ui.previewScreen[id] = scr;
    const mod = getModule(modCode);
    const cols = modCode && scr ? resolvedColumns(t, modCode, scr).filter((c) => c.visible) : [];
    const rows = samplePreviewRows(cols, 8);
    const imp = ui.impersonating && ui.impersonating.tenantId === id ? ui.impersonating : null;
    const byArea = [];
    for (const a of AREAS) {
      const ms = enabled.filter((m) => m.area === a);
      if (ms.length) byArea.push({ area: a, modules: ms });
    }
    const kpis = previewKpis(t);
    document.getElementById("app").innerHTML = `
    <div class="preview-banner">
      ${icon("eye", 14)}
      <span>Previewing <strong>${esc(t.name)}</strong> as the client would see it \u2014 only enabled modules and your column layout.</span>
      ${imp ? `<span class="badge badge-warning">Impersonating ${esc(imp.userName)} \xB7 ${esc(imp.reason)}</span>` : ""}
      <span class="spacer"></span>
      <button class="btn btn-sm btn-secondary" data-act="snap-doc" data-id="${t.id}">${icon("upload", 14)} Snap a document</button>
      <button class="btn btn-sm btn-secondary" data-act="scan-barcode" data-id="${t.id}">${icon("search", 14)} Scan barcode</button>
      <button class="btn btn-sm btn-primary" data-act="exit-preview" data-id="${t.id}">Exit preview</button>
    </div>
    <div class="preview-shell">
      <aside class="preview-side" style="background: linear-gradient(180deg, ${esc(t.color)} 0%, #0f172a 140%)">
        <div class="brand">
          <div class="tile" style="background:rgba(255,255,255,0.15);width:36px;height:36px;border-radius:8px;display:grid;place-items:center;overflow:hidden">
            ${t.logoData ? `<img src="${t.logoData}" alt="" style="width:100%;height:100%;object-fit:contain">` : esc(initials(t.tradingAs || t.name))}
          </div>
          <div>
            <div class="name">${esc(t.tradingAs || t.name)}</div>
            <div class="plan">${esc((PLANS[t.plan] || {}).name || "")} \xB7 ${esc(t.profile.currency)}</div>
          </div>
        </div>
        <nav class="preview-nav">
          <a href="#/preview/${t.id}/work/home">${icon("activity", 15)} Workspace</a>
          ${byArea.map((g) => `
            <div class="area">${esc(g.area)}</div>
            ${g.modules.map((m) => `
              <a href="#/preview/${t.id}/${m.code}" class="${m.code === modCode ? "active" : ""}">${icon(AREA_ICON[m.area] || "layers", 15)} ${esc(applyTerm(t, m.name))}</a>
            `).join("")}
          `).join("") || '<div class="tiny" style="padding:12px">No modules enabled.</div>'}
        </nav>
      </aside>
      <div class="preview-main">
        <div class="preview-top">
          <strong>${esc(applyTerm(t, mod && mod.name || "Home"))}</strong>
          ${icon("chevronRight", 14)}
          <span class="muted">${esc(applyTerm(t, scr || ""))}</span>
          <span class="spacer"></span>
          ${t.offlineReady ? '<span class="badge badge-teal">Offline-ready</span>' : ""}
          <span class="tiny">${esc(t.profile.city)} \xB7 VAT ${esc(t.profile.vatNumber)}</span>
        </div>
        <div class="preview-body">
          <div class="preview-dash">
            ${kpis.map((k) => `<div class="kpi"><div class="label">${esc(k.label)}</div><div class="value">${k.value}</div><div class="sub">${esc(k.sub)}</div></div>`).join("")}
          </div>
          ${screens.length ? `
            <div class="card">
              <div class="toolbar" style="overflow-x:auto">
                ${screens.map((s) => `
                  <a class="btn btn-sm ${s.name === scr ? "btn-primary" : "btn-secondary"}" href="#/preview/${t.id}/${modCode}/${encodeURIComponent(s.name)}">${esc(applyTerm(t, s.name))}</a>
                `).join("")}
                <div class="spacer"></div>
                <span class="tiny">${cols.length} columns visible</span>
              </div>
              <div class="table-wrap">
                <table class="data">
                  <thead><tr>${cols.map((c) => `<th>${esc(applyTerm(t, c.displayName))}</th>`).join("")}</tr></thead>
                  <tbody>
                    ${rows.map((r) => `<tr>${cols.map((c) => `<td>${esc(r[c.id])}</td>`).join("")}</tr>`).join("")}
                  </tbody>
                </table>
              </div>
            </div>` : `<div class="empty"><h3>Select a module</h3><p>Enable modules in the control panel, then preview them here.</p></div>`}
          ${renderSampleDocs(t, scr)}
        </div>
      </div>
    </div>`;
  }
  function previewKpis(t) {
    const on = countEnabled(t);
    return [
      { label: "Open documents", value: String(12 + t.name.length % 20), sub: "Invoices, orders and jobs" },
      { label: "This month", value: zar(Math.round(t.mrr * 6.4)), sub: "Turnover (sample)" },
      { label: "Modules in use", value: String(on), sub: t.offlineReady ? "Offline cache on" : "Online only" }
    ];
  }
  function samplePreviewRows(cols, n) {
    return Array.from({ length: n }, (_, i) => {
      const row = {};
      for (const c of cols) row[c.id] = varyExample(c.example, i);
      return row;
    });
  }
  function exitPreview(id) {
    ui.impersonating = null;
    navigate(id ? "#/tenants/" + id + "/modules" : "#/fleet");
  }
  var MOCK_INVOICE = {
    supplier: "Gauteng Packaging Supplies (Pty) Ltd",
    supplierVat: "4198765432",
    invoiceNo: "GPS-88421",
    invoiceDate: "14 Nov 2026",
    dueDate: "14 Dec 2026",
    poNumber: "HP-PO-005521",
    subtotal: 18420,
    vat: 2763,
    total: 21183,
    lines: [
      { item: "Clear stretch wrap 500mm", qty: 24, unit: "roll", price: 185 },
      { item: "Carton 400\xD7400\xD7300 (bundle of 20)", qty: 12, unit: "bundle", price: 620 },
      { item: "Kraft tape 48mm", qty: 36, unit: "roll", price: 42.5 }
    ]
  };
  function confidence() {
    return (92 + Math.random() * 7).toFixed(1);
  }
  function openSnapDocument(tenantId) {
    const t = getTenant(tenantId);
    openModal(`
    <div class="modal-h"><h3>Snap a document</h3><button class="icon-btn light" data-act="close-modal">${icon("x", 16)}</button></div>
    <div class="modal-b">
      <p class="tiny" style="margin-bottom:12px">Upload a photo of a supplier invoice. In production this would run OCR in the South African region; this prototype extracts a realistic mock invoice so you can approve and post it.</p>
      <div class="field">
        <label>Photograph or scan</label>
        <input class="input" type="file" accept="image/*" capture="environment" id="snap-file" />
      </div>
      <div id="snap-preview" class="empty" style="padding:18px">Waiting for an image\u2026</div>
    </div>
    <div class="modal-f">
      <button class="btn btn-secondary" data-act="close-modal">Cancel</button>
    </div>`);
    const input = document.getElementById("snap-file");
    input.addEventListener("change", () => {
      const file = input.files && input.files[0];
      showExtractedInvoice(tenantId, file);
    });
  }
  function showExtractedInvoice(tenantId, file) {
    const t = getTenant(tenantId);
    let imgHtml = "";
    const renderExtract = (imgSrc) => {
      const fields = [
        ["Supplier", MOCK_INVOICE.supplier, confidence()],
        ["VAT number", MOCK_INVOICE.supplierVat, confidence()],
        ["Invoice no.", MOCK_INVOICE.invoiceNo, confidence()],
        ["Invoice date", MOCK_INVOICE.invoiceDate, confidence()],
        ["Due date", MOCK_INVOICE.dueDate, confidence()],
        ["PO number", MOCK_INVOICE.poNumber, (88 + Math.random() * 5).toFixed(1)],
        ["Total incl. VAT", zar(MOCK_INVOICE.total), confidence()]
      ];
      const body = document.querySelector("#modal-root .modal-b");
      const foot = document.querySelector("#modal-root .modal-f");
      if (!body) return;
      body.innerHTML = `
      <div class="two-col" style="align-items:start">
        <div>
          ${imgSrc ? `<img src="${imgSrc}" alt="Uploaded document" style="width:100%;border-radius:8px;border:1px solid var(--border);max-height:280px;object-fit:contain;background:var(--slate-50)">` : '<div class="empty">No image preview</div>'}
          <p class="tiny" style="margin-top:8px">Extraction model: omnivate-docs-za \xB7 hosted in Johannesburg</p>
        </div>
        <div>
          <h2 style="font-size:14px;margin-bottom:8px">Extracted supplier invoice</h2>
          ${fields.map(([l, v, c]) => `
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
              <div style="flex:1">
                <div class="tiny">${esc(l)}</div>
                <div style="font-weight:600">${esc(v)}</div>
              </div>
              <span class="badge ${Number(c) >= 95 ? "badge-success" : Number(c) >= 90 ? "badge-teal" : "badge-warning"}">${c}%</span>
            </div>`).join("")}
          <table class="data" style="margin-top:8px">
            <thead><tr><th>Item</th><th>Qty</th><th class="right">Price</th></tr></thead>
            <tbody>${MOCK_INVOICE.lines.map((l) => `<tr><td>${esc(l.item)}</td><td>${l.qty} ${esc(l.unit)}</td><td class="right">${zar(l.price)}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </div>`;
      foot.innerHTML = `
      <button class="btn btn-secondary" data-act="close-modal">Discard</button>
      <button class="btn btn-primary" id="approve-post">${icon("check", 16)} Approve and post</button>`;
      document.getElementById("approve-post").onclick = () => {
        closeModal();
        pushAudit({ tenantId, action: "Supplier invoice posted from snap", target: MOCK_INVOICE.invoiceNo, before: "Draft extract", after: "Posted " + zar(MOCK_INVOICE.total) + " to AP" });
        toast("Invoice " + MOCK_INVOICE.invoiceNo + " posted to Accounts payable for " + (t.tradingAs || t.name), "ok");
      };
    };
    if (file) {
      const reader = new FileReader();
      reader.onload = () => renderExtract(reader.result);
      reader.readAsDataURL(file);
    } else {
      renderExtract("");
    }
  }
  var MOCK_ITEMS = [
    { barcode: "6001234567890", sku: "WRP-500", name: "Clear stretch wrap 500mm", onHand: 86, uom: "roll", price: 185, bin: "A-12-04" },
    { barcode: "6001234567891", sku: "CTN-400", name: "Carton 400\xD7400\xD7300", onHand: 240, uom: "each", price: 31, bin: "B-02-11" },
    { barcode: "6009876543210", sku: "TAPE-48", name: "Kraft tape 48mm", onHand: 410, uom: "roll", price: 42.5, bin: "A-14-01" },
    { barcode: "6005550001112", sku: "FLOUR-25", name: "Cake wheat flour 25 kg", onHand: 64, uom: "bag", price: 229, bin: "DRY-01" },
    { barcode: "6005550002223", sku: "YEAST-500", name: "Instant dry yeast 500 g", onHand: 120, uom: "pack", price: 68.5, bin: "DRY-04" }
  ];
  function openScanBarcode(tenantId) {
    const t = getTenant(tenantId);
    openModal(`
    <div class="modal-h"><h3>Scan barcode</h3><button class="icon-btn light" data-act="close-modal">${icon("x", 16)}</button></div>
    <div class="modal-b">
      <p class="tiny" style="margin-bottom:12px">Point the camera at a barcode, or enter a code. If the camera is blocked, use a sample item below.</p>
      <div id="scan-stage">
        <video id="scan-video" autoplay playsinline muted style="width:100%;max-height:220px;background:#0f172a;border-radius:10px;display:none"></video>
        <canvas id="scan-canvas" class="hidden"></canvas>
        <div id="scan-status" class="tiny" style="margin:8px 0">Starting camera\u2026</div>
        <div class="field"><label>Or type a barcode / SKU</label>
          <div style="display:flex;gap:8px">
            <input class="input" id="scan-manual" placeholder="6001234567890" />
            <button class="btn btn-primary" id="scan-lookup" type="button">Look up</button>
          </div>
        </div>
        <div class="tiny">Try a sample: ${MOCK_ITEMS.map((i) => `<button type="button" class="btn btn-sm btn-secondary" data-act="lookup-item" data-id="${tenantId}" data-code="${i.barcode}">${esc(i.sku)}</button>`).join(" ")}</div>
      </div>
      <div id="scan-result"></div>
    </div>
    <div class="modal-f"><button class="btn btn-secondary" data-act="close-modal">Close</button></div>`);
    startBarcodeCamera(tenantId);
    document.getElementById("scan-lookup").onclick = () => {
      const code = document.getElementById("scan-manual").value.trim();
      showScannedItem(tenantId, code);
    };
  }
  var scanTimer = null;
  var scanStream = null;
  function stopScanner() {
    if (scanTimer) {
      clearInterval(scanTimer);
      scanTimer = null;
    }
    if (scanStream) {
      scanStream.getTracks().forEach((tr) => tr.stop());
      scanStream = null;
    }
  }
  function startBarcodeCamera(tenantId) {
    const video = document.getElementById("scan-video");
    const status = document.getElementById("scan-status");
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      status.textContent = "Camera APIs are not available here. Use a sample SKU or type a barcode.";
      return;
    }
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then((stream) => {
      scanStream = stream;
      video.srcObject = stream;
      video.style.display = "block";
      status.textContent = "Camera on \u2014 point at a barcode, or use a sample if nothing is detected.";
      const Canvas = document.getElementById("scan-canvas");
      if (window.BarcodeDetector) {
        const det = new BarcodeDetector({ formats: ["ean_13", "ean_8", "code_128", "qr_code", "upc_a", "upc_e"] });
        scanTimer = setInterval(async () => {
          try {
            const codes = await det.detect(video);
            if (codes && codes[0]) {
              stopScanner();
              showScannedItem(tenantId, codes[0].rawValue);
            }
          } catch (e) {
          }
        }, 500);
      } else {
        status.textContent = "Live camera is on, but this browser has no Barcode Detector. Use a sample SKU or type a code.";
      }
    }).catch(() => {
      status.textContent = "Camera permission was not granted. Use a sample SKU or type a barcode.";
    });
  }
  function showScannedItem(tenantId, code) {
    const t = getTenant(tenantId);
    const raw = String(code || "").trim();
    const item = MOCK_ITEMS.find((i) => i.barcode === raw || i.sku.toLowerCase() === raw.toLowerCase()) || MOCK_ITEMS[(raw.length + (t.name || "").length) % MOCK_ITEMS.length];
    const box = document.getElementById("scan-result") || document.querySelector("#modal-root .modal-b");
    const html = `
    <div class="card" style="margin-top:14px;box-shadow:none">
      <div class="card-b">
        <div class="badge badge-teal">Stock item found</div>
        <h3 style="margin:8px 0 4px">${esc(applyTerm(t, item.name))}</h3>
        <dl class="kvs">
          <dt>Barcode</dt><dd class="mono">${esc(item.barcode)}</dd>
          <dt>SKU</dt><dd class="mono">${esc(item.sku)}</dd>
          <dt>On hand</dt><dd>${item.onHand} ${esc(item.uom)}</dd>
          <dt>Bin</dt><dd>${esc(item.bin)}</dd>
          <dt>Trade price</dt><dd>${zar(item.price)}</dd>
        </dl>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="btn btn-primary btn-sm" id="scan-so" type="button">Add to sales order</button>
          <button class="btn btn-secondary btn-sm" id="scan-adj" type="button">Stock adjustment</button>
        </div>
      </div>
    </div>`;
    if (document.getElementById("scan-result")) document.getElementById("scan-result").innerHTML = html;
    else box.insertAdjacentHTML("beforeend", html);
    const so = document.getElementById("scan-so");
    const adj = document.getElementById("scan-adj");
    if (so) so.onclick = () => {
      closeModal();
      stopScanner();
      toast(item.name + " added to a draft sales order (mock)", "ok");
    };
    if (adj) adj.onclick = () => {
      closeModal();
      stopScanner();
      toast("Opened a stock adjustment for " + item.sku + " (mock)", "ok");
    };
  }
  function renderAskPanel() {
    return `
    <div class="ask-panel">
      <div class="card-h">
        <h2>${icon("zap", 16)} Ask Omnivate</h2>
        <button class="icon-btn light" data-act="close-ask">${icon("x", 16)}</button>
      </div>
      <div class="ask-messages" id="ask-messages">
        ${ui.askMessages.map((m) => `<div class="ask-msg ${m.role}">${esc(m.text)}</div>`).join("")}
      </div>
      <form class="ask-form" data-act="ask-send">
        <input class="input" id="ask-input" placeholder="e.g. turn on Payroll for Kasi Bakery" value="${esc(ui.askInput)}" autocomplete="off" />
        <button class="btn btn-primary" type="submit">${icon("send", 16)}</button>
      </form>
    </div>`;
  }
  function findTenantByName(q) {
    const s = (q || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").trim();
    if (!s) return null;
    return state.tenants.find(
      (t) => t.name.toLowerCase().includes(s) || (t.tradingAs || "").toLowerCase().includes(s) || t.id.toLowerCase() === s
    ) || state.tenants.find((t) => s.split(/\s+/).every((w) => (t.name + " " + (t.tradingAs || "")).toLowerCase().includes(w)));
  }
  function findModuleByName(q) {
    const s = (q || "").toLowerCase().trim();
    return MODULES.find((m) => m.name.toLowerCase() === s || m.code.toLowerCase() === s) || MODULES.find((m) => m.name.toLowerCase().includes(s) || s.includes(m.name.toLowerCase()));
  }
  function findTemplateByName(q) {
    const s = (q || "").toLowerCase().trim();
    return INDUSTRY_TEMPLATES.find((t) => t.name.toLowerCase() === s || t.id === s) || INDUSTRY_TEMPLATES.find((t) => t.name.toLowerCase().includes(s) || s.includes(t.id) || s.includes(t.name.toLowerCase()));
  }
  function handleAsk(text) {
    const raw = text.trim();
    if (!raw) return;
    ui.askMessages.push({ role: "user", text: raw });
    const lower = raw.toLowerCase();
    let reply = "";
    const toggle = lower.match(/^(turn|switch|set|enable|disable)\s+(on|off)?\s*(.+?)\s+(for|on|at)\s+(.+)$/i) || lower.match(/^(enable|disable|turn on|turn off)\s+(.+?)\s+(for|on|at)\s+(.+)$/i);
    if (toggle) {
      const phrase = raw;
      const on = /on|enable/i.test(phrase) && !/turn off|disable|switch off/i.test(phrase);
      const off = /off|disable/i.test(phrase);
      const wantOn = off ? false : true;
      const parts = raw.split(/\s+(?:for|on|at)\s+/i);
      const left = parts[0].replace(/^(turn|switch|set|enable|disable)\s+(on|off)?\s*/i, "").trim();
      const right = parts.slice(1).join(" ");
      const mod = findModuleByName(left);
      const ten = findTenantByName(right);
      if (mod && ten) {
        const prev = ten.modules[mod.code] ? "On" : "Off";
        patchTenant(ten.id, (x) => {
          x.modules[mod.code] = wantOn;
        }, {
          tenantId: ten.id,
          action: wantOn ? "Module enabled" : "Module disabled",
          target: mod.name + " (" + mod.code + ")",
          before: prev,
          after: wantOn ? "On" : "Off"
        });
        reply = (wantOn ? "Turned on " : "Turned off ") + mod.name + " for " + ten.name + ". Open Preview to see it in the client menu.";
      } else if (!ten) {
        reply = "I could not find that tenant. Try one of: " + state.tenants.map((t) => t.tradingAs || t.name).join(", ") + ".";
      } else {
        reply = "I could not match a module called \u201C" + left + "\u201D. Module names follow the 41-module catalogue, for example Payroll, POS / Retail, or Fleet.";
      }
    } else if (/apply|template/.test(lower)) {
      const parts = raw.split(/\s+(?:to|for|on)\s+/i);
      const tmpl = findTemplateByName(parts[0].replace(/apply|the|template/gi, " ").trim());
      const ten = findTenantByName(parts.slice(1).join(" "));
      if (tmpl && ten) {
        applyTemplate(ten.id, tmpl.id);
        reply = "Applied the " + tmpl.name + " template to " + ten.name + ". " + tmpl.modules.length + " modules are now on.";
      } else {
        reply = "Try \u201Capply the retail template to Atlas Auto Parts\u201D. Templates: " + INDUSTRY_TEMPLATES.map((t) => t.name).join(", ") + ".";
      }
    } else if (/preview|open/.test(lower)) {
      const ten = findTenantByName(raw.replace(/preview|open|client|app|for/gi, " "));
      if (ten) {
        reply = "Opening the client preview for " + ten.name + ".";
        ui.askMessages.push({ role: "assistant", text: reply });
        persistAsk();
        navigate("#/preview/" + ten.id + "/work/home");
        return;
      }
      reply = "Which tenant should I preview?";
    } else if (/alert/.test(lower)) {
      const a = allAlerts();
      reply = a.length ? "There are " + a.length + " alerts:\n" + a.map((x) => "\u2022 " + x.tenant + ": " + x.text).join("\n") : "No open alerts on the fleet.";
    } else if (/help|what can/.test(lower)) {
      reply = "I can turn modules on or off, apply an industry template, preview a tenant, or summarise alerts. Example: \u201Cturn on Payroll for Kasi Bakery\u201D.";
    } else {
      reply = "I am a mock assistant in this prototype. Try \u201Cturn on Payroll for Kasi Bakery\u201D, \u201Capply the retail template to Atlas Auto Parts\u201D, \u201Cpreview Kasi Bakery\u201D, or \u201Cshow alerts\u201D.";
    }
    ui.askMessages.push({ role: "assistant", text: reply });
    persistAsk();
    render();
    const box = document.getElementById("ask-messages");
    if (box) box.scrollTop = box.scrollHeight;
  }
  function persistAsk() {
  }
  function applyTemplate(tenantId, templateId) {
    const tmpl = INDUSTRY_TEMPLATES.find((x) => x.id === templateId);
    const t = getTenant(tenantId);
    if (!tmpl || !t) return;
    const before = countEnabled(t);
    patchTenant(tenantId, (x) => {
      x.modules = moduleMap(tmpl.modules);
    }, {
      tenantId,
      action: "Industry template applied",
      target: tmpl.name,
      before: before + " modules",
      after: tmpl.modules.length + " modules"
    });
    toast("Applied " + tmpl.name + " to " + (t.tradingAs || t.name), "ok");
  }
  function openTemplatesModal(tenantId) {
    const t = tenantId ? getTenant(tenantId) : null;
    openModal(`
    <div class="modal-h"><h3>Industry templates</h3><button class="icon-btn light" data-act="close-modal">${icon("x", 16)}</button></div>
    <div class="modal-b">
      <p class="tiny" style="margin-bottom:12px">Apply a preset module bundle in one click. You can still toggle individual modules afterwards.${t ? " Applying to <strong>" + esc(t.name) + "</strong>." : " Choose a tenant, then a template."}</p>
      ${t ? "" : `<div class="field"><label>Tenant</label>
        <select class="select" id="tpl-tenant">${state.tenants.map((x) => `<option value="${x.id}">${esc(x.name)}</option>`).join("")}</select>
      </div>`}
      <div class="mod-grid">
        ${INDUSTRY_TEMPLATES.map((tmpl) => `
          <button type="button" class="mod-card" data-act="apply-template" data-template="${tmpl.id}" data-id="${t ? t.id : ""}" style="text-align:left">
            <div class="tile" style="background:${tmpl.color};width:28px;height:28px;border-radius:8px"></div>
            <div class="body"><h4>${esc(tmpl.name)}</h4><p>${esc(tmpl.blurb)}</p><div class="meta">${tmpl.modules.length} modules</div></div>
          </button>`).join("")}
      </div>
    </div>
    <div class="modal-f"><button class="btn btn-secondary" data-act="close-modal">Close</button></div>`);
  }
  function openMigrateWizard() {
    const step = (n, title, body, footer) => {
      openModal(`
      <div class="modal-h"><h3>Migrate from Pastel / Sage / Xero</h3><button class="icon-btn light" data-act="close-modal">${icon("x", 16)}</button></div>
      <div class="modal-b">
        <div class="tiny" style="margin-bottom:10px">Step ${n} of 4</div>
        <div class="prog" style="margin-bottom:16px"><span style="width:${n * 25}%"></span></div>
        <h2 style="font-size:16px;margin-bottom:10px">${title}</h2>
        ${body}
      </div>
      <div class="modal-f">${footer}</div>`);
    };
    const s1 = () => step(1, "Where is the data coming from?", `
    <div class="mod-grid">
      ${[["Pastel Evolution / Partner", "#0F766E"], ["Sage 50 / Sage 200 / Sage Business Cloud", "#15803D"], ["Xero"], ["Excel / CSV workbooks", "#3B2F8F"]].map((x, i) => `
        <button type="button" class="mod-card" data-mig-src="${esc(typeof x === "string" ? x : x[0])}" style="text-align:left">
          <div class="body"><h4>${esc(Array.isArray(x) ? x[0] : x)}</h4><p>Map companies, open balances and item masters into a new or existing Omnivate tenant.</p></div>
        </button>`).join("")}
    </div>`, `<button class="btn btn-secondary" data-act="close-modal">Cancel</button>`);
    window.__mig = { source: null, tenantId: state.tenants[0].id };
    s1();
    document.querySelectorAll("[data-mig-src]").forEach((btn) => btn.onclick = () => {
      window.__mig.source = btn.getAttribute("data-mig-src");
      step(
        2,
        "Choose the destination tenant",
        `
      <div class="field"><label>Tenant</label>
        <select class="select" id="mig-tenant">${state.tenants.map((t) => `<option value="${t.id}">${esc(t.name)}</option>`).join("")}</select>
      </div>
      <p class="tiny">Company records, VAT numbers and opening balances will be mapped. Nothing is overwritten until you confirm on the last step.</p>`,
        `<button class="btn btn-secondary" id="mig-back">Back</button><button class="btn btn-primary" id="mig-next">Continue</button>`
      );
      document.getElementById("mig-back").onclick = s1;
      document.getElementById("mig-next").onclick = () => {
        window.__mig.tenantId = document.getElementById("mig-tenant").value;
        const t = getTenant(window.__mig.tenantId);
        step(
          3,
          "What should we bring across?",
          `
        ${["Chart of accounts & opening balances", "Customers and suppliers", "Item master and stock on hand", "Open invoices and bills", "Employees (no payslip history)", "Fixed assets"].map((l, i) => `
          <label class="field-row" style="border:0"><label class="switch sm"><input type="checkbox" checked /><span></span></label><span>${l}</span></label>`).join("")}
        <p class="tiny">Source: ${esc(window.__mig.source)} \u2192 ${esc(t.name)}</p>`,
          `<button class="btn btn-secondary" id="mig-back2">Back</button><button class="btn btn-primary" id="mig-start">Start mock migration</button>`
        );
        document.getElementById("mig-back2").onclick = () => document.getElementById("mig-next") ? null : openMigrateWizard();
        document.getElementById("mig-back2").onclick = openMigrateWizard;
        document.getElementById("mig-start").onclick = () => {
          step(4, "Migration running (mock)", `
          <div class="empty">
            <div class="prog" style="margin:12px auto;max-width:280px"><span id="mig-bar" style="width:8%"></span></div>
            <p id="mig-msg">Connecting to ${esc(window.__mig.source)}\u2026</p>
          </div>`, `<button class="btn btn-secondary" data-act="close-modal" disabled id="mig-done">Working\u2026</button>`);
          const msgs = ["Reading company file\u2026", "Mapping VAT codes to SARS rates\u2026", "Importing customers\u2026", "Importing stock on hand\u2026", "Balancing the trial balance\u2026", "Done. Review in the tenant before go-live."];
          let i = 0;
          const timer = setInterval(() => {
            i++;
            const bar = document.getElementById("mig-bar");
            const msg = document.getElementById("mig-msg");
            const done = document.getElementById("mig-done");
            if (!bar) {
              clearInterval(timer);
              return;
            }
            bar.style.width = Math.min(100, 8 + i * 18) + "%";
            if (msgs[i]) msg.textContent = msgs[i];
            if (i >= msgs.length - 1) {
              clearInterval(timer);
              bar.style.width = "100%";
              done.disabled = false;
              done.textContent = "Close";
              done.classList.remove("btn-secondary");
              done.classList.add("btn-primary");
              const dest = getTenant(window.__mig.tenantId);
              pushAudit({ tenantId: dest.id, action: "Migration started (mock)", target: window.__mig.source, before: "\u2014", after: "Imported into " + dest.name });
              toast("Mock migration into " + dest.name + " finished", "ok");
            }
          }, 450);
        };
      };
    });
  }
  function openNewTenant() {
    openModal(`
    <div class="modal-h"><h3>New ERP instance</h3><button class="icon-btn light" data-act="close-modal">${icon("x", 16)}</button></div>
    <div class="modal-b">
      <p class="tiny" style="margin-bottom:12px">This is a prototype \u2014 the instance is created in this browser only.</p>
      <div class="form-grid">
        <div class="field span-2"><label>Legal name</label><input class="input" id="nt-name" placeholder="Acme Trading (Pty) Ltd" /></div>
        <div class="field"><label>Region</label><select class="select" id="nt-region"><option>Johannesburg</option><option>Cape Town</option></select></div>
        <div class="field"><label>Hosting</label><select class="select" id="nt-host"><option>Shared</option><option>Dedicated</option></select></div>
        <div class="field"><label>Plan</label><select class="select" id="nt-plan">${Object.values(PLANS).map((p) => `<option value="${p.id}">${esc(p.name)} \xB7 ${zar(p.price)}/mo</option>`).join("")}</select></div>
        <div class="field"><label>Industry template</label>
          <select class="select" id="nt-tpl">${INDUSTRY_TEMPLATES.map((t) => `<option value="${t.id}">${esc(t.name)}</option>`).join("")}</select>
        </div>
      </div>
    </div>
    <div class="modal-f">
      <button class="btn btn-secondary" data-act="close-modal">Cancel</button>
      <button class="btn btn-primary" id="nt-create">Create instance</button>
    </div>`);
    document.getElementById("nt-create").onclick = () => {
      const name = document.getElementById("nt-name").value.trim() || "New SME (Pty) Ltd";
      const region = document.getElementById("nt-region").value;
      const hosting = document.getElementById("nt-host").value;
      const plan = document.getElementById("nt-plan").value;
      const tmpl = INDUSTRY_TEMPLATES.find((x) => x.id === document.getElementById("nt-tpl").value) || INDUSTRY_TEMPLATES[0];
      const id = uid("ten").replace("ten-", "").slice(0, 8);
      const color = tmpl.color;
      const t = {
        id,
        name,
        tradingAs: name.replace(/ \(Pty\) Ltd|\s+CC$/i, ""),
        industry: tmpl.name,
        region,
        hosting,
        cluster: (region === "Cape Town" ? "cpt" : "jhb") + (hosting === "Dedicated" ? "-ded-09" : "-shared-02"),
        status: "healthy",
        version: "2.4.1",
        channel: "stable",
        usersCount: 1,
        mrr: PLANS[plan].price,
        plan,
        lastBackup: (/* @__PURE__ */ new Date()).toISOString(),
        alerts: [],
        color,
        logoData: null,
        offlineReady: false,
        whatsapp: { invoices: true, payments: true, approvals: false, backups: false, marketing: false, number: "" },
        profile: {
          legalName: name,
          tradingAs: name.replace(/ \(Pty\) Ltd|\s+CC$/i, ""),
          registrationNumber: "2026/000001/07",
          vatNumber: "4000000000",
          bbbee: "EME",
          email: "",
          phone: "",
          website: "",
          address1: "",
          address2: "",
          city: region,
          postal: "",
          province: region === "Cape Town" ? "Western Cape" : "Gauteng",
          country: "South Africa",
          currency: "ZAR",
          fiscalYearStart: "01 March",
          terminology: { Customer: "Customer", Supplier: "Supplier", Item: "Item", Employee: "Employee" },
          sequences: [{ doc: "Sales invoice", prefix: "INV-", pad: 6, next: 1 }],
          templates: { invoice: "Standard tax invoice", quote: "Standard quotation", statement: "Standard statement", payslip: "Standard payslip" }
        },
        modules: moduleMap(tmpl.modules),
        users: [{ id: uid("u"), name: "Administrator", email: "admin@example.co.za", role: "administrator", status: "Active", lastLogin: null, mfa: false }],
        permissions: defaultPermissions(),
        compliance: defaultCompliance({ name: "Administrator", email: "admin@example.co.za", phone: "", registered: false }),
        columnOverrides: {},
        sectionOverrides: {}
      };
      state.tenants.push(t);
      pushAudit({ tenantId: t.id, action: "Instance created", target: t.name, before: "\u2014", after: tmpl.name + " template, " + plan });
      persist();
      closeModal();
      toast("Created " + t.name, "ok");
      navigate("#/tenants/" + t.id + "/profile");
    };
  }
  function openInviteUser(tenantId) {
    const t = getTenant(tenantId);
    openModal(`
    <div class="modal-h"><h3>Invite user \u2014 ${esc(t.tradingAs || t.name)}</h3><button class="icon-btn light" data-act="close-modal">${icon("x", 16)}</button></div>
    <div class="modal-b">
      <div class="field"><label>Name</label><input class="input" id="iu-name" /></div>
      <div class="field"><label>Email</label><input class="input" id="iu-email" type="email" placeholder="name@company.co.za" /></div>
      <div class="field"><label>Role</label>
        <select class="select" id="iu-role">${DEFAULT_ROLES.map((r) => `<option value="${r.id}">${esc(r.name)}</option>`).join("")}</select>
      </div>
      <div class="field"><label>Password</label><input class="input" id="iu-pass" value="Demo@123" autocomplete="off" /></div>
      <p class="tiny">They sign in with this email and password, then MFA 123456, and see only ${esc(t.tradingAs || t.name)}.</p>
    </div>
    <div class="modal-f">
      <button class="btn btn-secondary" data-act="close-modal">Cancel</button>
      <button class="btn btn-primary" id="iu-go">Send invite</button>
    </div>`);
    document.getElementById("iu-go").onclick = () => {
      const name = document.getElementById("iu-name").value.trim() || "New user";
      const email = document.getElementById("iu-email").value.trim().toLowerCase();
      const role = document.getElementById("iu-role").value;
      const password = document.getElementById("iu-pass").value || "Demo@123";
      if (!email.includes("@")) {
        toast("Enter an email address", "warn");
        return;
      }
      const taken = state.tenants.some((tt) => (tt.users || []).some((u) => String(u.email || "").toLowerCase() === email));
      if (taken) {
        toast("That email is already a user", "warn");
        return;
      }
      patchTenant(tenantId, (x) => {
        x.users = x.users || [];
        x.users.push({ id: uid("u"), name, email, role, status: "Active", lastLogin: null, mfa: true, password });
        x.usersCount = x.users.length;
      }, { tenantId, action: "User added", target: email, before: "\u2014", after: "Role: " + ((DEFAULT_ROLES.find((r) => r.id === role) || {}).name || role) });
      closeModal();
      toast(name + " can sign in as " + email, "ok");
      render();
    };
  }
  function openInviteStaff() {
    openModal(`
    <div class="modal-h"><h3>Invite Omnivate staff</h3><button class="icon-btn light" data-act="close-modal">${icon("x", 16)}</button></div>
    <div class="modal-b">
      <div class="field"><label>Name</label><input class="input" id="is-name" /></div>
      <div class="field"><label>Email</label><input class="input" id="is-email" type="email" placeholder="name@omnivate.co.za" /></div>
      <div class="field"><label>Role</label><input class="input" id="is-role" placeholder="Support engineer" /></div>
      <div class="field"><label>Access</label>
        <select class="select" id="is-access"><option value="all">All instances</option><option value="assigned">Assigned tenants only</option></select>
      </div>
      <label class="field-row" style="border:0"><label class="switch sm"><input type="checkbox" id="is-imp" /><span></span></label><span>Allow impersonation (reason required)</span></label>
    </div>
    <div class="modal-f">
      <button class="btn btn-secondary" data-act="close-modal">Cancel</button>
      <button class="btn btn-primary" id="is-go">Send invite</button>
    </div>`);
    document.getElementById("is-go").onclick = () => {
      const name = document.getElementById("is-name").value.trim() || "New staff";
      const email = document.getElementById("is-email").value.trim() || "staff@omnivate.co.za";
      const role = document.getElementById("is-role").value.trim() || "Support";
      const access = document.getElementById("is-access").value;
      const canImpersonate = document.getElementById("is-imp").checked;
      state.staff.push({ id: uid("st"), name, email, role, title: role, access, assigned: [], canImpersonate, status: "Invited", mfa: false });
      pushAudit({ tenantId: state.tenants[0].id, action: "Staff invited", target: name, before: "\u2014", after: role + " \xB7 " + access });
      closeModal();
      toast("Staff invite sent to " + email + " (mock)", "ok");
      render();
    };
  }
  function openImpersonate(tenantId, userId, staffId) {
    const t = getTenant(tenantId) || state.tenants[0];
    const users = t.users || [];
    const pre = userId || users[0] && users[0].id;
    openModal(`
    <div class="modal-h"><h3>Impersonate a tenant user</h3><button class="icon-btn light" data-act="close-modal">${icon("x", 16)}</button></div>
    <div class="modal-b">
      <p class="tiny" style="margin-bottom:12px">A reason is required and is written to the audit log. The session is announced on the client preview banner.</p>
      <div class="field"><label>Tenant</label>
        <select class="select" id="im-ten">${state.tenants.map((x) => `<option value="${x.id}" ${x.id === t.id ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</select>
      </div>
      <div class="field"><label>User</label>
        <select class="select" id="im-user">${users.map((u) => `<option value="${u.id}" ${u.id === pre ? "selected" : ""}>${esc(u.name)} \xB7 ${esc(u.email)}</option>`).join("")}</select>
      </div>
      <div class="field"><label>Reason (required)</label><textarea class="textarea" id="im-reason" placeholder="e.g. Investigate a failed invoice post reported by the customer."></textarea></div>
    </div>
    <div class="modal-f">
      <button class="btn btn-secondary" data-act="close-modal">Cancel</button>
      <button class="btn btn-primary" id="im-go">Start impersonation</button>
    </div>`);
    document.getElementById("im-ten").onchange = () => {
      const nt = getTenant(document.getElementById("im-ten").value);
      document.getElementById("im-user").innerHTML = (nt.users || []).map((u) => `<option value="${u.id}">${esc(u.name)} \xB7 ${esc(u.email)}</option>`).join("");
    };
    document.getElementById("im-go").onclick = () => {
      const reason = document.getElementById("im-reason").value.trim();
      if (!reason) {
        toast("Please enter a reason", "warn");
        return;
      }
      const tid = document.getElementById("im-ten").value;
      const uid_ = document.getElementById("im-user").value;
      const ten = getTenant(tid);
      const user = (ten.users || []).find((u) => u.id === uid_);
      ui.impersonating = { tenantId: tid, userId: uid_, userName: user ? user.name : "User", reason };
      pushAudit({ tenantId: tid, action: "Impersonation started", target: user ? user.name : uid_, before: "\u2014", after: "Reason: " + reason });
      closeModal();
      navigate("#/preview/" + tid + "/work/home");
      toast("Now impersonating " + (user ? user.name : "user") + " at " + ten.tradingAs, "ok");
    };
  }
  function openAddDsar(tenantId) {
    openModal(`
    <div class="modal-h"><h3>Log a data subject request</h3><button class="icon-btn light" data-act="close-modal">${icon("x", 16)}</button></div>
    <div class="modal-b">
      <div class="field"><label>Type</label>
        <select class="select" id="ds-type"><option>Access</option><option>Correction</option><option>Deletion</option><option>Objection</option></select>
      </div>
      <div class="field"><label>Data subject</label><input class="input" id="ds-who" placeholder="Name or reference" /></div>
    </div>
    <div class="modal-f">
      <button class="btn btn-secondary" data-act="close-modal">Cancel</button>
      <button class="btn btn-primary" id="ds-go">Log request</button>
    </div>`);
    document.getElementById("ds-go").onclick = () => {
      const type = document.getElementById("ds-type").value;
      const who = document.getElementById("ds-who").value.trim() || "Unnamed subject";
      patchTenant(tenantId, (x) => {
        x.compliance.dsar = x.compliance.dsar || [];
        x.compliance.dsar.unshift({ id: uid("ds"), type, subject: who, status: "Open", received: (/* @__PURE__ */ new Date()).toISOString(), due: "" });
      }, { tenantId, action: "DSAR logged", target: type, before: "\u2014", after: who });
      closeModal();
      toast("Request logged", "ok");
      render();
    };
  }
  function sampleDocNumbers(t) {
    const seqs = t.profile && t.profile.sequences || [];
    const inv = seqs.find((s) => /invoice|quote|quotation/i.test(s.doc));
    const po = seqs.find((s) => /purchase|po/i.test(s.doc));
    const qn = inv ? String(inv.prefix).replace(/INV/i, "QT") + String(Math.max(1, (inv.next || 2) - 1)).padStart(inv.pad || 5, "0") : "QT-1044";
    const pn = po ? po.prefix + String(Math.max(1, (po.next || 2) - 1)).padStart(po.pad || 5, "0") : seqs[0] ? seqs[0].prefix.replace(/INV/i, "PO") + "00021" : "PO-0021";
    return { quote: qn, po: pn };
  }
  function renderSampleDocs(t, scr) {
    const nums = sampleDocNumbers(t);
    const highlightQuote = /quot/i.test(scr || "");
    const highlightPo = /purchase order/i.test(scr || "");
    const to = t.whatsapp && t.whatsapp.number || "+27 82 000 0000";
    return `
    <div class="card" style="margin-top:16px">
      <div class="card-h"><h2>Sample documents</h2><span class="tiny">Send a quote or purchase order via WhatsApp (mock)</span></div>
      <div class="card-b" style="display:flex;flex-direction:column;gap:10px">
        <div class="sample-doc ${highlightQuote ? "on" : ""}">
          <div>
            <div class="tiny">Sales quotation</div>
            <strong>${esc(nums.quote)}</strong>
            <div class="tiny">To a trade customer \xB7 ${zar(Math.round((t.mrr || 2500) * 0.85))} incl. VAT</div>
          </div>
          <button class="btn btn-sm btn-teal" data-act="send-whatsapp" data-id="${t.id}" data-doc="quote" data-no="${esc(nums.quote)}">${icon("send", 14)} Send via WhatsApp</button>
        </div>
        <div class="sample-doc ${highlightPo ? "on" : ""}">
          <div>
            <div class="tiny">Purchase order</div>
            <strong>${esc(nums.po)}</strong>
            <div class="tiny">To a supplier \xB7 ${zar(Math.round((t.mrr || 2500) * 0.42))} incl. VAT</div>
          </div>
          <button class="btn btn-sm btn-teal" data-act="send-whatsapp" data-id="${t.id}" data-doc="po" data-no="${esc(nums.po)}">${icon("send", 14)} Send via WhatsApp</button>
        </div>
        <div class="tiny">Messages go to ${esc(to)}. Direct marketing stays off unless the recipient has opted in (POPIA s.69). This is a prototype \u2014 nothing is sent.</div>
      </div>
    </div>`;
  }
  function openWhatsAppSend(tenantId, doc, number) {
    const t = getTenant(tenantId);
    const kind = doc === "po" ? "purchase order" : "quotation";
    const to = t.whatsapp && t.whatsapp.number || "+27 82 000 0000";
    const amount = zar(Math.round((t.mrr || 2500) * (doc === "po" ? 0.42 : 0.85)));
    const body = doc === "po" ? `Good day, please find purchase order ${number} from ${t.tradingAs || t.name} attached. Total ${amount} incl. VAT. Kindly confirm receipt.` : `Hi, please find quotation ${number} from ${t.tradingAs || t.name} attached. Total ${amount} incl. VAT. Valid for 14 days.`;
    openModal(`
    <div class="modal-h"><h3>Send via WhatsApp</h3><button class="icon-btn light" data-act="close-modal">${icon("x", 16)}</button></div>
    <div class="modal-b">
      <div class="wa-thread">
        <div class="tiny" style="text-align:center;margin-bottom:10px;color:#667781">${esc(to)}</div>
        <div class="wa-bubble">
          <div>${esc(body)}</div>
          <div class="tiny" style="margin-top:6px">\u{1F4CE} ${esc(number)}.pdf</div>
          <div class="wa-meta">14:08 <span id="wa-ticks" class="wa-ticks">\u2713</span></div>
        </div>
        <div id="wa-status" class="tiny" style="text-align:right;margin-top:8px;color:#667781">Sending\u2026</div>
      </div>
    </div>
    <div class="modal-f"><button class="btn btn-primary" data-act="close-modal" id="wa-done" disabled>Close</button></div>`);
    const ticks = document.getElementById("wa-ticks");
    const status = document.getElementById("wa-status");
    const done = document.getElementById("wa-done");
    setTimeout(() => {
      if (ticks) ticks.textContent = "\u2713";
      if (status) status.textContent = "Sent";
    }, 350);
    setTimeout(() => {
      if (ticks) ticks.textContent = "\u2713\u2713";
      if (status) status.textContent = "Delivered";
    }, 900);
    setTimeout(() => {
      if (ticks) {
        ticks.textContent = "\u2713\u2713";
        ticks.classList.add("read");
      }
      if (status) status.textContent = "Read";
      if (done) {
        done.disabled = false;
      }
      pushAudit({ tenantId, action: "Document sent via WhatsApp (mock)", target: number, before: "Draft " + kind, after: "Sent, delivered and read by " + to });
      toast(kind.charAt(0).toUpperCase() + kind.slice(1) + " " + number + " sent via WhatsApp", "ok");
    }, 1600);
  }
  function splitKey(key) {
    const i = String(key).indexOf("::");
    return [key.slice(0, i), key.slice(i + 2)];
  }
  function moveCol(tenantId, key, colId, dirOrTarget) {
    const t = getTenant(tenantId);
    if (!t) return;
    const [mid, sid] = splitKey(key);
    const cols = resolvedColumns(t, mid, sid);
    const order = cols.map((c) => c.id);
    const i = order.indexOf(colId);
    if (i < 0) return;
    let j;
    if (typeof dirOrTarget === "number") j = i + dirOrTarget;
    else {
      j = order.indexOf(dirOrTarget);
    }
    if (j < 0 || j >= order.length || j === i) return;
    const [item] = order.splice(i, 1);
    order.splice(j, 0, item);
    const ov = ensureOverride(t, key);
    ov.order = order;
    persist();
    render({ keepScroll: true });
  }
  function toggleCol(tenantId, key, colId, visible) {
    const t = getTenant(tenantId);
    if (!t) return;
    const ov = ensureOverride(t, key);
    const hidden = new Set(ov.hidden || []);
    if (visible) hidden.delete(colId);
    else hidden.add(colId);
    ov.hidden = [...hidden];
    const [mid, sid] = splitKey(key);
    const col = columnsFor(mid, sid).find((c) => c.id === colId);
    pushAudit({ tenantId, action: visible ? "Column shown" : "Column hidden", target: col && col.name || colId, before: visible ? "Hidden" : "Visible", after: visible ? "Visible" : "Hidden" });
    render({ keepScroll: true });
  }
  function render(opts = {}) {
    const session = getSession();
    const route = parseHash();
    if (!session) {
      if (route.view === "mfa") renderMfa();
      else renderLogin();
      return;
    }
    if (session.kind === "tenant") {
      const ok = route.view === "preview" && route.parts[1] === session.tenantId;
      if (!ok) {
        navigate(homeFor(session));
        return;
      }
    } else if (route.view === "login" || route.view === "mfa") {
      navigate("#/fleet");
      return;
    }
    const y = opts.keepScroll ? (document.querySelector(".content") || {}).scrollTop || 0 : 0;
    if (route.view === "preview") {
      if (!(ext.preview && ext.preview())) renderPreview();
    }
    else if (route.view === "tenants") renderTenant();
    else if (route.view === "users") renderUsers();
    else if (route.view === "releases") renderReleases();
    else renderFleet();
    bindAfterRender();
    if (opts.keepScroll) {
      const c = document.querySelector(".content");
      if (c) c.scrollTop = y;
    }
    if (opts.focusSel) {
      const el = document.querySelector(opts.focusSel);
      if (el && el.focus) {
        el.focus();
        if (typeof el.value === "string" && el.setSelectionRange) {
          try {
            el.setSelectionRange(el.value.length, el.value.length);
          } catch (e) {
          }
        }
      }
    }
    const box = document.getElementById("ask-messages");
    if (box) box.scrollTop = box.scrollHeight;
    if (window.OmnivatePhone) window.OmnivatePhone.dress();
  }
  function bindAfterRender() {
    const logo = document.getElementById("logo-file");
    if (logo) logo.addEventListener("change", onLogoUpload);
    bindColDrag();
  }
  function onLogoUpload(e) {
    const file = e.target.files && e.target.files[0];
    const id = e.target.getAttribute("data-id");
    if (!file || !id) return;
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const size = 256;
      const canvas = document.createElement("canvas");
      const scale = Math.min(size / img.width, size / img.height, 1);
      canvas.width = Math.max(1, Math.round(img.width * scale));
      canvas.height = Math.max(1, Math.round(img.height * scale));
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      const data = canvas.toDataURL("image/png");
      URL.revokeObjectURL(url);
      patchTenant(id, (x) => {
        x.logoData = data;
      }, { tenantId: id, action: "Logo uploaded", target: "Company logo", before: "\u2014", after: "Updated" });
      toast("Logo updated \u2014 it will show in the client preview", "ok");
      render({ keepScroll: true });
    };
    img.src = url;
  }
  function bindColDrag() {
    const list = document.getElementById("col-list");
    if (!list) return;
    let dragId = null;
    list.querySelectorAll(".col-row").forEach((row) => {
      row.addEventListener("dragstart", (ev) => {
        dragId = row.getAttribute("data-col-id");
        row.classList.add("dragging");
        ev.dataTransfer.effectAllowed = "move";
      });
      row.addEventListener("dragend", () => row.classList.remove("dragging"));
      row.addEventListener("dragover", (ev) => ev.preventDefault());
      row.addEventListener("drop", (ev) => {
        ev.preventDefault();
        const targetId = row.getAttribute("data-col-id");
        const id = row.getAttribute("data-act-drag");
        const mid = row.getAttribute("data-module");
        const sid = row.getAttribute("data-screen");
        if (dragId && targetId && dragId !== targetId) moveCol(id, mid + "::" + sid, dragId, targetId);
      });
    });
  }
  function onClick(e) {
    const el = e.target.closest("[data-act]");
    if (!el) {
      if (!e.target.closest(".notif-pop") && !e.target.closest('[data-act="toggle-notifs"]')) {
        if (ui.notifOpen) {
          ui.notifOpen = false;
          const p = document.getElementById("notif-pop");
          if (p) p.remove();
        }
      }
      return;
    }
    const act = el.getAttribute("data-act");
    const id = el.getAttribute("data-id");
    if (ext.act && ext.act(act, el, e)) return;
    if (act === "reset-demo") {
      e.preventDefault();
      confirmModal({
        title: "Reset demo data",
        body: "This clears changes stored in this browser and restores the seeded companies, including Top Quartz and The Granite Warehouse.",
        confirm: "Reset demo data",
        danger: true,
        onConfirm: () => {
          resetDemo();
          ensureStoneTenants();
          ensureDemoUsers();
          ensureScanFeatures();
          ensureExtraTenant();
          ensureInnovativeFlags();
          persist();
          if (ext.afterReset) ext.afterReset();
          toast("Demo data restored", "ok");
          navigate("#/fleet");
        }
      });
      return;
    }
    if (act === "close-modal") {
      e.preventDefault();
      stopScanner();
      closeModal();
      return;
    }
    if (act === "toggle-sidebar") {
      e.preventDefault();
      ui.sidebarOpen = !ui.sidebarOpen;
      render({ keepScroll: true });
      return;
    }
    if (act === "close-sidebar") {
      e.preventDefault();
      ui.sidebarOpen = false;
      render({ keepScroll: true });
      return;
    }
    if (act === "toggle-notifs") {
      e.preventDefault();
      ui.notifOpen = !ui.notifOpen;
      render({ keepScroll: true });
      return;
    }
    if (act === "open-ask") {
      e.preventDefault();
      ui.askOpen = true;
      ui.sidebarOpen = false;
      render({ keepScroll: true, focusSel: "#ask-input" });
      return;
    }
    if (act === "close-ask") {
      e.preventDefault();
      ui.askOpen = false;
      render({ keepScroll: true });
      return;
    }
    if (act === "logout") {
      e.preventDefault();
      setSession(null);
      navigate("#/login");
      toast("Signed out");
      return;
    }
    if (act === "open-migrate") {
      e.preventDefault();
      openMigrateWizard();
      return;
    }
    if (act === "open-templates") {
      e.preventDefault();
      openTemplatesModal(id);
      return;
    }
    if (act === "apply-template") {
      e.preventDefault();
      let tid = id;
      if (!tid) {
        const sel = document.getElementById("tpl-tenant");
        tid = sel && sel.value;
      }
      if (tid) {
        applyTemplate(tid, el.getAttribute("data-template"));
        closeModal();
        navigate("#/tenants/" + tid + "/modules");
      }
      return;
    }
    if (act === "open-new-tenant") {
      e.preventDefault();
      openNewTenant();
      return;
    }
    if (act === "open-tenant") {
      e.preventDefault();
      navigate("#/tenants/" + id + "/profile");
      return;
    }
    if (act === "preview-tenant" || act === "switch-tenant") {
      e.preventDefault();
      navigate("#/preview/" + id + "/work/home");
      return;
    }
    if (act === "exit-preview") {
      e.preventDefault();
      exitPreview(id);
      return;
    }
    if (act === "set-color") {
      e.preventDefault();
      patchTenant(id, (x) => {
        x.color = el.getAttribute("data-color");
      }, { tenantId: id, action: "Branding updated", target: "Primary colour", before: getTenant(id).color, after: el.getAttribute("data-color") });
      render({ keepScroll: true });
      return;
    }
    if (act === "col-mode") {
      e.preventDefault();
      ui.colMode[id] = el.getAttribute("data-mode");
      render({ keepScroll: true });
      return;
    }
    if (act === "col-mod") {
      e.preventDefault();
      ui.colModule[id] = el.getAttribute("data-code");
      ui.colScreen[id] = null;
      render({ keepScroll: true });
      return;
    }
    if (act === "col-scr") {
      e.preventDefault();
      ui.colScreen[id] = el.getAttribute("data-name");
      render({ keepScroll: true });
      return;
    }
    if (act === "col-up") {
      e.preventDefault();
      moveCol(id, el.getAttribute("data-key"), el.getAttribute("data-col"), -1);
      return;
    }
    if (act === "col-down") {
      e.preventDefault();
      moveCol(id, el.getAttribute("data-key"), el.getAttribute("data-col"), 1);
      return;
    }
    if (act === "modules-core") {
      e.preventDefault();
      const before = countEnabled(getTenant(id));
      patchTenant(id, (x) => {
        x.modules = moduleMap(CORE_MODULES);
      }, { tenantId: id, action: "Modules reset to core", target: "Module set", before: before + " on", after: CORE_MODULES.length + " on" });
      toast("Only core modules left on", "ok");
      render({ keepScroll: true });
      return;
    }
    if (act === "modules-all") {
      e.preventDefault();
      const before = countEnabled(getTenant(id));
      patchTenant(id, (x) => {
        MODULES.forEach((m) => {
          x.modules[m.code] = true;
        });
      }, { tenantId: id, action: "All modules enabled", target: "Module set", before: before + " on", after: "41 on" });
      toast("All 41 modules enabled", "ok");
      render({ keepScroll: true });
      return;
    }
    if (act === "reset-user-password") {
      e.preventDefault();
      const uid_ = el.getAttribute("data-user");
      const t = getTenant(id);
      const user = t && (t.users || []).find((u) => u.id === uid_);
      if (!user) return;
      const before = user.password ? "Set" : "Unset";
      patchTenant(id, (x) => {
        const u = (x.users || []).find((uu) => uu.id === uid_);
        if (u) u.password = "Demo@123";
      }, { tenantId: id, action: "Password reset", target: user.email || user.name, before, after: "Demo@123" });
      toast("Password for " + (user.email || user.name) + " reset to Demo@123", "ok");
      render({ keepScroll: true });
      return;
    }
    if (act === "invite-user") {
      e.preventDefault();
      openInviteUser(id);
      return;
    }
    if (act === "invite-staff") {
      e.preventDefault();
      openInviteStaff();
      return;
    }
    if (act === "impersonate") {
      e.preventDefault();
      openImpersonate(id, el.getAttribute("data-user"));
      return;
    }
    if (act === "impersonate-staff") {
      e.preventDefault();
      openImpersonate(state.tenants[0].id, null, el.getAttribute("data-staff"));
      return;
    }
    if (act === "add-dsar") {
      e.preventDefault();
      openAddDsar(id);
      return;
    }
    if (act === "change-plan") {
      e.preventDefault();
      const planId = el.getAttribute("data-plan");
      const t = getTenant(id);
      const prev = (PLANS[t.plan] || {}).name;
      patchTenant(id, (x) => {
        x.plan = planId;
        x.mrr = PLANS[planId].price;
      }, { tenantId: id, action: "Plan changed", target: "Subscription", before: prev, after: PLANS[planId].name + " (" + zar(PLANS[planId].price) + ")" });
      toast("Plan updated to " + PLANS[planId].name, "ok");
      render({ keepScroll: true });
      return;
    }
    if (act === "snap-doc") {
      e.preventDefault();
      openSnapDocument(id);
      return;
    }
    if (act === "scan-barcode") {
      e.preventDefault();
      openScanBarcode(id);
      return;
    }
    if (act === "lookup-item") {
      e.preventDefault();
      showScannedItem(id, el.getAttribute("data-code"));
      return;
    }
    if (act === "send-whatsapp") {
      e.preventDefault();
      openWhatsAppSend(id, el.getAttribute("data-doc"), el.getAttribute("data-no"));
      return;
    }
    if (act === "rollout-canary") {
      e.preventDefault();
      const rel = state.releases.find((r) => r.id === el.getAttribute("data-rel"));
      const candidates = state.tenants.filter((t) => t.version !== rel.version);
      openModal(`
      <div class="modal-h"><h3>Roll out ${esc(rel.version)} (canary)</h3><button class="icon-btn light" data-act="close-modal">${icon("x", 16)}</button></div>
      <div class="modal-b">
        <p class="tiny" style="margin-bottom:10px">Pick one more instance to join the canary.</p>
        ${candidates.map((t) => `<label class="field-row" style="border:0"><input type="radio" name="canary-t" value="${t.id}" /> <span>${esc(t.name)} \xB7 currently ${esc(t.version)}</span></label>`).join("") || "<p>Everyone is already on this build.</p>"}
      </div>
      <div class="modal-f"><button class="btn btn-secondary" data-act="close-modal">Cancel</button><button class="btn btn-primary" id="can-go">Roll out</button></div>`);
      document.getElementById("can-go").onclick = () => {
        const sel = document.querySelector('input[name="canary-t"]:checked');
        if (!sel) {
          toast("Pick an instance", "warn");
          return;
        }
        const ten = getTenant(sel.value);
        const prev = ten.version;
        patchTenant(ten.id, (x) => {
          x.version = rel.version;
          x.channel = "canary";
          x.status = "canary";
          x.alerts = (x.alerts || []).concat({ level: "info", text: "Running canary release " + rel.version + "." });
        });
        rel.targets.push(ten.id);
        pushAudit({ tenantId: ten.id, action: "Canary rollout", target: rel.version, before: prev, after: rel.version });
        persist();
        closeModal();
        toast(ten.tradingAs + " is now on " + rel.version, "ok");
        render();
      };
      return;
    }
    if (act === "rollback-canary") {
      e.preventDefault();
      const rel = state.releases.find((r) => r.id === el.getAttribute("data-rel"));
      confirmModal({
        title: "Rollback canary " + rel.version,
        body: "Instances on this canary will return to 2.4.1 (current stable).",
        confirm: "Rollback",
        danger: true,
        onConfirm: () => {
          (rel.targets || []).forEach((tid) => {
            const ten = getTenant(tid);
            if (!ten) return;
            const prev = ten.version;
            patchTenant(tid, (x) => {
              x.version = "2.4.1";
              x.channel = "stable";
              if (x.status === "canary") x.status = "healthy";
              x.alerts = (x.alerts || []).filter((a) => !/canary/i.test(a.text));
            });
            pushAudit({ tenantId: tid, action: "Canary rollback", target: rel.version, before: prev, after: "2.4.1" });
          });
          rel.targets = [];
          persist();
          toast("Canary rolled back to 2.4.1", "ok");
          render();
        }
      });
      return;
    }
    if (act === "rollout-stable") {
      e.preventDefault();
      const rel = state.releases.find((r) => r.id === el.getAttribute("data-rel"));
      const older = state.tenants.filter((t) => t.channel !== "canary" && t.version !== rel.version && compareVer(t.version, rel.version) < 0);
      if (!older.length) {
        toast("No older stable instances to upgrade", "ok");
        return;
      }
      confirmModal({
        title: "Roll out " + rel.version,
        body: "This will upgrade " + older.map((t) => t.tradingAs).join(", ") + " to " + rel.version + ".",
        confirm: "Upgrade",
        onConfirm: () => {
          older.forEach((ten) => {
            const prev = ten.version;
            patchTenant(ten.id, (x) => {
              x.version = rel.version;
              x.channel = "stable";
              x.alerts = (x.alerts || []).filter((a) => !/behind|version/i.test(a.text));
              if (x.status === "warning" && !(x.alerts || []).some((a) => a.level === "warning" || a.level === "danger")) x.status = "healthy";
            });
            rel.targets.push(ten.id);
            pushAudit({ tenantId: ten.id, action: "Stable rollout", target: rel.version, before: prev, after: rel.version });
          });
          persist();
          toast("Rolled out " + rel.version, "ok");
          render();
        }
      });
      return;
    }
  }
  function compareVer(a, b) {
    const pa = String(a).split(/[^\d]+/).filter(Boolean).map(Number);
    const pb = String(b).split(/[^\d]+/).filter(Boolean).map(Number);
    for (let i = 0; i < 5; i++) {
      const da = pa[i] || 0, db = pb[i] || 0;
      if (da < db) return -1;
      if (da > db) return 1;
    }
    return 0;
  }
  function onChange(e) {
    const el = e.target.closest("[data-act]");
    if (!el) return;
    const act = el.getAttribute("data-act");
    const id = el.getAttribute("data-id");
    if (act === "fleet-region") {
      ui.fleetRegion = el.value;
      render({ keepScroll: true, focusSel: '[data-act="fleet-region"]' });
      return;
    }
    if (act === "fleet-hosting") {
      ui.fleetHosting = el.value;
      render({ keepScroll: true, focusSel: '[data-act="fleet-hosting"]' });
      return;
    }
    if (act === "fleet-status") {
      ui.fleetStatus = el.value;
      render({ keepScroll: true, focusSel: '[data-act="fleet-status"]' });
      return;
    }
    if (act === "fleet-q") {
      ui.fleetQuery = el.value;
      render({ keepScroll: true, focusSel: '[data-act="fleet-q"]' });
      return;
    }
    if (act === "col-search") {
      ui.colSearch[id] = el.value;
      render({ keepScroll: true, focusSel: '[data-act="col-search"]' });
      return;
    }
    if (act === "audit-q") {
      ui.auditQ = el.value;
      render({ keepScroll: true, focusSel: '[data-act="audit-q"]' });
      return;
    }
    if (act === "set-color-input") {
      const prev = getTenant(id).color;
      patchTenant(id, (x) => {
        x.color = el.value;
      }, { tenantId: id, action: "Branding updated", target: "Primary colour", before: prev, after: el.value });
      render({ keepScroll: true });
      return;
    }
    if (act === "toggle-offline") {
      patchTenant(id, (x) => {
        x.offlineReady = el.checked;
      }, { tenantId: id, action: el.checked ? "Offline-ready enabled" : "Offline-ready disabled", target: "Client app", before: el.checked ? "Off" : "On", after: el.checked ? "On" : "Off" });
      toast(el.checked ? "Client app marked offline-ready" : "Offline-ready turned off", "ok");
      render({ keepScroll: true });
      return;
    }
    if (act === "toggle-feature") {
      const key = el.getAttribute("data-key");
      const label = el.getAttribute("data-label") || key;
      const t = getTenant(id);
      const prev = t.features && t.features[key] ? "On" : "Off";
      patchTenant(id, (x) => {
        x.features = x.features || {};
        x.features[key] = el.checked;
      }, { tenantId: id, action: el.checked ? label + " enabled" : label + " disabled", target: label, before: prev, after: el.checked ? "On" : "Off" });
      toast(label + (el.checked ? " is on" : " is off") + " for " + (t.tradingAs || t.name), "ok");
      render({ keepScroll: true });
      return;
    }
    if (act === "toggle-camera-scan") {
      const t = getTenant(id);
      const prev = t.features && t.features.cameraScan ? "On" : "Off";
      patchTenant(id, (x) => {
        x.features = x.features || {};
        x.features.cameraScan = el.checked;
        x.features.handheldScan = true;
      }, { tenantId: id, action: el.checked ? "Camera scan enabled" : "Camera scan disabled", target: "Scan by camera", before: prev, after: el.checked ? "On" : "Off" });
      toast(el.checked ? "Camera scan is on for " + (t.tradingAs || t.name) : "Camera scan is off — handheld scanners still work", "ok");
      render({ keepScroll: true });
      return;
    }
    if (act === "toggle-module") {
      const code = el.getAttribute("data-code");
      const mod = getModule(code);
      const t = getTenant(id);
      const prev = t.modules[code] ? "On" : "Off";
      patchTenant(id, (x) => {
        x.modules[code] = el.checked;
      }, { tenantId: id, action: el.checked ? "Module enabled" : "Module disabled", target: (mod && mod.name) + " (" + code + ")", before: prev, after: el.checked ? "On" : "Off" });
      toast((mod && mod.name) + (el.checked ? " is now on" : " is now off") + " \u2014 preview the client app to see the menu change", "ok");
      render({ keepScroll: true });
      return;
    }
    if (act === "toggle-col") {
      toggleCol(id, el.getAttribute("data-key"), el.getAttribute("data-col"), el.checked);
      return;
    }
    if (act === "rename-col") {
      const key = el.getAttribute("data-key");
      const colId = el.getAttribute("data-col");
      const t = getTenant(id);
      const ov = ensureOverride(t, key);
      ov.names = ov.names || {};
      const [mid, sid] = splitKey(key);
      const col = columnsFor(mid, sid).find((c) => c.id === colId);
      const before = ov.names[colId] || col && col.name || "";
      const name = el.value.trim() || col && col.name;
      ov.names[colId] = name;
      persist();
      if (name !== before) pushAudit({ tenantId: id, action: "Column renamed", target: sid + " \u2192 " + (col && col.name), before, after: name });
      return;
    }
    if (act === "toggle-section") {
      const key = el.getAttribute("data-key");
      const name = el.getAttribute("data-section");
      const t = getTenant(id);
      t.sectionOverrides = t.sectionOverrides || {};
      t.sectionOverrides[key] = t.sectionOverrides[key] || { hidden: [] };
      const hidden = new Set(t.sectionOverrides[key].hidden || []);
      if (el.checked) hidden.delete(name);
      else hidden.add(name);
      t.sectionOverrides[key].hidden = [...hidden];
      persist();
      render({ keepScroll: true });
      return;
    }
    if (act === "set-user-role") {
      const uid_ = el.getAttribute("data-user");
      const t = getTenant(id);
      const user = (t.users || []).find((u) => u.id === uid_);
      const before = user && user.role;
      patchTenant(id, (x) => {
        const u = (x.users || []).find((u2) => u2.id === uid_);
        if (u) u.role = el.value;
      }, { tenantId: id, action: "User role changed", target: user ? user.name : uid_, before, after: el.value });
      toast("Role updated", "ok");
      return;
    }
    if (act === "perm") {
      const role = el.getAttribute("data-role");
      const code = el.getAttribute("data-code");
      const flag = el.getAttribute("data-flag");
      patchTenant(id, (x) => {
        x.permissions = x.permissions || {};
        x.permissions[role] = x.permissions[role] || {};
        x.permissions[role][code] = x.permissions[role][code] || { C: false, R: false, U: false, D: false, A: false };
        x.permissions[role][code][flag] = el.checked;
      });
      return;
    }
    if (act === "popia") {
      const key = el.getAttribute("data-key");
      patchTenant(id, (x) => {
        x.compliance[key] = el.checked;
      }, { tenantId: id, action: "POPIA checklist updated", target: key, before: el.checked ? "No" : "Yes", after: el.checked ? "Yes" : "No" });
      render({ keepScroll: true });
      return;
    }
    if (act === "io-field") {
      const key = el.getAttribute("data-key");
      patchTenant(id, (x) => {
        x.compliance.informationOfficer = x.compliance.informationOfficer || {};
        x.compliance.informationOfficer[key] = el.value;
      });
      return;
    }
    if (act === "retention") {
      patchTenant(id, (x) => {
        x.compliance.retentionYears = Number(el.value) || 5;
      });
      return;
    }
  }
  function onSubmit(e) {
    const form = e.target.closest("form");
    if (!form) return;
    const act = form.getAttribute("data-act");
    if (!act) return;
    e.preventDefault();
    if (ext.submit && ext.submit(act, form, e)) return;
    if (act === "login-submit") {
      const emailEl = document.getElementById("login-email");
      const passEl = document.getElementById("login-pass");
      const found = matchAccount(emailEl && emailEl.value, passEl && passEl.value);
      if (found.error) {
        toast(found.error, "err");
        return;
      }
      ui.pendingEmail = found.email;
      ui.pendingAuth = found;
      navigate("#/mfa");
      return;
    }
    if (act === "mfa-submit") {
      const digits = [...document.querySelectorAll("#otp-row input")].map((i) => i.value).join("");
      if (digits !== "123456") {
        toast("Demo code is 123456", "warn");
        return;
      }
      completeLogin();
      return;
    }
    if (act === "ask-send") {
      const input = document.getElementById("ask-input");
      const text = (input && input.value || "").trim();
      ui.askInput = "";
      handleAsk(text);
      return;
    }
    if (act === "save-profile") {
      const id = form.getAttribute("data-id");
      const val = (name) => form.elements[name] && form.elements[name].value || "";
      const chk = (name) => !!(form.elements[name] && form.elements[name].checked);
      patchTenant(id, (x) => {
        const p = x.profile;
        p.legalName = val("legalName");
        p.tradingAs = val("tradingAs");
        x.name = p.legalName || x.name;
        x.tradingAs = p.tradingAs || x.tradingAs;
        p.registrationNumber = val("registrationNumber");
        p.vatNumber = val("vatNumber");
        p.bbbee = val("bbbee");
        p.currency = val("currency");
        p.fiscalYearStart = val("fiscalYearStart");
        x.industry = val("industry") || x.industry;
        p.email = val("email");
        p.phone = val("phone");
        p.website = val("website");
        p.address1 = val("address1");
        p.address2 = val("address2");
        p.city = val("city");
        p.postal = val("postal");
        p.province = val("province");
        p.terminology = p.terminology || {};
        ["Customer", "Supplier", "Item", "Employee"].forEach((k) => {
          p.terminology[k] = val("term_" + k) || k;
        });
        (p.sequences || []).forEach((s, i) => {
          if (form.elements["seq_prefix_" + i]) s.prefix = form.elements["seq_prefix_" + i].value;
          if (form.elements["seq_pad_" + i]) s.pad = Number(form.elements["seq_pad_" + i].value) || s.pad;
          if (form.elements["seq_next_" + i]) s.next = Number(form.elements["seq_next_" + i].value) || s.next;
        });
        p.templates = p.templates || {};
        Object.keys(p.templates).forEach((k) => {
          if (form.elements["tpl_" + k]) p.templates[k] = form.elements["tpl_" + k].value;
        });
        x.whatsapp = x.whatsapp || {};
        x.whatsapp.number = val("waNumber");
        ["invoices", "payments", "approvals", "backups", "marketing"].forEach((k) => {
          x.whatsapp[k] = chk("wa_" + k);
        });
        p.business = p.business || {};
        p.business.brandColor = val("brandColor") || p.business.brandColor || x.color;
        p.business.bankName = val("bankName");
        p.business.accountName = val("accountName");
        p.business.accountNumber = val("accountNumber");
        p.business.branchCode = val("branchCode");
        p.business.bankIsExample = chk("bankIsExample");
        p.business.footer = val("docFooter");
      }, { tenantId: id, action: "Business details updated", target: "Documents", before: "Previous footer and bank details", after: val("docFooter") ? "Footer and bank details saved" : "Cleared" });
      toast("Company settings saved", "ok");
      render({ keepScroll: true });
    }
  }
  function onKey(e) {
    if (e.key === "Escape") {
      if (document.querySelector(".modal-backdrop")) {
        stopScanner();
        closeModal();
        return;
      }
      if (ui.askOpen) {
        ui.askOpen = false;
        render({ keepScroll: true });
        return;
      }
      if (ui.notifOpen) {
        ui.notifOpen = false;
        render({ keepScroll: true });
        return;
      }
      if (ui.sidebarOpen) {
        ui.sidebarOpen = false;
        render({ keepScroll: true });
        return;
      }
    }
  }
  window.Omnivate = {
    ext, getTenant, getState, patchTenant, pushAudit, persist, render, navigate, toast,
    openModal, closeModal, confirmModal, esc, zar, icon, uid, getSession, resolvedColumns,
    applyTerm, enabledModules, getModule, screensFor, parseHash, resetDemo, reloadFromStorage,
    ui, AREAS, AREA_ICON, MODULES, PLANS, stopScanner, fmtDate
  };
  function boot() {
    loadState();
    ensureStoneTenants();
    ensureDemoUsers();
    ensureScanFeatures();
    ensureExtraTenant();
    ensureInnovativeFlags();
    persist();
    window.addEventListener("storage", (ev) => {
      if (ev.key === STORE_KEY) {
        reloadFromStorage();
        if (ext.afterReset) ext.afterReset();
        render();
      }
    });
    window.addEventListener("hashchange", () => {
      ui.sidebarOpen = false;
      ui.notifOpen = false;
      render();
    });
    document.addEventListener("click", onClick);
    document.addEventListener("change", onChange);
    document.addEventListener("submit", onSubmit);
    document.addEventListener("keydown", onKey);
    render();
  }
  boot();
})();
