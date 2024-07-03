> - Given an array ‘ARR’, partition it into two subsets (possibly empty) such that their union is the original array. Let the sum of the elements of these two subsets be ‘S1’ and ‘S2’.
> - Given a difference ‘D’, count the number of partitions in which ‘S1’ is greater than or equal to ‘S2’ and the difference between ‘S1’ and ‘S2’ is equal to ‘D’. Since the answer may be too large, return it modulo ‘10^9 + 7’.
> - If ‘Pi_Sj’ denotes the Subset ‘j’ for Partition ‘i’. Then, two partitions P1 and P2 are considered different if:
> - P1_S1 != P2_S1 i.e, at least one of the elements of P1_S1 is different from P2_S2.
> - P1_S1 == P2_S2, but the indices set represented by P1_S1 is not equal to the indices set of P2_S2. Here, the indices set of P1_S1 is formed by taking the indices of the elements from which the subset is formed.


### explanation 
- we need to find the count of all the partition subsets where s1 - s2 = d,
- what is s2 , it is nothing but total-s1
- now replace s2 with total-s1 , it becomes s1-(total-s1) = d
- i.e., 2s1 = total + d <=> s1 = (total + d)/2
- so we need to find all the subset that that is equal to (total + d)/2
