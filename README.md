Omnivate prototype for South African SME tenants. Static site, data stays in this browser. Live at https://viljoenlx-ship-it.github.io/omnivate-prototype/

Password for every demo account: **Demo@123**. MFA code: **123456**.

| Email | What opens |
| --- | --- |
| liam@omnivate.co.za | Owner Control Centre |
| admin@topquartz.demo | Top Quartz workspace only |
| admin@granitewarehouse.demo | The Granite Warehouse workspace only |

Omnivate staff (`@omnivate.co.za`) open the Control Centre. A tenant user never sees the Control Centre or another company's data. Add users, roles and password resets under the tenant's Users tab. New users start on Demo@123.

**Scan by camera** is a per-tenant switch on the Modules tab (off for both demo companies). Handheld USB/Bluetooth scanners always work: they type the code and press Enter. Use the scan field, or scan with nothing focused.

**Production** is on for The Granite Warehouse and off for Top Quartz. **Timesheets** (shifts, roster, leave, BCEA pay) are on for both. Switch them on the tenant Modules tab; each change is written to the audit log.

NIIMBOT M2-H labels default to **50 × 15 mm**, **591 × 177 px** at 300 dpi. Width is across the printhead; height is the feed (half of a 50×30 label). Print test label draws a border on the exact bitmap edge. Connect with **Connect via Bluetooth** or **Connect via USB** (Chrome/Edge, 115200 baud). On Windows, install the CH340/CH341 USB-serial driver if the printer does not appear as a COM port. Close the NIIMBOT phone app first — only one link at a time.

Goods received (GRV) is under Stock. **Print all labels** asks you to confirm the quantity per line, then prints that many labels with a progress bar, pause, and retry. The same queue is on multi-selected stock rows and on **Print all slab labels** for a production block.

Reset demo data on the Fleet page restores this seed.
