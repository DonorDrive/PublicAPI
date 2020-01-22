## Change Log

#### 1.0
- Base version

#### 1.1
- Arrays were switched to be 0-based instead of 1-based. 
	- This affects the `offset` parameter. For example, in 1.0, the default offset of 1 and a limit of 10 returned the first 10 records, with the 11th record being at index 11. In 1.1, the default offset of 0 and a limit of 10 will give the first 10 records, with the 11th record being at index 10.