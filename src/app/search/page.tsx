'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronDown, SlidersHorizontal, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

// Expanded Mock Data to demonstrate pagination
const MOCK_LISTINGS = Array.from({ length: 35 }).map((_, i) => ({
  id: i + 1,
  title: `Listing ${i + 1}: ${
    ['Modern Studio near Hospital', 'Quiet Room for Rotating Students', 'Spacious 1BR Furnished Suite', 'Cozy Shared Apartment', 'Charming Loft with Workspace', 'Travel Nurse Sanctuary'][i % 6]
  }`,
  location: ['Boston, MA', 'Brookline, MA', 'Cambridge, MA'][i % 3],
  price: 85 + (i * 5) % 80,
  rating: (4.5 + (i % 5) * 0.1).toFixed(1),
  image: "/400x400_Placeholder_Image.png"
}));

export default function SearchPage() {
  const [pricePopoverOpen, setPricePopoverOpen] = useState(false);
  const [typePopoverOpen, setTypePopoverOpen] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('10');

  // Favorites State
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Calculate Paginated Listings
  const itemsPerPageNum = Number(itemsPerPage);
  const totalPages = Math.ceil(MOCK_LISTINGS.length / itemsPerPageNum);

  const paginatedListings = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPageNum;
    return MOCK_LISTINGS.slice(startIndex, startIndex + itemsPerPageNum);
  }, [currentPage, itemsPerPageNum]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      document.getElementById('listings-scroll-container')?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className="w-full h-[calc(100vh-64px)] flex flex-col lg:flex-row overflow-hidden bg-white">
      
      {/* ========================================================= */}
      {/* LEFT COLUMN: FILTERS, LISTINGS, PAGINATION & FOOTER       */}
      {/* ========================================================= */}
      <div className="w-full lg:w-7/12 flex flex-col h-full border-r border-slate-200">
        
        {/* Pinned Header: Filters and Sorting */}
        <div className="z-20 bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-4 shrink-0">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            
            {/* Filter Buttons */}
            <div className="flex items-center gap-2 relative flex-wrap">
              
              {/* Price Filter Popover */}
              <Popover open={pricePopoverOpen} onOpenChange={setPricePopoverOpen}>
                <PopoverTrigger render={(props) => (
                  <Button 
                    variant="outline" 
                    className="rounded-full border-slate-300 px-4 py-2 text-sm font-medium"
                  >
                    Price <ChevronDown className="ml-1 h-4 w-4 text-slate-500" />
                  </Button>
                  )}
                />
                <PopoverContent className="w-72 p-4 flex flex-col gap-4" align="start">
                  <span className="font-semibold text-sm">Price Range per Night</span>
                  <div className="flex items-center gap-2">
                    <Input type="number" placeholder="Min" className="text-sm" />
                    <span className="text-slate-400">—</span>
                    <Input type="number" placeholder="Max" className="text-sm" />
                  </div>
                  <Button size="sm" className="w-full bg-[#0a2c58] hover:bg-[#071f3f]" onClick={() => setPricePopoverOpen(false)}>
                    Apply
                  </Button>
                </PopoverContent>
              </Popover>

              {/* Home Type Filter Popover */}
              <Popover open={typePopoverOpen} onOpenChange={setTypePopoverOpen}>
                <PopoverTrigger render={(props) => (
                  <Button 
                    variant="outline" 
                    className="rounded-full border-slate-300 px-4 py-2 text-sm font-medium"
                  >
                    Home Type <ChevronDown className="ml-1 h-4 w-4 text-slate-500" />
                  </Button>
                  )}
                />
                <PopoverContent className="w-64 p-4 flex flex-col gap-3" align="start">
                  <span className="font-semibold text-sm">Property Type</span>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="entire-home" />
                    <Label htmlFor="entire-home" className="text-sm font-normal cursor-pointer">Entire Home</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="private-room" />
                    <Label htmlFor="private-room" className="text-sm font-normal cursor-pointer">Private Room</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="shared-space" />
                    <Label htmlFor="shared-space" className="text-sm font-normal cursor-pointer">Shared Space</Label>
                  </div>
                  <Button size="sm" className="w-full bg-[#0a2c58] hover:bg-[#071f3f] mt-2" onClick={() => setTypePopoverOpen(false)}>
                    Apply
                  </Button>
                </PopoverContent>
              </Popover>

              {/* All Filters Button */}
              <Button 
                variant="outline"
                className="rounded-full border-slate-300 px-4 py-2 text-sm font-medium"
              >
                <SlidersHorizontal className="mr-1.5 h-4 w-4 text-slate-600" /> More Filters
              </Button>

            </div>

            {/* Sort Select Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sort by:</span>
              <Select
                value={sortBy}
                onValueChange={(val) => {
                  if (val !== null) setSortBy(val);
                }}
              >
                <SelectTrigger className="w-[180px] h-9 text-sm font-medium border-slate-300 rounded-lg">
                  <SelectValue placeholder="Sort order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

          </div>
        </div>

        {/* Scrollable Container for Grid, Pagination, and Footer */}
        <div id="listings-scroll-container" className="flex-1 overflow-y-auto custom-scrollbar flex flex-col justify-between">
          <div className="px-6 py-6">
            
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-xl font-bold text-black">{MOCK_LISTINGS.length}+ places near your location</h2>
                <p className="text-xs text-slate-500 mt-0.5">Verify credentials to message hosts instantly</p>
              </div>

              {/* Items Per Page Select */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Per page:</span>
                <Select value={itemsPerPage}
                  onValueChange={(val) => {
                    if (val !== null) setSortBy(val);
                    }}
                  >
                  <SelectTrigger className="w-[70px] h-8 text-xs font-semibold border-slate-300 rounded-md">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              {paginatedListings.map((listing) => (
                <div key={listing.id} className="flex flex-col gap-2 group cursor-pointer">
                  
                  {/* Image Structure */}
                  <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-100 shadow-sm">
                    <Image
                      src={listing.image}
                      alt={listing.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-102"
                    />
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={(e) => toggleFavorite(listing.id, e)}
                      className="absolute top-3 right-3 h-8 w-8 bg-white/80 backdrop-blur-xs rounded-full shadow-xs hover:bg-white transition-colors p-0"
                    >
                      <Heart 
                        className={`h-4 w-4 transition-colors ${
                          favorites[listing.id] ? 'text-rose-500 fill-rose-500' : 'text-slate-700 hover:text-rose-500'
                        }`} 
                      />
                    </Button>
                  </div>

                  {/* Captions */}
                  <div className="flex flex-col gap-0.5 px-0.5">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-sm font-semibold text-slate-500 truncate">{listing.location}</span>
                      <span className="text-sm font-medium text-black flex items-center shrink-0">
                        ★ {listing.rating}
                      </span>
                    </div>
                    
                    <h3 className="text-md font-bold text-slate-900 tracking-tight leading-snug line-clamp-1 group-hover:underline">
                      {listing.title}
                    </h3>
                    
                    <p className="text-sm text-slate-900 mt-1">
                      <span className="font-extrabold text-black text-md">${listing.price}</span> / night
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Showing <span className="font-bold text-black">{(currentPage - 1) * itemsPerPageNum + 1}</span> - <span className="font-bold text-black">{Math.min(currentPage * itemsPerPageNum, MOCK_LISTINGS.length)}</span> of <span className="font-bold text-black">{MOCK_LISTINGS.length}</span> listings
              </p>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="rounded-lg px-3 text-xs"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                </Button>

                <div className="flex items-center gap-1 px-2">
                  <span className="text-xs font-semibold text-slate-700">Page {currentPage} of {totalPages}</span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="rounded-lg px-3 text-xs"
                >
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* RIGHT COLUMN: MAP PLACEHOLDER (RESPONSIVE)                */}
      {/* ========================================================= */}
      <div className="w-full lg:w-5/12 h-64 lg:h-full bg-slate-50 relative shrink-0">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
          <p className="font-medium">Google Maps API Layer</p>
        </div>
      </div>

    </div>
  );
}