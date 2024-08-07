
/**
- step 1: Write down keypoint. Make sure y have all detail
- step 2: Make sure double check : Input? Output?
- step 3: What is the most important value of problem?
    + Do y have time, and space and memory? What is the main goal
- step 4: Don't be annoying and ask too much
- step 5: Start with sth first come to mind, may be naive.brute force approach. It show that you're able to thik well and critically
- step 6: Tell them why this not the best (maybe O(n^2)) or higer, not readable,...)
- step 7: Walking through your approach => where you maybe able to break things, repetition,...
- step 8: Before start coding, walk through code and write down the steps you are going to follow
- step 9: Modularize your code from beggining. Break up your code into beautiful small pieces and add just comments if you need to
- step 10: Start actually writting code now
- step 11: Think about error
- step 12: Don;t use bad/confusing names like i and j => Write that read well
- step 13: Test your code: 
    + No params
    + 0, undefined, 
    + null, massive arrays, async code, ...
- step 14: finally talk to the interviewer where you would improve code.
    + Does it work?
    + Are there different approach?
    + Is this readable?
    + What would you google to improve
    + How can performance be improved? 
    + Possibly: Ask the interviewer that was the most interesting solution you have seen to this problem
 - step 15: If interviewer happy with soulution => will end. It's also common if interviewer asks you extension questions, such as how you would handle the probem if the whole input is too large to fit into memory, or if the input arrives as a steam. This is a common follow-up question at Google, where they care a lot about scale. The answer is usually a divide-and-conquer apprach-perform distributed processing of the data and only read certain chunks of the input from disk into memory, wire the ouput back to disk and combine them later
 */