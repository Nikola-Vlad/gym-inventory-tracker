# Features

## Equipment model
Describes one piece of gym equipment.
- Properties: `title`, `id`, `quality`, `quantity`

## Quality type
Says what condition a piece of equipment is in.
- Allowed values: `'good'`, `'needs repair'`, `'broken'`
- Used in: the `quality` property of `Equipment`
- Test: put another word in `quality`. TypeScript should show an error.

## addEquipment
Adds one piece of equipment to the stock list.
- Takes: one `Equipment` object
- Does: pushes it into `equipmentStock`
- Returns: the whole updated stock list
- Test: call it with `treadmill`, then log the result. You should see the new item in the list.

## qualityFilterEquipment
Finds all equipment in a given condition.
- Takes: one `Quality` (`'good'`, `'needs repair'` or `'broken'`)
- Does: checks each item in `equipmentStock` and keeps those that match
- Returns: a new array of `Equipment`. The original stock is not changed.
- Test: add the treadmill, then filter by `'broken'`. You should see only the treadmill.

## Low Stock Alert
Warns when an item is running low and needs to be reordered.

### How it works
- Every `StockItem` has a `quantity` (how many we have) and a `minQuantity` (the lowest amount we want to keep).
- An item counts as **low** when `quantity <= minQuantity`. Being exactly at the minimum counts as low, because that is the moment to reorder.

### Functions
- `lowStockFilter()` returns an array of all low items. It takes no parameters, because each item carries its own minimum.
- `lowStockAlert()` prints one line per low item, for example: `Low stock: kettlebell (3/min 5)`. If nothing is low, it prints `All stock levels are fine.` It returns nothing (`void`).

### Also changed
- `Equipment` was renamed to `StockItem`, so the tracker can hold more than equipment.
- New fields: `category` ('equipment', 'apparel' or 'nutrition') and `minQuantity`.
- Optional fields for specific item types: `calories`, `protein`, `carbs`, `fat`, `size`, `color`.

## Find Item By Id
Finds a single item in the stock by its id.

### How it works
- `findItemById(id)` takes an `id` (number) and returns the first matching `StockItem`.
- If no item has that id, it returns `undefined`.

### Using the result
- The return type is `StockItem | undefined`, so TypeScript makes us handle the missing case.
- Use `?.` (for example `findItemById(3)?.title`) to get `undefined` instead of a crash.
- Use an `if` check when you want to do something different for a missing item.

## Update Quantity
Changes the quantity of an item in the stock, for example after a delivery or a sale.

### How it works
- `updateQuantity(id, newQuantity)` takes the item's `id` and the new quantity (both numbers).
- It finds the item with `findItemById`, then replaces its `quantity` with `newQuantity`.
- It returns nothing (`void`).

### Checks (guard clauses)
- If no item has that id, it prints `Item not found!` and stops.
- If `newQuantity` is below 0, it prints `Invalid quantity: must be 0 or more!` and stops.
- A quantity of 0 is allowed, because an item can run out.
- The item is only changed if both checks pass.

### Example
- `updateQuantity(3, 2)` sets the quantity of the item with id 3 to 2.