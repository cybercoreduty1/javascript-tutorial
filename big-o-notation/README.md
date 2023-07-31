What is an algorithm?? is the step by step instruction for accomplishe a task

characteristic of algorithm

** Algorithm must have a well defined inputs and outputs
** Each steps must be clear and unambiguous
** Algorithm should be language independent 


Why Should Learn About Algorithm?

As a developer, you re going to come across a problems that you need to solve.
You will basically learn different techniques to efficiently solve those problem.

one problem can be solve using different algorithms



Algorithm Anaylsis 
How do we measure algorithm?

the abosulte runtime of an algorithm cannot be predicated, since it depends on a number of factors.

1. programming language used to implement the algorithm
2. The computer the program runs on
3. Other programs runnning a the same time.
4. Quality of operating system 


we eveluate the performance of an algorithm in terms of its input size.

1.Time Complexity - Amount of time take by an algorithm to   run as a function iput size.
2. Space Complexity - Amount of memory taken by an algorithm to sun as function of input size

How to represent complexity

- Mathematical tools to represent time and space complexity

** Big-o Notation (o-notation) - worest case complexity
** Omega Notation -Best case complexity
** Theta Notation - Average case complexity


Focusing on the worest case compexity Big-O

Big-O notation describes the complexity of an algorithm using algebraic terms

it has two important characteristic

** it expressed in term of the impact
** It focuses on the big picture without getting up in the minor details




first let us calculate the worest case compleixty


The sum of n natural number using   javaScript

linear time complexity O(n) - Linear

loop - O(n) -linear time compexity

function summation(n){
	return (n*(n+1))/2)
}
O(1) - Constant: it executed once.



If there two nested loops: the time complexity is O(n2) -Quadratic 3n2 +5n + 1


If there are three nested loop is called O(n3) -Cubic time complexity


when input size reduces by half every iteration  o(logn) -Logarithmic


 SPace Compexity  the ideal remain the same.
 
 the space commplexity is 
 O(1) -Constant -array
 O(n) - Linear
 o(logn) - Logarithmic
 
 
 Avoid Qudratic space complexity
 Avoid Cubic Space complexity
 
 




	 




