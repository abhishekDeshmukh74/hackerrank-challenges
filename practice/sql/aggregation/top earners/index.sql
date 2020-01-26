SELECT
MAX(salary * months),
COUNT(*)
FROM Employee
WHERE(
    (months*salary) = (SELECT MAX(months*salary) FROM employee)
)
