---
title: "What Exactly Happened with the Crowdstrike Outage?"
date: "2024-07-26"
summary: "Programmer Error: The Code That Broke It All"
image: "/images/articles/Article3.jpeg"
author: "Raj"
---

In the world of software development, even a tiny mistake can lead to catastrophic results. This is precisely what happened with #CrowdStrike, where a developer made a seemingly small error while writing code in C++.

### Null Pointer Creation: The Ghost in the Machine

The culprit? A pointer variable (`Obj* obj`). This variable was supposed to point to a specific object in memory, containing crucial data. But due to the error, this pointer remained NULL, effectively pointing to nothing.

### Missing Null Check: The Fatal Oversight

In good programming practice, developers should always check if a pointer is null before using it. Something like:

```cpp
if (obj == NULL) { 
    // handle the null case
}
```

However, in this case, that check was missing. The code tried to use this null pointer to access information, assuming it was valid.

## Attempting to Access "Nothing": A Recipe for Disaster

Imagine trying to read a book that doesn't exist. The program attempted to access member variables of the non-existent object (`obj->a` or `obj->b`), leading it to an invalid memory address based on the null pointer value (e.g., `0x0 + 4`). The stack dump snapshot showed it trying to access `0x9c`, which is clearly invalid. It was as if the program said, "NULL + 0x9C = 0x9C," trying to reach into a forbidden zone of memory.

## Memory Access Violation: The System's Self-Defense Mechanism

When the program tried to access this invalid memory, Windows stepped in to protect itself. Recognizing this as a potential security threat, Windows crashed the program entirely. The result? The dreaded Blue Screen of Death (BSOD) and the subsequent outage.

In essence, the code tried to pull data from a non-existent memory location, and the system, acting in self-defense, crashed to prevent further damage.

## Credit Where It's Due

> A big shoutout to Zach Vorhies for his thorough analysis and breakdown of the situation.

[Source](https://x.com/Perpetualmaniac/status/1814376685124591620)

#CrowdStrike #Outage #CodingError #NullPointer #MemoryAccessViolation #BSOD #Programming #SoftwareDevelopment #Debugging #Windows #TechNews 