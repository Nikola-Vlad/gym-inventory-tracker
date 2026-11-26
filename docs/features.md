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