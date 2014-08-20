simple-slider
=============
My first repo.

Takes a list of elements and creates a full page width slider. 
Any HTML tag can be used inside of it. 

### Instructions 
* Create a div with a list in it. Make sure it has a class you wish to identify it with. I'll use "example". Make sure the <ul> has a class of "slider" as well. 
```
<ul class="slider">

</ul>
```
* Fill in the list with list items of your choice
```
<ul class="slider">
    <li>
        <p>Look at this text!</p>
    </li>
    <li>
        <img src="example.png" alt="Look at this image!"/>
    </li>
</ul>
```
* Slider-a-fy that thing!
``` 
<script type="text/javascript">
    $('.example').slider();
</script>
```


