![](./media/aerial/aerial_un.jpg)
`Olvera and Alameda Streets circa 1934. The original Chinatown is being demolished to build voter approved Union Station.`


# Aerial LA

While working on [The Real Cost of Freeways in LA](https://youtu.be/HS6WrJZKbjs) I became obsessed with aerial photos of historic LA. They were fascinating to explore - but the process of interacting with them was terrible. The medium format scans could be up to 100mb each, they overlapped awkwardly, and their file names corrisponded to order shot making it hard to find specific locations.  

I ended up falling down a rabbit hole learning about orthophotos, and put together a python script to extract [UCSB's Aerial photos](https://mil.library.ucsb.edu/ap_images/), attatch gps metadata, and then run through a piece of software called ODM mainly used for compiling drone flyovers of farmer's fields, to generate rasters to view as an interactive map layers.

This project is still a work in progress, the goal is to build out a library of historical LA orthophotos that can be easily accessed, explored, and downloaded for free. 

[Preview the site here](https://aerial.joshvredevoogd.com/)

![](./media/aerial/Whittier.jpg)
`A 1988 example of how Aerial Photos were manually collaged and used`

![](./media/aerial/pams.jpg)
`1940, looking at Palms in the foreground and UCLA in the distance, present day freeway alignments highlighted`