function merge(intervals) {
    // Step 1: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    console.log("After sorting:", intervals);

    let merged = [];

    for (let i = 0; i < intervals.length; i++) {
        console.log("\nStep", i, "--------------------------------");
        console.log("Current interval:", intervals[i]);
        console.log("Merged before:", merged);
        console.log("Merged length:", merged.length);

        // If merged is empty OR no overlap
        if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
            merged.push(intervals[i]);
            console.log("Action: push");
        } else {
            // Overlap → merge with the last interval
            console.log("Action: merge");
            merged[merged.length - 1][1] = Math.max(
                merged[merged.length - 1][1],
                intervals[i][1]
            );
        }

        console.log("Merged after:", merged);
        console.log("Merged length now:", merged.length);
    }

    return merged;
}

// Example
let intervals = [[8,10],[1,3],[2,6],[15,18]];
let result = merge(intervals);

console.log("\nFinal merged result:", result);
