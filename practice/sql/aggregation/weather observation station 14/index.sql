SELECT CAST(MAX(LAT_N) as decimal(10,4))
FROM STATION
WHERE LAT_N < 137.2345
