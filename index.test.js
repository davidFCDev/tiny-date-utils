const TinyDateUtils = require("./index");

test("formatDate works correctly", () => {
  const date = new Date("2025-01-22");
  expect(TinyDateUtils.formatDate(date)).toBe("2025-01-22");
  expect(TinyDateUtils.formatDate(date, "MM/DD/YYYY")).toBe("01/22/2025");
});

test("addDays works correctly", () => {
  const date = new Date("2025-01-22");
  const newDate = TinyDateUtils.addDays(date, 5);
  expect(TinyDateUtils.formatDate(newDate)).toBe("2025-01-27");
});

test("differenceInDays works correctly", () => {
  const date1 = new Date("2025-01-22");
  const date2 = new Date("2025-01-27");
  expect(TinyDateUtils.differenceInDays(date1, date2)).toBe(5);
});
