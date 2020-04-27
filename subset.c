/* https://www.geeksforgeeks.org/subset-sum-problem-dp-25/?ref=rp */

// A recursive solution for subset sum problem 
#include <stdio.h> 
#include <stdbool.h>
#include <emscripten/emscripten.h>  
// Returns true if there is a subset of set[] with sun equal to given sum 
bool isSubsetSum(int set[], int n, int sum) { 
	// Base Cases 
	if (sum == 0) {
		return true; 
	}
	if (n == 0 && sum != 0) {
		return false; 
	}

	// If last element is greater than sum, then ignore it 
	if (set[n-1] > sum) {
		return isSubsetSum(set, n-1, sum); 
	}

	/* else, check if sum can be obtained by any of the following 
		(a) including the last element 
		(b) excluding the last element   */
	return isSubsetSum(set, n-1, sum) ||  
						isSubsetSum(set, n-1, sum-set[n-1]); 
} 
  
// Driver program to test above function 

// EMSCRIPTEN_KEEPALIVE 

int EMSCRIPTEN_KEEPALIVE main1() { 
	int set[100];
	for (int i=0; i <= 1000; i++) {
		set[i] = i;
	} 
	int sum = 150; 
	int n = sizeof(set)/sizeof(set[0]); 
	if (isSubsetSum(set, n, sum) == true) {
		printf("Found a subset with given sum");
		return 1;
	}
	else {
		printf("No subset with given sum"); 
		return 0;
	}
} 

int EMSCRIPTEN_KEEPALIVE main2() { 
	int set[5001];
	for (int i=0; i <= 5000; i++) {
		set[i] = i;
	} 
	int sum = 400; 
	int n = sizeof(set)/sizeof(set[0]); 
	if (isSubsetSum(set, n, sum) == true) {
		printf("Found a subset with given sum");
		return 1;
	}
	else {
		printf("No subset with given sum"); 
		return 0;
	}
} 

int  EMSCRIPTEN_KEEPALIVE main3() { 
	int set[5001];
	for (int i=0; i <= 5000; i++) {
		set[i] = i;
	} 
	int sum = 450; 
	int n = sizeof(set)/sizeof(set[0]); 
	if (isSubsetSum(set, n, sum) == true) {
		printf("Found a subset with given sum");
		return 1;
	}
	else {
		printf("No subset with given sum"); 
		return 0;
	}
} 